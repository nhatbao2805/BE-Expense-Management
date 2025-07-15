// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    UsersModule,

    // Access Token
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET') || 'access-secret',
        signOptions: { expiresIn: '15m' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    {
      provide: 'JWT_REFRESH',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return new JwtService({
          secret: config.get<string>('JWT_REFRESH_SECRET') || 'refresh-secret',
          signOptions: { expiresIn: '7d' },
        });
      },
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
