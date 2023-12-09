
interface Props {
  name: string;
  value: Array<string>;
}

export const CheckboxContainer = ({
  name,
  value,
}: Props) => {

  return (
    <div className="space-x-3">
      {value.map((item, index) =>
        <label key={index}>
          <input type="radio" name={name} />{item}
        </label>)}
    </div>
  );
};