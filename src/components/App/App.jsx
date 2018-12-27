import * as React from 'react';
import { Switch } from 'react-router-dom';
import routes from '../../routes.js';
import { MainWrapper } from '../Layouts/MainWrapper/MainWrapper';
import { routesMapper } from '../../core/Utils';
import { withStyles } from '@material-ui/core/styles';
import '../../styles/_main.scss';

const styles = theme => ({
  root: {
    // marginTop: 100,
    // [theme.breakpoints.down('md')]: {
    //   marginTop: 50
    // }
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
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <MainWrapper>
        <Switch>{routesMapper(routes)}</Switch>
      </MainWrapper>
    </div>
  </div>

);

export default withStyles(styles)(App);
