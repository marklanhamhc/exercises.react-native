export interface IClubInfo {
  name: string;
  logo: string;
}

export interface ICompetition {
  name: string;
}

export interface IFixturesData {
  id: number;
  dateTime: Date;
  awayClub: IClubInfo;
  homeClub: IClubInfo;
  competition: ICompetition;
}
