import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { PrismaService } from 'src/prisma.service';
import SignupStartDto from './dto/signup-start.dto';
import { comparePasswordWithHash, hashPassword } from 'src/util/passwords.util';
import { randomCode } from 'src/util/random.util';
import SignupEndDto from './dto/signup-end.dto';
import LoginDto from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot.dto';
import { ResetPasswordDto } from './dto/reset.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
    private jwtService: JwtService,
  ) {}

  async signupStart(user: SignupStartDto, req: Express.Request) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    let payload: {} = {};
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
    if (userExists) {
      return {
        ok: false,
        error: 'There is already a user with that email.',
      };
    }
    const hashedPassword = hashPassword(user.password);
    const verificationCode = randomCode();
    await this.mailService
      .sendUserConfirmation({
        email: user.email,
        message: `
            <p>Hey ${user.email},</p>
            <p>Please copy the link below to confirm your account creation</p>
            <p>
                <p style="color: #0074D9;">Confirmation code ${verificationCode}</p>
            </p>
            
            <p>If you did not request this email you can safely ignore it.</p>
            
            `,
      })
      .then((result) => {
        req.session.newUser = {
          email: user.email,
          password: hashedPassword,
          verificationCode: verificationCode.toString(),
        };
        payload = {
          ok: true,
          message: result,
        };
      })
      .catch((error) => {
        payload = {
          ok: false,
          error: error,
        };
      });
    return { ...payload };
  }

  async signupEnd(verification: SignupEndDto, req: Express.Request) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    let payload: {} = {};
    if (
      verification.verificationCode === req.session.newUser.verificationCode
    ) {
      await this.prisma.user
        .create({
          data: {
            email: req.session.newUser.email,
            password: req.session.newUser.password,
          },
        })
        .then(() => {
          req.session.destroy((error) => {
            if (error) {
              payload = {
                ok: false,
                error: error,
              };
            }
          });
          payload = {
            ok: false,
            message: 'Account registered successfully',
          };
        });
    }
    return { ...payload };
  }

  async validateUser(user: LoginDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
    if (!userExists) {
      return {
        ok: false,
        error: 'User does not exist',
      };
    }
    if (user.password) {
      const comparePass = comparePasswordWithHash(
        user.password,
        userExists.password,
      );
      if (!comparePass) {
        return {
          ok: false,
          error: 'Incorrect password',
        };
      }
    }
    return {
      email: userExists.email,
      userId: userExists.id,
      isDriver: userExists.isDriver,
    };
  }

  async login(req: any) {
    if (req.user.success === false) {
      return req.user;
    }
    return {
      accessToken: this.jwtService.sign({
        email: req.user.email,
        sub: req.user.userId,
        isDriver: req.user.isDriver,
      }),
    };
  }

  async forgotPassword(verification: ForgotPasswordDto, req: Express.Request) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    let payload: {} = {};
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: verification.email,
      },
    });
    if (!userExists) {
      return {
        ok: false,
        message: 'No user with that email exists!',
      };
    }
    const verificationCode = randomCode();
    await this.mailService
      .sendUserConfirmation({
        email: verification.email,
        message: `
        <p>Hey ${verification.email},</p>
        <p>Please copy the link below to confirm your account creation</p>
        <p>
            <p style="color: #0074D9;">Confirmation code ${verificationCode}</p>
        </p>
        
        <p>If you did not request this email you can safely ignore it.</p>
        
        `,
      })
      .then((result) => {
        req.session.forgotPassUser = {
          email: verification.email,
          verificationCode: verificationCode.toString(),
        };
        payload = {
          ok: true,
          message: result,
        };
      })
      .catch((error) => {
        payload = {
          ok: false,
          error: error,
        };
      });
    return { ...payload };
  }

  async resetPassword(user: ResetPasswordDto, req: Express.Request) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    let payload: {} = {};
    if (
      user.verificationCode === req.session.forgotPassUser.verificationCode &&
      user.newPassword === user.confirmPassword
    ) {
      const newHash = hashPassword(user.newPassword);
      await this.prisma.user
        .update({
          data: { password: newHash },
          where: { email: req.session.forgotPassUser.email },
        })
        .then(() => {
          req.session.destroy((error) => {
            if (error) {
              Logger.log(error);
            }
          });
          payload = {
            ok: true,
            message: 'Password Reset Successful',
          };
        })
        .catch((error) => {
          payload = {
            ok: false,
            error: error,
          };
        });
      return { ...payload };
    }
    return {
      ok: false,
      message: 'Password reset failed!',
    };
  }
}
