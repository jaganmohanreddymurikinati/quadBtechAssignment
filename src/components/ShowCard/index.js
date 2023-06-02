import {Link} from 'react-router-dom'
import './index.css'

const ShowCard = props => {
  const {moviesData} = props
  const {id, imageUrl, showName, showType, language, genres} = moviesData

  return (
    <li className="movie-item">
      <img className="thumbnail" alt="movie" src={imageUrl} />
      <div>
        <h1 className="heading">movieName:{showName}</h1>
        <p>Movie type: {showType}</p>
        <p>Language: {language}</p>
        <p>Genres: {genres}</p>
        <Link className="summary-button" to={`/summary/${id}`}>
          Show Summary
        </Link>
      </div>
    </li>
  )
}
export default ShowCard
