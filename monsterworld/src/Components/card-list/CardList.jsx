import React from 'react'
import './CardList.css'
import {Card} from '../card/Card'

export const CardList = (props) => {
    console.log(props)
    return (
        <div className="card-list">
            {props.monsters.map(element => (
                <Card key={element.id} monster={element}/>
            ))}

        </div>
    )
}
