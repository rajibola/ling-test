export interface DataType {
  [x: string]: UserType;
}

export interface UserType {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  isSearchedUser?: boolean;
  position?: number;
}

export interface ListHeaderProps {
  titles: [string, string, string, string];
}

type ListItemProps = Partial<
  Pick<UserType, "bananas" | "isSearchedUser" | "position" | "name"> & {
    index: number;
    alt?: boolean;
  }
>;

export interface SearchBarProps {
  onClick: (e: string) => void;
}
