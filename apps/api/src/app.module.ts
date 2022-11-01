import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClimatixModule } from './climatix/Climatix.module';

@Module({
  imports: [ClimatixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
