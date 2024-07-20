import './App.css'
import {BrowserRouter, Switch, Route, exact} from 'react-router-dom'
// Replace your code here
import Courses from './components/Courses'
import UniqCourse from './components/UniqCourse'
import Notfound from './components/NotFound'
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Courses} />
        <Route exact path="/courses/:clickId" component={UniqCourse} />
        <Route path="/bad-path" component={Notfound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
