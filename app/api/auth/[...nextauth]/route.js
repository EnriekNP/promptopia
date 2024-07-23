import { connectToDB } from '@utils/database';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import User from '@models/users';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            });
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDB();

                //check if a user already exist
                const userExists = await User.findOne({
                    email: profile.email
                });

                if (!userExists) {
                    console.log(profile);
                    await User.create({
                        email: profile.email,
                        username: sanitizeUsername(profile.name),
                        image: profile.image
                    });
                }
                //if not create a new user, save it to database

                return true
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }

});
export { handler as GET, handler as POST };
