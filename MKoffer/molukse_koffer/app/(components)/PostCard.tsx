import { Pressable } from "react-native";
import { Card, Paragraph } from "tamagui";

type Post = {
  id: string;
  title: string;
  description: string;
  image?: string;
  content?: string;
};

type PostCardProps = {
  post: Post;
  onPress?: () => void;
};

export default function PostCard({ post, onPress }: PostCardProps) {
  return (
    <Pressable onPress={onPress}>
      <Card
        height="$20"
        width="$15"
        marginTop="$1"
        padding="$3"
        borderWidth="$0.25"
        borderRadius="$0"
      >
        <Paragraph fontSize="$5">{post.title}</Paragraph>
        <Paragraph fontSize="$1">{post.description}</Paragraph>
      </Card>
    </Pressable>
  );
}