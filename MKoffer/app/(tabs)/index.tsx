import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';
import ContentCard from "@/components/cards/ContentCard";
import {useEffect, useState} from "react";
import dummyData from './dummy.json'; // <-- Import from assets

type DummyPost = {
    title: string;
    description: string;
    content: string;
};
export default function HomeScreen() {
    const [data, setData] = useState<DummyPost[]>([]);

    useEffect(()=>{
        setData(dummyData)
    })
    // console.log(dummyData)

  return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: "center", width: '100%'}}>
          <View id="Header" style={{width: '100%', justifyContent:'center', alignItems:'center', marginTop: 50, borderBottomWidth: 1, marginBottom: 20}}>
              <Text style={{fontSize: 40, fontWeight:'bold'}}>Welcome</Text>
          </View>

          <FlatList data={data} renderItem={({item}) => (
              <View id="Content Card Wrapper" style={{marginBottom: 5, alignItems: 'center' }}>
                  <ContentCard Content={item?.content} Title={item?.title} Description={item?.description}/>
              </View>
          )}/>
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
