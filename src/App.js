import { ToastContainer } from "react-toastify";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Box } from "@mui/material";
import { Dataprovider } from "./context/Dataprovoider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./components/detail/Detail";

function App() {
  return (
    <Dataprovider>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Box marginTop={"55px"}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<Detail />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </Dataprovider>
  );
}

export default App;
