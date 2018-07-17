import React from 'react';

import { shallow } from 'enzyme';
import Heading from './index';

test('ページタイトルが表示されてること', () => {
  const props = {
    title: 'ページタイトル'
  };
  const wrapper = shallow(<Heading>{props.title}</Heading>);
  expect(wrapper.props().children.props.children).toContain(props.title);
});
