import { Injectable, NotFoundException, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { IUserInfo } from './schema/user-info.schema';

@Injectable()
export class UserInfoService {

  constructor(@InjectModel('UserInfo') private UserModel: Model<IUserInfo>) {}

  //
  async create(createUserInfoDto: CreateUserInfoDto,@UploadedFile() file) {
    try {
      createUserInfoDto.picture = file.filename;
      const newContact = await this.UserModel.create(createUserInfoDto);
      return {
        content: newContact,
        sucessed: true
      }
    } catch (error) {
      return {
        content: error,
        sucessed: false
      }
    }
  }

   // Get All contacts
  async findAll() {
    try {
      const allContact = await this.UserModel.find();
      return{
        contents: allContact,
        sucess: true
      }
    } catch (error) {
      return{
        contents: error,
        sucess: false
      }
    }
  }

  // get one user by it's id
  async findOne(id: String) {
    try {
      const user = await this.UserModel.findById(id).exec();
      if(!user || user == null){
        throw new NotFoundException('User not found');
      }
      return{
        contents: user,
        sucess: true
      }
    } catch (error) {
      return {
        content: error,
        sucess: false
      } 
    }
  }

  //update one user 
  async update(id: String, updateUserInfoDto: UpdateUserInfoDto) {
    try {
      const updateUser = await this.UserModel.findByIdAndUpdate(id,updateUserInfoDto,{new: true});
      if(!updateUser || updateUser == null){
        throw new NotFoundException('User not found')
      }
      return {
        content: updateUser,
        sucess: true
      }
    } catch (error) {
      return{
        content: error,
        sucess: false
      }
    }

  }

  // remove contact by it id
  async remove(id: number) {
  try {
    const userRemoved = await this.UserModel.findByIdAndDelete(id)
    if(!userRemoved){
      throw new NotFoundException('User not Found');
    }
    return this.findAll();

  } catch (error) {
    return {
      content: error,
      sucess: false
    }
  }
  }
}
