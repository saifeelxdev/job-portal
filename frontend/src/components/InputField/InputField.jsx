function InputField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  className = '',
  id,
}) {
  return (
    <>
      <label className="text-xl" htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        className="text-lg px-2 py-2 rounded-lg"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}

export default InputField;
