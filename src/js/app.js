export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Этот персонаж уже добавлен');
    } else if (!this.members.has(person)) {
      this.members.add(person);
    }
  }

  addAll(...person) {
    person.forEach((item) => {
      if (!this.members.has(item)) {
        this.members.add(item);
      }
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}