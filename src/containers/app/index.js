import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Homepage from '../Homepage';
import AllComponents from '../AllComponents';

class App extends React.Component {
  componentWillUpdate(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { props } = this
    return (
      <>
        <Switch>
          <Route exact path={'/Portfolio/'} component={Homepage} />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    location: state.router.location
  }
}

export default withRouter(connect(mapStateToProps)(App))
