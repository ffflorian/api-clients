export interface Contributor {
  bio: string | null;
  blog: string | null;
  company: string | null;
  created_at: string;
  email: string | null;
  followers: number | null;
  following: number | null;
  github_id: string;
  hidden: boolean;
  host_type: string;
  last_synced_at: string;
  location: string | null;
  login: string;
  name: string;
  updated_at: string;
  user_type: string;
  uuid: string;
}
