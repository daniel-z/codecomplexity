import React from 'react';
import HomePage from './home';
import { render, mount } from 'enzyme';

it('Should render a semantic ui row with 2 columns', () => {
  const wrapper = render(<HomePage />);
  expect(wrapper.is('div.row')).toBe(true);
  expect(wrapper.find('div.eight.wide.column').length).toEqual(1);
  expect(wrapper.find('div.four.wide.column').length).toEqual(1);
});

it('Should contain main header footer', () => {
  const wrapper = mount(<HomePage />);
  // expect(wrapper.contains(AppHeader)).toBe(true);
  // expect(wrapper.contains(AppFooter)).toBe(true);
  wrapper.unmount();
});
