import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import {
    TextInput,
    DropdownArrow,
    Menu,
    Dropdown,
    useDropdownController,
} from '@equinor/fusion-components';
import styles from './styles.less';

export type SearchableDropdownOption = {
    title: string;
    key: string;
    isSelected?: boolean;
    isDisabled?: boolean;
};

export type SearchableDropdownSection = {
    key: string;
    title?: string;
    items: SearchableDropdownOption[];
};

type SearchableDropdownProps = {
    label?: string;
    options?: SearchableDropdownOption[];
    sections?: SearchableDropdownSection[];
    itemComponent?: any;
    asideComponent?: any;
    onSelect?: (item: SearchableDropdownOption) => void;
    onSearchAsync?: (query: string) => void;
};

const createSingleSectionFromOptions = (
    options: SearchableDropdownOption[]
): SearchableDropdownSection[] => [{ key: 'DropdownSection', items: options }];

const filterMultipleSections = (
    sections: SearchableDropdownSection[],
    query: string
): SearchableDropdownSection[] => {
    const newSections = sections.reduce(
        (acc: SearchableDropdownSection[], curr: SearchableDropdownSection) => {
            const items = curr.items.filter(option =>
                option.title.toLowerCase().includes(query.toLowerCase())
            );

            if (!items.length) return acc;

            const newSection = { ...curr, items };
            acc.push(newSection);
            return acc;
        },
        []
    );

    return newSections;
};

const mergeDropdownSectionItems = (sections: SearchableDropdownSection[]) =>
    sections.reduce(
        (acc: SearchableDropdownOption[], curr: SearchableDropdownSection) =>
            acc.concat(curr.items),
        []
    );

const SearchableDropdown = ({
    options,
    sections,
    label,
    onSelect,
    onSearchAsync,
    itemComponent,
    asideComponent,
}: SearchableDropdownProps) => {
    if ((!options && !sections) || (options && sections)) {
        throw new Error("You must supply only one of 'options', 'sections' props");
    }

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [dropdownSections, setDropdownSections] = useState<SearchableDropdownSection[]>([]);

    useEffect(() => {
        if (sections) {
            setDropdownSections(sections);
        } else if (options) {
            setDropdownSections(createSingleSectionFromOptions(options));
        }
    }, [options, sections]);

    const filterSearch = useCallback(
        inputValue => {
            if (onSearchAsync) {
                onSearchAsync(inputValue);
            } else {
                if (options) {
                    const newOptions = options.filter(option =>
                        option.title.toLowerCase().includes(inputValue.toLowerCase())
                    );
                    setDropdownSections(createSingleSectionFromOptions(newOptions));
                } else if (sections) {
                    setDropdownSections(filterMultipleSections(sections, inputValue));
                }
            }
        },
        [options, onSearchAsync, sections]
    );

    useEffect(() => filterSearch(inputValue), [inputValue]);

    const dropdownController = useDropdownController((ref, isOpen, setIsOpen) => {
        const selectedItem = useMemo(() => {
            const mergedItems = mergeDropdownSectionItems(dropdownSections);
            const selectedItem = mergedItems.find(option => option.isSelected === true);
            return selectedItem;
        }, [dropdownSections]);

        const selectedValue = useMemo(() => {
            if (isOpen) {
                return inputValue;
            } else if (selectedItem) {
                return selectedItem.title;
            }
            return '';
        }, [isOpen, inputValue, selectedItem]);

        const aside = useMemo(() => {
            if (asideComponent && !isOpen && selectedItem) {
                const AsideComponent = asideComponent;
                return (
                    <aside>
                        <AsideComponent item={selectedItem} />
                    </aside>
                );
            }

            return null;
        }, [isOpen, asideComponent, selectedItem]);

        return (
            <TextInput
                onChange={value => {
                    if (!isOpen) {
                        setIsOpen(true);
                        return;
                    }
                    setInputValue(value);
                }}
                asideComponent={aside}
                placeholder="Type to search..."
                label={label}
                icon={<DropdownArrow cursor="pointer" isOpen={isOpen} />}
                onIconAction={() => isOpen && setIsOpen(false)}
                onClick={() => !isOpen && setIsOpen(true)}
                value={selectedValue}
                ref={inputRef}
                onKeyUp={e => e.keyCode === 27 && setIsOpen(false)}
            />
        );
    });

    const { isOpen, setIsOpen } = dropdownController;

    const select = useCallback(
        item => {
            if (isOpen) {
                onSelect && onSelect(item);
                setIsOpen(false);
                setInputValue('');
            }
        },
        [isOpen, onSelect]
    );

    const containerRef = dropdownController.controllerRef as React.MutableRefObject<HTMLDivElement | null>;
    return (
        <div className={styles.inputContainer} ref={containerRef}>
            <Dropdown controller={dropdownController}>
                <Menu
                    elevation={0}
                    onClick={select}
                    keyboardNavigationRef={inputRef.current}
                    sections={dropdownSections}
                    itemComponent={itemComponent}
                    asideComponent={asideComponent}
                />
            </Dropdown>
        </div>
    );
};

export default SearchableDropdown;
