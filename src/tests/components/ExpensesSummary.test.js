import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with two expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesTotal={9434} expenseCount={2}/>);
    expect(wrapper).toMatchSnapshot();
});
