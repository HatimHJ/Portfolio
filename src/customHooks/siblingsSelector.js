import React,{useEffect, useState} from 'react'

const useGetSiblings =  () => {
  const [state, setState] = useState([])

  function getSiblings (e)  {
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return state
    }
    // first child of the parent node  | e = a parentNode = li |
    let sibling  = e.parentNode.parentNode.firstChild;
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
          state.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return state;
  }

  useEffect(() => {
    const x = getSiblings()    
    setState(x)
  }, [])

  return {state}

}

export default useGetSiblings