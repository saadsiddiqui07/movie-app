import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.process.env.GOOGLE_ID,
      clientSecret: process.env.process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
});
