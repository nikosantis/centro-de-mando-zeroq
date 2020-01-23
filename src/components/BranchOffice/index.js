import React from 'react'
import { FaRegUser, FaRegClock } from 'react-icons/fa'
import PropTypes from 'prop-types'

export const BranchOffice = ({ name, persons, duration, online }) => (
  <div className='column is-12-mobile is-4-tablet is-3-widescreen'>
    <div className={`card card-sucursal card-${online}`}>
      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-4 has-text-weight-bold'>{name}</p>
        </div>
      </div>
      <footer className='card-footer'>
        <div className='card-info'>
          <span className='icon is-left'>
            <FaRegUser />
          </span>
          <span className='card-info__data has-text-weight-semibold'>{persons}</span>
        </div>
        <div className='card-info'>
          <span className='icon is-left'>
            <FaRegClock />
          </span>
          <span className='card-info__data has-text-weight-semibold'>{duration}</span>
        </div>
      </footer>
    </div>
  </div>
)

BranchOffice.propTypes = {
  name: PropTypes.string.isRequired,
  persons: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
}
