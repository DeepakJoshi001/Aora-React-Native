import {ScrollView, Text, View,Image, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Redirect, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './Components/CustomButton';
import 'react-native-url-polyfill/auto'
import { useGlobalContext } from './Context/GlobalProvider';


export default function App() {

const {isLoggin} = useGlobalContext();

// if (loading) {
//   return <Text>Loading...</Text>;  // Show a loading indicator
// }

if (isLoggin) {
  return <Redirect href="/home" />;
}

  return (   
  <SafeAreaView className="bg-primary h-full">
    <ScrollView  contentContainerStyle={{height:'100%'}}>
       <View className="w-full justify-center items-center min-h-[100vh]">
        <ImageBackground source={require('../assets/images/logo.png')} className="w-[150px] h-[100px]" resizeMode='contain'/>
        <Image source={require('../assets/images/cards.png')} className=" w-full h-[250px]" resizeMode='contain'/>

        <View className="font-bold mt-5">
          <Text className="text-3xl text-white text-center ">
            Discover Endless Possibilities With&nbsp;
             <Text className="text-secondary-200 font-bold">Aora</Text>
          </Text>
           <Image source={require('../assets/images/path.png')} className="justify-end h-[20px] w-14 left-60 bottom-2" resizeMode='contain'/>
        </View>
        <Text className="text-sm font-pregular text-gray-100 text-center justify-center ">Where Creativity Meets innovation: Embark on a journey of Limitless Exploration With Aora</Text>  
        <CustomButton title="Continue With Email" handlePress={()=>router.push('/sign-in')} />
       
       </View>

    </ScrollView>

    <StatusBar style={'light'} hidden={false}/>

  </SafeAreaView>


  );
}


