import * as React from 'react';
import { loadUser } from '../../actions';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

class UserLocation extends React.Component {
  onClick = dispatch => {
    dispatch(loadUser({ username: 'test', email: 'test@' }));
  };

  render() {
    const { dispatch } = this.props;

    return (
      <div>
        <button onClick={() => {
          this.onClick(dispatch);
        }}>
          Click
        </button>
      </div>
    );
  }
}

export default withRouter(connect()(UserLocation));
