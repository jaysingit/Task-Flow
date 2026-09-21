import { Fragment } from "react";
import reactsvg from "../assets/react.svg";
import tssvg from "../assets/typescript.svg";
import vitesvg from "../assets/vite.svg";
import tailwindcss from "../assets/tailwind-css.svg";
import Clock from "./Clock";
import Logo from "./Logo";

const logos = [
  { src: reactsvg, name: "React" },
  { src: tssvg, name: "TypeScript" },
  { src: tailwindcss, name: "Tailwind CSS" },
  { src: vitesvg, name: "Vite" },
];

export default function ImageHeader() {
  return (
    <>
      <h1 className="h-10 font-bold text-center text-3xl text-black">
        Task Flow
      </h1>
      <Clock></Clock>
      <div className="flex items-center justify-center">
        {logos.map(({ src, name }, index) => (
          <Fragment key={name}>
            {index > 0 && <span className="mx-5"> + </span>}
            <Logo src={src} name={name} />
          </Fragment>
        ))}
      </div>
    </>
  );
}
