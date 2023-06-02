import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import ShowList from './components/ShowList'
// import ShowCard from './components/ShowCard'
import ShowDetails from './components/ShowDetails'
import BookATicket from './components/BookATicket'

import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ShowList} />
      <Route exact path="/summary/:id" component={ShowDetails} />
      <Route exact path="/BookShow/:id" component={BookATicket} />
    </Switch>
  </Router>
)

export default App
