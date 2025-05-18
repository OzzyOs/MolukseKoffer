import { Card, Paragraph } from "tamagui";

interface Post {
  title: string;
  description: string;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card
      height="$20"
      width="$20"
      marginTop="$5"
      padding="$3"
      borderWidth="$0.25"
    >
      <Paragraph fontSize="$5">{post.title}</Paragraph>
      <Paragraph fontSize="$1">{post.description}</Paragraph>
    </Card>
  );
}
