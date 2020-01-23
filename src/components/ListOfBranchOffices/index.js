import React from 'react'
import { BoxList } from './styles'

export const ListOfBranchOffices = ({ children }) => {
  return (
    <BoxList>
      <div className='container'>
        <div className='columns is-centered is-mobile'>
          <div className='column is-10 is-12-mobile'>
            <div className='columns is-multiline is-mobile is-desktop is-tablet'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </BoxList>
  )
}
