import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";

function EditWordModal() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <Fab onClick={back} size="small" color="primary" aria-label="add">
      <ArrowBackIcon />
    </Fab>
  );
}
export default EditWordModal;
