import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SimpleModal from "../components/SimpleModal";
import EditText from "./EditComponents/EditText";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addNewWord } from "../redux/modules/topic/reducer";
import { useState } from "react";
import { State } from "./../redux/reducers";
import { useParams } from "react-router-dom";
export type Props = {
  close: Function;
};
function EditWordModal(props: Props) {
  const dispatch = useDispatch();
  const loading = useSelector((state: State) => state.topic.loading);
  const [word, setWord] = useState("");
  const [translate, setTranslate] = useState("");
  const params = useParams();
  const changeWord = (value: string) => {
    setWord(value);
  };
  const changeTranslate = (value: string) => {
    setTranslate(value);
  };
  let saveWord = () => {
    dispatch(addNewWord({ word, translate, topicId:params.id  }));
  };
  return (
    <SimpleModal close={props.close}>
      <>
        <Typography sx={{ textAlign: "center" }} variant="h5" component="h5">
          New Word
        </Typography>
        <EditText
          sx={{
            marginTop: 2,
            width: "100%",
          }}
          input={changeWord}
          value={word}
          label="Word"
        />
        <EditText
          sx={{
            marginTop: 2,
            width: "100%",
          }}
          input={changeTranslate}
          value={translate}
          label="Translate"
        />
        <Button
          sx={{
            marginTop: 2,
            marginBottom: 2,
            width: "100%",
          }}
          size="large"
          onClick={saveWord}
          variant="contained"
          disabled={!word.length || !translate.length || loading}
        >
          Save
        </Button>
      </>
    </SimpleModal>
  );
}
export default EditWordModal;
