import type { ReactSetState } from "../types/utils.ts";

type Input = {
  inputValue: string;
  setInputValue: ReactSetState<string>;
};

export default function Input({ inputValue, setInputValue }: Input) {
  return (
    <>
      <input
        type="text"
        value={inputValue}
        className="w-full p-2 rounded-sm mb-2 border border-black"
        placeholder="Enter the task....."
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
    </>
  );
}
