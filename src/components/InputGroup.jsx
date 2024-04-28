import initial from "../InitialParameters";

export default function InputGroup({
  label,
  parameterName,
  value = initial[parameterName],
  onParameterChange,
}) {
  return (
    <div className="input-group">
      <p>
        <label>{label}</label>
        <input
          type="number"
          value={value}
          onChange={(e) => onParameterChange(e, parameterName)}
          required
        />
      </p>
    </div>
  );
}
