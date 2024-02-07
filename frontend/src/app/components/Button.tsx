interface IButton {
  title: string;
  type: "button" | "submit" | "reset";
}

export default function Button({ title }: IButton) {
  return (
    <button
      className="bg-primary w-full text-black font-medium rounded-md py-2"
      type="submit"
    >
      <span>{title}</span>
    </button>
  );
}
