const PriceBreakdown = ({ breakdown }) => (
  <table className="w-full">
    <tr><td>Park Fees</td><td>${breakdown.park}</td></tr>
    <tr><td>Accommodation</td><td>${breakdown.accommodation}</td></tr>
    {/* Add all */}
    <tr><td>Total</td><td>${breakdown.total}</td></tr>
  </table>
);

export default PriceBreakdown;
