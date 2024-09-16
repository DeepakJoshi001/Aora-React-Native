import React, { useState } from "react";
import { View,Text,Image, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../Components/FormField";
import CustomButton from "../Components/CustomButton"
import{Link,router} from "expo-router"
import {SignInUser,getCurrentUser} from "../../lib/appwrite";

const SignIn = () =>{
  const[form,setform]= useState({
    email:'',
    password:''
  })
  
  const[isSubmitting,setIsSubmitting] = useState(false);

  const Submit = async ()=>{
    if( !form.email || !form.password){
      Alert.alert("Error","Please fill in all fields")
     }
  
     setIsSubmitting(true);
     try{
      console.log(form,"gggg");
      await SignInUser(form.email,form.password);
      router.replace('/home')
     }catch(error){
      Alert.alert("Error",error.message)
     }finally{
      setIsSubmitting(false);
     }
  }

return(
<SafeAreaView className="bg-primary h-full">
   <ScrollView>
    <View className="w-full justify-center min-h-[85vh] px-4 my-6">   
       <Image source={require('../../assets/images/logo.png')} className="w-[150px] h-[60px]" resizeMode='contain'/>
       <Text className="text-2xl text-white text-semibold my-3">Sign In</Text>
       <FormField title="Email" value={form.email} placeholder={"Enter Your Email"} 
          handleChangeText={(e) =>
          // {console.log(e.nativeEvent.text,"text")}
            setform({
              ...form,
              email: e.nativeEvent.text,
            })
          }
       otherStyles="mt-7"
       keyboardType="email-address"
       />
       <FormField  title="Password" value={form.password} placeholder={"Enter Your Password"} 
        handleChangeText={(e) =>
          setform({
            ...form,
            password:e.nativeEvent.text,
          })
        }
       otherStyles="mt-7"
       secureTextEntry
      //  keyboardType="password"
       />
       
       <CustomButton 
       title="Sign In"
       handlePress={Submit}
       isLoading={isSubmitting}
       />
      

      <View className="justify-center py-4 flex-row gap-2">
        <Text className="text-white text-sm font-pregular">Don't have an account?</Text>
        <Link href="/sign-up" className="text-md font-psemibold text-secondary">Sign Up</Link>
      </View>

    </View>
    
   </ScrollView>
</SafeAreaView>
)
}

export default SignIn;