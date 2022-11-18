import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { IUserInfo } from './schema/user-info.schema';

@Injectable()
export class UserInfoService {

  constructor(@InjectModel('UserInfo') private UserModel: Model<IUserInfo>) {}

  create(createUserInfoDto: CreateUserInfoDto) {
    const createdUserInfo = new this.UserModel(createUserInfoDto);
    return createdUserInfo.save();
  }

  findAll() {
    return `This action returns all userInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userInfo`;
  }

  update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return `This action updates a #${id} userInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} userInfo`;
  }
}
