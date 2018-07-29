import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { MemoryRouter } from 'react-router';
import PrimaryButton from '../src/components/atoms/Button';
import H1Heading from '../src/components/molecules/Heading';

storiesOf('Heading', module).add('H1 Heading', () => (
  <H1Heading>H1 Heading</H1Heading>
));

storiesOf('Button', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Primary', () => (
    <PrimaryButton to="/" onClick={action('clicked')}>
      Primary
    </PrimaryButton>
  ));
