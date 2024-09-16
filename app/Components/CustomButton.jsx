import { TouchableOpacity,Text} from "react-native"


const CustomButton = ({title,handlePress,isLoading,textStyle})=>{
    return(
    
        <TouchableOpacity onPress={handlePress} 
        activeOpacity={0.7} 
        className={`bg-orange-500  rounded-md h-14 w-80 mt-8  justify-center text-center 
        ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
        >
            <Text 
            className={`justify-center font-pbold text-center ${textStyle}`}
            
            >{title}</Text>
        </TouchableOpacity>
    
    )
}

export default CustomButton