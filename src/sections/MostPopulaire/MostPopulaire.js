import './MostPopulaire.css'
import popular_01  from '../../assets/images/popular-01.jpg'
const MostPopulaire = () => {
  return (
    <>
        <div className='section-wrapper'>
            <div className='section-header'>
                <h4>Most Populaire</h4>
            </div>
            <div className='most-pop-items'>
                <div className='most-pop-item'>
                    <div className='card-wrapper'>
                        <img className='most-pop-item-img' src={ popular_01 } />
                        <div className='most-pop-item-content'>
                            <h4 className='most-pop-item-titre'>
                                7abahh <br /> 
                                <span>Sandbox</span>
                            </h4> 
                            <ul>
                                <li>4.8</li>
                                <li>2.1</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MostPopulaire