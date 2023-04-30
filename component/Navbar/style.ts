import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.header`
  width: 250px;
  padding: 10px;
  background-color: #373357;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  
  @media(max-width: 768px){
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 99;
  }
`
export const Header = styled.h1`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 900;
  text-align: left;
  padding: 5px;
`
export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
`
export const MenuItem = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 10px 0;
  &:hover{
    font-style: italic;
    color: #ecc18d;
  }
`