import {
    Text,
    View,
    StyleSheet,
    Modal,
    Pressable,
    Alert, ScrollView,
} from 'react-native';
import {useState} from "react";

const SideViewer = ({ favorites }) => {

    const [modalVisible, setModalVisible] = useState(false);

    // console.log(favorites) // data from the favorites array is being imported from the parent component above.

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

                <View style={{marginTop: 100, height: 752, alignSelf:'center', justifyContent:'center', backgroundColor:'background-color:rgba(0, 0, 0, 0.75);', borderBottomWidth: 1, borderTopWidth: 1}}>

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Sluiten</Text>
                    </Pressable>


                    <ScrollView>
                        {favorites?.map(data => (
                        <View key={data.id} style={styles.modalView}>
                            <View style={{display: 'flex' ,justifyContent: 'center', alignItems: 'center', width: 275}}>
                            <Text style={{marginBottom: 10, fontWeight:'bold', fontSize: 25, marginTop: 10}}>{data.name}</Text>
                            <Text style={{marginTop: 75, fontSize: 20}}>{data.description}</Text>
                            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', height: 50, width: 100, borderRadius: 10, marginTop: 100}}>
                                <Text style={{fontWeight:'bold', fontSize: 20}}>{data.rating} / 5</Text>
                            </View>
                            </View>
                        </View>
                    ))}

                    </ScrollView>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => emptyList(true)}>
                <Text style={styles.textStyle}>Favorites</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    modalView: {
        marginTop: 1,
        borderWidth: 1,
        margin: 20,
        height: 400,
        width: 400,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
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