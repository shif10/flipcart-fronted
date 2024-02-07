import { ToastContainer } from "react-toastify";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Box } from "@mui/material";
import { Dataprovider } from "./context/Dataprovoider";

function App() {
  return (
    <Dataprovider>
      <ToastContainer />
      <Header />
      <Box marginTop={"55px"}>
        <Home />
      </Box>
    </Dataprovider>
  );
}

export default App;
