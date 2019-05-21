import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Calendar from '../client/src/Calendar.jsx';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const wrapper = shallow(
    <Calendar />,
  );
  expect(wrapper).toMatchSnapshot();
});

describe('Calendar Rendering', () => {
  it('renders a table for calendar dates', () => {
    const wrapper = shallow(<Calendar />);
    const cells = wrapper.find('.calendar-day-res');
    const headers = wrapper.find('.week-day-res');
    expect(wrapper.find('.reservations-calendar').length).toBe(1);
    expect(cells.length).toBe(41);
    expect(headers.length).toBe(7);
  });
});
