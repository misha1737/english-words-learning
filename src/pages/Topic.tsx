import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { getTopic, toOpenWordModal } from "../redux/modules/topic/reducer";
import { State } from "./../redux/reducers";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import EditWordModal from "./../components/EditWordModal";
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
  const [isOpenedModal, setOpenModal] = useState(false);
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
      {words ? (
        words.map((word) => (
          <Typography
            key={word.id}
            sx={{ textAlign: "center" }}
            variant="h5"
            component="h5"
          >
            {word.translate}
          </Typography>
        ))
      ) : (
        <></>
      )}
      {openWordModal ? <EditWordModal close={closeModal} /> : <></>}
    </Container>
  );
}

export default Topic;
