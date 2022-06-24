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
  padding: 90px 0;
  box-sizing: border-box;
  text-align: center;
  margin-left: ${(props) => props.first ? '0px':'5%'};
  background: transparent; 
  box-shadow: -20px -15px 50px #fff5, 20px 15px 50px #0005;
  
  
	place-items: center;
	border: 5px solid;
  border-image: linear-gradient(45deg, var(--color-yellow), var(--color-purple) ) 1;
  border-radius:20px;

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
  height: 5px;
  background-image: radial-gradient( closest-side, hsl(43deg 100% 51%), hsl(297deg 44% 22%) 100%);
  position: relative;
  
`

export const WorkCardDesc = styled.p`
  font-size: 14px;
  color: #888;
  padding: 20px

`