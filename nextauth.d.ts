import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: Number;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
