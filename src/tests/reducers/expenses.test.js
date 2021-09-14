import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' });
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: 
        {
            id: '4',
            description: 'Pizza',
            note: '',
            amount: 800,
            createdAt: 0
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            amount: 120
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state[0].amount).toEqual(action.updates.amount);
});

test('should not edit an expense if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            id: '1',
            description: 'Gum',
            note: '',
            amount: 120,
            createdAt: 0
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});
