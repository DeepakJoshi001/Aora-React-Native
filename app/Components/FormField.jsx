import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'

const FormField = ({title,value,handleChangeText,placeholder,otherStyles,...form}) => {

const[showPassword,SetshowPassword]=useState(false)

  return (
    <>
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-white px-1 font-pmedium">{title}</Text>
            <View className="w-full h-[55] border-black-200 border-2 px-3
            focus:border-secondary-200 items-center rounded-2xl flex-row">
                <TextInput
                className="flex-1 text-white font-psemibold 
                text-base"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#7b7b8"
                onChange={handleChangeText}
                secureTextEntry={title=== 'Password' && !showPassword}
                />

              {title==='Password' && (
                <TouchableOpacity onPress={()=>SetshowPassword(!showPassword)}>
                  <Image source={showPassword ? require('../../assets/icons/eye-hide.png'): require('../../assets/icons/eye.png') } className="w-6 h-6" resizeMethod='contain'/>
                </TouchableOpacity>
              )}

            </View>
    </View>
     </>
  )
}

export default FormField