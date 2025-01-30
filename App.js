import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CourseListScreen from "./screens/CourseListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarLabelPosition:'below-icon',
            tabBarShowLabel:true,
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'gray',
            tabBarStyle:{
                backgroundColor:'lightblue',
            },
        }}>
                <Tab.Screen name="Course List" component={CourseListScreen} />
                <Tab.Screen name="  Profile" component={ProfileScreen}  options={{
                    tabBarLabel:'My Profile',
                    tabBarIcon:({color, size})=>(
                        <Ionicons name="person" color={color} size={20} />),
                        tabBarBadge:3,
                }}/>
                <Tab.Screen name="  Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}