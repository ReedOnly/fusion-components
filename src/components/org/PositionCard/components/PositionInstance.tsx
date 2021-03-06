import React, { useCallback } from 'react';
import { formatDate, Position, PositionInstance } from '@equinor/fusion';
import classNames from 'classnames';
import styles from '../styles.less';
import { useTooltipRef, ExpandMoreIcon, IconButton } from '@equinor/fusion-components';
import PositionTimeline from './PositionTimeline';

type PositionInstanceProps = {
    position: Position;
    instance?: PositionInstance;
    showLocation: boolean;
    showDate: boolean;
    showObs: boolean;
    showTimeline: boolean;
    showExternalId: boolean;
    onClick?: (position: Position, instance?: PositionInstance) => void;
    onExpand?: (position: Position, instance?: PositionInstance) => void;
    childCount?: number;
    rotationInstances: PositionInstance[];
    selectedDate?: Date;
};

const PositionInstanceComponent: React.FC<PositionInstanceProps> = ({
    position,
    instance,
    showLocation,
    showDate,
    showExternalId,
    showObs,
    showTimeline,
    onClick,
    onExpand,
    childCount,
    rotationInstances,
    selectedDate,
}) => {
    const assignedPersonName =
        instance && instance.assignedPerson
            ? rotationInstances.length > 0
                ? `${rotationInstances.length + 1} assignees`
                : instance.assignedPerson.name
            : 'TBN';
    const locationName =
        instance && instance.location && instance.location.name ? instance.location.name : 'TBN';
    const obs = instance && instance.obs && instance.obs !== '' ? instance.obs : 'N/A';

    const obsTooltipRef = useTooltipRef(`OBS: ${obs}`, 'below');
    const positionNameTooltipRef = useTooltipRef('Position: ' + position.name, 'below');
    const assignedPersonNameTooltipRef = useTooltipRef('Person: ' + assignedPersonName, 'below');
    const currentPeriodTooltipRef = useTooltipRef('Current period', 'below');
    const childrenTooltipRef = useTooltipRef(`${childCount} positions`, 'above');
    const externalIdTooltipRef = useTooltipRef('External ID: ' + position.externalId, 'below');

    const positionInstanceClasses = classNames(styles.positionInstance, {
        [styles.cropPositionName]: !showObs || (showObs && !showLocation && !showDate),
    });

    const onClickHandler = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (onClick) {
                e.stopPropagation();
                onClick(position, instance);
            }
        },
        [position, instance, onClick]
    );

    const onExpandHandler = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            if (onExpand) {
                e.stopPropagation();
                onExpand(position, instance);
            }
        },
        [position, instance, onExpand]
    );

    const instances = position ? position.instances : [];
    const instancesByFrom = React.useMemo(
        () => [...instances].sort((a, b) => a.appliesFrom.getTime() - b.appliesFrom.getTime()),
        [instances]
    );
    const instancesByTo = React.useMemo(
        () => [...instances].sort((a, b) => b.appliesTo.getTime() - a.appliesTo.getTime()),
        [instances]
    );

    const firstInstance = React.useMemo(() => instancesByFrom[0], [instancesByFrom]);
    const lastInstance = React.useMemo(
        () => instancesByTo.find(i => i.appliesTo.getTime !== undefined),
        [instancesByTo]
    );

    return (
        <div className={positionInstanceClasses} onClick={onClickHandler}>
            {showObs && instance && (
                <div className={styles.basePositionName}>
                    <span ref={obsTooltipRef}>{obs}</span>
                </div>
            )}

            <div className={styles.positionName}>
                <span ref={positionNameTooltipRef}>{position.name}</span>
            </div>

            <div className={styles.assignedPersonName}>
                <span ref={assignedPersonNameTooltipRef}>{assignedPersonName}</span>
            </div>
            {showLocation && <div className={styles.location}>{locationName}</div>}
            {showDate && instance && (
                <div className={styles.period}>
                    <span ref={currentPeriodTooltipRef}>
                        {formatDate(instance.appliesFrom)} - {formatDate(instance.appliesTo)} (
                        {instance.workload}
                        %)
                    </span>
                </div>
            )}
            {showExternalId && (
                <div className={styles.externalId} ref={externalIdTooltipRef}>
                    {position.externalId}
                </div>
            )}
            {onExpand && childCount !== undefined && childCount > 0 && (
                <div className={styles.expandButton}>
                    <IconButton ref={childrenTooltipRef} onClick={onExpandHandler}>
                        <div className={styles.childPositionCount}>
                            {childCount}
                            <ExpandMoreIcon height={16} isExpanded={false} />
                        </div>
                    </IconButton>
                </div>
            )}
            {showTimeline && instances.length > 0 && (
                <PositionTimeline
                    allInstances={instancesByFrom}
                    activeInstance={instance || null}
                    firstInstance={firstInstance}
                    lastInstance={lastInstance}
                    selectedDate={selectedDate}
                />
            )}
        </div>
    );
};

export default PositionInstanceComponent;
