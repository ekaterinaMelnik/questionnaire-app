import * as React from 'react';
import Input from '@material-ui/core/Input/Input';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    marginBottom: 16
  },

  customInputRoot: {
    width: '100%',
    borderRadius: 2
  },

  customInput: {
    padding: '10px 18px',
    maxWidth: 310,
    height: 30,
    borderRadius: 2,
    backgroundColor: theme.palette.common.white,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif'
  },

  customInputError: {
    padding: '10px 18px',
    maxWidth: 310,
    height: 30,
    border: '2px solid #ff0000',
    borderRadius: 2,
    backgroundColor: theme.palette.common.white,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif'
  },

  customSmallInput: {
    padding: '10px 18px',
    width: '100%',
    height: 15,
    borderRadius: 2,
    backgroundColor: theme.palette.common.white,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif',

    [theme.breakpoints.up('md')]: {
      width: 241
    }
  },

  customSmallInputError: {
    padding: '10px 18px',
    width: '100%',
    height: 15,
    border: '2px solid #ff0000',
    borderRadius: 2,
    backgroundColor: theme.palette.common.white,
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif',

    [theme.breakpoints.up('md')]: {
      width: 241
    }
  },

  errorContainer: {
    position: 'relative'
  },

  errorText: {
    margin: '15px 0px 0px 10px',
    width: '100%',
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600',
    color: '#ff0000',

    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: 325,
      bottom: 17
    }
  },

  errorSmallText: {
    margin: '15px 0px 0px 10px',
    width: '100%',
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600',
    color: '#ff0000',

    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: 285,
      bottom: 13
    }
  }
});

const CustomInput = ({ input, type, placeholder, meta: { touched, error, warning }, classes, smallInput }) => {
  const defaultClassName = smallInput ? {
    root: classes.customInputRoot,
    input: classes.customSmallInput
  } : { root: classes.customInputRoot, input: classes.customInput };
  const errorClassName = smallInput ? {
    root: classes.customInputRoot,
    input: classes.customSmallInputError
  } : { root: classes.customInputRoot, input: classes.customInputError };
  const errorTextClassName = smallInput ? classes.errorSmallText : classes.errorText;

  return (
    <div className={classes.root}>
      <Input
        {...input}
        placeholder={placeholder}
        disableUnderline={true}
        classes={error ? errorClassName : defaultClassName}
      />
      <div className={classes.errorContainer}>
        {touched &&
        ((error && <span className={errorTextClassName}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

const CustomInputStyles = withStyles(styles)(CustomInput);

export { CustomInputStyles as CustomInput };
