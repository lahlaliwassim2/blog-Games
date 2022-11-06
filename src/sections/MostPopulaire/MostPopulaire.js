import './MostPopulaire.css'

import { Card } from '../../components'
const MostPopulaire = () => {
  return (
    <>
        <div className='section-wrapper'>
            <div className='section-header'>
                <h4>Most Populaire</h4>
            </div>
            <div className='most-pop-items'>
                <Card />
                <Card />
                 <Card />
                 
                <Card />
                 
            </div>
        </div>
    </>
  )
}

export default MostPopulaire