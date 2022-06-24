import styled from "styled-components"

export const ProfileContainer = styled.div`
  padding: 30px 0;
  overflow: hidden;
  margin:40px auto;
  // background: #f8f8f8;
  // box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

export const ProfileSection = styled.div`
  width: 50%;
  float: left;
`
export const ProfileSectionTitle = styled.div`
  font-size: 40px; 
  margin-bottom: 20px;
  span{
    font-weight: normal;
  }
`
export const ProfileList = styled.ul`
  
`

export const ProfileListItem = styled.li`
  margin-bottom: 8px;
  span{
    display: inline-block;
    width: 100px;
    font-weight: bold
    &.web{
      font-weight: normal;
      color: #eb5424
    }
  }
`

export const SkillsSection = styled.div`
  width: 50%;
  float: left;
`

export const SkillsDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px
`

export const SkillsBar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px

  .title{
    float: left;
  }
  .percent{
    float: right;
  }
`

export const SkillsParent = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px

  span{
    background: var(--color-yellow);
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;

    &.sp1{
      width:${(({percent}) => percent)}
    }
    &.sp2{
      width:${({percent}) => percent}
    }
    &.sp3{
      width:${({percent}) => percent}
    }
  }
`










