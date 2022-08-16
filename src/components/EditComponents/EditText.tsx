import TextField from "@mui/material/TextField";

export interface Props {
  value: string;
  input: Function;
  blur?: Function;
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
  const inputBlur = () => {
    if (props.blur) {
      props.blur();
    }
  };
  return (
    <div>
      <TextField
        sx={props.sx}
        label={props.label}
        type={props.password ? "password" : ""}
        variant="outlined"
        value={props.value}
        onChange={textOnChange}
        onBlur={inputBlur}
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
