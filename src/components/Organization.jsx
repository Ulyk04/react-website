import React from 'react'
import Button from './Button'
import './organization.css'
import seminar from '../images/seminar.jpeg'
import concert from '../images/concert.jpeg'

export const Organization = () => {
  return (
    <div className='org-page'>
        <article className="org-image">
            <div className="org-image-1">
                <img src={seminar} alt="" />
            </div>
            <div className="org-image-2">
                <img src={concert} alt="" />
            </div>
        </article>


        <article className="org-title">
            <div className="org-title-1">
                <h1>Organiztorler hakkinda</h1>
            </div>
            <div className="org-title-2">
                <p>Mega Medya Zirvesi, Küresel Medya İttifakı ortaklığıyla InnoBlue Etkinlikleri tarafından sunulmaktadır. Birlikte, profesyonel öğrenme ve network oluşturma için ilgili ve dinamik etkinlikler oluşturma konusunda on yılı aşkın deneyime sahiptirler.</p>
            </div>
            <div className="org-btn-1">
                <Button to='/registration'> Katilmak </Button>
            </div>
        </article>
    </div>
  )
}

export default Organization;