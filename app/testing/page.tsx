import Colors from "./components/Colors";
import ComponentsTesting from "./components/ComponentsTesting";
import GrayTesting from "./components/Gray";
import Typography from "./components/Typography";

export default function TestingPage() {
  return (
    <div className="bg-white  px-2 py-8 flex flex-col items-center">
      <h1 className="mb-6">Testing Page for components</h1>
      <Typography />
      <Colors />
      <GrayTesting />
      <ComponentsTesting />
    </div>
  );
}
