import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Sidebar from "./components/Sidebar";
import MessageHistory from "./components/MessageHistory";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Box display="flex">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
