import React from 'react'
import './about.css'
import People from '../images/gathering.jpeg'
import Button from './Button'
import Desc from './Desc'


export const About = () => {
  return (
    <>
      <article className="title-about">
        <div className="title-about-1">
          <h1>Simdiye def yapilan en buyuk zirvemiz</h1>
        </div>
        <div className="title-about-2">
          <p>Küreselleşiyoruz! Bu yılki Mega Medya Zirvesi, dünyanın çapında katılımcılarla birlikte sekiz farklı saat diliminden sanal bir platformda yayınlanacak. 

3 gün sürecek heyecan verici sanal konferansta güncel sektör içgörülerini edinin, diğer katılımcılarla bir araya gelin ve açılış konuşmacılarımızdan ilham alın.</p>
        </div>
        <div className="btn-about">
          <Button to="/desc" >Yerinizi ayirtin</Button>
        </div>
      </article>

      <article className="image-about">
        <img src={People}  alt="" />
      </article>

    </>
  )
}

export default About;