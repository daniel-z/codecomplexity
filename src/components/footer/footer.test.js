import React from 'react';
import Footer from './footer';
import { render } from 'enzyme';

it('Should render a footer element', () => {
  const wrapper = render(<Footer />);
  expect(wrapper.is('footer')).toBe(true);
  expect(wrapper.hasClass('app-footer')).toBe(true);
});

it('Should contain a link to danielzamorano.pro site', () => {
  const wrapper = render(<Footer />);
  const link = wrapper.find('a');
  expect(link.attr('href')).toEqual('https://danielzamorano.pro');
});

