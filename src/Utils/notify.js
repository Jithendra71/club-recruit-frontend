import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const configToast = () => {
  toast.configure({
    pauseOnHover: true,
    draggable: true,
    autoClose: 3000,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
configToast();

export const notify = (message, type) => {
  toast(message, {
    type,
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
