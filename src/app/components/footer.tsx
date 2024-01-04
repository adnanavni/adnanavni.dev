import "../global.css";

export default function Footer() {
  const year: number = new Date().getFullYear();
  return <footer className="StyledFooter">© Adnan Avni 2023 - {year}</footer>;
}
