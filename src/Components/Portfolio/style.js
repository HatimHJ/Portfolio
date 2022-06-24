import styled from "styled-components"

export const PortfolioContainer = styled.div`
  // background: #f8f8f8;
  // box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 30px 0px; 
  overflow: hidden;
  margin: 40px auto

`

export const PortfolioTitle = styled.h2`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  padding: 1rem 0
  span{
    font-weight: normal;
  }

`

export const PortfolioList = styled.ul`
  list-style: none;
  text-align: center;
  margin: 20px 0

`

export const PortfolioListItem = styled.li`
  display: inline-block;
  width: 100px;
  padding: 10px;
  cursor:pointer;
  text-transform: capitalize;

    background: ${props => props.active ? 'var(--color-yellow)' :''};
    color: ${ ({active}) => active ?'#fff' :''}
  
`

export const PortfolioCard = styled.div`
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;
  
  &:hover .overlay{
    opacity:1;
    transition: .5s;
  }
  &:hover img{
    transform: scale(1.1);
    transition: .5s;
  }

  img{
    width: 100%;
    &:hover {
      transform: scale(1.1);
      transition: .5s;
    }
    
  }
  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 183, 3, .5);
    font-size: 15px;
    opacity: 0

    span{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: #fff;
      display: block;
      padding: 10px 20px;
      cursor: pointer;
      border: 2px solid var(--color-yellow);
    }
  }
`











