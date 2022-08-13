import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SimpleModal from "../components/SimpleModal";
import EditText from "./EditComponents/EditText";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addNewTopic } from "../redux/modules/catalog/reducer";
import { useState } from "react";
import { State } from "./../redux/reducers";

export type Props = {
  close: Function;
};
function EditWordModal(props: Props) {
  const dispatch = useDispatch();
  const loading = useSelector((state: State) => state.topic.loading);
  const [name, setName] = useState("");
  const changeName = (value: string) => {
    setName(value);
  };
  let saveTopic = () => {
    dispatch(addNewTopic({ name }));
  };
  return (
    <SimpleModal close={props.close}>
      <>
        <Typography sx={{ textAlign: "center" }} variant="h5" component="h5">
          New topic
        </Typography>
        <EditText
          sx={{
            marginTop: 2,
            width: "100%",
          }}
          input={changeName}
          value={name}
          label="Name"
        />
        <Button
          sx={{
            marginTop: 2,
            marginBottom: 2,
            width: "100%",
          }}
          size="large"
          onClick={saveTopic}
          variant="contained"
          disabled={!name.length}
        >
          Save
        </Button>
      </>
    </SimpleModal>
  );
}
export default EditWordModal;
