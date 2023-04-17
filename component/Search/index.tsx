'use client'
import { useLayoutEffect, useRef, useState } from 'react'
import * as style from './style'

const SearchInput = ({
  query,
  onChange
}:{
  query: string,
  onChange: (value: string) => void
}) => {

  return (
    <style.Label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <style.Input
        placeholder="Search for dog breeds"
        type="search"
        defaultValue={query}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          //@ts-ignore
          onChange(event.target.value);
        }}
      />
    </style.Label>
  )
}

const Result = ({
  children,
  i
} : {
  children: React.ReactNode,
  i: number
}) => {

  const elRef = useRef(null)

  return (
    <style.Item
      ref={elRef}
      i={i}
    >
      {children}
    </style.Item>
  )
}

const Results = ({
  data
}:{
  data: string[]
}) =>{

  const elRef = useRef(null)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if(!elRef.current) return;
    //@ts-ignore
    const rect = elRef.current.getBoundingClientRect()
    setHeight(rect.height)
  },[data])

  return (
    <style.Items
      ref={elRef}
      heightAttr={height}
    >
      {
        data.map((item, index) => {
          return(
            <Result
              key={index}
              i={index}
            >
              {item}
            </Result>
          )
        })
      }
    </style.Items>
  )
}

//Main Component
const Search = ({
  data
} : {
  data: string[]
}) => {

  const [query, setQuery] = useState('dog')

  const results = query.length < 2 ?
    [] : data.filter( item => {
      return item.includes(query)
    }).slice(0,5)

  const handleClick = ( value: string) => {
    //@ts-ignore
    setQuery(value)
  }
  return (
    <style.Bar>
      <SearchInput
        query={query}
        onChange={handleClick}
      />
      <Results
        data={results}
      />
    </style.Bar>
  )
}
export default Search