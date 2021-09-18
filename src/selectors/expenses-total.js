const reducer = (previousValue, currentValue) => previousValue + currentValue;

export default (expenses) => {
    if (expenses.length === 0) return 0;
    else return expenses.map(e => e.amount).reduce(reducer);
};