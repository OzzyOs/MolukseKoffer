import {
    Text,
    View,
    StyleSheet,
    Modal,
    Pressable,
    Alert, ScrollView,
} from 'react-native';
import {useState} from "react";
import {Button} from "react-native-paper";

const SideViewer = ({ favorites, removeFavorites }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const emptyList = () => {                   // If the array of 'favorites' is empty, it will return an alert.
        if (favorites && favorites.length > 0 ){      // If the array has more than 0 objects, it will set the 'setModalVisible' to true.
            setModalVisible(true);
        } else {
            Alert.alert('Er zijn geen favorieten..')
        }};

    return (
        <View>
            <Modal                                  // Modal properties
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                <View style={{ flex: 1 ,marginTop: 100, height: 'auto', width: 400 , alignItems:'center', justifyContent:'center', backgroundColor:'background-color:rgba(0, 0, 0, 0.75);', borderBottomWidth: 1, borderTopWidth: 1}}>

                    <Pressable
                        style={[ styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Sluiten</Text>
                    </Pressable>

                    <ScrollView>
                        {favorites?.map(data => (
                        <View key={data.id} style={styles.card}>
                            <View style={{justifyContent: 'center', alignItems: 'center', width: 300}}>
                                <Text style={{marginVertical: 15, fontSize: 25, fontWeight: 'bold'}}>{data.name}</Text>
                            <Text style={{fontSize: 16}}>{data.description}</Text>
                            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', height: 50, width: 100, borderRadius: 10, marginTop: 25}}>
                                <Text style={{fontWeight:'bold', fontSize: 20}}>{data.rating} / 5</Text>
                                <Button onPress={() => removeFavorites(data.id)} />
                            </View>
                            </View>
                        </View>
                    ))}

                    </ScrollView>
                </View>
            </Modal>
            <Pressable
                style={[ styles.buttonOpen]}
                onPress={emptyList}>
            <Text style={styles.textStyle}>Favorites</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 350,
        marginTop: 1,
        borderWidth: 2,
        paddingHorizontal: 20,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonOpen: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'gray',
        height: 35,
        backgroundColor: 'orange',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginRight: 10,
        alignContent: 'center',
        justifyContent: 'center',
        zIndex: 99
    },
    buttonClose: {
        marginTop: 25,
        marginBottom: 25,
        borderWidth: 1,
        backgroundColor: 'orange',
        alignSelf: 'center',
        justifyContent: "center",
        borderRadius: 5,
        height: 55,
        width: 100
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});


export default SideViewer;