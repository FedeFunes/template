import { Layout } from "@/components/Shared";
import { Summary, TransactionTable } from "@/components";
import styles from "./TransactionsPage.module.css";

const TransactionCreationPage = () => {
  return (
    <Layout title="Transactions">
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <button>+ Create Transaction</button>
        </div>
        <Summary />
        <input
          placeholder="Search Transactions"
          className={styles.searchInput}
        />
        <TransactionTable />
      </div>
    </Layout>
  );
};

export default TransactionCreationPage;
