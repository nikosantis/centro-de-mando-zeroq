import React from 'react'
import { mount, shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { Header } from '../../components/Header'

describe('<Header /> component', () => {
  it('Render', () => {
    const header = mount(<Header />)
    expect(header.length).toEqual(1)
  })

  it('Should have a {children}', () => {
    const header = shallow(<Header />)
    expect(header.find('img').length).toEqual(1)
  })
})

describe('<Header /> spnapshot', () => {
  it('Check the UI of <Header />', () => {
    const header = create(<Header />)
    expect(header.toJSON()).toMatchSnapshot()
  })
})
