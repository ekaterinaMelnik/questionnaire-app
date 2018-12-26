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

  errorText: {
    position: 'absolute',
    margin: '15px 0px 0px 10px',
    width: '100%',
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif',
    fontWeight: '600',
    color: '#ff0000'
  }
});

const CustomInput = ({ input, type, placeholder, meta: { touched, error, warning }, classes }) => (
  <div className={classes.root}>
    <Input
      {...input}
      placeholder={placeholder}
      disableUnderline={true}
      classes={ error ? { root: classes.customInputRoot, input: classes.customInputError } : { root: classes.customInputRoot, input: classes.customInput }}
    />
    {touched &&
    ((error && <span className={classes.errorText}>{error}</span>) ||
      (warning && <span>{warning}</span>))}
  </div>
);

const CustomInputStyles = withStyles(styles)(CustomInput);

export { CustomInputStyles as CustomInput };
