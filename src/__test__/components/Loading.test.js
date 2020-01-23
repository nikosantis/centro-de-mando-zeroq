import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import { Loading } from '../../components/Loading'

describe('<Loading /> component', () => {
  const loading = mount(<Loading />)

  it('Render', () => {
    expect(loading.length).toEqual(1)
  })
})

describe('<Loading /> spnapshot', () => {
  it('Check the UI of <Loading />', () => {
    const loading = create(<Loading />)
    expect(loading.toJSON()).toMatchSnapshot()
  })
})
