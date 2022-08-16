import EditText from "./EditComponents/EditText";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setError } from "../redux/modules/auth/reducer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { State } from "./../redux/reducers";
import Typography from "@mui/material/Typography";
function Authorization() {
  const loading = useSelector((state: State) => state.auth.loading);
  const error = useSelector((state: State) => state.auth.error);
  const dispatch = useDispatch();
  let auth = () => {
    dispatch(login({ email, password }));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidData, setisValidData] = useState(false);
  useEffect(() => {
    setisValidData(email.length > 3 && password.length > 7);
  }, [email, password]);
  const changeEmail = (value: string) => {
    setEmail(value);
    dispatch(setError(null));
  };
  const changePassword = (value: string) => {
    setPassword(value);
    dispatch(setError(null));
  };
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
        disabled={!isValidData || loading}
        onClick={auth}
        variant="contained"
      >
        Sign in
      </Button>
    </Box>
  );
}

export default Authorization;
