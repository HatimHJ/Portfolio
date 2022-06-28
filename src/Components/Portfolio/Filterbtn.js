import React, { useState } from 'react'
import { PortfolioListItem } from './style'

const Filterbtn = ({cklickHandler, active}) => {
  const filters = ['all', 'js', 'css', 'wordpress', 'react']
  return (
    <>
      {
        filters.map((filter,index) => {
          const activeLink = (filter === active) && true
          return <PortfolioListItem active={activeLink} onClick={() =>cklickHandler(filter)} key={index}>{filter}</PortfolioListItem>
        })
      }
    </>
  )
}

export default Filterbtn