export default function Input({ label, id, type, placeholder, value }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} value={value} />
    </>
  );
}
