import { Layout, DetailsCard } from "@/components/Shared";

const TransactionPage = ({ transactionId }: { transactionId: string }) => {
  return (
    <Layout title="Merchant Transaction - Detail" hasBackButton>
      <DetailsCard
        title="Transaction Details"
        subtitle="Transaction"
        data={[{ label: "Transaction ID", value: transactionId }]}
      />
    </Layout>
  );
};

export default TransactionPage;
