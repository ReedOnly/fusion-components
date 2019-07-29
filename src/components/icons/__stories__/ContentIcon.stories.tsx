import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { withKnobs, number, color } from '@storybook/addon-knobs';

import withFusionStory from "../../../../.storybook/withFusionStory";

import { BlockIcon } from '../components/content';

const eventsFromNames = actions('onClick');

const stories = storiesOf('Icons|Content', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withFusionStory("Content"));

stories.add('Block', () => (
    <BlockIcon
        {...eventsFromNames}
        width={number('width', 24)}
        height={number('height', 24)}
        color={color('color', '#000')}
    />
));
