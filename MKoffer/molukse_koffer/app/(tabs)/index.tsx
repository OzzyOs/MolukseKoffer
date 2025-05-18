import { Paragraph, XStack, YStack, ScrollView } from "tamagui";
import { useEffect, useState } from "react";
import PostCard from "../(components)/PostCard";

type Post = {
  title: string;
  description: string;
  image: string;
  content: string;
};

export default function TabOneScreen() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    async function getData() {
      const url = "http://192.168.2.16:3000/";

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
    <ScrollView height="$20">
      <YStack
        flex={1}
        items="center"
        gap="$8"
        px="$10"
        pt="$5"
        bg="$background"
      >
        <XStack flexWrap="wrap" verticalAlign="center" justify="center">
          <Paragraph marginBlock="$2">Feed</Paragraph>

          {data &&
            data.map((i) => (
              <PostCard post={{ title: i.title, description: i.description }} />
            ))}
        </XStack>
      </YStack>
    </ScrollView>
  );
}
