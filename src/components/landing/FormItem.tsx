

interface FormListProps {
  title: string;
  required: boolean;
}

export const FormItem = ({
  title,
  required,
}: FormListProps) => {

  return (
    <div>
      <p>{ title }</p>
      {
        required && <p>必須</p>
      }
    </div>
  );
};