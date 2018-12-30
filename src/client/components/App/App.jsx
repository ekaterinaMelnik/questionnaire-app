import * as React from 'react';
import { Switch, withRouter, Redirect } from 'react-router-dom';
import routes from '../../routes.js';
import { MainWrapper } from '../Layouts/MainWrapper/MainWrapper';
import { routesMapper } from '../../core/Utils';

import { withStyles } from '@material-ui/core/styles';
import '../../styles/_main.scss';

const styles = {
  root: {
    width: '100%',
    minHeight: 'calc(100vh - 40px)',
    display: 'flex',
    flexGrow: 1,
    maxWidth: '100vw'
  },

  container: {
    margin: 'auto',
    maxWidth: 650,
    display: 'flex',
    flexDirection: 'column'
  }
};

class App extends React.Component {
  componentDidMount() {
    const { match, location, history } = this.props;
    const allowRedirect = match.url !== location.pathname;

    if (allowRedirect) {
      history.replace('/');
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <MainWrapper>
            <Switch>
              {routesMapper(routes)}
              <Redirect to={process.env.PUBLIC_URL}/>
            </Switch>
          </MainWrapper>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(App));
