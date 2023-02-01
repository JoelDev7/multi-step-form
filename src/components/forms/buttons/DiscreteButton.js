export default function DiscreteButton({
  text,
  action = () => console.log(text + " button pressed"),
}) {
  return (
    <button
      className="text-cool_gray font-semibold hover:text-marine_blue  px-5 py-2 rounded-md"
      onClick={() => action()}
    >
      {text}
    </button>
  );
}
