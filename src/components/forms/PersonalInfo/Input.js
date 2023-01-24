export default function Input({
  label,
  id,
  type,
  placeholder,
  register,
  validators,
  show_error,
  error_message,
}) {
  return (
    <>
      <div className="flex justify-between">
        <label htmlFor={id} className="text-marine_blue text-sm mb-2">
          {label}
        </label>
        {show_error ? (
          <p className="text-strawberry_red text-sm font-semibold opacity-95">
            {error_message}
          </p>
        ) : null}
      </div>
      <input
        id={id}
        className={
          " text-marine_blue px-4 py-2 font-medium mb-5 rounded-md focus-within:outline-none focus-within:border-purplish_blue" +
          (show_error
            ? " border border-strawberry_red border-opacity-70"
            : " border border-light_gray")
        }
        type={type}
        placeholder={placeholder}
        {...register(id, validators)}
      />
    </>
  );
}
