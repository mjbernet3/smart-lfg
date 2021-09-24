import { Text } from "@chakra-ui/react";

function UserProfileItem({ name, value }) {
  return (
    <Text color="medEmphasisText">
      {name}:{" "}
      <Text color="highEmphasisText" as="span">
        {value}
      </Text>
    </Text>
  );
}

export default UserProfileItem;
