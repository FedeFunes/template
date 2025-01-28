export interface Transaction {
  id: string;
  merchantId: string;
  value: string;
  description: string;
  method: "credit_card" | "debit_card";
  cardNumber: string;
  cardHolderName: string;
  cardExpirationDate: string;
  create_date: string;
}

export interface TransactionCreationFormProps {
  onSubmit: (transaction: Transaction) => void;
  onCancel: () => void;
}
