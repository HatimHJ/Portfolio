import React, {useState} from 'react'
import CardContent from './CardContent'
import Filterbtn from './Filterbtn'
import { PortfolioContainer, PortfolioTitle, PortfolioList, PortfolioCard } from "./style"
import useFetch from "../../customHooks/useFetch"

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([])
  const [filterdList, setFilterdList] = useState([])
  const [active, setActive] = useState('all')
  const  {state, flag} = useFetch('portfolio')

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
        <PortfolioTitle><span>My</span> Portfolio</PortfolioTitle>
        <PortfolioList>
          
          <Filterbtn x={active} cklickHandler={cklickHandler} />

        </PortfolioList>
          <div className="box">            
            {
              filterdList.length > 1 ? filterdList.map(portfolio => {
                return (                
                  <PortfolioCard key={portfolio.id}>
                    <CardContent img={portfolio.image} />
                  </PortfolioCard>
                )
              }):portfolios.map(portfolio => {
                return (                
                  <PortfolioCard key={portfolio.id}>
                    <CardContent img={portfolio.image} />
                  </PortfolioCard>
                )
              })
            }            
          </div>
          
        </PortfolioContainer>
  )
}

export default Portfolio
