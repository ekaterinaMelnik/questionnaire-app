import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { checkImg } from '../../actions';
import Typography from '@material-ui/core/Typography/Typography';

const styles = theme => ({
  textFieldContainer: {
    position: 'relative',
    margin: '0 auto',
    maxWidth: 650,

    [theme.breakpoints.down('sm')]: {
      maxWidth: 320
    }
  },

  imageContainer: {
    marginRight: 10,
    marginBottom: 10,
    height: 150,
    width: 150,
    borderRadius: 2,
    overflow: 'hidden'
  },

  imageCheckedContainer: {
    border: '2px #ff9800 solid'
  },

  image: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    objectFit: 'cover'
  },

  subTitle: {
    height: 30,
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif',
    color: '#ff0000'
  }
});

class VerificationForm extends React.Component {
  state = {
    checkedImg: this.props.checkedImage
  };

  onClick = (checkedImg, dispatch) => {
    dispatch(checkImg(checkedImg));
    this.setState({ checkedImg });
  };

  render() {
    const { classes, imagesPaths, validationError, dispatch } = this.props;
    const { checkedImg } = this.state;

    return (
      <div className={classes.textFieldContainer}>
        <Grid container>
          {imagesPaths.map(image => (
            <Grid key={image.id} item xs={6} md={3} onClick={() => {
              this.onClick(image, dispatch);
            }}>
              <div className={checkedImg.id === image.id
                ? classNames(classes.imageCheckedContainer, classes.imageContainer)
                : classes.imageContainer}>
                <img src={image.src} className={classes.image}/>
              </div>
            </Grid>
          ))}
        </Grid>

        <Typography className={classes.subTitle} variant="subtitle1" gutterBottom>
          {validationError && 'Вы выбрали собачку. А надо котика.'}
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  imagesPaths: state.imagesPaths.images,
  validationError: state.imagesPaths.validationError,
  checkedImage: state.imagesPaths.checkedImage
});

const FormConnect = withRouter(withStyles(styles)(connect(mapStateToProps)(VerificationForm)));

export { FormConnect as Form };
