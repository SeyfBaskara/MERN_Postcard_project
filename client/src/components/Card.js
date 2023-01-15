import React from 'react'
import { deletePostCard } from '../redux/postCard/postcard-actions'
import { useDispatch } from 'react-redux'

const Card = ({ postCard }) => {
   const dispatch = useDispatch()

   const handleDelete = () => {
      dispatch(deletePostCard(postCard._id))
   }

   return (
      <article className="card">
         <header className="card__header">
            <p className="card__header-name">{postCard.senderName}</p>
            <img
               className="card__header-img"
               src="https://1.bp.blogspot.com/-Jwa4A-wYfLg/X7vfbnU8Z7I/AAAAAAAAL3Q/0exfonfQzQUrZPF9yAN5o-bqURbuaj7uQCLcBGAsYHQ/s1000/SE-21.PNG"
               alt="stamp"
            />
         </header>
         <div className="card__body">
            <p>{postCard.message}</p>
         </div>
         <div className="card__footer">
            <button className="card__delete-btn" onClick={handleDelete}>
               Delete
            </button>
            <div className="card__footer-details">
               <p className="card__footer-name">{postCard.receipentName}</p>
               <address className="card__footer-address">{postCard.receipentAddress}</address>
            </div>
         </div>
      </article>
   )
}

export default Card
