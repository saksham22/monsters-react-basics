import React from 'react'
import './card.styles.css'
import { Card } from '../cards/cards.component';
export const CardList = props =>(
    <div className='card-list'>
        {
          props.monsters.map(monster => (
              <Card key={monster.id} monster={monster}></Card>
          ))
        }
    </div>
);





