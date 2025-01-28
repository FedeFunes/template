import styles from "./DetailsCard.module.css";

const DetailsCard = ({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle: string;
  data: { label: string; value: string }[];
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{title}</div>
      <div className={styles.body}>
        {subtitle && <h2 className={styles.name}>{subtitle}</h2>}
        {data.map((item) => (
          <p key={item.label}>
            <strong>{item.label}:</strong> {item.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DetailsCard;
