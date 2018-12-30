import * as React from 'react';
import Select from 'react-select';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    marginBottom: 16
  },

  container: {
    border: '2px solid #ff0000',
    borderRadius: 2
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
  }
});

const customStyles = {
  option: (provided) => ({
    ...provided,
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif'
  }),
  control: (provided) => ({
    ...provided,
    paddingLeft: 8,
    border: 'none',
    maxWidth: 310,
    height: 50,
    borderRadius: 2,
    backgroundColor: 'white',
    boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.2)',
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif'
  }),
  singleValue: (provided) => ({
    ...provided
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#bbbbbb'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
};

const CustomSelect = ({ input: { value, onChange, onBlur }, dispatchFunc, onChangeValue, placeholder, options, meta: { touched, error, warning }, classes }) => (
  <div className={classes.root}>
    <div className={error ? classes.container : null}>
      <Select
        value={
          typeof value === 'string'
            ? options.filter(option => option.value === value)
            : value
        }
        onChange={option => {
          onChangeValue(option, dispatchFunc);
          onChange(option);
        }}
        onBlur={event => event.preventDefault()}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        isClearable={true}
        isSearchable={true}
      />
    </div>
    <div className={classes.errorContainer}>
      {touched &&
      ((error && <span className={classes.errorText}>{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const CustomSelectStyles = withStyles(styles)(CustomSelect);

export { CustomSelectStyles as CustomSelect };
