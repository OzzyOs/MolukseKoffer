import { Anchor, Paragraph, View, XStack } from "tamagui";

export default function CreateLocationModal() {
  return (
    <View flex={1} items="center" justify="center">
      <XStack gap="$2">
        <Paragraph text="center">Upload</Paragraph>
        <Anchor
          color="$blue10"
          href="https://www.atlas-maluku.nl"
          target="_blank"
        >
          new location!
        </Anchor>
      </XStack>
    </View>
  );
}

CreateLocationModal.options = {
  title: "Modal Title",
};
