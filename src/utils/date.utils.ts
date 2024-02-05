export default function formatISO8601ToMMYY(dateISO: string) {
  const date = new Date(dateISO);

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);

  return `${month}/${year}`;
}
