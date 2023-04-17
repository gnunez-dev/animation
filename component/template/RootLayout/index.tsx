'use client'
import GlobalStyle from '@/style/globalStyles'
import * as style from '../../../style/style'

const RootLayoutTemplate = ({ children } : { children: React.ReactNode}) => {
  return (
    <style.ContainerRootLayout>
      <GlobalStyle/>
      {children}
    </style.ContainerRootLayout>
  )
}

export default RootLayoutTemplate