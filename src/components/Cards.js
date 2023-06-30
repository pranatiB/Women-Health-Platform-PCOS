import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/gynac.jpg'
              text='Book your gynac appointment NOW'
              label='Bookig'
              path='/services'
            />
            <CardItem
              src='images/AI-Chatbot.png'
              text='Chat with our specialist NOW'
              label='ChatBot'
              path='/services'
            />
           
            
          </ul>
          
          <ul className='cards__items'>
             <CardItem
              src='images/woman-choosing-healthy-unhealthy-food.avif'
              text='Get Personalised diet  NOW'
              label='Diet'
              path='/services'
            />
            
            <CardItem
              src='images/period-track.jpg'
              text='Track your period NOW'
              label='PeriodTracker'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
