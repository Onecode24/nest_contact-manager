import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserInfoModule } from './user-info/user-info.module';

@Module({
  imports: [UserInfoModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async() => {
        return {
          uri: 'mongodb://admin:rootadmin@127.0.0.1:27017/test_manager',
        }
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
