export interface ITodo {
  title: string
  id: number
  completed: boolean
}

export interface ITest2 {
  attribute_2lvl_1: string,
  attribute_2lvl_2: number,
  attrubute_2lvl_3?: boolean
}

export interface ITest1 {
  attribute_1lvl_1: string,
  attribute_1lvl_2: number,
  attrubute_1lvl_3?: boolean,
  attribute_1lvl_4: ITest2
}
