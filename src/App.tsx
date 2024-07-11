import { useState } from "react";

import { CheckBox } from "@material-ui/icons";
import "./App.css";
import { Box, Container, Typography } from "@material-ui/core";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Container>
        <Box>
          <Typography variant="h2">React TypeScript Template</Typography>
          <Typography variant="body1" color="secondary">
            Edit <code>src/App.tsx</code> and save to reload.
          </Typography>
          <CheckBox
            color={checked ? "primary" : "disabled"}
            style={{ transition: "color 0.5s ease-in-out" }}
            onClick={() => setChecked(!checked)}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
