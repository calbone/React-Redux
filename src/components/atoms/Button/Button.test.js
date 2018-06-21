import React from 'react';
import { shallow } from 'enzyme';
import PrimaryButton from './index';

test('Buttonコンポーネント', () => {
  const text = 'ふがふが';
  const wrapper = shallow(<PrimaryButton>{text}</PrimaryButton>);

  expect(wrapper.contains(text)).toEqual(true);
});