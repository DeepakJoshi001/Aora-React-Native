import { Tabs,Redirect } from "expo-router";
import React from "react";
import { Image,View,Text } from "react-native";
// import {icons} from "../../assets/icons/home.png"

const TabIcon = ({icon,color,name,focused}) =>{
    return(
        <View className="justify-center items-center gap-0.5">
        <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6 pt-1"/>
        <Text className={`${focused?'font-psemibold':'font-pregular'} text-xs`} style={{color}}>{name}</Text>
        </View>
    )
}


const TabLayout = () =>{
return(
    <>
        <Tabs screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveTintColor:'#FFA001',
            tabBarInActiveTintColor:'#CDCDEO',
            tabBarStyle: {
                backgroundColor: '#161622',
                borderTopWidth:1,
                borderTopColor: '#232533',
                height:60
            }
        }}>
        <Tabs.Screen 
          name="home" 
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={require("../../assets/icons/home.png")}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }} 
        />

<Tabs.Screen 
          name="create" 
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={require("../../assets/icons/plus.png")}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }} 
        />

<Tabs.Screen 
          name="profile" 
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={require("../../assets/icons/profile.png")}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }} 
        />

        <Tabs.Screen
        name="bookmark" 
        options={{
         title:"Bookmark",
         headerShown:false,
         tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={require("../../assets/icons/bookmark.png")}
            color={color}
            name="Bookmark"
            focused={focused} 
            />
         )
        }}
        />

        </Tabs>
    </>
)
}

export default TabLayout;