import { Anchor, Paragraph, View, XStack } from "tamagui";

export default function CreatePersonModal() {
  return (
    <View flex={1} items="center" justify="center">
      <XStack gap="$2">
        <Paragraph text="center">Made by</Paragraph>
        <Anchor
          color="$blue10"
          href="https://twitter.com/natebirdman"
          target="_blank"
        >
          Hello!
        </Anchor>

        <Anchor
          color="$accent10"
          href="https://github.com/tamagui/tamagui"
          target="_blank"
          rel="noreferrer"
        >
          give it a ⭐️
        </Anchor>
      </XStack>
    </View>
  );
}

CreatePersonModal.options = {
  title: "Modal Title",
};
