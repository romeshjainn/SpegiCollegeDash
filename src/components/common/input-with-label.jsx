export const LabelInput = ({
  label,
  type,
  value,
  placeholder,
  handleInput,
  name,
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInput}
        className="border-2 border-gray-400 p-2 rounded-md"
      />
    </div>
  );
};
