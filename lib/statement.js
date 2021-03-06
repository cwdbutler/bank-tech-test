const statement = (accountHistory) => {
  const header = 'date || credit || debit || balance';

  const formatDate = (dateObject) => {
    let dateString = dateObject.toLocaleString('en-GB').substr(0, 10);
    return `${dateString} `;
  };

  const formatAmount = (amount) => {
    return amount ? ` ${amount.toFixed(2)} ` : ' ';
    // matching the acceptance criteria exactly
  };

  const formatBalance = (balance) => {
    return ` ${balance.toFixed(2)}`;
  };

  const formatBody = (history) => {
    let body = [];
    history.forEach((transaction) => {
      body.push(
        [
          formatDate(transaction.date),
          formatAmount(transaction.credit),
          formatAmount(transaction.debit),
          formatBalance(transaction.balance),
        ].join('||')
      );
    });
    return body.reverse().join('\n'); // newest first
  };

  return [header, formatBody(accountHistory)].join('\n');
};

module.exports = statement;
