import { Link } from "react-router-dom"
import {Anchor, Li} from './style.js'

export const data = [
  {
    id : 1,
    url : '/',
    text : 'Home',
  },
  {
    id : 2,
    url : '#',
    text : 'About',
  },
  {
    id : 3,
    url : '/contact',
    text : 'Contact',
  },
  {
    id : 4,
    url : '#',
    text : 'portfolio',
  },
  {
    id : 5,
    url : '#',
    text : 'Profile',
  },
  {
    id : 6,
    url : '#',
    text : 'Resume',
  },
  {
    id : 7,
    url : '#',
    text : 'Work',
  },
]

export const anchors = data.map(link => {
    const {id, text, url} = link
    if(url === '#')
      return <Li key={id}> <Anchor href={url}>{text}</Anchor> </Li>
    return <Li key={id}> <Link className='linkStyle' to={url}>{text}</Link> </Li>
  })