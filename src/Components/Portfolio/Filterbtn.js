import React, { useState } from 'react'
import { PortfolioListItem } from './style'

const Filterbtn = ({cklickHandler, x}) => {
  const filters = ['all', 'html', 'css', 'wordpress', 'mobile']
  return (
    <>
      {
        filters.map((filter,index) => {
          const a = (filter === x) && true
          return <PortfolioListItem active={a} onClick={() =>cklickHandler(filter)} key={index}>{filter}</PortfolioListItem>
        })
      }
    </>
  )
}

export default Filterbtn