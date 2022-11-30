import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import HomePage from "../pages/HomePage";
import RecordDataPage from "../pages/RecordDataPage";

// each key value pair is the screen
const screens = {
    Home: {
        screen: HomePage,
    }, 
    RecordData: {
        screen: RecordDataPage,
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);