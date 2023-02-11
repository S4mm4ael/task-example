import { Dispatch, SetStateAction } from 'react';

export type SearchProps = {
  isList: boolean;
  changeView: Dispatch<SetStateAction<boolean>>;
};

export type SearchBarProps = {
  isSearching: boolean;
  changeView: Dispatch<SetStateAction<boolean>>;
};

export type SliderProps = {
  isDesktopSize: boolean;
  imageCount: number;
};

export type CommentProps = {
  avatar: string | undefined;
  name: string;
  rating: number;
  date: string;
  text: string;
};
