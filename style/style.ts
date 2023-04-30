import styled from 'styled-components'


export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
`

export const ContainerRootLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px){
    flex-direction: column;
  }
`
export const TextHome = styled.h2`
  font-size: 25px;
  color: #fff;
  font-weight: 500;
  padding: 50px;
`