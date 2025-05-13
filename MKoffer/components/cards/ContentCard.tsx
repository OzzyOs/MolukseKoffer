import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

type ContentCardProps = {
  Title: string;
  Description: string;
  Content?: any;
  Id: number;
};

export default function ContentCard({
  Title,
  Description,
  Content,
  Id,
}: ContentCardProps) {
  const router = useRouter(); // Declare use of Router, so we can use the router methods.

  return (
    <View
      id="Card Body"
      style={{
        borderWidth: 1,
        minHeight: 300,
        maxHeight: 300,
        minWidth: 400,
        maxWidth: 400,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "lightgray",
      }}
    ></View>
  );
}
