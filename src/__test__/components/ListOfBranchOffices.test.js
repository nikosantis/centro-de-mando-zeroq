import React from 'react'
import { mount, shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import { ListOfBranchOffices } from '../../components/ListOfBranchOffices'
import { defaultProps } from '../../__mocks__/BranchOfficeMock'
import { BranchOffice } from '../../components/BranchOffice'

describe('<ListOfBranchOffices /> component', () => {
  const lists = mount(<ListOfBranchOffices />)

  it('Render', () => {
    expect(lists.length).toEqual(1)
  })
})

describe('ListOfBranchOffices', () => {
  const lists = mount(
    <ListOfBranchOffices>
      <BranchOffice {...defaultProps} />
    </ListOfBranchOffices>
  )
  it('Should have a children named Servipag Líder Arica with 12 people and 2:55 duration', () => {
    expect(lists.children.length).toEqual(1)
    expect(lists.text()).toContain('Servipag Líder Arica')
    expect(lists.text()).toContain('12')
    expect(lists.text()).toContain('2:55')
  })
})

describe('<ListOfBranchOffices /> spnapshot', () => {
  it('Check the UI of <ListOfBranchOffices />', () => {
    const lists = create(<ListOfBranchOffices />)
    expect(lists.toJSON()).toMatchSnapshot()
  })
})
