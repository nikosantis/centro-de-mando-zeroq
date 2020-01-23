import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { Content } from '../../components/Content'

describe('<Content /> component', () => {
  it('Render', () => {
    const content = shallow(<Content />)
    expect(content.length).toEqual(1)
  })
})

describe('<Content /> spnapshot', () => {
  it('Check the UI of <Content />', () => {
    const content = create(<Content />)
    expect(content.toJSON()).toMatchSnapshot()
  })
})
