import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { getCatalog, toOpenTopicModal } from "../redux/modules/catalog/reducer";
import { State } from "./../redux/reducers";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import EditTopicModal from "./../components/EditTopicModal";
function Catalog() {
  const topics = useSelector((state: State) => state.catalog.blocks);
  useEffect(() => {
    dispatch(getCatalog());
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openTopic = (id: string) => {
    navigate(`/catalog/${id}`);
  };
  const openTopicModal = useSelector(
    (state: State) => state.catalog.openTopicModal
  );
  const openModal = () => {
    dispatch(toOpenTopicModal(true));
  };
  const closeModal = () => {
    dispatch(toOpenTopicModal(false));
  };
  return (
    <Container maxWidth="lg">
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
        Add topic
      </Button>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {topics ? (
          topics.map((topic) => (
            <Paper
              key={topic.id}
              sx={{ padding: 1, margin: 1, height: 200, width: 200 }}
            >
              <Typography
                sx={{ textAlign: "center" }}
                variant="h5"
                component="h5"
              >
                {topic.name}
              </Typography>
              <Button
                sx={{
                  marginTop: 2,
                  marginBottom: 2,
                  display: "flex",
                  width: "100%",
                }}
                size="large"
                onClick={() => openTopic(topic.id)}
                variant="contained"
              >
                open
              </Button>
            </Paper>
          ))
        ) : (
          <></>
        )}
      </Box>
      {openTopicModal ? <EditTopicModal close={closeModal} /> : <></>}
    </Container>
  );
}

export default Catalog;
