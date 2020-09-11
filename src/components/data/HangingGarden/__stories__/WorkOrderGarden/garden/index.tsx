import * as React from 'react';
import * as styles from './styles.less';
import * as PIXI from 'pixi.js';

import WorkOrderType from '../models/WorkOrderType';
import ColumnType from '../models/ColumnType';
import { getGroupByOption, getStatus } from '../filter/filter';
import {
    getMatStatusColor,
    getMccrStatusColor,
    MAT_STATUS_COLORS,
    mccrColorMap,
    followUpColorMapHex,
} from '../helpers';
import {
    proCoSysWorkOrderColorMapHex,
    followUpStatuses,
    proCoSysStatuses,
} from '../utils/procosys';
import { getYearAndWeekFromDate, getYearAndWeek, getColumns } from '../columns/columns';
import { FilterTerm, ItemRenderContext, HangingGarden } from '../../../../../..';
import { HeaderRenderContext } from '../../../HangingGardenModels';

type GardenProps = {
    filteredData: WorkOrderType[];
    filterTerms: FilterTerm[];
    selectedWorkOrder: WorkOrderType | null;
    setSelectedWorkOrder: (wo: WorkOrderType) => void;
};

const Garden: React.FC<GardenProps> = ({
    filteredData,
    filterTerms,
    selectedWorkOrder,
    setSelectedWorkOrder,
}) => {
    const [columns, setColumns] = React.useState<ColumnType[]>([]);
    const highlightedKey = getYearAndWeekFromDate(new Date());

    React.useEffect(() => {
        if (gardenController?.current?.clearGarden) gardenController.current.clearGarden();

        setColumns(getColumns(filteredData, filterTerms));
    }, [filteredData, filterTerms]);

    const getItemWidth = () => {
        const groupBy = getGroupByOption(filterTerms);
        const columnName = groupBy.replace('Code', '');
        const checkHeaderLength = ['milestone', 'responsible', 'discipline'].includes(columnName);
        const longestKey = Math.max.apply(
            Math,
            filteredData.map((workOrder) => {
                const titlelength =
                    checkHeaderLength && workOrder[columnName] ? workOrder[columnName].length : 0;
                return titlelength >= workOrder.workOrderNumber.length
                    ? titlelength
                    : workOrder.workOrderNumber.length;
            })
        );

        return Math.max(longestKey * 8 + 35, 102);
    };
    const renderItemFlag = (item: WorkOrderType, context: ItemRenderContext) => {
        if (item.holdBy) {
            context.enquedRender(item.holdBy === 'MATB' ? 'MATB' : 'MATA', (context) => {
                const center = context.height / 2;

                // Containing disc
                context.graphics.beginFill(0xffffff);
                context.graphics.drawCircle(center, center, context.height / 4);
                context.graphics.endFill();

                const flagColor = item.holdBy === 'MATB' ? 0xfbca36 : 0xff0000;
                context.graphics.beginFill(flagColor);
                // Flag
                context.graphics.drawRect(center - 2, center - 3, 5, 4);
                // Flag pole
                context.graphics.drawRect(center - 3, center - 3, 1, 6);
                context.graphics.endFill();
            });
        }
    };

    const renderItemSize = (item: WorkOrderType, context: ItemRenderContext) => {
        const size =
            item.estimatedHours >= 200 ? 'large' : item.estimatedHours < 90 ? 'small' : 'medium';

        if (size === 'small') {
            return;
        }

        context.enquedRender(size, (context: ItemRenderContext) => {
            context.graphics.beginFill(0x999999);
            context.graphics.drawRect(context.width - 3, 4, 1, context.height - 8);

            if (size === 'large') {
                context.graphics.drawRect(context.width - 5, 4, 1, context.height - 8);
            }

            context.graphics.endFill();
        });
    };

    const renderItemProgress = (item: WorkOrderType, context: ItemRenderContext) => {
        if (item.projectProgress === '100') {
            return;
        }

        context.enquedRender(item.projectProgress, (context: ItemRenderContext) => {
            const progressBarWidth = (context.width / 100) * parseInt(item.projectProgress, 10);

            context.graphics.beginFill(0x212121, 0.25);
            context.graphics.drawRect(0, context.height - 4, context.width, 4);
            context.graphics.endFill();
            context.graphics.beginFill(0xffffff, 0.5);
            context.graphics.drawRect(0, context.height - 4, progressBarWidth, 4);
        });
    };

    const getTextColorForStatus = (status: string) => {
        switch (status) {
            case followUpStatuses.MaterialAndOrWoNotAvailable:
            case followUpStatuses.MaterialAndWoOk:
            case followUpStatuses.WOFinished:
            case proCoSysStatuses.ComplByMC:
                return 0xffffff;
            default:
                return 0x212121;
        }
    };

    const getColor = (status: string) =>
        getGroupByOption(filterTerms) === 'wp'
            ? proCoSysWorkOrderColorMapHex[status]
            : followUpColorMapHex[status];

    const renderItem = (item: WorkOrderType, context: ItemRenderContext) => {
        const status = getStatus(item, filterTerms);
        const color = getColor(status);
        context.createRect({ x: 0, y: 0 }, { width: context.width, height: context.height }, color);

        context.enquedRender(item.workOrderNumber, (context) => {
            const textNode = context.createTextNode(
                item.workOrderNumber,
                getTextColorForStatus(status)
            );
            context.graphics.addChild(textNode);
            textNode.x = 20;
            textNode.y = context.height / 2 - textNode.height / 2;
        });
        renderItemFlag(item, context);
        renderItemSize(item, context);

        context.addDot(getMatStatusColor(item), { x: context.width - 12, y: 8 });
        context.addDot(getMccrStatusColor(item), { x: context.width - 12, y: context.height - 8 });
        renderItemProgress(item, context);
        context.addPopover(new PIXI.Rectangle(0, 0, 32, context.height), () => {
            return (
                <div className={styles.woPopover}>
                    <h4>Hold status</h4>
                    <ul>
                        <li>
                            <span className={styles.flagSpacer} /> No hold
                        </li>
                        <li>
                            <span className={styles.redFlag} /> Hold by ENG, EWP, JLL, MAT, MC, OFF,
                            PRE, WO
                        </li>
                        <li>
                            <span className={styles.yellowFlag} /> Hold by MATB
                        </li>
                    </ul>
                </div>
            );
        });

        context.addPopover(
            new PIXI.Rectangle(32, 0, context.width - 32 - 24, context.height),
            () => {
                return (
                    <div className={styles.woPopover}>
                        <section>
                            <div>
                                <ul>
                                    <li>
                                        <b>Project(ProCoSys):</b>
                                    </li>
                                    <li>
                                        {`${item.projectIdentifier}, ${item.projectDescription}`}
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                );
            }
        );

        context.addPopover(new PIXI.Rectangle(context.width - 24, 0, 24, context.height), () => (
            <div className={styles.woPopover}>
                <section>
                    <div>
                        <h4>Material status</h4>
                        <ul>
                            <li>
                                <span className={styles.dot} style={{ background: '#00FF00' }} /> OK
                            </li>
                            <li>
                                <span
                                    className={styles.dot}
                                    style={{
                                        background: '#' + MAT_STATUS_COLORS.AVAILABLE.toString(16),
                                    }}
                                />{' '}
                                Available
                            </li>
                            <li>
                                <span
                                    className={styles.dot}
                                    style={{
                                        background:
                                            '#' + MAT_STATUS_COLORS.NOT_AVAILABLE.toString(16),
                                    }}
                                />{' '}
                                Not Available
                            </li>
                            <li>
                                <span className={styles.dot} style={{ background: '#AFAFAF' }} /> OS
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>MCCR status</h4>
                        <ul>
                            <li>
                                <span className={styles.dot} style={{ background: '#00FF00' }} /> OK
                            </li>
                            <li>
                                <span
                                    className={styles.dot}
                                    style={{ background: '#' + mccrColorMap.PA.toString(16) }}
                                />{' '}
                                PA
                            </li>
                            <li>
                                <span
                                    className={styles.dot}
                                    style={{ background: '#' + mccrColorMap.PB.toString(16) }}
                                />{' '}
                                PB
                            </li>
                            <li>
                                <span
                                    className={styles.dot}
                                    style={{ background: '#' + mccrColorMap.OS.toString(16) }}
                                />{' '}
                                OS
                            </li>
                        </ul>
                    </div>
                </section>
                <h4>Size</h4>
                <div className={styles.list}>
                    <span> Small</span>
                    <span>| Medium</span>
                    <span>|| Large</span>
                </div>
            </div>
        ));
    };

    const getHeaderHeight = () => 40;
    const renderHeader = (key: string, context: HeaderRenderContext) => {
        const textNode = context.createTextNode(
            context.isExpanded ? key + ' Expanded' || 'NA Expanded' : key || 'NA',
            context.isHighlighted ? 0xffffff : 0x243746
        );

        context.container.addChild(textNode);
        textNode.x = context.width / 2 - textNode.width / 2;
        textNode.y = 24 / 2 - textNode.height / 2;
    };

    const gardenController: any = React.useRef(null);

    return (
        <div style={{ display: 'flex', flex: '1 1 auto', height: '100%', minWidth: 0 }}>
            {columns.length && (
                <HangingGarden<WorkOrderType>
                    columns={columns}
                    highlightedColumnKey={highlightedKey}
                    highlightedItem={selectedWorkOrder}
                    itemKeyProp={'workOrderId'}
                    itemWidth={getItemWidth()}
                    itemHeight={24}
                    renderItemContext={renderItem}
                    getItemDescription={(item: WorkOrderType) => item.description}
                    onItemClick={(item: WorkOrderType) => setSelectedWorkOrder(item)}
                    headerHeight={getHeaderHeight()}
                    renderHeaderContext={renderHeader}
                    provideController={(controller: any) => (gardenController.current = controller)}
                />
            )}
        </div>
    );
};

export default Garden;
