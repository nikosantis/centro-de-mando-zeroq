import React from 'react'
import { mount, shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { BranchOffice } from '../../components/BranchOffice'
import { defaultProps } from '../../__mocks__/BranchOfficeMock'

describe('<BranchOffice /> component', () => {
  it('Render', () => {
    const office = mount(<BranchOffice />)
    expect(office.length).toEqual(1)
  })

  it('Should have a props', () => {
    const office = shallow(<BranchOffice {...defaultProps} />)
    expect(office.text()).toContain('Servipag Líder Arica')
    expect(office.text()).toContain('12')
    expect(office.text()).toContain('2:55')
  })
})

describe('<BranchOffice /> spnapshot', () => {
  it('Check the UI of <BranchOffice />', () => {
    const office = create(<BranchOffice />)
    expect(office.toJSON()).toMatchSnapshot()
  })
})
