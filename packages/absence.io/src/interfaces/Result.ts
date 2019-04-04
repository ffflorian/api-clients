export interface Paginated<T> {
  count: number;
  data: T;
  limit: number;
  skip: number;
  totalCount: number;
}

export interface Department {
  _id: string;
  company: string;
  emailList: string[];
  id: string;
  name: string;
  userNotifications: string[];
}

export interface DepartmentExtended extends Department {
  approverIds: string[];
  assistantIds: string[];
  memberCount: number;
  memberIds: string[];
}
