import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from './index';
import withFusionStory from '../../../../.storybook/withFusionStory';
import { DatePicker } from "@equinor/fusion-components";

const SliderPercentageStory = () => {
    const [value, setValue] = React.useState(75);

    const markers = [
        {
            value: 0,
            label: '0%',
        },
        {
            value: 100,
            label: '100%',
        },
        {
            value: 50,
            label: '50%',
        },
        {
            value: 28,
            label: '28%',
        },
    ];

    return (
        <div style={{ width: 400, margin: '0 auto' }}>
            <Slider value={value} markers={markers} onChange={marker => setValue(marker.value)} />
            <p>Value: {Math.ceil(value)}%</p>
        </div>
    );
};

const SliderDateStory = () => {
    const [value, setValue] = React.useState(new Date());

    const markers = [
        {
            value: new Date(2019, 10, 15).getTime(),
            label: 'Org chart release',
        },
        {
            value: new Date(1986, 3, 26).getTime(),
            label: 'Chernobyl',
        },
        {
            value: new Date(2000, 0, 1).getTime(),
            label: 'Y2K',
        },
        {
            value: new Date(1969, 6, 20).getTime(),
            label: 'Moon landing',
        },
    ];

    return (
        <div style={{ width: 800, margin: '0 auto'}}>
            <div style={{ display: "flex" }}>
                <div style={{ width: 200, marginRight: 48, flexShrink: 0 }}>
                <DatePicker selectedDate={value} onChange={date => date && setValue(date)} />
                </div>
                <Slider
                    value={value.getTime()}
                    markers={markers}
                    onChange={marker => setValue(new Date(marker.value))}
                />
            </div>
        </div>
    );
};

storiesOf('General|Slider', module)
    .addDecorator(withFusionStory('Slider'))
    .add('Percentage', () => <SliderPercentageStory />)
    .add('Date', () => <SliderDateStory />);