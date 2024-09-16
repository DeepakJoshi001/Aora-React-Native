import React, { useState } from "react";
import { View,Text,Image, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../Components/FormField";
import CustomButton from "../Components/CustomButton"
import{Link,router} from "expo-router"
import { createUser } from "../../lib/appwrite";


const SignUp = () =>{
  const[form,setform]= useState({
    username:'',
    email:'',
    password:''
  })

  const[isSubmitting,setIsSubmitting] = useState(false)

  submit = async () =>{

   if(!form.username || !form.email || !form.password){
    Alert.alert("Error","Please fill in all fields")
   }

   setIsSubmitting(true);
   try{
    console.log(form.email);
    const result = await createUser(form.email,form.password,form.username);
    router.replace('/sign-in')
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
       <Text className="text-2xl text-white text-semibold my-3">Sign Up</Text>
       <FormField title="Username" value={form.username} placeholder={"Enter Your Username"} handleChangeText={(e)=>setform({
        ...form,username:e.nativeEvent.text
       })}
       otherStyles="mt-10"
       keyboardType="username"
       />
       <FormField title="Email" value={form.email} placeholder={"Enter Your Email"} handleChangeText={(e)=>setform({
        ...form,email:e.nativeEvent.text
       })}
       otherStyles="mt-7"
       keyboardType="email-address"
       />
       <FormField  title="Password" value={form.password} placeholder={"Enter Your Password"} handleChangeText={(e)=>
       setform({
        ...form,password:e.nativeEvent.text
       })
    }
       otherStyles="mt-7"
       />
       
       <CustomButton 
       title="Sign Up"
       handlePress={submit}
       isLoading={isSubmitting}
       />
      

      <View className="justify-center py-4 flex-row gap-2">
        <Text className="text-white text-sm font-pregular">Have an account already?</Text>
        <Link href="/sign-in" className="text-md font-psemibold text-secondary">Sign In</Link>
      </View>

    </View>
    
   </ScrollView>
</SafeAreaView>
)
}

export default SignUp;