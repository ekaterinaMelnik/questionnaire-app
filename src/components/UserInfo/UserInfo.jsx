import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  subTitle: {
    marginBottom: 40,
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif'
  },

  card: {
    display: 'flex',
    padding: '24px 24px 0 24px',

    [theme.breakpoints.up('md')]: {
      minWidth: 510
    },

    [theme.breakpoints.down('xs')]: {
      display: 'block',
      padding: 5,
      minWidth: '80vw'
    }
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,

    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },

  cover: {
    width: 200,
    height: 200,
    borderRadius: 2,
    marginBottom: 20,

    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: 0
    }
  },

  header: {
    fontSize: 20,
    fontFamily: '"OpenSansRegular", sans-serif'
  },

  text: {
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif'
  },

  accounts: {
    display: 'flex'
  },

  accountLink: {
    marginRight: 5,
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif',
    color: '#3f51b5'
  },

  location: {
    margin: '42px 0'
  },

  content: {
    padding: 0
  }
});

class UserInfo extends React.Component {
  state = {
    accounts: []
  };

  componentDidMount() {
    const { userAccounts } = this.props;
    this.transformAccounts(userAccounts);
  }

  transformAccounts = (userAccounts) => {
    const accountsTemplates = ['Facebook', 'Twitter', 'Vkontakte', 'Odnoklassniki'];
    let accounts = [];

    for (let i = 0; i < accountsTemplates.length; i++) {
      if (userAccounts[`checkbox_${accountsTemplates[i].toLocaleLowerCase()}`]) {
        accounts.push(
          {
            name: accountsTemplates[i],
            value: userAccounts[accountsTemplates[i].toLocaleLowerCase()]
          }
        );
      }
    }

    this.setState({ accounts });
  };

  cutValues(value) {
    if (value && value.length > 25) {
      return `${value.slice(0, 25)}..`;
    }

    return value;
  }

  render() {
    const { classes, userForm, userLocation, imageSrc } = this.props;
    const { accounts } = this.state;
    const username = this.cutValues(userForm.username);
    const email = this.cutValues(userForm.email);

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent classes={{ root: classes.content }}>
              <Typography className={classes.header}>
                {username}
              </Typography>
              <Typography color="textSecondary" className={classes.text}>
                {email}
              </Typography>
              {userLocation.country &&
              <Typography color="textSecondary" className={classNames(classes.location, classes.text)}>
                {userLocation.country.label}, {userLocation.city.label}
              </Typography>
              }
              {accounts.map((account, index) => (
                <div key={index} className={classes.accounts}>
                  <Typography component="span" color="textSecondary" className={classes.accountLink}>
                    {account.name}:
                  </Typography>
                  <Typography component="span" color="textSecondary" className={classes.text}>
                    {this.cutValues(account.value)}
                  </Typography>
                </div>
              ))}
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={imageSrc}
            title="Lovely cat"
          />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userForm: state.form.userForm.values,
  userLocation: state.form.userLocation.values,
  userAccounts: state.form.userAccounts.values,
  imageSrc: state.imagesPaths.checkedImage.src
});

const FormConnect = withRouter(withStyles(styles)(connect(mapStateToProps)(UserInfo)));

export { FormConnect as UserInfo };
