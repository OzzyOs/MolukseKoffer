import { ExternalLink } from "@tamagui/lucide-icons";
import { Anchor, Card, H2, Paragraph, XStack, YStack } from "tamagui";
import { ToastControl } from "app/CurrentToast";
import PostCard from "app/components/cards/PostCard";

export default function TabOneScreen() {
  return (
    <YStack flex={1} items="center" gap="$8" px="$10" pt="$5" bg="$background">
      <XStack
        items="center"
        justify="center"
        flexWrap="wrap"
        gap="$1.5"
        position="absolute"
      >
        <PostCard
          post={{ title: "First Post", content: "This is my first post" }}
        />
      </XStack>
    </YStack>
  );
}
