import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import SettingsView from "./components/SettingsView";
import LocationView from "./components/LocationView";
import HomeView from "./components/HomeView";
import {useEffect, useState} from "react";

const Tab=createBottomTabNavigator();
export default function App() {

    const [mark, setMark] = useState([]); // set fetched data to 'mark'.

    useEffect(() => {
        fetch('https://stud.hosted.hr.nl/0933530/webserviceprg07/Cake.json')
            .then(response => response.json())
            .then(data => {
                setMark(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

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


