import styles from "./TransactionTable.module.css";

const defaultTransactions = [
  {
    id: 1001,
    description: "Purchase of office supplies",
    amount: "$150.00",
    paymentMethod: "Credit Card",
    creationDate: "2023-09-15",
  },
  {
    id: 1002,
    description: "Monthly subscription fee",
    amount: "$25.99",
    paymentMethod: "Credit Card",
    creationDate: "2023-09-10",
  },
  {
    id: 1003,
    description: "Contractor services for design",
    amount: "$500.00",
    paymentMethod: "Debit Card",
    creationDate: "2023-09-12",
  },
  {
    id: 1004,
    description: "Gift card purchase",
    amount: "$75.00",
    paymentMethod: "Debit Card",
    creationDate: "2023-09-14",
  },
  {
    id: 1005,
    description: "Refund for returned item",
    amount: "$30.00",
    paymentMethod: "Credit Card",
    creationDate: "2023-09-03",
  },
];

const TransactionTable = ({
  transactions = defaultTransactions,
}: {
  transactions?: {
    id: string;
    description: string;
    amount: string;
    paymentMethod: string;
    creationDate: string;
  }[];
}) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Creation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.paymentMethod}</td>
              <td>{transaction.creationDate}</td>
              <td>
                <button className={styles.actionButton}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
