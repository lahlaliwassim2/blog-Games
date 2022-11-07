import './Card.css'
import popular_01  from '../../assets/images/popular-01.jpg'


const Card = (props) => {
  return (
    <>
     <div className='most-pop-item'>
                    <div className='card-wrapper'>
                        <img className='most-pop-item-img' src={ popular_01 } />
                        <div className='most-pop-item-content'>
                            <h4 className='most-pop-item-titre'>
                                {props.titre} <br /> 
                                <span>Sandbox</span>
                            </h4> 
                            <ul>
                                <li>4.8</li>
                                <li>2.1</li>
                            </ul>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Card