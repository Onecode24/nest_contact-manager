import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

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
    console.log('file : ',file);
    createUserInfoDto.picture = file.filename;
    return this.userInfoService.create(createUserInfoDto);
  }

  @Get()
  findAll() {
    return this.userInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserInfoDto: UpdateUserInfoDto) {
    return this.userInfoService.update(+id, updateUserInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userInfoService.remove(+id);
  }
}
