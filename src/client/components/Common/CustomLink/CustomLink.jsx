import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { changeLinkStatusBack } from '../../../actions/index';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  defaultLink: {
    marginRight: 8,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 2,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    color: '#bbbbbb',
    backgroundColor: 'white',
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600'
  },

  activeLink: {
    marginRight: 8,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 2,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    backgroundColor: 'white',
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600',
    color: 'black !important'
  },

  ableLink: {
    marginRight: 8,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 2,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    color: '#ff9800',
    backgroundColor: 'white',
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600'
  },

  disabled: {
    color: 'none !important'
  }
};

class CustomLink extends React.Component {
  state = {
    consumptionIndex: 1
  };

  componentDidMount() {
    const currentIndexPath = this.props.index;

    this.setState({
      consumptionIndex: currentIndexPath
    });
  }

  findCurrentPathIndex = () => {
    const { routes, location } = this.props;
    let currentIndexPath;

    for (let i = 0; i < routes.length; i++) {
      if (routes[i].path === location.pathname) {
        currentIndexPath = i;
      }
    }

    return currentIndexPath;
  };

  onClick = (index, path, dispatch) => {
    const { history, routes, location, checkedImage } = this.props;

    const verificationError = checkedImage ? checkedImage.type !== 'cat' : '';

    const currentIndexPath = this.findCurrentPathIndex();
    const consumptionIndex = currentIndexPath - index;
    const verification = routes[currentIndexPath].verification;

    localStorage.setItem('nextPage', path);

    dispatch(submit(verification));

    if (location.pathname === '/verification') {
      dispatch(changeLinkStatusBack(currentIndexPath, index, verificationError));
      history.push(path);
    }

    this.setState({ consumptionIndex });
  };

  render() {
    const { classes, path, title, status, dispatch, index, location } = this.props;

    return (
      <Button
        className={location.pathname === path ? classes.activeLink : status === 'able' ? classes.ableLink : classes.defaultLink}
        classes={{ disabled: classes.disabled }}
        onClick={() => {
          if (location.pathname !== path) {
            this.onClick(index, path, dispatch, location);
          }
        }}
        disabled={status === 'disable'}
      >
        {title}
      </Button>
    );
  }
}

export default withRouter(connect()(withStyles(styles)(CustomLink)));
