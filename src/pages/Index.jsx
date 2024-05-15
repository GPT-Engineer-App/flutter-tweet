import { Container, VStack, HStack, Box, Text, Avatar, Input, Button, IconButton, Divider } from "@chakra-ui/react";
import { FaTwitter, FaRegComment, FaRetweet, FaHeart, FaShareSquare } from "react-icons/fa";

const tweets = [
  {
    id: 1,
    username: "john_doe",
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE1ODE0ODg4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    content: "This is my first tweet!",
    timestamp: "2h",
  },
  {
    id: 2,
    username: "jane_smith",
    name: "Jane Smith",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTU4MTQ4ODh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    content: "Hello Twitter! #myfirstTweet",
    timestamp: "3h",
  },
];

const Tweet = ({ tweet }) => (
  <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
    <HStack align="start">
      <Avatar src={tweet.avatar} />
      <VStack align="start" spacing={1} w="100%">
        <HStack w="100%" justify="space-between">
          <HStack>
            <Text fontWeight="bold">{tweet.name}</Text>
            <Text color="gray.500">@{tweet.username}</Text>
            <Text color="gray.500">· {tweet.timestamp}</Text>
          </HStack>
        </HStack>
        <Text>{tweet.content}</Text>
        <HStack spacing={4} pt={2}>
          <IconButton aria-label="Comment" icon={<FaRegComment />} variant="ghost" />
          <IconButton aria-label="Retweet" icon={<FaRetweet />} variant="ghost" />
          <IconButton aria-label="Like" icon={<FaHeart />} variant="ghost" />
          <IconButton aria-label="Share" icon={<FaShareSquare />} variant="ghost" />
        </HStack>
      </VStack>
    </HStack>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.md" py={4}>
      <VStack spacing={4}>
        <HStack w="100%" justify="space-between" py={4}>
          <FaTwitter color="#1DA1F2" size="2em" />
          <Text fontSize="2xl" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack w="100%" spacing={4} py={4}>
          <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNTczMDg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Input placeholder="What's happening?" variant="filled" />
          <Button colorScheme="twitter">Tweet</Button>
        </HStack>
        <Divider />
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
