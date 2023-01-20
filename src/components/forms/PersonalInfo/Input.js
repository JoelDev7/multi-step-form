export default function Input({ label, id, type, placeholder, error_message }) {
  return (
    <>
      <div className="flex justify-between">
        <label htmlFor={id} className="text-marine_blue text-sm mb-2">
          {label}
        </label>
        <p className="text-strawberry_red text-sm font-semibold opacity-95">
          {error_message}
        </p>
      </div>
      <input
        id={id}
        className="border border-light_gray text-marine_blue px-4 py-2 font-medium mb-5 rounded-md focus-within:outline-none focus-within:border-purplish_blue"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}
