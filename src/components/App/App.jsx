import * as React from 'react';
import { Switch } from 'react-router-dom';
import routes from '../../routes.js';
import { MainWrapper } from '../Layouts/MainWrapper/MainWrapper';
import { routesMapper } from '../../core/Utils';
import { withStyles } from '@material-ui/core/styles';
import '../../styles/_main.scss';

const styles = theme => ({
  root: {
    marginTop: 170,
    [theme.breakpoints.down('md')]: {
      marginTop: 50
    }
  }
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <MainWrapper>
      <Switch>{routesMapper(routes)}</Switch>
    </MainWrapper>
  </div>

);

export default withStyles(styles)(App);
