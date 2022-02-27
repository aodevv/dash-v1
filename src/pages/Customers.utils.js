export const customerTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];

export const renderHead = (item, index) => <th key={index}>{item}</th>;

export const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);
