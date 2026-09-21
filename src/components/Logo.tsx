type Logo = {
  src: string;
  name: string;
};

export default function Logo({ src, name }: Logo) {
  return (
    <img
      className="w-15 h-28 object-contain"
      src={src}
      alt={name}
      title={name}
    ></img>
  );
}
