
import Checkbox from '@mui/material/Checkbox';
export interface Props {
  value: boolean,
  input: Function
    label?:string
} 
function EditCheckbox(props:Props) {
  let valueOnChange=()=>{
      props.input(!props.value);
    }
    return (
      <div>
        <label>{props.label}</label>
            <Checkbox checked={props.value}  onChange={valueOnChange} />
      </div>
    )
  }
  
  export default EditCheckbox
  