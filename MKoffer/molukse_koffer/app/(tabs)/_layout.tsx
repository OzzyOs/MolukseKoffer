import { Tabs } from "expo-router";
import { useTheme } from "tamagui";
import { Atom, AudioWaveform, House } from "@tamagui/lucide-icons";
import { LinearGradient } from 'tamagui/linear-gradient'

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.green10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.green11.val,
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
              colors={['green12', '$green10']}
              start={[0, 1]}
              end={[0, 0]}
            />
          )
        }}
      />
    </Tabs>
  );
}
