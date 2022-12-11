import './MostPopulaire.css'
import popular_01  from '../../assets/images/popular-01.jpg'
import popular_02  from '../../assets/images/popular-02.jpg'
import popular_03  from '../../assets/images/popular-03.jpg'
import popular_04  from '../../assets/images/popular-04.jpg'

import { Card } from '../../components'
const MostPopulaire = () => {
  return (
    <>
        <div className='section-wrapper'>
            <div className='section-header'>
                <h4>Most Populaire</h4>
            </div>
            <div className='most-pop-items'>
                <Card image={popular_01}   titre="pubg"         category="action"   rate="3.5"   download="2.5M" />
                <Card image={popular_02}   titre="fifa"         category="sport"    rate="1.4"   download="1.8M"/>
                 <Card image={popular_03}  titre="valorant"     category="action"   rate="6.5"   download="4.2M" />
                <Card image={popular_04}   titre="lol"          category="action"   rate="2.5"   download="7.1M" />
                <Card image={popular_01}   titre="pubg"         category="action"   rate="3.5"   download="2.5M" />
                <Card image={popular_02}   titre="fifa"         category="sport"    rate="1.4"   download="1.8M"/>
                 <Card image={popular_03}  titre="valorant"     category="action"   rate="6.5"   download="4.2M" />
                <Card image={popular_04}   titre="lol"          category="action"   rate="2.5"   download="7.1M" />
                 
            </div>
        </div>
    </>
  )
}

export default MostPopulaire