import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeModule } from './me/me.module';

@Module({
  imports: [MeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
