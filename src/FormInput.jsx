export function FormInput({ id, value, logo, onInputChange, children }) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-darkGrayishCyan" htmlFor={id}>
        {children}
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img className="sm:text-sm text-darkGrayishCyan" src={logo} alt="" />
        </div>
        <input
          className="w-full rounded-md border-2 border-VeryLightGrayishCyan bg-VeryLightGrayishCyan p-2 text-right text-2xl text-veryDarkCyan focus:border-2 focus:border-strongCyan focus:outline-none"
          type="text"
          id={id}
          placeholder="0"
          value={value}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}
