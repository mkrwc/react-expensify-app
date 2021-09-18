import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = ({ expensesTotal, expenseCount }) => {
    const expenseTaxonomy = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral( expensesTotal/ 100).format('$0,0.00');

    return (
        <div>
            <p>Viewing {expenseCount} {expenseTaxonomy} totalling {formattedTotal} </p>
        </div>        
    );
}

const mapStateToProps = (state) => {
    const displayedExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount: displayedExpenses.length,
        expensesTotal: getExpensesTotal(displayedExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);
