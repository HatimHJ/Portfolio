import styled from "styled-components"

export const NavbarContainer = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background: var(--color-purple);
  position: relative;
  border-bottom: 1px solid var(--color-yellow);
`

export const Logo = styled.div`
    width: 50%;
    float: left; 

    @media (max-width : 991px) {    
          width: 100%;
          float: none;
    }
      
`

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: var(--color-light-purple);
`

export const Ul = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    
    @media (max-width : 991px) {    
      width: 100%;
      float:  none;
      margin-top: 20px;
      display: block
    }
    
`

export const Li = styled.li`
  display: inline-block;

  @media (max-width : 991px) {
    display: block;
    text-align: center;
  }
`

export const Anchor = styled.a`
  display: block;
  color: var(--color-white);
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    color: var(--color-yellow)
  }

`

