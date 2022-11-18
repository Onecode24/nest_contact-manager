import { IsDate, IsEmail, IsEnum, IsPhoneNumber, IsString } from "class-validator";

enum Gender{
    'Masculin'= 'Masculin',
    'Feminin' = 'Feminin'
}
export class CreateUserInfoDto {
    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    @IsString()
    @IsDate()
    birthday: Date;

    @IsString()
    adress: string;

    @IsString()
    @IsPhoneNumber('BJ')
    phone: string;

    @IsString()
    @IsEmail()
    mail: string;

    @IsString()
    @IsEnum(Gender)
    gender: string;
    
    @IsString()
    citation: string;

}
