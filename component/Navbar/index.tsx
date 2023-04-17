'use client'
import Link from "next/link"
import * as style from './style'
const Navbar = () => {

  const routes = [
    { label: 'Accordion', path: '/accordion'},
    { label: 'Flip', path: '/flip'},
    { label: 'Search', path: '/search'}
  ]
  return (
    <style.Container>
      <style.Header>
        Animation App
      </style.Header>
      <style.Menu>
        {
          routes.map( item => (
            <style.MenuItem href={item.path} key={item.path}>{item.label}</style.MenuItem>
          ))
        }
      </style.Menu>
    </style.Container>
  )
}

export default Navbar;