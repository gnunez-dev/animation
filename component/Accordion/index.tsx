'use client'
import { useLayoutEffect, useReducer, useRef, useState } from 'react';
import * as style from './style'
import { CSSTransition } from 'react-transition-group'

interface AccordionProp {
  title: string;
  content: React.ReactNode
}
const Accordion = ({title, content}:AccordionProp) => {
  const elRef = useRef(null)
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0)
  
  useLayoutEffect(()=>{
    if(!elRef.current) return;
    //@ts-ignore
    const rect = elRef.current.getBoundingClientRect()
    setHeight(rect.height)
  },[open])

  return (
    <style.Container
      animationHeight={height}
    >
      <style.Header
        status={true}
        onClick={()=> setOpen(s => !s)}
      >
        <style.Title>{title}</style.Title>
        <svg viewBox="0 0 24 24"><g><path d="m12 9.414-6.293 6.293a1 1 0 0 1-1.414-1.414l7-7a.999.999 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414z" fill="#333333"></path></g></svg>
      </style.Header>
      <CSSTransition
        in={open}
        timeout={200}
        classNames={'transition-content'}
      >
        <style.Content
          ref={elRef}
          animationHeight={height}
          status={open}
        >
          {content}
        </style.Content>
      </CSSTransition>
    </style.Container>
  )
}
export default Accordion