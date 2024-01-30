import { Stack } from "expo-router";
import { Provider } from 'react-redux';
import { store } from "../../store/store";

export default function Layout(){
    return  (
      <Provider store={store}>
     <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name = "index"/>
      <Stack.Screen name = "employees"/>
      <Stack.Screen name = "adddetails"/>
    </Stack>
    </Provider>

        
    
    );
}
