import { getDefaultNormalizer } from '@testing-library/dom'
import React from 'react'
import './main.css'
import Button from './Button'


export const Main = () => {
  return (
    <div className="home-page">
    <article className="title-main">
        <div className="title-main-1">
            <h1>Mega Medya Zirvesi</h1>
        </div>
        <div className="title-main-2">
            <p>Medya katilimcilar icin kuresel konferans 8-10 Temmuz 2025</p>
        </div>
    </article>
        <div className="btn-main-1">
            <Button to ="/about">Hemen katilin</Button>
        </div>
    </div>
  )
}

export default Main;
