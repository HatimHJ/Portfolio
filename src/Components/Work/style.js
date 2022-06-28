import styled from "styled-components";

export const WorkContainer = styled.div`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #fff

`

export const WorkTitle = styled.h2`
text-align: center;
font-size: 50px;
font-weight: bold;
padding: 1rem 0
  span{
    font-weight: normal
  }

`

export const WorkCard = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 90px 0 50px;
  box-sizing: border-box;
  text-align: center;
  margin-left: ${(props) => props.first ? '0px':'5%'};
  background: transparent; 
  box-shadow: var(--color-yellow) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  
  border-width: 3px;
  border-style: solid;
  border-image: 
    linear-gradient(
      to bottom, 
      var(--color-yellow), 
      rgba(0, 0, 0, 0)
    ) 1 100%;

  @media (max-width: 575px) {    
    width: 100%;
    float: none;
    margin-left: 0    
  }

  @media (min-width: 576px )and (max-width:768px) {
    width: 47%;
    margin-left: ${(props) => props.last && '0'}
  }

`


export const WorkCardTitle = styled.h4`
  font-size: 25px;
  color: var(--color-purple);
  margin-bottom: 20px;

`

export const WorkCardHr = styled.hr`    
  border: 0;
  height: 1px;
  width: 30%;
  position: relative;
  margin: 15px auto;
  background:var(--color-yellow);

`

export const WorkCardDesc = styled.p`
font-size: 17px;
color: #888;
padding: 20px;
font-family: fangsong;

`