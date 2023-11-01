import { DisplayText } from "./DisplayText";

export function TipDisplay({ tipPerPerson, billPerPerson, onReset }) {
  return (
    <section className="flex flex-col gap-10 rounded-2xl bg-veryDarkCyan p-8 mid:gap-40">
      <div className="grid gap-10">
        <DisplayText amount={tipPerPerson}>Tip Amount</DisplayText>
        <DisplayText amount={billPerPerson}>Total</DisplayText>
      </div>
      <button
        className="mb-2 rounded-md bg-strongCyan py-2 text-2xl text-veryDarkCyan hover:bg-lightGrayishCyan  active:bg-opacity-80"
        onClick={onReset}
      >
        RESET
      </button>
    </section>
  );
}
