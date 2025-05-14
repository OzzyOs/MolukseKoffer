import { Card, Paragraph } from "tamagui";

interface Post {
  title: string;
  content: string;
}
export default function PostCard({ post }: { post: Post }) {
  return (
    <Card
      height="$13"
      width="$13"
      padding="$2"
      borderBlockEndColor={"$borderColor"}
    >
      <Paragraph fontSize="$5">{post.title}</Paragraph>
      <Paragraph fontSize="$1">{post.content}</Paragraph>
    </Card>
  );
}
