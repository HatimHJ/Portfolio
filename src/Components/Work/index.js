import React, {useState, useEffect } from 'react'
import {WorkContainer, WorkTitle,  WorkCard, WorkCardTitle, WorkCardHr, WorkCardDesc } from "./style.js"
import useFetch from "./../../customHooks/useFetch"
import { titles} from "../../titlesData"

const Work = ({isArabic}) => {  
  const [works, setWorks] = useState([])
  const {state, flag} =useFetch('works')
  const {worksTitle} = titles
  useEffect( ()=> {
    if (flag) {
      setWorks(state)
    }    
  }, [flag])
  
  return (
    <div>
      <WorkContainer>
        <div className="container">
          <WorkTitle> {isArabic ? worksTitle.AR : worksTitle.EN} </WorkTitle>
          {
            works.map(work => {
              const {id, icon_name, icon_style, text} = work
              console.log(text)
              const {title, titleAR, body, bodyAR} = text
              const first = (id === 1) ? true : false
              const last = (id === 3) ? true : false
              
              return (
                <WorkCard key={id} first={first} last={last} >
                  <i className={icon_name} style={icon_style}></i>
                  <WorkCardTitle>{isArabic ? titleAR : title}</WorkCardTitle>
                  <WorkCardHr />
                  <WorkCardDesc>{isArabic ? bodyAR : body}</WorkCardDesc>
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