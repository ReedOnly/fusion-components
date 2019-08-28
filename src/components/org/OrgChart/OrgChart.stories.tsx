import React from 'react';
import { storiesOf } from '@storybook/react';
import withFusionStory from '../../../../.storybook/withFusionStory';
import OrgChart from '.';
import { OrgStructure, OrgChartItemProps, BreadCrumb } from './orgChartTypes';

type Position = OrgStructure & {
    name?: string;
    positionId?: string;
    personName?: string;
};

const positions: Position[] = [
    {
        id: '1',
        name: 'Offshore Worker',
        positionId: '123',
        personName: 'James Test',
    },
    {
        id: '2',
        parentId: '1',
        name: 'Engineer',
        positionId: '123',
        personName: 'Sam Test',
        aside: true,
    },
    {
        id: '5',
        parentId: '1',
        name: 'Worker',
        positionId: '3',
        personName: 'Sam Test',
        aside: true,
    },
    {
        id: '2132',
        parentId: '1',
        name: 'Engineer',
        positionId: '123',
        personName: 'Sam Test',
        aside: true,
    },
    {
        id: '51245123',
        parentId: '1',
        name: 'Worker',
        positionId: '3',
        personName: 'Sam Test',
        aside: true,
    },
    {
        id: '3',
        parentId: '1',
        name: 'Offshore Worker',
        positionId: '3',
        personName: 'Jane Test',
    },
    {
        id: '32',
        parentId: '1',
        name: 'Offshore Worker',
        positionId: '3',
        personName: 'Test 123',
    },
    {
        id: '44',
        parentId: '1',
        name: 'Test worker 1',
        positionId: '4',
        personName: 'Test Test',
    },
    {
        id: '3123',
        parentId: '1',
        name: 'Offshore Worker',
        positionId: '3',
        personName: 'Jane Test',
    },
    {
        id: '3232',
        parentId: '1',
        name: 'Offshore Worker',
        positionId: '3',
        personName: 'Test 123',
    },
    {
        id: '44312',
        parentId: '1',
        name: 'Test worker 1',
        positionId: '4',
        personName: 'Test Test',
    },
    {
        id: '312123',
        parentId: '1',
        name: 'Offshore Worker',
        positionId: '3',
        personName: 'Jane Test',
    },
    {
        id: '323232',
        parentId: '1',
        name: 'Offshore Worker',
        positionId: '3',
        personName: 'Test 123',
    },
    {
        id: '4431212',
        parentId: '1',
        name: 'Test worker 1',
        positionId: '4',
        personName: 'Test Test',
    },
];

const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow:
        '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)',
    margin: '10px',
    boxSizing: 'border-box',
    flex: '1',
    fontSize: '16px',
    height: 'calc(100% - 20px)',
} as React.CSSProperties;

const BreadCrumb: React.FC<BreadCrumb> = ({ label }) => {
    return <div style={{...cardStyle, cursor:"pointer"}}>{label}</div>;
};

const PositionCard: React.FC<OrgChartItemProps<Position>> = ({ item }) => {
    return (
        <div style={cardStyle}>
            Position : {item.name}
            <br />
            Person : {item.personName}
        </div>
    );
};

const breadCrumbs: BreadCrumb[] = [
        {
            childId: '1',
            label: 'Boss',
            id: '101',
        },
        {
            childId: '101',
            label: 'Bosses Boss',
            id: '102',
        },
]

const OrgChartStory = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <OrgChart
                structure={positions}
                component={PositionCard}
                breadCrumbComponent={BreadCrumb}
                breadCrumbs={breadCrumbs}
                asideLabel="ASIDE"
                childrenLabel="CHILDREN"
            />
        </div>
    );
};

storiesOf('Org|Org Chart', module)
    .addDecorator(withFusionStory('Org Chart'))
    .add('Default', () => <OrgChartStory />);