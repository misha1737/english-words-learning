import { useState } from "react"
import Autorization from "../components/Autorization"
import Registration from "../components/Registration"
function Login() {
  const [selectedTab, setSelectedTab] = useState("authorization");
  return (
    <div>
    <div >
      <div onClick={()=>setSelectedTab("authorization")}>Authorization</div>
      <div onClick={()=>setSelectedTab("registration")} >Registration</div>
    </div>
    {selectedTab=="authorization" ? <Autorization></Autorization>:<Registration></Registration>}
    </div>
  )
}

export default Login
