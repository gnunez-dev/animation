import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #F7F9FB;
  border-bottom: 1px solid #EAECED;
  border-radius: 4px;
  &:focus-within {
    box-shadow: 0 0 3px #92A4DE; 
  }
  > svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    stroke: #9297A8;
  }
`
export const Input = styled.input`
  width: 100%;
  appearance: none;
  border: none;
  background: transparent;
  &:focus { outline: none; }
`

interface ItemProp {
  i: number
}
export const Item = styled.li<ItemProp>`
  margin: 3px 6px;
  padding: 8px 12px;
  list-style-type: none;
  border-radius: 4px;
  animation: pop-in .3s backwards;
  animation-delay: ${ p => `calc( ${p.i} * 0.08s )`};
  background-color: transparent;
  transition: all .1s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: #333;
  &:hover {
    background-color: #EDEFF2;
  }
  @keyframes pop-in {
    from { transform: scale(0.8); opacity: 0; }
  }
`

interface ItemsProp {
  heightAttr: number
}
export const Items = styled.ul<ItemsProp>`
  position: absolute;
  top: 100%;
  left: 0;
  max-height: 50vh;
  width: 100%;
  z-index: -1;
  font-size: 17px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  margin: 0 0;
  padding: 0;
  list-style-type: none;

  &:before {
    content: '';
    position: absolute;
    top: calc(4px * -1);
    left: 0;
    width: 100%;
    background-color: #F7F9FB;
    height: ${ p => `calc(
      ( ${ p?.heightAttr ?? 0 } * 1px)
      + 4px
    )`};
    transition: height .5s;
    border-radius: inherit;
    z-index: -1;
  }
`
export const Bar = styled.div`
  width: 100%;
  z-index: 100;
  font-size: 18px;
  box-shadow: 0 4px 16px rgba(black, 0.1);
  border-radius: 4px;
  margin-bottom: 20vh;
  position: relative;
`