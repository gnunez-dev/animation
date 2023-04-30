import styled from 'styled-components'

interface ContainerProp {
  animationHeight: number
}
export const Container = styled.div<ContainerProp>`
  width: 100%;
  position: relative;
  .transition-content{
    &-enter{
      opacity: 0;
      margin: 0;
    }
    &-enter-active{
      opacity: 1;
      margin: 0;
      transition: opacity .5s, margin .5s ;
    }
    &-enter-done{
      opacity: 1;
      margin: 0;
    }
    &-exit{
      opacity: 1;
      margin: 0;
    }
    &-exit-active{
      opacity: 0;
      transition: opacity .5s;
    }
    &-exit-done{
      margin: ${ p => `0 0 -${p.animationHeight}px 0`};
      transition: margin 0.5s;
    }
  }
`

interface HeaderProp {
  status: boolean
}
export const Header = styled.button<HeaderProp>`
  display: flex;
  width: 100%;
  padding: 5px;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  svg{
    width: 20px;
  }
`
export const Title = styled.h3`
  color: #333;
  margin: 0;
`
interface ContentProp {
  animationHeight: number;
  status: boolean;
}
export const Content = styled.div<ContentProp>`
  position: relative;
  padding: ${ p => p.status ? '10px' : '0'};
  margin: ${ p => p.status ? `0 0 -${p.animationHeight}px 0` : 0};
  transition: margin .5s;
  &:before{
    content: ' ';
    position: absolute;
    width: 100%;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    height: ${ p => `calc(${p.status ? p.animationHeight : 0} * 1px)`};
    transition: height .5s;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: -1;
  }
  & > * {
    display: ${ p => p.status ? 'block' : 'none'};
  }
`

export const ContentSimple = styled.div<ContentProp>`
  position: relative;
  padding: ${ p => p.status ? '10px' : '0'};
  display: ${ p => p.status ? 'block' : 'none'};
  opacity: ${ p => p.status ? 1 : 0};
  transition: opacity .5s, display .5s;
`