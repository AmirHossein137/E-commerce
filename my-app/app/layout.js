import { Providers } from "./Providers";
import StoreProvider from "./StoreProvider";
import "./globals.css";
import Header from "@/components/navbar/Header";

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
            <Header />
            <main>
              <div className="container px-4 mx-auto">{children}</div>
            </main>
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
