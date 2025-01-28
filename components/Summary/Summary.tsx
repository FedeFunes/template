import styles from "./Summary.module.css";

const Summary = ({
  fees = 0,
  pendingFunds = 0,
  totalAmount = 0,
  totalMerchant = 0,
}: {
  totalAmount?: number;
  totalMerchant?: number;
  pendingFunds?: number;
  fees?: number;
}) => {
  // todo: format currency
  return (
    <div className={styles.summaryBar}>
      <div className={styles.summaryItem}>
        Total amount: <span>{totalAmount}</span>
      </div>
      <div className={styles.summaryItem}>
        Total merchant: <span>{totalMerchant}</span>
      </div>
      <div className={styles.summaryItem}>
        Pending funds: <span>{pendingFunds}</span>
      </div>
      <div className={styles.summaryItem}>
        Fees: <span>{fees}</span>
      </div>
    </div>
  );
};

export default Summary;
