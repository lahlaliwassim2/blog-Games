import './Card.css'

import {FaStar ,FaDownload} from 'react-icons/fa'
const Card = (props) => {
  return (
    <>
     <div className='most-pop-item'>
                    <div className='card-wrapper'>
                        <img className='most-pop-item-img' src={props.image} />
                        <div className='most-pop-item-content'>
                            <h4 className='m-2 most-pop-item-titre'>
                                {props.titre} <br /> 
                                <span>{props.category}</span>
                            </h4> 
                            <ul>
                                <li><FaStar /> {props.rate}</li>
                                <li><FaDownload /> {props.download}</li>
                            </ul>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Card