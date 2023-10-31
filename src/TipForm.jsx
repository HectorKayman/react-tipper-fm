import { FormInput } from "./FormInput";
import { FormRadio } from "./FormRadio";
import Dollar from "./images/icon-dollar.svg";
import People from "./images/icon-person.svg";

export function TipForm() {
  return (
    <form className="flex flex-col gap-10 py-3">
      <FormInput logo={Dollar}>Bill</FormInput>

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
        <input
          className="w-28 rounded-md border-2 border-VeryLightGrayishCyan bg-VeryLightGrayishCyan text-center text-2xl text-veryDarkCyan focus:border-2 focus:border-strongCyan focus:outline-none"
          type="text"
          placeholder="Custom"
        />
      </fieldset>

      <FormInput logo={People}>Number of People</FormInput>
    </form>
  );
}
