import {AuthOptions} from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import {Users} from '@/data/users';
import type {User} from '@/types/User'

export const authConfig = {
  providers: [   
    Credentials({
      name:'credentials',
      credentials: {
        login: { label: 'login', type: 'login', required: true },
        password: { label: 'password', type: 'password', required: true }
      },
      async authorize(credentials) {       
        const currentUser = Users.find((user : User) => user.login === credentials?.login && user.password === credentials.password)
        return currentUser as User;
      }
    })
  ],
  pages: {
    signIn: '/'
  },
  secret: process.env.NEXTAUTH_SECRET
}