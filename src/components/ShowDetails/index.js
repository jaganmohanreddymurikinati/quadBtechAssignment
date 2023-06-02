import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class ShowDetails extends Component {
  state = {
    show: {},
  }

  componentDidMount() {
    const {
      match: {
        params: {id: showId},
      },
    } = this.props

    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(response => response.json())
      .then(data => {
        const summary = data.summary ? data.summary.replace(/<[^>]+>/g, '') : '' // Remove HTML tags from summary
        const showData = {...data, summary}
        this.setState({show: showData})
      })
      .catch(error => console.log(error))
  }

  render() {
    const {show} = this.state

    return (
      <div className="bg-container">
        <h1>
          Movie name: <span className="name">{show.name}</span>
        </h1>
        <h2>Summary</h2>
        <p>{show.summary}</p>
        <Link className="book-button" to={`/BookShow/${show.id}`}>
          Book a Ticket
        </Link>
      </div>
    )
  }
}

export default ShowDetails
