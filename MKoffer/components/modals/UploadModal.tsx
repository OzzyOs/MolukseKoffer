import {Pressable, Text, View} from "react-native";

type modalProps = {
    setVisible: (visible: boolean) => void;} // You need to define setVisible as a function that takes a boolean:

export default function UploadModal({setVisible}: modalProps){

    return (
        <View>
            <Pressable
                style={{height: 25,borderWidth: 1}}
                onPress={() => setVisible(false)}>
                <Text>Hide Modal</Text>
            </Pressable>
        </View>
    )
}