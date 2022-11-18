import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserInfoModule } from './user-info/user-info.module';
require ('dotenv').config();

@Module({
  imports: [UserInfoModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule,
      MulterModule.register({dest: './uploads'})],
      useFactory: async() => {
        return {
          uri: process.env.MONGO_URI,
        }
      },
      inject: [ConfigService],  
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
