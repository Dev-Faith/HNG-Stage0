export class MeResponseDto {
    status: string;
    user: {
        email: string;
        name: string;
        stack: string;
    };
    timestamp: string;
    fact: string;
}
