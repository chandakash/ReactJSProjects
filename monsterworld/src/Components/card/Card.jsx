import React from 'react'
import './Card.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt='monster' src = {`https://robohash.org/${props.monster.id}`}/>
            <h1>{props.monster.name}</h1>
            <h2>{props.monster.email}</h2>
        </div>
    )
}
