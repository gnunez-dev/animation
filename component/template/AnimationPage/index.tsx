'use client'
import * as style from './style'

interface AnimationPageTemplateProp {
  title: string;
  children: React.ReactNode
}

const AnimationPageTemplate = ({title, children}: AnimationPageTemplateProp) => {
  return (
    <style.Container>
        <style.Title>
          {title}
        </style.Title>
        <style.Content>
          {children}
        </style.Content>
    </style.Container>
  )
}
export default AnimationPageTemplate