import {Text, View} from "react-native";
import MapView, {Callout, Marker} from "react-native-maps";
import {useEffect, useRef} from "react";

const LocationView = ({mark, route}) => {

    // const { data } = route.params;  // Extract the data from the route parameters passed from the homeview.

    // const mapViewRef = useRef(mark);

    const initialRegion={
        latitude: 51.926517,
        longitude: 4.462456,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    // useEffect(() => {
    //     if (data && mapViewRef.current) {
    //         const newRegion = {
    //             latitude: data.coordinates.latitude,
    //             longitude: data.coordinates.longitude,
    //             latitudeDelta: 0.001,
    //             longitudeDelta: 0.002,
    //         };
    //         mapViewRef.current.animateToRegion(newRegion, 100);  // Animate to the new region
    //     }
    // }, [data]);

    return (
        <View style={{flex: 1, borderTopWidth: 2, borderBottomWidth: 2}}>

            <MapView style={{height: '100%', width: '100%'}} initialRegion={initialRegion} showsUserLocation={true} showsCompass={true}>

                {mark?.map(data => (                   // Map out a new marker for each object in the JSON.

                    <Marker key={data.id}
                        coordinate={{longitude:data.coordinates.longitude, latitude: data.coordinates.latitude}}
                        title={data.name}>

                    <Callout key={data.id} style={{width: 250, height: 125}}>
                        <View style={{height: 90, width: 250, padding: 10}}>
                            <Text style={{fontWeight:'bold', fontSize: 20}}>{data.name}</Text>
                                <View style={{alignContent: 'center', flexDirection: 'row'}}>

                                </View>
                                <Text style={{marginBottom: 5, fontWeight: 'bold'}}>Rating : {data.rating} / 5</Text>
                            <Text>{data.description}</Text>
                        </View>
                    </Callout>
                    </Marker>
            ))}
            </MapView>
        </View>
    )
}

export default LocationView;