import { TransactionPage } from "@/components/Pages";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <TransactionPage transactionId={id} />;
}
