export interface Level {
  access_restriction: null;
  base_altitude: number;
  can_describe: boolean;
  can_search: boolean;
  default_height: number;
  door_height: number;
  groups: {};
  icon: string;
  id: number;
  on_top_of: null | number;
  short_label: string;
  slug: string;
  subtitle: string;
  title: string;
  titles: {
    [lang: string]: string;
  };
}
