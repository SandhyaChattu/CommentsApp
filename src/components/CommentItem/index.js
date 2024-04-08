// Write your code here
import './index.css'
const CommentItem = props => {
  const {comments} = props
  const {id, name, comment, isLiked} = comments
  let imgURl
  isLiked
    ? (imgURl =
        'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png')
    : (imgURl =
        'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png')

  return (
    <li className="list-container">
      <button>{name[0]}</button>
      <p>{name}</p>
      <p>{comment}</p>
      <img src={imgURl} />
    </li>
  )
}
export default CommentItem
