import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./componentz/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gap={4}
      p={4}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" bg="gold" hideBelow="lg">
        Aside
      </GridItem>

      <GridItem area="main" bg="dodgerblue" minH="80vh">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
