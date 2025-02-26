import { getDefaultNormalizer } from '@testing-library/dom'
import React from 'react'
import './main.css'
import Button from './Button'


export const Main = () => {
  return (
    <>
    <article className="title">
        <div className="title-1">
            <h1>Mega Medya Zirvesi</h1>
        </div>
        <div className="title-2">
            <p>Medya katilimcilar icin kuresel konferans 8-10 Temmuz 2025</p>
        </div>
    </article>
        <div className="btn-1">
            <Button to ="/about">Hemen katilin</Button>
        </div>
    </>
  )
}

export default Main;
