import { Provider } from "./Provider";
import "./globals.css";

export const metadata = {
  title: "فروشگاه پیکودوز",
  description: "فروشگاه پیکودوز",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
