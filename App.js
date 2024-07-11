import { StyleSheet} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import SettingsView from "./components/SettingsView";
import LocationView from "./components/LocationView";
import HomeView from "./components/HomeView";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab=createBottomTabNavigator();
export default function App() {

    const [mark, setMark] = useState([]); // set fetched data to 'mark'.

    useEffect(() => { // TODO remove and refactor to a favorites list.
        fetch('https://stud.hosted.hr.nl/0933530/webserviceprg07/Cake.json')
            .then(response => response.json())
            .then(data => {
                setMark(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    console.log(mark)

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home">
                    {props => <HomeView {...props} mark={mark} />}
                </Tab.Screen>
                <Tab.Screen name="Map">
                    {props => <LocationView {...props} mark={mark} />}
                </Tab.Screen>
                <Tab.Screen name="Settings" component={SettingsView} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
