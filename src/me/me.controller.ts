import { Controller, Get, Header } from '@nestjs/common';
import { MeService } from './me.service';
import { MeResponseDto } from './dto/me-response.dto';

@Controller('me')
export class MeController {
    constructor(private readonly meService: MeService) { }

    @Get()
    @Header('Content-Type', 'application/json')
    async getMe(): Promise<MeResponseDto> {
        return this.meService.getMe();
    }
}
