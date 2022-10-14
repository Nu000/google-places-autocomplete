export interface ILocation {
    lat: number
    lng: number
    name: string
}
export interface IRootState {
  recentLocations: ILocation[]
}
