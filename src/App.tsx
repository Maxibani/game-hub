import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./componentz/NavBar";
import GameGrid from "./componentz/GameGrid";
import GenreList from "./componentz/GenreList";

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

      <GridItem area="aside"  hideBelow="lg">
        <GenreList/>
      </GridItem>

      <GridItem area="main"  minH="80vh">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
