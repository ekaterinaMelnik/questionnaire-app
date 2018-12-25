// CustomFormContainer.jsx
import {
  reduxForm,
  change  // The action creator
} from 'redux-form';

// The presentational component
import CustomForm from './CustomForm.jsx';

const form = 'your-form-name';
const fields = ['field-foo', 'field-bar', 'field-baz'];

const CustomFormContainer = reduxForm({ form, fields },
  /* mapStateToProps = */ undefined,
  /* mapDispatchToProps = */ function(dispatch) {
    return {
      // This will be passed as a property to the presentational component
      changeFieldValue: function(field, value) {
        dispatch(change(form, field, value));
      }
    };
  })(CustomForm);

export default CustomFormContainer;
