import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { gameResult } from "../hooks/useGame";
interface Props {
  game: gameResult;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
export default GameCard;
