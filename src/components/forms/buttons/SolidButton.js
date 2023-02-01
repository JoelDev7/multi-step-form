export default function SolidButton({ text, form_id }) {
  return (
    <button
      className="text-white bg-marine_blue hover:bg-opacity-90 px-5 py-2 rounded-md"
      type="submit"
      form={form_id}
    >
      {text}
    </button>
  );
}
