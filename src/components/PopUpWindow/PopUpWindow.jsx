import { Toaster } from "react-hot-toast";
const PopUpWindow = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },
        success: {
          duration: 3000,
          theme: {
            primary: "red",
            secondary: "black",
          },
        },
      }}
    />
  );
};

export default PopUpWindow;
