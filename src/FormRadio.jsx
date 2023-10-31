export function FormRadio({ id, value, peer, children }) {
  return (
    <div className="flex h-12 w-28 items-center justify-center">
      <input
        className={`peer/${peer} hidden`}
        type="radio"
        name="tip-percent"
        id={id}
        value={value}
      />
      <label
        className={`h-full w-full cursor-pointer rounded-md bg-veryDarkCyan py-2 text-center text-2xl text-white  hover:bg-lightGrayishCyan hover:text-veryDarkCyan peer-checked/${peer}:bg-strongCyan`}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}