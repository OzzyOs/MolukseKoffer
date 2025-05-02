import {View, Text} from "react-native";
import { useLocalSearchParams } from "expo-router";

type photoProps = {
    Id: number
    Content: string
    Title: string
}
export default function PhotoView(){
    const {Id, Content, Title} = useLocalSearchParams();

    console.log(Id)

    return (
    <View style={{backgroundColor: '#FFF6E7', flex: 1, alignItems: 'center'}}>
        <View id={"Header"}>
            <Text style={{fontSize: 28, fontWeight: "bold"}}>
                {Title}
            </Text>
        </View>
        <View id={"Body"} style={{marginTop: 10, borderWidth: 1, height: 350, width: 350, backgroundColor: 'lightgray'}}>
            <Text>{Content}</Text>
        </View>
    </View>
    )
}