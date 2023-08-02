import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

function GenereList() {
  const { data } = useGenre();

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="7px">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenereList;
