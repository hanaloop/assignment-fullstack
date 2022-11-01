

export class EmissionFactorDto {
  activityType: string

  // Emission factors for each of the gasses
  factors: {
    CO2: number
    CH4?: number
    N2O?: number
  }
}