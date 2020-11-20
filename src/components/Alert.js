import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SwalError = withReactContent(Swal);

export const AlertError = ({ title, message }) => {
  SwalError.fire({
    title: title,
    text: message,
    icon: "error",
  });
};
const SwalSuccess = withReactContent(Swal);
export const AlertSucces = ({ title, message }) => {
  SwalSuccess.fire({
    title: title,
    text: message,
    icon: "success",
    button: "Acept",
  });
};
