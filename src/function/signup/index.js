import request from '../axios';
// import swal from 'sweetalert2-react';

// const signupUsername = document.getElementById('signup-username').value;
// const signupEmail = document.getElementById('signup-email').value;
// const signupPassword = document.getElementById('signup-password').value;

const signUp = () => {
  const data = {
    username: document.getElementById('signup-username').value,
    email: document.getElementById('signup-email').value,
    password: document.getElementById('signup-password').value
  };

  request
    .post('/signup', data)
    .then(response => {
      console.log('success');
      // swal('Sign up successed!', response.data.message, 'success');
    })
    .catch(error => {
      console.log('failed');
      // swal('Sign up failed!', 'Error', 'error');
    });
};

export default signUp;
