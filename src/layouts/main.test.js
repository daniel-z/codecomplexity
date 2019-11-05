import React from 'react';
import MainLayout from './main';
import { render, mount } from 'enzyme';
import AppHeader from '../components/header/header'
import AppFooter from '../components/footer/footer'

it('Should render a semantic ui grid element with 2 main rows', () => {
  const wrapper = render(<MainLayout />);
  expect(wrapper.is('div.ui.grid')).toBe(true);
  expect(wrapper.find('div.row').length).toEqual(2);
});

it('Should contain main header footer', () => {
  const wrapper = mount(<MainLayout />);
  expect(wrapper.contains(AppHeader)).toBe(true);
  expect(wrapper.contains(AppFooter)).toBe(true);
  wrapper.unmount();
});

it('Should render children passed', () => {
  const Children = <div className="child-elem">This is a children</div>;
  const wrapper = mount(<MainLayout> { Children } </MainLayout>);

  expect(wrapper.contains(AppHeader)).toBe(true);
  expect(wrapper.contains(AppFooter)).toBe(true);
  expect(wrapper.contains(Children)).toBe(true);

  wrapper.unmount();
});
