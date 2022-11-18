import { Module } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { UserInfoController } from './user-info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userInfoSchema } from './schema/user-info.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserInfo', schema: userInfoSchema }]),
  ],
  controllers: [UserInfoController],
  providers: [UserInfoService]
})
export class UserInfoModule {}
