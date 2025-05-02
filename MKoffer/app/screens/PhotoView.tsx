import {View, Text} from "react-native";
import { useLocalSearchParams } from "expo-router";

type photoProps = {
    Id: number
}
export default function PhotoView(){
    const {Id} = useLocalSearchParams();

    console.log(Id)

    return (
    <View style={{backgroundColor: 'red'}}>
        <View>
            <Text> {Id} </Text>
        </View>
    </View>
    )
}