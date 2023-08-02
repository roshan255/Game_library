import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenreList";

function app() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'leftside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"leftside"} paddingX={5}>
          <GenereList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default app;
