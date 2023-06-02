import {Component} from 'react'
// import {Link} from 'react-router-dom'
import './index.css'

class ShowDetails extends Component {
  state = {
    show: {},
    name: '',
    email: '',
    phoneNumber: '',
    noOfTickets: '',
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
        this.setState({show: data})
      })
      .catch(error => console.log(error))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhoneNumber = event => {
    this.setState({phoneNumber: event.target.value})
  }

  onChangeNumberOfTickets = event => {
    this.setState({noOfTickets: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {name, email, phoneNumber, noOfTickets} = this.state
    const userDetails = {name, email, phoneNumber, noOfTickets}
    localStorage.setItem('userDetails', JSON.stringify(userDetails))
    this.setState({
      name: '',
    })
  }

  render() {
    const {show} = this.state

    return (
      <div className="background-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <p className="movie-name">
            <span>Movie Name: </span>
            {show.name}
          </p>
          <label htmlFor="username" className="input-label">
            Your Name
          </label>
          <input
            onChange={this.onChangeName}
            className="input-field"
            type="text"
            id="username"
          />
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            onChange={this.onChangeEmail}
            type="email"
            id="email"
            className="input-field"
          />
          <label htmlFor="phoneNumber" className="input-label">
            phoneNumber
          </label>
          <input
            onChange={this.onChangePhoneNumber}
            type="number"
            id="phoneNumber"
            className="input-field"
          />
          <label htmlFor="noOfTickets" className="input-label">
            No Of Tickets
          </label>
          <input
            onChange={this.onChangeNumberOfTickets}
            type="number"
            id="noOfTickets"
            className="input-field"
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default ShowDetails
