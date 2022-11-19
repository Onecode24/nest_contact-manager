import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { identity } from 'rxjs';

@Controller()
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Post('create-contact')
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        callback(null, filename);
      }
    })
  }))
  create(@Body() createUserInfoDto: CreateUserInfoDto, @UploadedFile() file) {
    return this.userInfoService.create(createUserInfoDto, file)
  }

  @Patch('update-contact/:id')
  async updateContact(@Param('id') id , updateContact: UpdateUserInfoDto ){
    return this.userInfoService.update(id, updateContact);
  }

  @Get('contacts')
 async getAllContacts(){  
    return this.userInfoService.findAll();
 }

 @Get('contact/:id')
 async getContact(@Param('id') id: String){ 
    return this.userInfoService.findOne(id)
 }
  
}
