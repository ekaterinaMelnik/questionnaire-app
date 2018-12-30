import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'inline-flex',
    width: 130,
    height: 20,
    margin: '7px 15px 5px 0'
  },

  labelContainer: {
    marginTop: -1,
    marginLeft: 5
  },

  label: {
    fontSize: 15,
    fontFamily: '"OpenSansRegular", sans-serif'
  }
};

const CustomCheckbox = ({ input, label, classes, onChangeValue }) => (
  <div className={classes.root}>
    <input
      {...input}
      id={input.name}
      type="checkbox"
      onChange={(value) => {
        input.onChange(value);
        onChangeValue(value.target.value);
      }}
    />
    <div className={classes.labelContainer}>
      <label htmlFor={input.name} className={classes.label}>
        {label}
      </label>
    </div>
  </div>
);

const CustomCheckboxStyles = withStyles(styles)(CustomCheckbox);

export { CustomCheckboxStyles as CustomCheckbox };
