export interface LoginData {
  email: string;
  password: string;
}

export class Address {
  country: string = 'Magyarország';
  city: string = '';
  zip: number = -1;
  building: number = -1;
}

export class User {
  _id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address = new Address();
  role: string = '';
}
