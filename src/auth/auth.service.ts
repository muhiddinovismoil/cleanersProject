import { Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/register.dto';
import { LoginAuthDto } from './dto/login.dto';
import { ForgetPasswordDto, UpdatePasswordDto } from './dto/updatepassword.dto';
import { AuthRepository } from './repository/auth.repository';
@Injectable()
export class AuthService {
  constructor(@Inject() private readonly userRepository: AuthRepository) {}
  async registerUser(createUserDto: CreateAuthDto) {
    try {
      return this.userRepository.register(createUserDto);
    } catch (error) {
      return error;
    }
  }

  async loginUser(data: LoginAuthDto) {
    try {
      return this.userRepository.login(data);
    } catch (error) {
      return error;
    }
  }

  async verification(id: string, otp: string) {
    try {
      return this.userRepository.verifyOTP(id, otp);
    } catch (error) {
      return error;
    }
  }
  async newOtpVerification(email: string) {
    try {
      return this.userRepository.generateOtpVerification(email);
    } catch (error) {
      return error;
    }
  }
  async forgetUserPass(forgetAuthDto: UpdatePasswordDto) {
    try {
      return this.userRepository.forgetPass(forgetAuthDto);
    } catch (error) {
      return error;
    }
  }

  async resetPass(updatePassword: ForgetPasswordDto) {
    try {
      return this.userRepository.rePassword(updatePassword);
    } catch (error) {
      return error;
    }
  }
}