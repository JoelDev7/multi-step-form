export default function Input({ label, id, type, placeholder, value }) {
  return (
    <>
      <label htmlFor={id} className="text-marine_blue text-sm mb-2">
        {label}
      </label>
      <input
        id={id}
        className="border border-light_gray px-4 py-2 font-medium mb-5 rounded-md"
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}
