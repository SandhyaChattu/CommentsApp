import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentsList: [], commentsCount: 0}
  addName = event => {
    this.setState({name: event.target.value})
  }
  addComment = event => {
    this.setState({comment: event.target.value})
  }
  submit = event => {
    event.preventDefault()
    const {name, comment, commentsList, count} = this.state
    const newComment = {
      id: uuidv4(),
      name: {name},
      comment: {comment},
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }
  render() {
    const {name, comment, commentsList, count} = this.state
    return (
      <div className="bg-container">
        <form onSubmit={this.submit}>
          <div className="form-container">
            <div>
              <h1>Comments</h1>
              <p>say something about 4.0 Technologies</p>
              <input type="text" onChange={this.addName} />
              <br />
              <textarea
                className="textAreaElement"
                onChange={this.addComment}
              ></textarea>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
            </div>
          </div>
          <button type="submit">AddCommment</button>
        </form>
        <button id="forComment" className="commentsCount">
          {count}
        </button>
        <label htmlFor="forComment">Comments</label>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem key={eachComment.id} comments={eachComment} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
