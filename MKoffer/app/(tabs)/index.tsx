import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import ContentCard from "@/components/cards/ContentCard";


export default function HomeScreen() {
  return (
    <View id="Body Wrapper" style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <View>
            <Text>Welcome</Text>
        </View>
        <ContentCard Content={""} Title={"Welcome"} Description={"This is my first post"}/>
        <View>
            <Text>This is the content window!</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
