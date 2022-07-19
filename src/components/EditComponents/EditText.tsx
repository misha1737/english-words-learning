import TextField from "@mui/material/TextField";

export interface Props {
  value: string;
  input: Function;
  label: string;
  password: boolean;
  sx?: Object;
}
function EditText(props: Props) {
  let textOnChange = (data: React.ChangeEvent<HTMLInputElement>) => {
    if (data.target) {
      let text = data.target.value;
      props.input(text);
    }
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        sx={props.sx}
        label={props.label}
        type={props.password ? "password" : ""}
        variant="outlined"
        value={props.value}
        onChange={textOnChange}
      />
    </div>
  );
}
EditText.defaultProps = {
  label: "",
  password: false,
  value: "",
};
export default EditText;
