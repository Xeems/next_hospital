import type { AuthOptions} from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import  users  from '@/data/users';
import {User} from '@/types/User';

export const authConfig: AuthOptions = {
  providers: [   
    Credentials({
      credentials: {
        login: { label: 'login', type: 'login', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials.password) return null;

        const currentUser = users.find((user: { login: string; }) => user.login === credentials.login)

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass as User;
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/'
  }
}