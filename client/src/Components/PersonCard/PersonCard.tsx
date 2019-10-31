import React from 'react'
import './PersonCard.scss'

export interface PersonCardProps {
  name: string
}
const PersonCard = ({name}: PersonCardProps) => {

  return <div className="person-card">
    <img src="https://picsum.photos/100" alt=""/>
    <h1>{name}</h1>
  </div>

}


export default PersonCard;