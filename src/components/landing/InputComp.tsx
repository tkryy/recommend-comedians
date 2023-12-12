interface Props {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputComp = ({
  name,
  value,
  onChange,
}: Props) => {

  return (
    <div>
      <input type="text" name={name} value={value} onChange={e => onChange(e)} />
    </div>
  );
};