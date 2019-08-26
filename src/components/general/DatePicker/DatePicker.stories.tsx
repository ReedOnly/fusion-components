import * as React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from './index';
import withFusionStory from '../../../../.storybook/withFusionStory';
import { formatDate } from '@equinor/fusion';

const DatePickerStory = () => {
    const [selectedDate, setSelecteDate] = React.useState<Date | null>(null);

    return (
        <div style={{ width: 200 }}>
            <DatePicker label="Select date" selectedDate={selectedDate} onChange={setSelecteDate} />

        </div>
    );
};

storiesOf('General|Date picker', module)
    .addDecorator(withFusionStory('Date picker'))
    .add('Default', () => <DatePickerStory />);
