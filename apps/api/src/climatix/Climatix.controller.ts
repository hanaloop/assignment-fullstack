import { Body, Controller, Get, Logger, Post, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ActivityDataDto } from "./ActivityData.dto";

@Controller('climatix')
@ApiTags('climatix')
export class ClimatixController {
  private readonly logger = new Logger(ClimatixController.name);

  @Get('/info')
  async getInfo(@Req() req: any): Promise<{message: string}> {
    return {
      message: "I am alive!"
    };
  }

  @Post('/activities')
  async addActivity(@Req() req: any, @Body() data: ActivityDataDto): Promise<ActivityDataDto> {
    // TODO implement the actual logic
    return data;
  }

  // TODO: Implement endpoint to get all activityData of given date

  // TODO: Implement endpoint to get activityData given UID

}
