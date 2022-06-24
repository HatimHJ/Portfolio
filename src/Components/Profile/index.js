import React, { useEffect, useState } from 'react'
import './style.css'
import { ProfileContainer, ProfileSectionTitle } from "./style.js"
import {ProfileSection, ProfileList, ProfileListItem } from "./style.js"
import { SkillsSection, SkillsDesc, SkillsBar, SkillsParent } from "./style.js"
import useFetch from "../../customHooks/useFetch"


const Profile = () => {
  const [contact, setContact] = useState([])
  const [skills, setSkills] = useState([])
  const {state, flag} = useFetch('profile')

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
          <ProfileSectionTitle><span>My </span>Profile</ProfileSectionTitle>
          <ProfileList>
            {
              flag && contact.map((item, index) => {
                return (
                  <ProfileListItem key={index}>
                    <span>{item.field}</span>
                    {item.value}
                  </ProfileListItem>
                )
              })
            
            }

          </ProfileList>
        </ProfileSection>
        
        <SkillsSection>
          <ProfileSectionTitle>Some <span>skills</span></ProfileSectionTitle>
          <SkillsDesc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
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