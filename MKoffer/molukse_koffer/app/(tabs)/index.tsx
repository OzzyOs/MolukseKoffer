import { Paragraph, YStack, ScrollView, XStack, View } from "tamagui";
import { useEffect, useState } from "react";
import PostCard from "../(components)/PostCard";
import { ActivityIndicator } from "react-native";
import { router } from "expo-router";

type Post = {
  id: string;
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

  return loading ? (
   <YStack flex={1} justify="center">
    <ActivityIndicator size="large" color="$green10" />
  </YStack>
  ) : (
     <ScrollView height="100%" width="100%">
      <YStack
        flex={1}
        items="center"
        gap="$8"
        pt="$5"
        width="100%"
      >
        <XStack flexWrap="wrap" verticalAlign="center" justify="flex-start">
          {data && data.length > 0 ? (
            data.map((item) => (
              <PostCard key={item.id} post={item} onPress={() => router.push({ pathname: "/(details)/[id]", params: { id: item.id } })} />            
            ))
            ) : (
              <View marginBlockStart="$20" justify="center">
                <Paragraph fontSize="$6">Er is, helaas, data beschikbaar</Paragraph>
              </View>
            )}
        </XStack>
      </YStack>
    </ScrollView>
  );
}
