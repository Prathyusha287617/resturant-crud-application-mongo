import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString() 
    name: string;

    @IsNotEmpty()
    @IsString()
    isVeg: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    @IsString()
    category: string;
}
