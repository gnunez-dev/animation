'use client'
import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import useMeasure from 'react-use-measure'
import * as style from './style'

const Flip = () => {

  const [elementRef, elementBounds] = useMeasure()
  const [element, setElement] = useState<HTMLElement>()
  const [view, setView] = useState('small')
  const [flipping, setFlipping] = useState(true)
  const [dimensions, setDimensions] = useState({
    dx: 0,
    dy: 0,
    dw: 0,
    dh: 0
  })
 
  useEffect(() => {
    let elementMain: HTMLElement = document.querySelector(style.Container) as HTMLElement
    setElement(elementMain)
  }, [view])

  const handleClick = () => {
    flip(toggleState, element)
  }

  const toggleState = () => {
    setView( s => s === 'small' ? 'big' : 'small')
  }
  type toggleStateType = typeof toggleState

  const getRect = (el: HTMLElement | undefined) => {
    console.log(el, {elementBounds})
    return el?.getBoundingClientRect()
  }

  const flip = (
    doSomething: toggleStateType,
    firstEl: HTMLElement | undefined,
    getLastEl = () => firstEl
  ) => {
    const firstRect = getRect(firstEl)
    console.log({firstRect})
    requestAnimationFrame(() => {
      doSomething();
      
      //Last
      let lastEl = getLastEl()
      const lastRect = getRect(lastEl)
      console.log({lastRect})
      //Invert
      if( lastRect && firstRect){
        let newDimension = {
          dx: lastRect.x - firstRect.x,
          dy: lastRect.y - firstRect.y,
          dw: lastRect.width - firstRect.width,
          dh: lastRect.height - firstRect.height
        }
        setDimensions(newDimension)
      }

      requestAnimationFrame(() => {
        setFlipping(false)
        delete lastEl?.dataset.flipping;
      })
    })
  }


  return (
    <style.Container
      data-state={view}
      onClick={handleClick}
      dy={dimensions.dy}
      dw={dimensions.dw}
      dh={dimensions.dh}
      ref={elementRef}
    >
      <CSSTransition in={view !== 'small'} classNames={'transition'} timeout={200}>
        <style.Background
          data-flipping={flipping}
          dw={dimensions.dw}
          dh={dimensions.dh}
        />
      </CSSTransition>
      <style.Content className="content content-small">
        <style.Filler heightAttr={15}/>
        <style.Filler heightAttr={60} full={true}/>
        <style.Filler heightAttr={20} full={true}/>
      </style.Content>
      <style.Content className="content content-big">
        <style.Filler heightAttr={15}/>
        <style.Filler heightAttr={30} full={true}/>
        <style.Filler heightAttr={10}/>
        <style.Filler heightAttr={15}/>
        <style.Filler heightAttr={10}/>
        <style.Filler heightAttr={40} full={true}/>
        <style.Filler heightAttr={20} full={true}/>
        <style.Filler heightAttr={15}/>
        <style.Filler heightAttr={10}/>
        <style.Filler heightAttr={20} full={true}/>
      </style.Content>
    </style.Container>
  )

}
export default Flip;