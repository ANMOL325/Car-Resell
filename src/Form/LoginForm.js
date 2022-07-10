import React, { useEffect, useState } from 'react'
import "./LoginForm.css"
import Header from './Header'
import { io } from "socket.io-client"
import { useNavigate } from 'react-router-dom'

const LoginForm = (props) => {
  const navigate = useNavigate()
  const [socket, setsocket] = useState();

  useEffect(() => {
    const socket = io('http://localhost:4000');
    setsocket(socket);
   
  }, [])



  const [Name, setName] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Password, setPassword] = useState("");
  const [LoginDetails, setLoginDetails] = useState({});
  const [ErrorMessage, setErrorMessage] = useState();



  const NameChange = (t) => {
    setName(t.target.value);
    setLoginDetails({
      Name: t.target.value,
      PhoneNo: PhoneNo,
      Password: Password
    })

  }

  const PhoneNoChange = (y) => {
    setPhoneNo(y.target.value);
    setLoginDetails({
      Name: Name,
      PhoneNo: y.target.value,
      Password: Password
    })

  }

  const PasswordChange = (u) => {
    setPassword(u.target.value);
    setLoginDetails({
      Name: Name,
      PhoneNo: PhoneNo,
      Password: u.target.value
    })

  }

  
  const Login = () => {

    if(Name.length < 3 || Name.length == 3){
      setErrorMessage("Name must have 4 character");
    }

  else if(PhoneNo.length != 10){
      setErrorMessage("PhoneNo. must be 10 digits")
      console.log(typeof(PhoneNo));
    }
  else if(Password.length < 10 || Password.length == 10){
      setErrorMessage("Password greater than 10 character")
    }
  else if(Name.length > 3 && PhoneNo.length == 10 && Password.length > 10){
       console.clear();
       console.log("..........LoginData.........")
       console.log(LoginDetails);
       setErrorMessage("");
       socket.emit("LoginDetails",LoginDetails)
       socket.on("StatusMessage", (StatusMessage) => {
        console.log(StatusMessage.LoginStatus);
        console.log(props.UniqueID)
        setErrorMessage(StatusMessage.LoginStatus);
        if(StatusMessage.LoginStatus == "Login Sucessfull"){
            setTimeout(() => {
              navigate(`/${props.UniqueID}`)
            }, 2000);
        }

       })

      //  ....................set full screen mode.............................
      }

      

  }


  return (
    <div className='Form'>
        <Header/>
        <center className='CenterLogin'>
               <div className='LoginForm'>
                  <strong>{ErrorMessage}</strong><br></br>
                  <input onChange={NameChange} value={Name} placeholder='Enter Your Name'></input>
                  <input onChange={PhoneNoChange} value={PhoneNo} placeholder='Enter Your PhoneNo.'></input>
                  <input onChange={PasswordChange} value={Password} placeholder='Enter Your Password'></input><br></br>

                  <button onClick={Login} className='LoginButton'>Login</button>
               </div>
    
        </center>

    </div>
  )
}

export default LoginForm