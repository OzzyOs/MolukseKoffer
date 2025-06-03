import { Tabs, useRouter } from "expo-router";
import { useTheme } from "tamagui";
import { Atom, AudioWaveform, House, Plus } from "@tamagui/lucide-icons";
import { LinearGradient } from 'tamagui/linear-gradient'
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.green10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.green10.val,
          borderBottomColor: theme.borderColor.val,
        },
        headerTintColor: theme.color.val,
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          headerTintColor: theme.white1.val,
          title: "Home",
          tabBarIcon: ({ color }) => <House color={color as any} />,
          headerBackground: () => (
             <LinearGradient 
              width="100%"
              height="100%"
              colors={['$green12', '$green10']}
              start={[0, 1]}
              end={[0, 0]}
            />
          ),
          headerRight: () => (
              <TouchableOpacity
                onPress={() => router.push("../(modals)/createPostModal")}
                style={{ marginRight: 15, height: 15, width: 15, borderWidth: 1}}
              />
            )
          }
        }
      />

      <Tabs.Screen
        name="two"
        options={{
          headerTintColor: theme.white1.val,
          title: "Map",
          tabBarIcon: ({ color }) => <AudioWaveform color={color as any} />,
          headerBackground: () => (
             <LinearGradient 
              width="100%"
              height="100%"
              colors={['$green12', '$green10']}
              start={[0, 1]}
              end={[0, 0]}
            />
          ),
          headerRight: ()=> (
            <TouchableOpacity 
              onPress={()=> router.push("../(modals)/createLocationModal")}
              style={{ marginRight: 15, height: 15, width: 15, borderWidth: 1}}
              />
          )
        }}
      />

      <Tabs.Screen
        name="three"
        options={{
          headerTintColor: theme.white1.val,
          title: "Lineage",
          tabBarIcon: ({ color }) => <Atom color={color as any} />,
          headerBackground: () => (
             <LinearGradient 
              width="100%"
              height="100%"
              colors={['$green12', '$green10']}
              start={[0, 1]}
              end={[0, 0]}
            />
          ),
          headerRight: ()=> (
            <TouchableOpacity 
              onPress={()=> router.push("../(modals)/createPersonModal")}
              style={{ marginRight: 15, height: 15, width: 15, borderWidth: 1}}
              />
          )
        }}
      />
    </Tabs>
  );
}
