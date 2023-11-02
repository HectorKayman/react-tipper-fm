export function DisplayText({ children, amount }) {
  return (
    <div className="flex justify-between">
      <div>
        <legend className="text-white">{children}</legend>
        <legend className="text-grayishCyan">/ person</legend>
      </div>
      <div>
        <h3 className="text-4xl text-strongCyan small:text-5xl">
          ${amount ? amount : "0.00"}
        </h3>
      </div>
    </div>
  );
}
