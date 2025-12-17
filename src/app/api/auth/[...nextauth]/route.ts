import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    pages: {
        signIn: '/signin',
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Redirect to interests page after successful sign in
            return `${baseUrl}/interests`
        },
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
