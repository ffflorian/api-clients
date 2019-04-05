export interface Location {
  icon: string;
  id: number;
  on_top_of: null | number;
  slug: string;
  subtitle: string;
  title: string;
  type: string;
}

export interface LocationDetails {
  display: Array<[string, string | null | number]>;
  editor_url: string;
  id: number;
}

export interface LocationGeometry {
  geometry: {
    coordinates: number[] | number[][];
    type: string;
  };
  id: number;
  level: number | null;
}

export interface LocationType {
  name_plural: string;
  name: string;
  title_plural: string;
  title: string;
}
