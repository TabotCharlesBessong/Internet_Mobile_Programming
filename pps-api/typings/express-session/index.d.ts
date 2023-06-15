// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Session } from 'express-session';

declare module 'express-session' {
  interface Session {
    newUser: {
      email: string;
      password: string;
      verificationCode: string;
    };
    forgotPassUser: {
      email: string;
      verificationCode: string;
    };
  }
}
