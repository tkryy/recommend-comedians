interface FormListProps {
  title: string;
  required: boolean;
}
export const FormItem = ({
  title,
  required,
}: FormListProps) => {

  return (
    <div className="flex space-x-4 ">
      <p >{ title }</p>
      {
        required && <p className="text-white bg-red-600 rounded">必須</p>
      }
    </div>
  );
};