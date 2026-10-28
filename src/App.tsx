import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./componentz/NavBar";
import GameGrid from "./componentz/GameGrid";
import GenreList from "./componentz/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";

function App() {
const [selectedGenre, setSelectedGenre] =  useState<Genre | null >(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gap={4}
      p={4}

      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >


      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside"  paddingX={ 5}>
        <GenreList selectedGenre ={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
      </GridItem>

      <GridItem area="main"  minH="80vh">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
