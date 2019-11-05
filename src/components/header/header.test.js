import React from 'react';
import AppHeader from './Header';
import { render } from 'enzyme';

it('Should render a h1 with correct className', () => {
  const wrapper = render(<AppHeader />);
  expect(wrapper.is('h1')).toBe(true);
  expect(wrapper.hasClass('app-header')).toBe(true);
});

it('Should contain a link to danielzamorano.pro site', () => {
  const wrapper = render(<AppHeader />);
  const link = wrapper.find('a');
  expect(link.attr('href')).toEqual('https://danielzamorano.pro');
});

