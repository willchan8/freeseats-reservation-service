import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PartySize from '../client/src/PartySize.jsx';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const wrapper = shallow(
    <PartySize />,
  );
  expect(wrapper).toMatchSnapshot();
});
