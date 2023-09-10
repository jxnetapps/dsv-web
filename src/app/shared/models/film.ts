export interface FilmModel {
  id: string;
  title: string;
  episodeId: string;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
  created: string;
  edited: string;
  posterPath: string;
  peoples: People[];
}

export interface People {
  id: string;
  name: string;
}
