import React from 'react'
import './data.css'
import { dataImages } from '../../utils/contents/data-images/dataImages';

const Data = () => {
    return (
        <section className='datas-section'>
            <div className="data__container">
            <ul className="data__list">
                {dataImages.map(data => {
                    return (<li key={data.id}> <img src={data.image} alt={data.name}/></li>)
                })}
            </ul>
            </div>
        </section>
    )
}

export default Data