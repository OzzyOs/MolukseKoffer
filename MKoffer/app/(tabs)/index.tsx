import {StyleSheet, View, Text, FlatList, Modal, Button, Pressable} from 'react-native';
import ContentCard from "@/components/cards/ContentCard";
import {useEffect, useState} from "react";
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

    useEffect(() => {
        async function getData() {
            const url = "http://192.168.2.16:3000";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
                console.log(data)
            } catch (error) {
                // @ts-ignore
                console.error(error.message);
            }
        }
        getData()

    }, []);

  return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: "center", width: '100%', backgroundColor: ''}}>

          <FlatList data={data} renderItem={({item}) => (
              <View style={{backgroundColor: '#FFF6E7'}}>
                  <View id="Content Card Wrapper" style={{marginVertical: 10, alignItems: 'center'}}>
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

});
