import React from 'react'
import { stats } from '../data'
import parse from 'html-react-parser'

const Stats = () => {
  return (
    <>
     {stats.map(({no,title}, index) => {
        return(
            <li className="stats__box" key={index}>
                <h3 className='stats__no'>{no}</h3>
                <p className="stats__title">{parse(title)}</p>
            </li>
        )
    })}
    </>
  )
}

export default Stats