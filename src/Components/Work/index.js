import React, {useState, useEffect } from 'react'
import {WorkContainer, WorkTitle,  WorkCard, WorkCardTitle, WorkCardHr, WorkCardDesc } from "./style.js"
import useFetch from "./../../customHooks/useFetch"

const Work = () => {  
  const [works, setWorks] = useState([])
  const {state, flag} =useFetch('works')

  useEffect( ()=> {
    if (flag) {
      setWorks(state)
    }    
  }, [flag])
  
  return (
    <div>
      <WorkContainer>
        <div className="container">
          <WorkTitle><span>My</span> Work</WorkTitle>
          {
            works.map(work => {
              const {id, icon_name, icon_style, title, body} = work
              const first = (id === 1) ? true : false
              const last = (id === 3) ? true : false
              
              return (
                <WorkCard key={id} first={first} last={last} >
                  <i className={icon_name} style={icon_style}></i>
                  <WorkCardTitle>{title}</WorkCardTitle>
                  <WorkCardHr />
                  <WorkCardDesc>{body}</WorkCardDesc>
                </WorkCard>
              )
            })
          }          
        </div>
      </WorkContainer>
    </div>
  )
}

export default Work