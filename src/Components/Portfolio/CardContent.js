import React, { useState } from 'react'
import Modal from './Modal'
import useFetch from "../../customHooks/useFetch"

const CardContent = ({img, id}) => {
const [isModal, setIsModal] = useState(false)

  const  {state, flag} = useFetch('portfolio')
  const  [category, setCategory] = useState('')

  React.useEffect(()=> {
    if (flag) {
      const item = state.find((item) => item.id === id).category
      setCategory(item)
    }
  }, [flag])

  
  const test = () => {
    setIsModal(true)
  }
  
  if (isModal) {
    return(
      <Modal modalState={setIsModal} img={img} category = {category} />
    )
  }

  return (
    <>
    
      <div className="img-container ">
        <img src={img} alt="" />
      </div>
      <p className="overlay">
        <span onClick={() => test()}>
          Show Image
        </span>
      </p>
    </>
  )
}

export default CardContent