import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState , useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../loginContext';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { user, updateUser } = useContext(LoginContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const loginUser = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        };
        fetch('http://localhost:5000/user/login',{
            method : 'POST',
            headers  : {

                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(data)
        }).then(response =>{
            if(response.ok){
                return response.json();
            }
            else{
                alert('Login Failed')
            }
        }).then(data =>{
            if(data.message === "Invalid credentails"){
                alert('Invalid credentails')
                return;
            }

            console.log('Login successful' , data)
            const userData= {
                token: data.token ,
                firstName: data.firstName
            };
            updateUser(userData); 
            localStorage.setItem('token',data.token);
            localStorage.setItem('firstName', data.firstName);
            navigate('/');
        }).catch(error=>{
            console.log(error);
            console.error('Error' , error);
            alert("An erorr occured while logging in")
        })
    }
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
    <h2 className="text-center mb-4">Login</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={loginUser} className="btn btn-primary w-100 mb-2">
        Submit
      </button>
      <div className="text-center">
        <Link to="/signup">Signup</Link>
      </div>
    </form>
  </div>
</div>
    );
}
export default Login;