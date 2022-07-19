import EditText from "./EditComponents/EditText";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setError } from "../redux/modules/auth/reducer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { State } from "./../redux/reducers";
import Typography from "@mui/material/Typography";
import { browserHistory } from "./../redux/history";
import { Link, useNavigate } from "react-router-dom";
function Authorization() {
  let navigate = useNavigate();
  const loading = useSelector((state: State) => state.auth.loading);
  const error = useSelector((state: State) => state.auth.error);
  const dispatch = useDispatch();
  let auth = () => {
    dispatch(login({ email, password }));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeEmail = (value: string) => {
    setEmail(value);
    dispatch(setError(null));
  };
  const changePassword = (value: string) => {
    setPassword(value);
    dispatch(setError(null));
  };
  const test = () => {
    console.log("click");
    //browserHistory.push("/catalog");
    setEmail("click");
    //  navigate("../catalog", { replace: true });
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
      <Button onClick={test}>test</Button>
      <EditText input={changeEmail} value={email} label="Login" />
      <Link to="/catalog">Invoices</Link>
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
        sx={{
          marginTop: 2,
          marginBottom: 2,
          display: "flex",
        }}
        size="large"
        disabled={(!email.length && !password.length) || loading}
        onClick={auth}
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
}

export default Authorization;
