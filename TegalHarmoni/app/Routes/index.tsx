import { createStackNavigator } from "@react-navigation/stack";

import { SplashScreen, Home, Kuliner, Wisata, Hotel, Detail} from "../Pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ButtonTabs } from "../Components";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const MainApp = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <ButtonTabs {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Wisata" component={Wisata} />
            <Tab.Screen name="Kuliner" component={Kuliner} />
            <Tab.Screen name="Hotel" component={Hotel} />
        </Tab.Navigator>
    );
};


const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator>
    );
};

export default Router;
