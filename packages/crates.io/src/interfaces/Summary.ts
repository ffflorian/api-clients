import type {Category} from './Category';
import type {Crate} from './Crate';
import type {Keyword} from './Keyword';

export interface Summary {
  just_updated: Crate[];
  most_downloaded: Crate[];
  most_recently_downloaded: Crate[];
  new_crates: Crate[];
  num_crates: number;
  num_downloads: number;
  popular_categories: Category[];
  popular_keywords: Keyword[];
}
