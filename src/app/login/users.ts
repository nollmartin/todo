export interface User {
  name: string;
  password?: string;
};

export const users: User[] = [
  {
    name: 'user1',
    password: 'redapple'
  },
  {
    name: 'user2',
    password: 'blueapple'
  },
  {
    name: 'a',
    password: ''
  }
];
