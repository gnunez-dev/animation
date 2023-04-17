import styled from 'styled-components'


interface ContainerProp {
  dy: number;
  dh: number;
  dw: number
}
export const Container = styled.div<ContainerProp>`
  width: 100%;
  display: grid;
  align-items: center;
  position: relative;
  transform-origin: top left;
  transition-property: transform;
  transition-duration: 0.5s;
  transition-delay: 0.5s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  > * {
    grid-area: 1 / 1;
  }

  &[data-state="big"] .content-big,
  &[data-state="small"] .content-small {
    position: relative;
    transition-delay: 1s;
    opacity: 1;
    border: 2px solid yellow;
  }
    
  &[data-flipping="true"] {
    transition: none;
    transform:  ${ p => `translateY(calc(-1px * ${p.dy}))`};
    border: 1px solid blue;
  }
  .transition{
    &-enter {
      transform: ${ p => `scaleY(calc(1 / ${p.dh}))`};
      transition: transform 0.5s;
    }
    &-enter-active {
      transform:  ${ p => `translateY(calc(-1px * ${p.dy}))`};
      border-radius: ${ p => `
        calc((${p.dw}) * 4px) /
        calc((${p.dh}) * 4px);
      `};
      transition: transform 0.5s, border-radius 0.5s;
    }
    &-enter-done {
      transform:  ${ p => `translateY(calc(-1px * ${p.dy}))`};
      border-radius: ${ p => `
        calc((${p.dw}) * 4px) /
        calc((${p.dh}) * 4px);
      `};
      border: 1px solid blue;
      transition: transform 0.5s, border-radius 0.5s;
    }
    &-exit {
      transform:  ${ p => `translateY(calc(-1px * ${p.dy}))`};
      border: 1px solid blue;
      transition: transform 0.5s, border-radius 0.5s;
    }
    &-exit-active {
      transform: ${ p => `scaleY(calc(1 / ${p.dh}))`};
      border-radius: ${ p => `
        calc((${p.dw}) * 4px) /
        calc((${p.dh}) * 4px);
      `};
      border: 1px solid red;
      transition: transform 0.5s, border-radius 0.5s;
    }
  }
`

interface BackgroundProp {
  dh: number;
  dw: number
}
export const Background = styled.div<BackgroundProp>`
  transform-origin: top left;
  transition: inherit;
  transition-property: transform, border-radius;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eec0ab;
  border-radius: 8px;

  /* &[data-flipping="true"] > * {
    transform: $ {  p =>  scaleY(calc(1 / $ {p.dh}))};
    border-radius: $ { p => 
      calc(($ {p.dw}) * 4px) /
      calc(($ {p.dh}) * 4px);
    };
    border: 1px solid red;
  } */
`

interface FillerProp {
  heightAttr: number
  full?: boolean
}
export const Filler = styled.div<FillerProp>`
  background: #fbf2ed;
  width: ${ p => p.full ? '100%' : '50%' };
  height: ${ p => p.heightAttr ?? 3 }px;
  margin-bottom: 0.5em;
  border-radius: 4px;
`

interface ContentProp {
  type?: 'big' | 'small';
}
export const Content = styled.div<ContentProp>`

  transform-origin: top left;
  transition: inherit;
  transition-property: transform, border-radius;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eec0ab;
  border-radius: 8px;

  padding: 2em;
  margin-bottom: 0.5em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: linear;
  > :last-child {
    margin-bottom: 0;
  }
`