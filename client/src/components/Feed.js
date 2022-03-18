import React from 'react'
import { useNavigate } from 'react-router-dom';

const Feed = () => {
 const navigate = useNavigate()

 const handleClick = () =>  {
    navigate('/createcard')
 }

  return (
    <section className='feed'>
      <img className='feed__bird-img' src='/assets/blue-bird.png' alt='blue bird'/>
        <h1 className='feed__title'>Wecome to Blue Pegion</h1>
        <p className='feed__text'>Create personalized postcards with your own photos or predesigned motifs and send anywhere in the world.</p>
        <button className='feed__button' onClick={handleClick}>Create a card</button>
    </section>
  )
}

export default Feed