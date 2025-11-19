export interface Student {
  id: number;
  name: string;
  classe?: string;
  age?: number;
  email?: string;
  moyenne?: number;
  tel?: string;
}

export const Students: Student[] = [
  { id: 1, name: 'Skander', classe: 'IGL3', age: 22, email: 'skander@mail.com', moyenne: 15.7, tel: '50123456' },
  { id: 2, name: 'Oumaima', classe: 'IGL3', age: 23, email: 'oumaima@mail.com', moyenne: 14.2, tel: '52111222' },
  { id: 3, name: 'Raouf', classe: 'IGL3', age: 21, email: 'raouf@mail.com', moyenne: 12.9, tel: '25787878' },
  { id: 4, name: 'Ibrahim', classe: 'IGL3', age: 24, email: 'ibrahim@mail.com', moyenne: 13.5, tel: '98744122' },
  { id: 5, name: 'Nour', classe: 'IGL3', age: 22, email: 'nour@mail.com', moyenne: 16.4, tel: '55887744' },
  { id: 6, name: 'Rihem', classe: 'IGL3', age: 21, email: 'rihem@mail.com', moyenne: 17.0, tel: '50505050' },
  { id: 7, name: 'Dyama', classe: 'IGL3', age: 22, email: 'dyama@mail.com', moyenne: 14.0, tel: '20999999' },
  { id: 8, name: 'Dr IQ', classe: 'IGL3', age: 30, email: 'driq@mail.com', moyenne: 18.1, tel: '70000001' },
  { id: 9, name: 'Howa', classe: 'IGL3', age: 19, email: 'howa@mail.com', moyenne: 11.5, tel: '55443322' },
  { id: 10, name: 'Hiya', classe: 'IGL3', age: 20, email: 'hiya@mail.com', moyenne: 13.2, tel: '33445522' }
];