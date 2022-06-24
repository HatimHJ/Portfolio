import styled from "styled-components"

export const HomeContainer = styled.div`
  height: 500px;
  background:  
  linear-gradient(0deg, rgba(255 255 255 / 100%), rgba(255, 183, 3, .7) ),
  url(images/home/desk.jpg);
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
  background-repeat:no-repeat;

`

export const HomeInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)

`

export const HomeTitle = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: var(--color-purple);
  margin-bottom: 20px;

  @media (max-width:768px) {    
        font-size: 40px;
        color: #fff
  }

`

export const HomeSubTitle = styled.h4`
  font-size: 35px;
  color: var(--color-white);
  margin-bottom: 20px;
  @media (max-width:768px) {    
    font-size: 20px;

  }

`

export const HomeDesc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #888;
  margin-bottom: 20px;

  span {
    background-color:var(--color-yellow);
    color:var(--color-purple);
    font-weight:bold
  }

  @media (max-width:768px) {    
    font-size: 15px;

  }

`

export const HomeBtn = styled.button`
  border: solid 2px var(--color-purple);
  color : var(--color-yellow);
  outline: 0;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  letter-spacing: .08rem;
  background-color: var(--color-purple);
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-yellow);
    z-index: -1;
    transition: all .3s ease-in-out;
    border: 0;
    box-shadow: 5px 5px 2px 2px var(--color-purple);
    top: .5rem;
    left: .5rem;
  }

  &:hover {
    background-color: var(--color-yellow);
    color: var(--color-purple);
    transition: all .5s ease-in-out;
    &::after {
      top: -8px;
      left: -8px;
      width: calc(100% + 16px );
      height: calc(100% + 16px );
      background-color: var(--color-purple);
      box-shadow: 0px 0px 0px 2px var(--color-purple);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

`
