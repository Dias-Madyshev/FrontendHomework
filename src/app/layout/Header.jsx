import Header from "../components/Header";

export default function HeaderLayaout({ children }) {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
}
