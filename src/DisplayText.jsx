export function DisplayText({ children }) {
  return (
    <div
      className="flex justify-between small:gap-20 mid:gap-32
    "
    >
      <div>
        <legend className="text-white">{children}</legend>
        <legend className="text-grayishCyan">/ person</legend>
      </div>
      <div>
        <h3 className="text-4xl text-strongCyan small:text-5xl">$0.00</h3>
      </div>
    </div>
  );
}
