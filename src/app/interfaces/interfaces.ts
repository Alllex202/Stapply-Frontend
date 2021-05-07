export interface ITrackedAppCard {
  id: number;
  name: string;
  developer: string;
  avatarSrc: string;
  imageSrc: string;
}

export interface ITrackedAppCardRenameData {
  name: string;
  id: number;
}

export interface ITrackedAppCardDeleteData {
  name: string;
  id: number;
}
