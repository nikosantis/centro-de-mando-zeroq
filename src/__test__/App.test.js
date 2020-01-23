import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import { App } from '../App'

describe('<App /> component', () => {
  const app = mount(<App />)

  it('Render', () => {
    expect(app.length).toEqual(1)
  })
})

describe('<App /> spnapshot', () => {
  it('Check the UI of <App />', () => {
    const app = create(<App />)
    expect(app.toJSON()).toMatchSnapshot()
  })
})
