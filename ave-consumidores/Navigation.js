import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';

//Screens
import HomeScreen from "./screens/HomeScreen";
import CarritoScreen from "./screens/CarritoScreen";
import FavoritosScreen from "./screens/FavoritosScreen";
import PerfilScreen from "./screens/PerfilScreen";

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "none",
                
            }}
        >
            <Tab.Screen 
                name="Favoritos"
                component={FavoritosScreen}
                options={{
                    tabBarIcon: ({})=>
                        <Entypo name="heart" size={30} color="red" />,
                    headerShown:false,
                }}
            />
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({})=>
                        <Entypo name="home" size={30} color="black" />,
                    headerShown:false,
                }}
            />
            <Tab.Screen 
                name="Carrito" 
                component={CarritoScreen}
                options={{
                    tabBarIcon: ({})=>
                        <Entypo name="shopping-cart" size={30} color="orange" />,
                    //tabBarBadge:0,
                    headerShown:false,
                }}
            />
            <Tab.Screen
            name="Perfil"
            component={PerfilScreen}
            options={{
                tabBarIcon: ({})=>
                    <Entypo name="user" size={30} color="black" />,
                    headerShown:false,
            }}
            />

        </Tab.Navigator>
    );
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}