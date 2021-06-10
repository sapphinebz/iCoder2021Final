export interface ResponseStudentAll {
  result: Student[];
}

export interface PrototypeStudent {
  name:string;
  email:string;
  tel:string;
}

export type OptionalStudent = Partial<PrototypeStudent>;

// export interface OptionalStudent {
//   name?:string;
//   email?:string;
//   tel?:string;
// }

export interface Student extends PrototypeStudent {
  createBy?: any;
  createDate?: any;
  id: number;
  updateBy?: any;
  updateDate?: any;
  version: number;
}

export interface ResponseAddStudent {
  result: AddStudent;
}

interface AddStudent {
  createBy?: any;
  createDate?: any;
  email: string;
  id: number;
  name: string;
  tel: string;
  updateBy?: any;
  updateDate?: any;
  version: number;
}

export interface ResponseEditStudent {
  result: EditStudent;
}

export interface EditStudent {
  createBy?: any;
  createDate?: any;
  email: string;
  id: number;
  name: string;
  tel: string;
  updateBy?: any;
  updateDate?: any;
  version: number;
}