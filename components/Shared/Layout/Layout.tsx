import styles from "./Layout.module.css";

const Layout = ({
  title,
  children,
  hasBackButton = true,
}: {
  title: string;
  children: React.ReactNode;
  hasBackButton?: boolean;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>☁️{title}</div>
        <div>{hasBackButton && <button>back</button>}</div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Layout;
