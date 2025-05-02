import {StyleSheet, View, Text, FlatList, Modal, Button, Pressable} from 'react-native';
import ContentCard from "@/components/cards/ContentCard";
import {useEffect, useState} from "react";
import dummyData from './dummy.json';
import UploadModal from "@/components/modals/UploadModal"; // <-- Import from assets

type DummyPost = {
    title: string;
    description: string;
    content: string;
    id: number;
};
export default function HomeScreen() {
    const [data, setData] = useState<DummyPost[]>([]);
    const [visible, setVisible] = useState(false);
    useEffect(()=>{
        setData(dummyData)
    })
    console.log(dummyData)

  return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: "center", width: '100%', backgroundColor: '#04A23B'}}>

          <View id="Header" style={{width: '100%', justifyContent:'center', alignItems:'center', marginTop: 50, borderBottomWidth: 1,}}>
              <Text style={{fontSize: 40, fontWeight:'bold'}}>Welcome</Text>
          </View>

          <FlatList data={data} renderItem={({item}) => (
              <View style={{backgroundColor: '#FFF6E7'}}>
                  <View id="Content Card Wrapper" style={{marginVertical: 20, alignItems: 'center'}}>
                      <ContentCard Content={item?.content} Title={item?.title} Description={item?.description} Id={item?.id} />
                  </View>
              </View>
          )}/>

          <Pressable onPress={()=> setVisible(true)} style={{height: 50, justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontWeight:'bold', fontSize: 20}}>Upload</Text>
          </Pressable>
              <Modal visible={visible} animationType={"slide"} >
                <UploadModal setVisible={setVisible} />
              </Modal>
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
