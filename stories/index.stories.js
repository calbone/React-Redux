import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { MemoryRouter } from 'react-router';
import { Button, Welcome } from '@storybook/react/demo';
import PrimaryButton from '../src/components/atoms/Button';
import H1Heading from '../src/components/molecules/Heading';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('styled button', () => <PrimaryButton>PrimaryButton</PrimaryButton>)
  .add('heading', () => <H1Heading>見出し</H1Heading>)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
