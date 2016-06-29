import delay from './delay';

const successUser ={
  username: 'dinusha',
  password: '123'
}

class LoginSvcApi {

  static login(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (!user.username.length >0 || !user.password.length>0) {
          reject(`Username and password must be there.`);
       }

       if(user.username != successUser.username ){
           reject(`${user.username} is a Invalid User name.`);
       }

       if(user.password != successUser.password){
           reject(`Invalid password.`);
       }

        resolve(user);
      }, delay);
    });
  }
}

export default LoginSvcApi;
