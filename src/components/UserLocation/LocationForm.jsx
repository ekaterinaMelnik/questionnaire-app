import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { Field, reduxForm, change } from 'redux-form';
import { CustomSelect as Select } from '../Common/CustomSelect/CustomSelect';
import { validateUserLocation } from '../../core/validate';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const styles = theme => ({
  textFieldContainer: {
    position: 'relative',
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

class LocationForm extends React.Component {
  _isMounted = false;

  state = {
    countries: {},
    cities: {},

    optionsCountries: [],
    optionsCities: [],

    activeCountries: [],
    activeCities: []
  };

  componentDidMount() {
    this._isMounted = true;

    axios.get('/data/countries.json')
      .then(response => response.data)
      .then(countries => {
        if (this._isMounted) {
          this.setState({ countries });
        }
      })
      .then(() => {
        axios.get('/data/cities.json')
          .then(response => response.data)
          .then(cities => {
            if (this._isMounted) {
              this.setState({ cities });
            }
          })
          .then(() => {
            if (this._isMounted) {
              this.createData(this.state.countries, this.state.cities);
            }
          });
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  createData = (countries, cities) => {
    const { initialValues } = this.props;

    const optionsCountries = Object.keys(countries).map((country) => {
      return {
        id: country,
        country: countries[country],
        value: `${countries[country]}${country}`,
        label: countries[country],
        cities: []
      };
    });

    const optionsCities = Object.keys(cities).map((city) => {
      return {
        id: city,
        city: cities[city].name,
        countryId: cities[city].country,
        value: `${cities[city].name}${city}`,
        label: cities[city].name
      };
    });

    for (let i = 0; i < optionsCountries.length; i++) {
      for (let j = 0; j < optionsCities.length; j++) {
        if (optionsCountries[i].id.toString() === optionsCities[j].countryId.toString()) {
          optionsCountries[i].cities.push(optionsCities[j]);
        }
      }
    }

    this.setState({
      optionsCountries,
      optionsCities,
      activeCountries: [...optionsCountries],
      activeCities: initialValues.country ? initialValues.country.cities : []
    });
  };

  onChangeCountry = (country, dispatch) => {
    dispatch(change('userLocation', 'city', ''));

    console.log('country', country);

    this.setState({
      activeCities: country ? country.cities : []
    });
  };

  onChangeCity = () => {};

  render() {
    const { classes, dispatch, initialValues } = this.props;
    const { activeCountries, activeCities } = this.state;

    return (
      <div className={classes.textFieldContainer}>
        <form>
          <Field
            name="country"
            placeholder="Страна"
            component={Select}
            onChangeValue={this.onChangeCountry}
            options={activeCountries}
            dispatchFunc={dispatch}
          />
          <Field
            name="city"
            placeholder="Город"
            component={Select}
            onChangeValue={this.onChangeCity}
            options={activeCities}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialValues: state.form.userLocation.values
});

const FormRedux = reduxForm({
  form: 'userLocation',
  destroyOnUnmount: false,
  onSubmit: validateUserLocation
})(LocationForm);

const FormConnect = withRouter(withStyles(styles)(connect(mapStateToProps, { change })(FormRedux)));

export { FormConnect as Form };
