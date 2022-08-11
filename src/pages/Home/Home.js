import React from 'react'
import './style.css'
import { GrStatusGoodSmall } from 'react-icons/gr'

const Home = () => {
  return (
    <div className='homePageDiv'>
      <div className='todoListDiv'>
        <div className='todoListContentDiv'>
          <div className='todoContainerDiv'>
            <div className='todoContainerHeaderDiv'>
              <div className='todoLastDayDiv'>
                Last Day: 14 August
              </div>
              <div className='todoCheckBoxDiv'>
                <input type="checkbox" className='completeBox'/>
              </div>
            </div>
            <div className='todoContainerContentDiv'>
                <div className='todoParagraphDiv'>
                  Java Spring Boot
                </div>
            </div>
            <div className='todoContainerFooterDiv'>
              <div className='todoStatusDiv'>
                <GrStatusGoodSmall />
              </div>
              <span>Kürşat Şimşek</span>
            </div>
          </div>

          <div className='todoContainerDiv'>
            <div className='todoContainerHeaderDiv'>
              <div className='todoLastDayDiv'>
                Last Day: 14 August
              </div>
              <div className='todoCheckBoxDiv'>
                <input type="checkbox" className='completeBox'/>
              </div>
            </div>
            <div className='todoContainerContentDiv'>
                <div className='todoParagraphDiv'>
                  Java Spring Boot
                </div>
            </div>
            <div className='todoContainerFooterDiv'>
              <div className='todoStatusDiv'>
                <GrStatusGoodSmall />
              </div>
              <span>Kürşat Şimşek</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home