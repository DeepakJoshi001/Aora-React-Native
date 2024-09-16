import React from "react";
import { View,Text, FlatList,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import smalllogo from '../../assets/images/logo-small.png'

const Home = () =>{
return(
    // <View>
    //     <Text>Hello</Text>
    // </View>
    <SafeAreaView className="bg-primary">
        <FlatList 
          data={[{id:1},{id:'hi'},{id:3}]}
          keyExtractor={(item)=> {  item.$id } }
          renderItem={({item}) => (
           <Text className="text-red-800">{item.id}</Text>
          ) }
          ListHeaderComponent={()=>(
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>  
                  <Text className="text-white text-sm font-semibold">Welcome Back </Text>
                  
                  <Text className="text-white text-3xl font-psemibold">Aoura</Text>
                  </View>

              <View>
                <Image className="w-10 h-10" source={smalllogo} resizeMode="contain"/>
              </View>


              </View>
            </View>
          )}  
        />
    </SafeAreaView>
)
}

export default Home;