// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, avatarUrl, author, topic, title} = blogData

  return (
    <li className="list-item-container">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="div-container">
          <img src={imageUrl} className="item-image" alt={`item${id}`} />
          <div className="sub-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-info">
              <img src={avatarUrl} className="avatar-img" alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
