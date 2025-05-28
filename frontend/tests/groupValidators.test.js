// Unit Test Group Validations 

const {
  groupNameValid,
  groupDescriptionValid,
  groupIdValid
} = require('../validators/groupValidators.js')

test('empty group name returns error', () => {
  expect(groupNameValid('')).toBe('Group name is required.');
});

test('too long group name returns error', () => {
  expect(groupNameValid('a'.repeat(51))).toBe('Group name must be less than 50 characters.');
});

test('valid group name returns valid', () => {
  expect(groupNameValid('Housemates')).toBe('valid');
});

test('group ID with letters returns error', () => {
  expect(groupIdValid('12a45')).toBe('Group ID must contain only digits.');
});

test('valid group ID passes', () => {
  expect(groupIdValid('12345')).toBe('valid');
});
