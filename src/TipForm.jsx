import { FormInput } from "./FormInput";
import { FormRadio } from "./FormRadio";
import DollarLogo from "./images/icon-dollar.svg";
import PeopleLogo from "./images/icon-person.svg";

export function TipForm({
  totalBill,
  people,
  tipPercent,
  handleBillChange,
  handlePeopleChange,
  handleTip,
  onCalculateBill,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onCalculateBill();
  }

  return (
    <form className="flex flex-col gap-10 py-3" onSubmit={handleSubmit}>
      <FormInput
        id="bill"
        value={totalBill}
        logo={DollarLogo}
        onInputChange={handleBillChange}
      >
        Bill
      </FormInput>

      <fieldset
        className="grid grid-cols-2 gap-3 small:grid-cols-3"
        value={tipPercent}
        onChange={handleTip}
      >
        <legend className="mb-2 text-darkGrayishCyan">Select Tip %</legend>
        <FormRadio id="tip-5" value="5" peer="five">
          5%
        </FormRadio>
        <FormRadio id="tip-10" value="10">
          10%
        </FormRadio>
        <FormRadio id="tip-15" value="15">
          15%
        </FormRadio>
        <FormRadio id="tip-20" value="20">
          20%
        </FormRadio>
        <FormRadio id="tip-25" value="25">
          25%
        </FormRadio>
        <input
          className="rounded-md border-2 border-VeryLightGrayishCyan bg-VeryLightGrayishCyan text-center text-2xl text-veryDarkCyan [appearance:textfield] focus:border-2 focus:border-strongCyan focus:outline-none small:w-28 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          type="number"
          placeholder="Custom"
        />
      </fieldset>

      <FormInput
        id="people"
        value={people}
        logo={PeopleLogo}
        onInputChange={handlePeopleChange}
      >
        Number of People
      </FormInput>
      <button className="hidden" type="submit"></button>
    </form>
  );
}
