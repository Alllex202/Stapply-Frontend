export interface ITrackedAppCard {
  id: number;
  name: string;
  developer: string;
  avatarSrc: string;
  imageSrc: string;
}

export interface INewApplication {
  name: string;
  linkAppStore: string;
  linkGooglePlay: string;
  linkAppGallery: string;
}

export interface ISearchAppCart {
  id: number;
  name: string;
  developer: string;
  avatarSrc: string;
  tracking: boolean;
  linkAppStore: string;
  linkGooglePlay: string;
  linkAppGallery: string;
}
