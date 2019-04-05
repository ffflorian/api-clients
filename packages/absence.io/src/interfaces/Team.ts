export interface NewTeam {
  /** definition of subscribers */
  emailList?: string[];
  /** the name of the department */
  name: string;
}

export interface Team extends Required<NewTeam> {
  /** unique identifier */
  readonly _id: string;
}
