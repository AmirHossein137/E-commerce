import { Providers } from "./Providers";
import StoreProvider from "./StoreProvider";
import "./globals.css";

export const metadata = {
  title: "فروشگاه پیکودوز",
  description: "فروشگاه پیکودوز",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Providers>
            <div className="container px-4 mx-auto">{children}</div>
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
