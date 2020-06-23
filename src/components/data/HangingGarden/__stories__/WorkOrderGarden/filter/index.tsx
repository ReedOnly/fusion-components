import * as React from 'react';

import WorkOrderType from '../models/WorkOrderType';
import {
    addIfNotExist,
    optionSorter,
    proCoSysStatusFilters,
    followUpStatusFilters,
} from '../helpers';
import {
    getStatus,
    getFilterOptions,
    getGroupByOption,
    SortWorkOrdersByFilterTerms,
} from './filter';
import Codes from '../models/Codes';
import { StatusFilterType } from '../helpers';
import { FilterTerm, FilterSection, FilterPane } from '../../../../../..';

type WorkorderFilterProps = {
    data: WorkOrderType[];
    filterTerms: FilterTerm[];
    filterSections: FilterSection<WorkOrderType>[];
    onFilter: (filteredTasks: WorkOrderType[]) => void;
    setFilterTerms: (filterTerms: FilterTerm[]) => void;
    setFilterSections: (filterSection: FilterSection<WorkOrderType>[]) => void;
    invalidateCache: () => void;
    cacheAge: string;
    cacheIsInvalid: boolean;
};

const buildSubProjectSection = (
    section: FilterSection<WorkOrderType>,
    data: StatusFilterType[]
): FilterSection<WorkOrderType> => {
    const subProjectsSorted = data.sort((a, b) => optionSorter(a.key, b.key));

    section.filters[0].options = [...subProjectsSorted] || [];
    return { ...section };
};

const buildFiltersSection = (
    section: FilterSection<WorkOrderType>,
    data: Codes,
    filterTerms: FilterTerm[]
): FilterSection<WorkOrderType> => {
    Object.keys(data).forEach((code) => {
        if (code !== 'statuses') data[code] = data[code].sort((a, b) => optionSorter(a.key, b.key));
    });

    const newFilters = section
        ? section.filters.map((filter) => ({
              ...filter,
              options: getFilterOptions(filter.key, data, filterTerms, filter.options),
          }))
        : [];

    const newFiltersWithOptions = newFilters.filter((f) => f.options);

    return {
        ...section,
        filters: newFiltersWithOptions,
    };
};

const WorkorderFilter: React.FC<WorkorderFilterProps> = ({
    data,
    onFilter,
    filterTerms,
    setFilterTerms,
    filterSections,
    setFilterSections,
    invalidateCache,
    cacheAge,
    cacheIsInvalid,
}) => {
    React.useEffect(() => {
        updateFilterOptionsAsync();
    }, [filterTerms, data]);

    const updateFilterOptionsAsync = async () => {
        const filters: Codes = {
            disciplineCode: [],
            responsibleCode: [],
            milestoneCode: [],
            statuses: [],
            siteCodes: [],
        };
        const subProjects: StatusFilterType[] = [];

        for (let wo of data) {
            addIfNotExist(filters.disciplineCode, wo.disciplineCode);
            addIfNotExist(filters.responsibleCode, wo.responsibleCode);
            addIfNotExist(filters.milestoneCode, wo.milestoneCode);
            addIfNotExist(filters.statuses, getStatus(wo));
            wo.siteCodes.forEach((site: string) => {
                addIfNotExist(filters.siteCodes, site);
            });
            addIfNotExist(
                subProjects,
                wo.projectIdentifier,
                `${wo.projectIdentifier}, ${wo.projectDescription}`
            );
        }

        const newFilterSections = filterSections.map((section) => {
            switch (section.key) {
                case 'subprojects':
                    return buildSubProjectSection(section, subProjects);
                case 'filters':
                    return buildFiltersSection(section, filters, filterTerms);
                default:
                    return section;
            }
        });

        setFilterSections(newFilterSections);
    };

    const onFilterChange = React.useCallback(
        (filteredData: WorkOrderType[], terms: FilterTerm[]) => {
            const groupBy = getGroupByOption(filterTerms);
            const nextGroupBy = getGroupByOption(terms);

            const filtersSection = filterSections.find((section) => section.key === 'filters');

            const statusFilters = filtersSection
                ? filtersSection.filters.find((filter) => filter.key === 'status')
                : null;

            if (statusFilters && nextGroupBy === 'wp' && groupBy !== 'wp') {
                statusFilters.options = proCoSysStatusFilters;
            } else if (statusFilters && nextGroupBy !== 'wp' && groupBy === 'wp') {
                statusFilters.options = followUpStatusFilters;
            }
            onFilter(filteredData.sort(SortWorkOrdersByFilterTerms(terms)));
            setFilterTerms(terms);
        },
        []
    );

    return (
        <div style={{ flexShrink: 0, minWidth: 0 }}>
            <FilterPane
                data={data}
                sectionDefinitions={filterSections}
                terms={filterTerms}
                onChange={onFilterChange}
                screenPlacement={'right'}
            />
        </div>
    );
};

export default WorkorderFilter;
