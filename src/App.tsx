import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function app() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'leftside main'`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"leftside"} bg={"green"}>
          leftside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"blue"}>
        main
      </GridItem>
    </Grid>
  );
}
export default app;
