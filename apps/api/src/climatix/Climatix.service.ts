import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import {v4 as uuidv4} from 'uuid'
import { ActivityDataDto } from "./ActivityData.dto";
import { EmissionFactorDto } from "./EmissionFactor.dto";

@Injectable()
export class ClimatixService implements OnModuleInit {
  private readonly logger = new Logger(ClimatixService.name);

  // The simplified "database" of the activity that emits gasses
  private activityDb: {[key: string]: ActivityDataDto} = {};

  // Simplified "database"
  private emissionFactorDb: {[activityType: string]: EmissionFactorDto} = {};
  
  constructor() {}

  async onModuleInit(): Promise<void> {
    this.logger.log('onModuleInit');
    
    this.setEmissionFactor({
      activityType: 'gasoline',
      factors: {
        CO2: 69300,
        CH4: 3,
        N2O: 0.6
      }});
    this.setEmissionFactor({
      activityType: 'lng',
      factors: {
        CO2: 56100,
        CH4: 5
      }});
    // There are more but for the purpose of assignment, these suffice
  }

  async setEmissionFactor(emissionFactor: EmissionFactorDto) {
    this.emissionFactorDb[emissionFactor.activityType] = emissionFactor;
  }

  /**
   * Calculate emission and add to "database"
   * @param activityData 
   */
  async addActivity(activityData: ActivityDataDto): Promise<ActivityDataDto> {
    
    activityData.uuid = uuidv4();

    // TODO: populate activityData's emissions (hint: use the calculateEmission method)

    // Inserting into DB
    this.activityDb[activityData.uuid]= activityData;

    return activityData;
  }

  // TODO implement other methods as needed

  /**
   * Calculates the emission 
   * @param activityData 
   * @returns 
   */
  async calculateEmission(activityData: ActivityDataDto): Promise<ActivityDataDto> {
    // TODO: Implement the emissions for each of the greenhouse gasses
    
    // The calculation method is:
    // Find the appropriate emission factor and multiply by the activity amount
    // E.g. activityData.emissions.[gas] = (EmissionFactor of activityData.activityType)  * activityData.amount


    return null
  }

}