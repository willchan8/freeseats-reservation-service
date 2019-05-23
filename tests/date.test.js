import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Date from '../client/src/Date.jsx';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer
    .create(<Date />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// do testing on click func passed down as prop

// can't do below testing anymore since refactored to stateless
// describe('Date Rendering', () => {
//   const wrapper = shallow(<Date />);
//   it('should have default date be set to today', () => {
//     expect(wrapper.state('date')).toBe('Today');
//   });

//   it('should hide calendar', () => {
//     expect(wrapper.state('displayCalendar')).toBe(false);
//   });
// });
