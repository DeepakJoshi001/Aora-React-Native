import { createContext,useContext,useState,useEffect } from "react";
import { getCurrentUser } from "../../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () =>
    useContext(GlobalContext)

const GlobalProvider = ({children})=>{
   const [isLoggin,SetisLoggin] = useState(false) 
   const [user,SetUser]=useState(null)
   const [loading,Setloading]=useState(true)


   useEffect(()=>{
    getCurrentUser().then(
        (res) => {
            if(res) {
                console.log(res)
                SetisLoggin(true);
                SetUser(res);
            }else{
                SetisLoggin(false);
                SetUser(null)
            }
        })
        .catch((error)=>{
          console.log(error);
        })
        .finally(()=>{
            Setloading(false)
        })       
   },[])
   
   return(
        <GlobalContext.Provider
        value={{
           isLoggin,
           SetisLoggin,
           user,
           SetUser,
           loading
        }}
        >
        {children}    

        </GlobalContext.Provider>
    )
}

export default GlobalProvider;