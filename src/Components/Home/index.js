import React from 'react'
import {HomeContainer, HomeInfo, HomeTitle, HomeSubTitle, HomeDesc,  HomeBtn} from "./style"

const Home = () => {

  return (
    <HomeContainer >
      <div className="container">
          <HomeInfo>
            <HomeTitle>Hatim <span>H</span>.</HomeTitle>
            {/* <HomeSubTitle>Creative Director</HomeSubTitle> */}
            <HomeDesc>
              Iam a <span>Front-End Developer</span> and Wordpress Designer  
              creating modern and resposive designs to Web.
            </HomeDesc>
            <HomeBtn>Contact Me</HomeBtn>
          </HomeInfo>
      </div>
    </HomeContainer>
  )
}

export default Home