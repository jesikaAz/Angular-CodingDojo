import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Jessica' },
      { id: 2, name: 'Caro' },
      { id: 3, name: 'Benoit' },
      { id: 4, name: 'Alex' },
      { id: 5, name: 'Romain' },
      { id: 6, name: 'Vassily' },
      { id: 7, name: 'Benjamin' },
      { id: 8, name: 'Claudia' },
      { id: 9, name: 'Alice' },
      { id: 10, name: 'John' }
    ];
    return {heroes};
  }
}
