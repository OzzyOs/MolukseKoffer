import { Paragraph, XStack, YStack, ScrollView, Card, View } from "tamagui";
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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      const url = "http://192.168.178.67:3000/";

      try {
        setLoading(true)
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Reponse status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false)
      }
    }

    getData();
  }, []);

  return (
    <ScrollView height="100%" width="100%">
      <YStack
        flex={1}
        items="center"
        gap="$8"
        pt="$5"
        width="100%"
      >
        <XStack flexWrap="wrap" verticalAlign="center" justify="center">
          {data && data.length > 0 ? (
            data.map((i) => (
              <PostCard key={i.title} post={{ title: i.title, description: i.description }} />
            ))
            ) : (
              <View marginBlockStart="$20" justify="center">
                <Paragraph fontSize="$6">Er is geen data beschikbaar</Paragraph>
              </View>
            )}
        </XStack>
      </YStack>
    </ScrollView>
  );
}
