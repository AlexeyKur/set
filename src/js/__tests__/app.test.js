import Team from '../app';

test('check add', () => {
  const team = new Team;
  team.add('Bowerman');
  team.add('Daemon');
  const expected = team.toArray()
  expect(expected).toEqual(['Bowerman', 'Daemon']);
});

test('check add Error', () => {
  expect(() => {
    const team = new Team;
    team.add('Bowerman');
    team.add('Bowerman');
  }).toThrow('Этот персонаж уже добавлен');
});

test('check addAll', () => {
  const team = new Team;
  team.addAll('Daemon', 'Magician', 'Zombie', 'Daemon');
  const expected = team.toArray();
  expect(expected).toEqual(['Daemon', 'Magician', 'Zombie']);
})