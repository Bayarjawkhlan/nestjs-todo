import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signUp(dto: AuthDto): Promise<{
        access_token: string;
    }>;
}
