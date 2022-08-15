import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { RightBar } from "./components/RightBar";
import { Box, Container, Stack } from "@mui/material";
import { Add } from "./components/Add";


function App() {
  return (
    <Box>
    <Navbar/>
      <Stack direction = "row" spacing={2} justifyContent="space-between">        
        <Sidebar/>
        <Feed/>
        <RightBar/>
      </Stack>
      <Add/>
    </Box>
  );
}

export default App;
