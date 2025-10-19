import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { MeResponseDto } from './dto/me-response.dto';

interface CatFactResponse {
    fact: string;
    length: number;
}

@Injectable()
export class MeService {
    private readonly logger = new Logger(MeService.name);
    private readonly CAT_FACTS_API = 'https://catfact.ninja/fact';
    private readonly API_TIMEOUT = 5000; // 5 seconds timeout

    constructor(private readonly httpService: HttpService) { }

    async getMe(): Promise<MeResponseDto> {
        const timestamp = new Date().toISOString();

        try {
            const catFact = await this.fetchCatFact();

            return {
                status: 'success',
                user: {
                    email: 'engr.eyitope@gmail.com', // Replace with your actual email
                    name: 'Faith Adebayo', // Replace with your actual name
                    stack: 'NestJS/Node.js', // Replace with your actual stack
                },
                timestamp,
                fact: catFact,
            };
        } catch (error) {
            this.logger.error('Failed to fetch cat fact', error);

            // Return response with fallback fact
            return {
                status: 'success',
                user: {
                    email: 'engr.eyitope@gmail.com', // Replace with your actual email
                    name: 'Faith Adebayo', // Replace with your actual name
                    stack: 'NestJS/Node.js', // Replace with your actual stack
                },
                timestamp,
                fact: 'Cats are fascinating creatures!', // Fallback fact
            };
        }
    }

    private async fetchCatFact(): Promise<string> {
        try {
            const response = await firstValueFrom(
                this.httpService.get<CatFactResponse>(this.CAT_FACTS_API, {
                    timeout: this.API_TIMEOUT,
                })
            );

            return response.data.fact;
        } catch (error) {
            this.logger.warn('Cat Facts API request failed', error.message);
            throw new HttpException(
                'Failed to fetch cat fact',
                HttpStatus.SERVICE_UNAVAILABLE
            );
        }
    }
}
