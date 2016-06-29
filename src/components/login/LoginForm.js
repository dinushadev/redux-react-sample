import React from 'react';
import TextInput from '../common/TextInput';

const LoginForm = ({user,  onLogin, onChange}) =>{
  return (
    <form>
      <TextInput
        name="username"
        label="User Name"
        type="text"
        className="form-control"
        value={user.username}
        onChange={onChange} />


          <TextInput
            name="password"
            label="Password"
            type="password"
            className="form-control"
            value={user.password}
            onChange={onChange} />

            <input
              type="button"
              className="btn btn-primary btn-block"
              value="Login"
              onClick={onLogin} />

    </form>
  );
};

LoginForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onLogin:React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
    type:React.PropTypes.string
};

export default LoginForm;
