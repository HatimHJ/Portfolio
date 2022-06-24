import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const useFetch = (x) => {
  const [state, setState] = useState([]);
  const [flag, setFlag] = useState(false);
  const getData = async () => {
    const res = await Axios.get('js/data.json')
    const data = res.data[x]
    setState(data)
    setFlag(true)
  }

  useEffect(() => {
    getData()
    
  }, [])

  return {state, flag}
}

export default useFetch