import {NewService} from './NewService';

export type UpdateService = Omit<Partial<NewService>, 'summary'>;
