import React, {useState} from 'react'
import CardContent from './CardContent'
import Filterbtn from './Filterbtn'
import { PortfolioContainer, PortfolioTitle, PortfolioList, PortfolioCard } from "./style"
import useFetch from "../../customHooks/useFetch"
import { titles} from "../../titlesData"

const Portfolio = ({isArabic}) => {
  const [portfolios, setPortfolios] = useState([])
  const [filterdList, setFilterdList] = useState([])
  const [active, setActive] = useState('all')
  const  {state, flag} = useFetch('portfolio')
  const {portfolioTitle} = titles

  React.useEffect(()=> {
    if (flag) {
      setPortfolios(state)      
    }
  }, [flag])


  const cklickHandler = (category) => {
    setActive(category)
    setFilterdList(() => {
      if (category === 'all') {
        return portfolios  
      }
      return portfolios.filter(item => item.category === category)
    })
  }
  return (
  
    <PortfolioContainer>
        <PortfolioTitle>{isArabic ? portfolioTitle.AR : portfolioTitle.EN}</PortfolioTitle>
        <PortfolioList>
          
          <Filterbtn active={active} cklickHandler={cklickHandler} />

        </PortfolioList>
          <div className="box">            
            {
              filterdList.length > 1 ? filterdList.map(portfolio => {
                return (                
                  <PortfolioCard key={portfolio.id}>
                    <CardContent img={portfolio.image} id={portfolio.id}   />
                  </PortfolioCard>
                )
              }):portfolios.map(portfolio => {
                return (                
                  <PortfolioCard key={portfolio.id}>
                    <CardContent img={portfolio.image} id={portfolio.id} />
                  </PortfolioCard>
                )
              })
            }            
          </div>
          
        </PortfolioContainer>
  )
}

export default Portfolio
