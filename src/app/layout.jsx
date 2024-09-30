import { Main } from "@/components/Main";
import "./globals.css";

export const metadata = {
  title: "Elige que comer!",
  description: "Crea tu lista de comidas, y ve nuevas comidas para hacer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Main />
        <hr />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
