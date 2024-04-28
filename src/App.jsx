import Header from "./components/Header";
import Result from "./components/Result";
import { useState } from "react";
import initial from "./InitialParameters";
import InputGroup from "./components/InputGroup";

function App() {
  const [parameters, setParameters] = useState(initial);

  function handleParameterChange(event, parameterName) {
    setParameters((currentValues) => {
      const updateValues = {
        ...currentValues,
        [parameterName]: parseInt(event.target.value),
      };
      return updateValues;
    });
  }

  const isValidInput = parameters.duration > 0;

  return (
    <>
      <Header />
      <section id="user-input">
        <InputGroup
          label={"Initial Investment"}
          value={parameters.initialInvestment}
          parameterName={"initialInvestment"}
          onParameterChange={handleParameterChange}
        />
        <InputGroup
          label={"Annual Investment"}
          value={parameters.annualInvestment}
          parameterName={"annualInvestment"}
          onParameterChange={handleParameterChange}
        />
        <InputGroup
          label={"Expected Return"}
          value={parameters.expectedReturn}
          parameterName={"expectedReturn"}
          onParameterChange={handleParameterChange}
        />
        <InputGroup
          label={"Duration"}
          value={parameters.duration}
          parameterName={"duration"}
          onParameterChange={handleParameterChange}
        />
      </section>
      {isValidInput ? (
        <Result parameters={parameters} />
      ) : (
        <p className="center">Please enter a valid duration.</p>
      )}
    </>
  );
}

export default App;
