import {Component} from 'react'

import ShowCard from '../ShowCard'
import './index.css'

class ShowList extends Component {
  state = {moviesList: []}

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const apiUrl = 'https://api.tvmaze.com/search/shows?q=all'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.map(movie => ({
      id: movie.show.id,
      imageUrl: movie.show.image.original,
      showName: movie.show.name,
      showType: movie.show.type,
      language: movie.show.language,
      genres: movie.show.genres,
      summary: movie.show.summary,
    }))
    this.setState({
      moviesList: updatedData,
    })
  }

  renderMoviesList = () => {
    const {moviesList} = this.state

    // console.log(moviesList)
    return (
      <div className="movies-container">
        <ul className="movies-list">
          {moviesList.map(movie => (
            <ShowCard moviesData={movie} key={movie.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <>
        <h1 className="title">All Shows</h1>
        {this.renderMoviesList()}
      </>
    )
  }
}
export default ShowList
