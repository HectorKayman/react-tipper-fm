import { useState } from "react";
import { FormInput } from "./FormInput";
import { FormRadio } from "./FormRadio";
import Dollar from "./images/icon-dollar.svg";
import People from "./images/icon-person.svg";

export function TipForm() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");

  function handleBillChange(e) {
    setBill(e.target.value);
  }

  function handlePeopleChange(e) {
    setPeople(e.target.value);
  }

  return (
    <form className="flex flex-col gap-10 py-3">
      <FormInput
        id="bill"
        value={bill}
        logo={Dollar}
        onInputChange={handleBillChange}
      >
        Bill
      </FormInput>

      <fieldset className="grid grid-cols-2 gap-3 small:grid-cols-3">
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
          className="rounded-md border-2 border-VeryLightGrayishCyan bg-VeryLightGrayishCyan text-center text-2xl text-veryDarkCyan focus:border-2 focus:border-strongCyan focus:outline-none small:w-28"
          type="text"
          placeholder="Custom"
        />
      </fieldset>

      <FormInput
        id="people"
        value={people}
        logo={People}
        onInputChange={handlePeopleChange}
      >
        Number of People
      </FormInput>
    </form>
  );
}
