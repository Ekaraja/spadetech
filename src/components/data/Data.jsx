import React from 'react'
import './data.css'
import { dataImages } from '../../utils/contents/data-images/dataImages';

const Data = () => {
    return (
        <section className="data__container">
            <ul className="data__list">
                {dataImages.map(data => {
                    return (<li key={data.id}> <img src={data.image} alt={data.name}/></li>)
                })}
            </ul>
        </section>
    )
}

export default Data