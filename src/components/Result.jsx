import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
function getTableData(data) {
  let result = [];

  let totalInterest = 0;
  let totalInvestment = data[0].valueEndOfYear - data[0].interest;

  for (const entry of data) {
    totalInterest += entry.interest;

    result.push({
      year: entry.year,
      investmentValue: formatter.format(entry.valueEndOfYear),
      interestThisYear: formatter.format(entry.interest),
      totalInterest: formatter.format(totalInterest),
      investedCapital: formatter.format(totalInvestment),
    });
    totalInvestment += entry.annualInvestment;
  }

  return result;
}

export default function Result({ parameters }) {
  const data = calculateInvestmentResults(parameters);

  const tableData = data.length > 0 && getTableData(data);

  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((data, index) => {
            return (
              <tr key={index} className="center">
                <td>{data.year}</td>
                <td>{data.investmentValue}</td>
                <td>{data.interestThisYear}</td>
                <td>{data.totalInterest}</td>
                <td>{data.investedCapital}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
