

export class ActivityDataDto {
  uuid: string
  amount: number
  activityDate: string // Date in ISO format (only date part) 
  activityType: string

  // Calculated emissions based on the above
  emissions: {
    CO2: number
    CH4?: number
    N2O?: number
  }
}
