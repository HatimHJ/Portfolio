import React from 'react'
import {HomeContainer, HomeInfo, HomeTitle, HomeDesc,  HomeBtn} from "./style"

const data = 
  {
    EN:{
      "title":"Hatim H.",
      "desc":`Iam a Front-End Developer and Wordpress Designer  
              creating modern and resposive designs to Web.`,
      "contact":"contact me"
    },
    AR:{
      "title":"حــاتم ح.",
      "desc":`أنا  مطور للواجهة الأمامية  ومصمم ووردبريس أصمم تصميمات حديثة ومتجاوبة للويب.`,
      "contact":"اتصــل بي"
    }
  }



const Home = ({isArabic}) => {

  return (
    <HomeContainer >
      <div className="container">
          <HomeInfo>
            <HomeTitle>{isArabic ? data.AR.title : data.EN.title}</HomeTitle>         
            <HomeDesc>
              {isArabic ? data.AR.desc : data.EN.desc}
            </HomeDesc>
            <HomeBtn to='/contact'>{isArabic ? data.AR.contact : data.EN.contact}</HomeBtn>
          </HomeInfo>
      </div>
    </HomeContainer>
  )
}

export default Home