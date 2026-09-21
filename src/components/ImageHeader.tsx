import reactsvg from "../assets/react.svg";
import tssvg from "../assets/typescript.svg";
import vitesvg from "../assets/vite.svg";

export default function ImageHeader() {
  return (
    <>
      <h1 className="h-10 font-bold text-center text-3xl text-black">
        Task Flow
      </h1>
      <div className="flex items-center justify-center">
        <img className="w-20 h-28 object-contain" src={reactsvg} alt=""></img>
        <span className="mx-5"> + </span>
        <img className="w-20 h-28 object-contain" src={tssvg} alt=""></img>
        <span className="mx-5"> + </span>
        <img className="w-20 h-28 object-contain" src={vitesvg} alt=""></img>
      </div>
    </>
  );
}
