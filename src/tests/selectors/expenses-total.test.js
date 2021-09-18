import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('should correctly add up multiple expenses', () => { 
    const total = getExpensesTotal(expenses);
    expect(total).toEqual(114195);
});

test('should correctly add up single expense', () => { 
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toEqual(195);
});

test('should correctly add up no expenses', () => { 
    const total = getExpensesTotal([]);
    expect(total).toEqual(0);
});