type Button = {
  title: string;
  className: string;
  onClick?: () => void;
  type?: "submit" | "reset";
};

export default function Button({
  title,
  className,
  onClick,
  type = "submit",
}: Button) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {title}
    </button>
  );
}
