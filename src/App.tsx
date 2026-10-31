import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./componentz/NavBar";
import GameGrid from "./componentz/GameGrid";
import GenreList from "./componentz/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import PlatformSelector from "./componentz/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./componentz/SortSelector";



export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
}







function App() {

 const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

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
        <GenreList selectedGenre ={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})}/>
      </GridItem>

      <GridItem area="main"  minH="80vh">
        <HStack gap={5} paddingLeft = {3} marginBottom={5}>
          <PlatformSelector selectedPlatform ={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery ({...gameQuery, platform})} />
            <SortSelector/>
        </HStack>
        <GameGrid gameQuery ={gameQuery}  />
      </GridItem>
    </Grid>
  );
}

export default App;