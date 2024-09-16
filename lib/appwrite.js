// import { Platform } from "react-native";
import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appwriteConfig = {
endpoint : 'https://cloud.appwrite.io/v1',
Platform : 'com.practice.aora',
projectId : '66c1e155003ce566eafb',
databaseId : '66c1e50c002c9e8b532a',
userCollectionId : '66c1e57a003494b628f3',
videosId : '66c1e6550013a9dca478',
storageId: '66c1ebc0002fc7494fbd'
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.Platform) // Your application ID or bundle ID.
;


const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client)

export const createUser = async (email,password,username) => {

try{
   const newAccount = await account.create(
    ID.unique(),
    email,
    password,
    username
   )

   if(!newAccount) throw Error;

   const avatarUrl = avatar.getInitials(username)

   await SignInUser(email,password)

   const newUser = database.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.userCollectionId,
    ID.unique(),{
        accountId:newAccount.$id,
        email,
        username,
        avatar : avatarUrl
    }
   )

   return newUser
}
catch(error){
 console.log(error);
 throw new Error(error)
}

}

export async function  SignInUser(email,password){
try{

const session = await account.createEmailPasswordSession(
    email,
    password
)
return session;
}
catch(error){
console.log(error,"error");
throw new Error(error)
}
}

export async function  getCurrentUser()    
    {
    try {
      const user = await account.get();

      if(!user) throw Error

      const CurrentUser = await database.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal('accountId',user.$id)]
      )

      if(!CurrentUser) throw Error


      return CurrentUser.documents[0];
    } catch (error) {
      console.log("Error fetching current user:", error);
      throw new Error(error);
    }
  };
