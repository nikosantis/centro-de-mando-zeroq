import React from 'react'
import { mount, shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { Search } from '../../components/Search'

describe('<Search /> component', () => {
  it('Render', () => {
    const search = mount(<Search />)
    expect(search.length).toEqual(1)
  })

  it('Should have a {children}', () => {
    const search = shallow(<Search children={<input />} />)
    expect(search.children.length).toEqual(1)
  })
})

describe('<Search /> spnapshot', () => {
  it('Check the UI of <Search />', () => {
    const search = create(<Search />)
    expect(search.toJSON()).toMatchSnapshot()
  })
})
