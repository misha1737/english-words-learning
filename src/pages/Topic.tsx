import { useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { getTopic, toOpenWordModal } from "../redux/modules/topic/reducer";
import { State } from "./../redux/reducers";
import { useParams } from "react-router-dom";
import EditWordModal from "./../components/EditWordModal";
import Table from  "../components/wordsTable";
import BackButton from "./../components/BackButton";
function Topic() {
  const params = useParams();
  const dispatch = useDispatch();
  const words = useSelector((state: State) => state.topic.words);
  const openWordModal = useSelector(
    (state: State) => state.topic.openWordModal
  );
  useEffect(() => {
    dispatch(getTopic(params.id));
  }, []);
  const openModal = () => {
    dispatch(toOpenWordModal(true));
  };
  const closeModal = () => {
    dispatch(toOpenWordModal(false));
  };

  return (
    <Container maxWidth="lg">
      <BackButton />
      <Button
        sx={{
          marginTop: 2,
          marginBottom: 2,
          display: "flex",
        }}
        size="large"
        onClick={() => openModal()}
        variant="contained"
      >
        Add word
      </Button>
      {words ? <Table rows={words}/> : <></>}
      {openWordModal ? <EditWordModal close={closeModal} /> : <></>}
    </Container>
  );
}

export default Topic;
