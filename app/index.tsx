import { Redirect } from "expo-router"
import { View,Text } from "react-native"
import { Provider } from 'react-redux';
import {store} from '../store/store';

const index = () => {
  return (
    // <Provider store={store}>
   <Redirect href = "/(home)"/>
  //  </Provider>
  );
}

export default index