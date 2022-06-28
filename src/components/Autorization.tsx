import EditText from "./EditComponents/EditText"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import {  login } from '../redux/modules/auth/reducer'
import Button from '@mui/material/Button';
function Authorization() {
    const dispatch=useDispatch();
    let auth= ()=>{
        dispatch(login({email, password}))
      }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div >
      <p>authorization</p>
      <EditText input={setEmail} value={email} label="Login" />
      <EditText input={setPassword} value={password} password={true} label="password" />
      <Button disabled={!email.length} onClick={auth} variant="contained">Login</Button>
    </div>
  )
}

export default Authorization
