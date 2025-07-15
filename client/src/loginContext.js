import React from 'react';

const LoginContext = React.createContext({
  user: null, 
  updateUser: (newUser) => {},
});

export default LoginContext;