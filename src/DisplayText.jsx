export function DisplayText({ children }) {
  return (
    <div
      className="flex justify-between gap-32
    "
    >
      <div>
        <legend className="text-white">{children}</legend>
        <legend className="text-grayishCyan">/ person</legend>
      </div>
      <div>
        <h3 className="text-5xl text-strongCyan">$0.00</h3>
      </div>
    </div>
  );
}
