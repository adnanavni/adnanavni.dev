import "../global.css";

export default function Footer() {
  const year: number = new Date().getFullYear();
  return <footer className="footer">© Adnan Avni 2023 - {year}</footer>;
}
