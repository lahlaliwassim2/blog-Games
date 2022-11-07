import './Card.css'


const Card = (props) => {
  return (
    <>
     <div className='most-pop-item'>
                    <div className='card-wrapper'>
                        <img className='most-pop-item-img' src={props.image} />
                        <div className='most-pop-item-content'>
                            <h4 className='most-pop-item-titre'>
                                {props.titre} <br /> 
                                <span>{props.category}</span>
                            </h4> 
                            <ul>
                                <li>{props.rate}</li>
                                <li>{props.download}</li>
                            </ul>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Card