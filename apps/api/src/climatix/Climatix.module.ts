import { Module } from '@nestjs/common';
import { ClimatixController } from './Climatix.controller';
import { ClimatixService } from './Climatix.service';

@Module({
    controllers: [ClimatixController],
    providers: [ClimatixService],
    exports: [ClimatixService]
})
export class ClimatixModule {}
