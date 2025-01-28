import { TransactionCreationFormProps } from "./TransactionCreationForm.types";

const TransactionCreationForm = ({
  onSubmit,
  onCancel,
}: TransactionCreationFormProps) => {
  console.log(onSubmit, onCancel);
  return <div>TransactionCreationForm</div>;
};

export default TransactionCreationForm;
