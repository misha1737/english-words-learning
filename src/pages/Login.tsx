import { useState } from "react"
import Autorization from "../components/Autorization"
import Registration from "../components/Registration"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from 'react';
function Login() {
  const [selectedTab, setSelectedTab] = useState("authorization");
  const handleChange=(event: React.MouseEvent<HTMLElement>,
    newAlignment: string,)=>{
    setSelectedTab(newAlignment)
  }
  return (
    <Container maxWidth="sm">
    <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Paper>
    <ToggleButtonGroup
      color="primary"
      value={selectedTab}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="authorization">Authorization</ToggleButton>
      <ToggleButton value="registration">Registration</ToggleButton>
    </ToggleButtonGroup>
    
    {selectedTab=="authorization" ? <Autorization></Autorization>:<Registration></Registration>}
    </Paper>
    </Box>
    </Container>
  )

}

export default Login
