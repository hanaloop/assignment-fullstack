import { ActivityDataDto } from "./ActivityData.dto";
import { ClimatixService } from "./Climatix.service";

describe('ClimatixService', () => {
  const service = new ClimatixService();
  it('W', () => {
    // TODO: Implement data

    const testData = new ActivityDataDto();
    testData.activityType = 'gasoline';

    const result = service.calculateEmission(testData);

    expect(result).toEqual({});
  });

  // TODO: Add more test as necessary
})
