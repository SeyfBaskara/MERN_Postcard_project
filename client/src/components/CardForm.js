import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { createPostCard } from '../redux/postCard/postcard-actions'
// import { useNavigate } from 'react-router-dom';


const CardForm = () => {
  const [postCard, setPostCard] = useState({ 
    senderName: '', 
    receipentName: '',
    message: '', 
    receipentAddress: '' 
  })
  const [isCreated, setIsCreated] = useState(false)
  // const navigate = useNavigate()
  const dispatch = useDispatch()

  
  const handleChange = (e) => {
    const { name, value} = e.target
    setPostCard({...postCard, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPostCard(postCard))
    setPostCard({ senderName: '', receipentName: '', message: '', receipentAddress: '' })

    setIsCreated(true, setTimeout(() => {
      setIsCreated(false)
    }, 2000))
  }
  return (
    <section className='addCard'>
      <form onSubmit={handleSubmit} className='form'>
      <textarea
        type='text' 
        className='form__message-input'
        name='message'
        placeholder='Write messagee' 
        value={postCard.message} 
        onChange={handleChange}
        required
        />
        <div className='form__name-input'>
        <input 
        type='text'
        className='form__input form__sender-input' 
        name='senderName' 
        placeholder='Add sender name' 
        value={postCard.senderName} 
        onChange={handleChange}
        required
        />
        <input 
        type='text' 
        className='form__input form__receipent-input'
        name='receipentName' 
        placeholder='Add receipent name' 
        value={postCard.receipentName} 
        onChange={handleChange}
        required
        />
        </div>
        <input 
        type='text'
        className='form__input'
        name='receipentAddress'
        placeholder='Add address' 
        value={postCard.receipentAddress} 
        onChange={handleChange}
        required
        />
        <button className='form__submit-btn' type='submit'>Add to collection</button>
        {
          isCreated && <h3 className='form__notice'>The card has been created succefully! Go to collection</h3>
        }
      </form>
    </section>
  )
}

export default CardForm