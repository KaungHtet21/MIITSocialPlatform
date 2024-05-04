import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "./theme";
import { PaperProvider } from "react-native-paper";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AttendanceScreen from "./screens/AttendanceScreen";
import ChatScreen from "./screens/ChatScreen";
import BookmarkScreen from "./screens/BookmarkScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  function BottomNavigationBar() {
    const route = useRoute();
    const Tab = createBottomTabNavigator();
    const { name } = route;
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Chat") {
              iconName = focused ? "chat" : "chat-outline";
            } else if (route.name === "Attendance") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "Bookmark") {
              iconName = focused ? "message-bookmark" : "message-bookmark-outline";
            } 
            return (
              <>
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              </>
            );
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            display: name === "login" || name === "home" ? "none" : "flex",
            height: 65,
          },
          tabBarLabelStyle: {
            marginBottom: 7,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Attendance" component={AttendanceScreen} />
        <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      </Tab.Navigator>
    );
  }
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen
              name="bottomnavigationbar"
              component={BottomNavigationBar}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
