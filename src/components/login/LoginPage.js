import React,  {PropTypes} from 'react';
import {Link} from 'react-router';
import LoginForm from './LoginForm';
import * as loginActions from '../../actions/loginActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

class LoginPage extends React.Component{
  constructor(props,context){
    super(props,context);

    this.state = {
      user: Object.assign({}, this.props.user),
      errors:{},
      saving: false
    };
    this.login = this.login.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
  }


  updateUserState(event){
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user:user});
  }


  login(event){
    event.preventDefault();
    console.log('login');
    console.log(this.state.user);
    this.props.actions.login(this.state.user).then( () => {
      toastr.success('login success');
      this.context.router.push('/home');
    }).catch(error =>{
      toastr.error(error);
    });
  }
  render(){
    return(
      <div className="form-signin">
        <h3>Login </h3>
        <div>
          <LoginForm
            onLogin={this.login}
            onChange={this.updateUserState}
            user={this.state.user}
            />
        </div>
      </div>
    );
  }
}

LoginPage.contextTypes = {
  router: PropTypes.object
};

LoginPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
  let user = {username:'', password:''};
  return {
    user: user
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(loginActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
