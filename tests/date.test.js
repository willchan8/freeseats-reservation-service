import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import DateSection from '../client/src/DateSection.jsx';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer
    .create(<DateSection />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// do testing on click func passed down as prop

// can't do below testing anymore since refactored to stateless
// describe('Date Rendering', () => {
//   const wrapper = shallow(<DateSection />);
//   it('should have default date be set to today', () => {
//     expect(wrapper.state('date')).toBe('Today');
//   });

//   it('should hide calendar', () => {
//     expect(wrapper.state('displayCalendar')).toBe(false);
//   });
// });
