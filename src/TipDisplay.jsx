import { DisplayText } from "./DisplayText";

export function TipDisplay() {
  return (
    <section className="flex flex-col gap-10 rounded-2xl bg-veryDarkCyan p-8 mid:gap-40">
      <div className="grid gap-10">
        <DisplayText>Tip Amount</DisplayText>
        <DisplayText>Total</DisplayText>
      </div>
      <button className="mb-2 rounded-md bg-strongCyan py-2 text-2xl text-veryDarkCyan hover:bg-lightGrayishCyan">
        RESET
      </button>
    </section>
  );
}
