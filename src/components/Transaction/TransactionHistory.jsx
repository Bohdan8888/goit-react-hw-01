import Transaction from "./Transaction";
import css from "../Transaction/TransationHistory.module.css"
export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      {transactions.map((transaction) => (
        <tbody className={css.tbody} key={transaction.id}>
          <Transaction transactions={transaction} />
        </tbody>
      ))}
    </table>
  );
}