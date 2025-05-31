import { Text, View } from 'tamagui'
import MapView from 'react-native-maps';
import { Platform } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View flex={1} items="center" justify="center" bg="$background">
    <MapView
      style={{ flex: 1, height: '100%', width: '100%' }}
      initialRegion={{
      latitude: 51.9225,
      longitude: 4.4792,
      latitudeDelta: 0.05,
      longitudeDelta: 0.08,
      }}
    />
    </View>
  )
}
