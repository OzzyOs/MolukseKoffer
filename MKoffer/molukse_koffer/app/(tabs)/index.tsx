import { ExternalLink } from "@tamagui/lucide-icons";
import { Anchor, Card, H2, Paragraph, XStack, YStack } from "tamagui";
import { useEffect, useState } from "react";
import { ToastControl } from "app/CurrentToast";
import PostCard from "app/PostCard";

export default function TabOneScreen() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const url = "https://localhost:3000";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Reponse status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  return (
    <YStack flex={1} items="center" gap="$8" px="$10" pt="$5" bg="$background">
      <XStack
        items="center"
        justify="center"
        flexWrap="wrap"
        gap="$1.5"
        position="absolute"
      >
        <Paragraph marginBlock="$2">Feed</Paragraph>
        <PostCard
          post={{ title: "First Post", content: "This is my first post" }}
        />
      </XStack>
    </YStack>
  );
}
