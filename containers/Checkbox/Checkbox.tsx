function Checkbox({
  checked,
  onChange,
  label,
}: {
  label: string;
  checked: boolean;
  onChange: any;
}) {
  return (
    <label>
      <input checked={checked} onChange={onChange} type="checkbox" />
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;
