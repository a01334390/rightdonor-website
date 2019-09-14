import React from 'react';
import './App.css';

/** React Router */
import {Router,Route} from 'react-router-dom'

/** Browser History */
import createBrowserHistory from 'history/createBrowserHistory'

/** AWS Amplify */
import { Hub, Logger } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

/** Pages */
import Homepage from './pages/HomePage'
import Bloodpage from './pages/BloodPage'

/** Context */
export const history = createBrowserHistory()
const veronica = new Logger('Veronica')

veronica.onHubCapsule = async capsule => {
  switch (capsule.payload.event) {
    case 'signIn':
      veronica.info('user signed in')
      break
    case 'signUp':
      veronica.info('user signed up')
      break
    case 'signOut':
      veronica.info('user signed out')
      break
    case 'signIn_failure':
      veronica.warn('user sign in failed')
      break
    default:
      veronica.error('Unexpected error')
      break
  }
}

Hub.listen('auth',veronica)

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        {/** Home Page */}
        <Route exact path="/" component={
          () => <Homepage/>
        }/>
        {/** Blood Operations */}
        <Route path="/blood" component={
          () => <Bloodpage/>
        }/>
      </Router>
    )
  }
}

export default withAuthenticator(App,true);
