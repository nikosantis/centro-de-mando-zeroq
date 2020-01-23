import React from 'react'
import { Search } from '../Search'
import { ListOfBranchOffices } from '../ListOfBranchOffices'
import { BranchOffice } from '../BranchOffice/index'
import { useData } from '../../hooks/useData'
import { Loading } from '../Loading'

export const Content = () => {
  const {
    dataFiltered,
    isLoading,
    isError,
    query,
    _handleChange,
    isResults
  } = useData()

  return (
    <>
      <Search>
        <input
          className='input'
          placeholder='Buscar sucursal'
          type='text'
          value={query}
          onChange={_handleChange}
        />
      </Search>
      <ListOfBranchOffices>
        {isError && <div>Something went wrong ...</div>}
        {
          isLoading
            ? (
              <>
                <div className='column is-12'>
                  <div className='columns is-centered is-mobile'>
                    <div className='column is-1-tablet is-4-mobile'>
                      <Loading />
                    </div>
                  </div>
                </div>
              </>
            )
            : (
              <>
                {
                  isResults
                    ? (
                      dataFiltered.map((sucursal, inc) => (
                        <BranchOffice
                          key={inc}
                          name={sucursal.name}
                          persons={sucursal.persons}
                          duration={sucursal.duration}
                          online={sucursal.online}
                        />
                      ))
                    )
                    : (
                      <>
                        <div className='column'>
                          <div className='columns is-centered is-mobile'>
                            <div className='column is-5-tablet is-10-mobile'>
                              <h2 className='title has-text-centered has-text-white'>Sin resultados</h2>
                            </div>
                          </div>
                        </div>
                      </>
                    )

                }
              </>
            )
        }
      </ListOfBranchOffices>
    </>
  )
}
