import React from 'react'
import './desc.css'
import Button from './Button'

export const Desc = () => {
  return (
    <div className='desc-page'>
        <article className="title-desc">
            <div className="small-title-desc">
                <h1>
                    Zirvenin onemli anlari  
                </h1>
            </div>
        </article>

        <article className="card-desc">
            <div className="small-card-desc">
                <ul>
                    <li>
                        <h1>Konusmalar ve Acik Forumlar</h1>
                        <p>Sektorun en buyuk isimleri bilgilerini paylasiyor</p>
                    </li>
                    <li>
                        <h1>Mini Masterclass'lar</h1>
                        <p>Kariyerinizi güçlendirecek uzmanların liderliğindeki atölyeler</p>
                    </li>
                    <li>
                        <h1>Kesintisiz Network İmkanı</h1>
                        <p>Platformumuzdaki binlerce medya katılımcısıyla bağlantı kurun</p>
                    </li>
                </ul>

                <Button to="/organization" >Organizator</Button>

            </div>
        </article>
    </div>
  )
}


export default Desc;