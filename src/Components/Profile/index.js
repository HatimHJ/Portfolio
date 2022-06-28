import React, { useEffect, useState } from 'react'
import './style.css'
import { ProfileContainer, ProfileSectionTitle } from "./style.js"
import {ProfileSection, ProfileList, ProfileListItem } from "./style.js"
import { SkillsSection, SkillsDesc, SkillsBar, SkillsParent } from "./style.js"
import useFetch from "../../customHooks/useFetch"
import { titles} from "../../titlesData"


const Profile = ({isArabic}) => {
  const [contact, setContact] = useState([])
  const [skills, setSkills] = useState([])
  const {state, flag} = useFetch('profile')
  const {profileTitle, skillsText} = titles
  
  useEffect(() => {    
    if (flag) {
      setContact(state.contact)
      setSkills(state.skill)
    }
  }, [flag])

  return (
    <ProfileContainer>
      <div className="container">
        <ProfileSection>
          <ProfileSectionTitle>{isArabic ? profileTitle.AR : profileTitle.EN}</ProfileSectionTitle>
          <ProfileList>
            {
              flag && contact.map((item, index) => {
                return (
                  <ProfileListItem key={index}>
                    <span>{isArabic ? item.fieldAR : item.field}</span>
                    {isArabic ? item.valueAR ? item.valueAR : item.value : item.value}
                  </ProfileListItem>
                )
              })
            
            }

          </ProfileList>
        </ProfileSection>
        
        <SkillsSection>
          <ProfileSectionTitle>{isArabic ? skillsText.AR : skillsText.EN}</ProfileSectionTitle>
          <SkillsDesc>
          {isArabic ? skillsText.descAR : skillsText.descEN}
          </SkillsDesc>
          { flag && skills.map(skill =>{
              return (
                <SkillsBar key={skill.id}>
                  <span className='title'>{skill.title}</span>
                  <span className='percent'>{skill.percent}</span>
                  <SkillsParent percent={skill.percent}>
                    <span className={`sp${skill.id}`}></span>
                  </SkillsParent>
                </SkillsBar>
              )
            })
            
          }
          
        </SkillsSection>
      </div>
    </ProfileContainer>
  )
}

export default Profile