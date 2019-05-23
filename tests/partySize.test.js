import React from 'react';
import {
  shallow, configure, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import PartySize from '../client/src/PartySize.jsx';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer
    .create(<PartySize />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Party Size Rendering', () => {
  const wrapper = shallow(<PartySize />);
  it('renders a select drop down list', () => {
    const list = wrapper.find('.party-size-list');
    expect(list.length).toBe(1);
    expect(list.find('.party-size-selected').length).toBe(20);
  });

  it('should have default party size be 2', () => {
    expect(wrapper.state('size')).toBe(2);
  });

  // fix issue of this.props.handleSize not a function error
  // it('should have select list default option value be 2', () => {
  //   const mockMyEventHandler = jest.fn();
  //   const wrapper = mount(<PartySize onChange={jest.fn()} />);
  //   wrapper.setProps({ onChange: mockMyEventHandler });
  //   wrapper.find('select').simulate('change', '', { value: 2 });
  //   expect(mockMyEventHandler).toHaveBeenCalledWith(2);
  // });
});
