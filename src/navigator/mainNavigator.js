import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings195332Navigator from '../features/Settings195332/navigator';
import UserProfile195325Navigator from '../features/UserProfile195325/navigator';
import Settings195324Navigator from '../features/Settings195324/navigator';
import Settings195322Navigator from '../features/Settings195322/navigator';
import SignIn2195320Navigator from '../features/SignIn2195320/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings195332: { screen: Settings195332Navigator },
UserProfile195325: { screen: UserProfile195325Navigator },
Settings195324: { screen: Settings195324Navigator },
Settings195322: { screen: Settings195322Navigator },
SignIn2195320: { screen: SignIn2195320Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
