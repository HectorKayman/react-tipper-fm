import { TipDisplay } from "./TipDisplay";
import { TipForm } from "./TipForm";

export default function App() {
  return (
    <div className="flex gap-10 bg-white p-8 font-mono font-bold max-mid:my-10 max-mid:flex-col max-small:my-0 small:rounded-3xl">
      <TipForm />
      <TipDisplay />
    </div>
  );
}
