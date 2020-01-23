import React from 'react'
import { SearchBox } from './styles'
import { FaSearch } from 'react-icons/fa'

export const Search = ({ children }) => {
  return (
    <SearchBox>
      <div className='container px-2'>
        <div className='columns is-centered is-mobile'>
          <div className='column is-10'>
            <div className='columns is-mobile is-tablet'>
              <div className='column is-12-mobile is-12-desktop is-5-widescreen'>
                <div className='field'>
                  <div className='control has-icons-left'>
                    {children}
                    <span className='icon is-small is-left'>
                      <FaSearch />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SearchBox>
  )
}
