import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch ,useSelector } from 'react-redux'
import { getPostCards } from '../redux/postCard/postcard-actions'

const Cards = () => {
  const postCards = useSelector(state => state.postCards)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostCards())
  }, [dispatch])

  return (
    <section className='cards'>
    {postCards.map((postCard) => {
      return (
        <Card key={postCard._id} postCard={postCard}/>
      )
    })}
    </section>
  )
}

export default Cards