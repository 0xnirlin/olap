//we need next auth
import NextAuth from 'next-auth'
//for provider
import GithubProvider from "next-auth/providers/github"
import { getToken } from "next-auth/jwt"
export const authOptions ={
    session: {
        strategy:"jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    jwt:{
        secret: "Alphahib",
    },
    providers:[
        GithubProvider({
            clientId: "8a1e0a8321108a883f52",

            clientSecret: "b794845717cf454594d8f8588ee45f6e19939b91"
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          session.accessToken = token
          return session
        }
      }
    // ,
    // database: "mongodb+srv://Ahmadk88:Ahmadk88@cluster0.d8ylz.mongodb.net/?retryWrites=true&w=majority"
    ,
  
    pages:{
        signIn:"/boards"
    }
}
export default NextAuth(authOptions)