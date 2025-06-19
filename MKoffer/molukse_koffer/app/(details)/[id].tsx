import { useLocalSearchParams } from "expo-router";
import { YStack, Text } from "tamagui";

export default function Details() {
  const { id } = useLocalSearchParams();

  return (
    <YStack flex={1} p={"$4"}>
      <Text>Details for post {id}</Text>
    </YStack>
  );
}