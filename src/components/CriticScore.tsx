import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 90 ? "green" : score > 75 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="16px" paddingX={3} borderRadius="4px">
      {score}
    </Badge>
  );
}

export default CriticScore;
