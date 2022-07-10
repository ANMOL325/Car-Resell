import React, { useEffect, useState } from 'react'
import Header from './Header';
import "./SignForm.css";
import { io } from "socket.io-client"
import { useNavigate } from 'react-router-dom';

const SignForm = () => {
  
  const navigate = useNavigate();  
  const [socket, setsocket] = useState();
  useEffect(() => {
    const socket = io('http://localhost:4000');
    setsocket(socket);
   
  }, [])




    const [Name, setName] = useState("");
    const [PhoneNo, setPhoneNo] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [SignUpData, setSignUpData] = useState({});
    const [ErrorMessage, setErrorMessage] = useState("");




    const NameChange = (q) => {
          console.log(q.target.value)
          setName(q.target.value);
          setSignUpData({
            Name: q.target.value,
            PhoneNo: PhoneNo,
            Password: Password,
            ConfirmPassword: ConfirmPassword
          })

    }

    const PhoneNoChange = (w) => {
          setPhoneNo(w.target.value);
          setSignUpData({
            Name: Name,
            PhoneNo: w.target.value,
            Password: Password,
            ConfirmPassword: ConfirmPassword
          })
    }

    const PasswordChange = (e) => {
          setPassword(e.target.value);
          setSignUpData({
            Name: Name,
            PhoneNo: PhoneNo,
            Password: e.target.value,
            ConfirmPassword: ConfirmPassword
          })
    }

    const ConfirmPasswordChange = (r) => {
          setConfirmPassword(r.target.value);
          setSignUpData({
            Name: Name,
            PhoneNo: PhoneNo,
            Password: Password,
            ConfirmPassword: r.target.value
          })

    }

    const SignUp = () => {
          
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
        else if(Password != ConfirmPassword){
            setErrorMessage("Password and ConfirmPassword are not same")
        }
        else if(Name.length > 3 && PhoneNo.length == 10 && Password.length > 10 && Password == ConfirmPassword){

             console.clear();
             console.log("..........SignUpData.........")
             console.log(SignUpData);
             setErrorMessage("");
             socket.emit("SignupDetails", SignUpData);
             socket.on("StatusMessage", (StatusMessage) => {
                console.log(StatusMessage.SignUpStatus);
                setErrorMessage(StatusMessage.SignUpStatus);

                if(StatusMessage.SignUpStatus == "SignUp Sucessfull"){
                      setTimeout(() => {
                        navigate("/Login")
                      }, 1000);
                }
             })

        }
        
    }



  return (
    <div className='Form'>
        <Header/>
       <center className='CenterLogin'>
              <div className='LoginForm'>
                <strong>{ErrorMessage}</strong>
                 <input onChange={NameChange} value={Name} placeholder='Enter Your Name'></input>
                 <input onChange={PhoneNoChange} value={PhoneNo} placeholder='Enter Your PhoneNo.'></input>
                 <input onChange={PasswordChange} value={Password} placeholder='Enter Your Password'></input>
                 <input onChange={ConfirmPasswordChange} value={ConfirmPassword} placeholder='Enter Your ConfirmPassword.'></input><br></br>

                 <button onClick={SignUp} className='SignUpButton'>SignUp</button>
              </div>
   
       </center>



   </div>
  )
}

export default SignForm