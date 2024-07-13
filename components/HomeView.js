import {ScrollView, Text, View, StyleSheet, Pressable} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import SideViewer from "./modals/SideViewer";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeView = ({mark}) => {

    const [ favorites, setFavorites ] = useState([]);

    const navigation = useNavigation()

    useEffect(() => {
        const loadMyFavorites = async () => {
            try {
                const favoritesInfo = await AsyncStorage.getItem('favorites');
                if (favoritesInfo !== null) {
                    setFavorites(JSON.parse(favoritesInfo))
                }
            } catch (error) {
                console.log("Something went wrong, failed to load restaurants.")
            }
        };

        loadMyFavorites();
    }, []);


    const saveFavorite = async (data) => {
    try {
        const myFavorites = [...favorites, data];
        setFavorites(myFavorites);
        await AsyncStorage.setItem('favorites', JSON.stringify(myFavorites));
    } catch (error) {
        console.log("Something went wrong, restaurant did not get saved.")
     }
    };

    const removeFavorites = async (id) => {
        try {
            const myFavorites = favorites.filter(item => item.id !== id);
            setFavorites(myFavorites);
            await AsyncStorage.setItem('favorites', JSON.stringify(myFavorites));
        } catch (error) {
            console.log("Something went wrong, failed to remove restaurant.", error)
        }
    };

    console.log()

    return (

        <View style={styles.container}>

            <Text style={styles.title}> Pancake Restaurants </Text>
            <View style={{ marginBottom: 5}}>

            <SideViewer favorites={favorites} removeFavorites={removeFavorites}/>
            </View>

            <ScrollView style={styles.scrollContainer}>

                {mark?.map((data, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.cardTitle}>{data.name}</Text>

                    <Text style={styles.cardDescription}>{data.description}</Text>

                    <View style={styles.cardContent}>

                            <View style={styles.cardRatingContainer}>

                                <Text style={styles.cardRating}>{data.rating} / 5</Text>

                            </View>

                            <AntDesign key={data.id} name="hearto" size={24} color={"red"}
                                       style={{ marginLeft: 20, marginTop: 5}} onPress={()=> saveFavorite(data)}
                            />

                        <AntDesign name="hearto" size={24} color={"purple"}
                                   style={{ marginLeft: 20, marginTop: 5}} onPress={() => removeFavorites(data.id)}
                        />
                    </View>
                    <Pressable key={data.id} onPress={()=> navigation.navigate('Map', { mark }) }><Text>Go to location</Text></Pressable>
                    {/* Pass the {data} parameter to the 'Map' component */}
                </View>
            ))}
            </ScrollView>
        </View>
    )
}

export default HomeView;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize:35,
        fontWeight: "bold" ,
        alignSelf:'center',
        marginTop: 20,
        marginBottom: 20
    },
    scrollContainer: {
    },
    card: {
        alignContent:'center',
        borderWidth: 2,
        borderColor: 'gold',
        backgroundColor: 'rgba(255,165,0, 0.3)',
        borderRadius: 5,
        marginBottom: 50,
        padding: 10,
        width: 400,
        height: 200
    },
    cardTitle: {
        alignSelf: 'center',
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 15
    },
    cardDescription: {
        fontSize: 18,
        alignSelf:'center'
    },
    cardContent: {
        flexDirection:'row' ,
        alignSelf: 'center',
        marginTop: 50,
        height: 40,
        width: 120,
        justifyContent:'space-between'
    },
    cardRatingContainer: {
        backgroundColor: 'orange',
        borderRadius: 5,
        borderWidth: 2,
        width: 100
    },
    cardRating: {
        alignSelf: 'center',
        fontWeight: "bold",
        fontSize: 25
    }

})
