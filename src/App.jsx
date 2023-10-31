export default function App() {
  return (
    <div className="rounded-3xl bg-white p-10 font-mono font-bold">
      <TipForm />
      <TipDisplay />
    </div>
  );
}

function TipForm() {
  return (
    <form className="flex flex-col gap-10">
      <FormInput />

      <fieldset className="grid grid-cols-3 gap-3">
        <legend className="mb-2 text-darkGrayishCyan">Select Tip %</legend>
        <FormRadio id="tip-5" value="5" peer="five">
          5%
        </FormRadio>
        <FormRadio id="tip-10" value="10" peer="ten">
          10%
        </FormRadio>
        <FormRadio id="tip-15" value="15" peer="fifteen">
          15%
        </FormRadio>
        <FormRadio id="tip-20" value="20" peer="twenty">
          20%
        </FormRadio>
        <FormRadio id="tip-25" value="25" peer="twentyFive">
          25%
        </FormRadio>
      </fieldset>

      <FormInput />
    </form>
  );
}

function FormInput() {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-darkGrayishCyan" htmlFor="bill">
        Bill
      </label>
      <input
        className="rounded-md bg-VeryLightGrayishCyan p-2 text-2xl "
        type="text"
        id="bill"
        placeholder="0"
      />
    </div>
  );
}

function FormRadio({ id, value, peer, children }) {
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
        className={`h-full w-full cursor-pointer rounded-md bg-veryDarkCyan py-2 text-center text-2xl text-white peer-checked/${peer}:bg-strongCyan`}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}

function TipDisplay() {
  return <div></div>;
}
