import EditText from "./EditComponents/EditText";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration, setError } from "../redux/modules/auth/reducer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { State } from "./../redux/reducers";
import Typography from "@mui/material/Typography";
function Registration() {
  const loading = useSelector((state: State) => state.auth.loading);
  const error = useSelector((state: State) => state.auth.error);
  const dispatch = useDispatch();
  let reg = () => {
    dispatch(registration({ email, password }));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [isValidData, setisValidData] = useState(false);
  const changeEmail = (value: string) => {
    setEmail(value);
    dispatch(setError(null));
  };
  const changePassword = (value: string) => {
    setPassword(value);
    dispatch(setError(null));
  };
  const changeConPassword = (value: string) => {
    setConPassword(value);
    dispatch(setError(null));
  };
  const checkForSimmilarPasswords = () => {
    if (password != conPassword && conPassword.length) {
      dispatch(setError("Passwords don't match"));
    }
  };
  useEffect(() => {
    setisValidData(
      email.length > 3 && password.length > 7 && conPassword.length > 7
    );
  }, [email, password, conPassword]);
  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <EditText input={changeEmail} value={email} label="Login" />
      <EditText
        sx={{
          marginTop: 2,
        }}
        input={changePassword}
        value={password}
        password={true}
        label="password"
        blur={checkForSimmilarPasswords}
      />
      <EditText
        sx={{
          marginTop: 2,
        }}
        input={changeConPassword}
        value={conPassword}
        password={true}
        label="confirm password"
        blur={checkForSimmilarPasswords}
      />
      <Typography
        sx={{
          marginTop: 2,
        }}
        color="error"
        variant="body2"
      >
        {error}
      </Typography>

      <Button
        fullWidth
        sx={{
          marginTop: 2,
          marginBottom: 2,
          display: "flex",
        }}
        size="large"
        disabled={!!error || loading || !isValidData}
        onClick={reg}
        variant="contained"
      >
        Sign up
      </Button>
    </Box>
  );
}

export default Registration;
