import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

enum Gender{
    'Masculin'= 'Masculin',
    'Feminin' = 'Feminin'
}
export class CreateUserInfoDto {
    @IsString()
    @IsNotEmpty()
    firstname: string;

    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsString()
    @IsDate()
    @IsNotEmpty()
    birthday: Date;

    @IsString()
    @IsNotEmpty()
    adress: string;

    @IsString()
    @IsPhoneNumber('BJ')
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    mail: string;

    @IsString()
    @IsEnum(Gender)
    @IsNotEmpty()
    gender: string;
    required: true;
    
    @IsString()
    @IsNotEmpty()
    citation: string;

    @IsString()
    @IsNotEmpty()
    picture: string;
}
