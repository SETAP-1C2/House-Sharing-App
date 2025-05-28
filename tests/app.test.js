//testing functions from the validation files
import {
    isEmailValid,
    checkPasswordLength,
    checkCharacterMix,
    isFirstNameValid,
    isLastNameValid,
    groupIdValid,
    groupNameValid,
    groupDescriptionValid,
    isTaskTitleValid,
    isTaskDescriptionValid,
    isTaskDeadlineValid,
    isCostAmountValid,
    isCostDescriptionValid,
    isCostDeadlineValid,
    loginValid
    
}   from '../validation.js';

// REGISTRATION TESTS
describe('Registration Validation', () => {
    test('Empty email is invalid', () => {
        expect(isEmailValid('')).toBe(false);
    });

    test('Email with space is invalid', () => {
        expect(isEmailValid('email with@space.com')).toBe(false);
    });

    test('Email without @ is invalid', () => {
        expect(isEmailValid('email.com')).toBe(false);
    });

    test('Proper email is valid', () => {
        expect(isEmailValid('valid@example.com')).toBe(true);
    });

    test('Short password is invalid', () => {
        expect(checkPasswordLength('pass')).toBe(false);
    });

    test('Password with mix of characters is valid', () => {
        expect(checkCharacterMix('Password123!')).toBe(true);
    });

    test('Password without mix of characters is invalid', () => {
        expect(checkCharacterMix('password')).toBe(false);
    });

    test('First name with digits is invalid', () => {
        expect(isFirstNameValid('John1')).toBe(false);
    });

    test('Last name with special chars is invalid', () => {
        expect(isLastNameValid('Doe!')).toBe(false);
    });

    test('Proper names are valid', () => {
        expect(isFirstNameValid('John')).toBe(true);
        expect(isLastNameValid('Doe')).toBe(true);
    });
});



// LOGIN TESTS
describe('Login Validation', () => {
    test('Empty email or password is invalid', () => {
        expect(loginValid('', 'pass')).toBe(false);
        expect(loginValid('user@example.com', '')).toBe(false);
    });

    test('Filled email and password is valid', () => {
        expect(loginValid('user@example.com', 'pass')).toBe(true);
    });
});


// GROUP CREATION TESTS
describe('Group Validation', () => {
    test('Group name is required and less than 50 chars', () => {
        expect(groupNameValid('')).toBe(false);
        expect(groupNameValid('a'.repeat(51))).toBe(false);
        expect(groupNameValid('My Group')).toBe(true);
    });

    test('Group description must be <= 200 chars', () => {
        expect(groupDescriptionValid('a'.repeat(201))).toBe(false);
        expect(groupDescriptionValid('Short description')).toBe(true);
    });

    test('Group ID must be 5 digits only', () => {
        expect(groupIdValid('')).toBe(false);
        expect(groupIdValid('1234')).toBe(false);
        expect(groupIdValid('abcde')).toBe(false);
        expect(groupIdValid('12345')).toBe(true);
    });
});


// TASK VALIDATION
describe('Task Validation', () => {
    test('Title must be non-empty and <= 50 chars', () => {
        expect(isTaskTitleValid('')).toBe(false);
        expect(isTaskTitleValid('a'.repeat(51))).toBe(false);
        expect(isTaskTitleValid('Complete the task')).toBe(true);
    });

    test('Description must be <= 200 chars', () => {
        expect(isTaskDescriptionValid('a'.repeat(201))).toBe(false);
        expect(isTaskDescriptionValid('Do something meaningful')).toBe(true);
    });

    test('Deadline must be today or later', () => {
        document.body.innerHTML = '<input id="task-deadline" type="date">';
        const input = document.querySelector('#task-deadline');
        const today = new Date().toISOString().split('T')[0];
        input.value = today;
        expect(isTaskDeadlineValid()).toBe(true);
    });
});


// COST VALIDATION
describe('Cost Validation', () => {
    test('Amount must be numeric', () => {
        document.body.innerHTML = '<input id="cost-amount" value="123">';
        expect(isCostAmountValid()).toBe(true);
        document.querySelector('#cost-amount').value = '12abc';
        expect(isCostAmountValid()).toBe(false);
    });

    test('Description must be <= 200 chars', () => {
        expect(isCostDescriptionValid('a'.repeat(201))).toBe(false);
        expect(isCostDescriptionValid('Pay rent')).toBe(true);
    });

    test('Deadline must be valid date', () => {
        document.body.innerHTML = '<input id="cost-deadline" type="date">';
        const input = document.querySelector('#cost-deadline');
        const today = new Date().toISOString().split('T')[0];
        input.value = today;
        expect(isCostDeadlineValid()).toBe(true);
    });
});


