// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata = {
  title: "@chewhx/google-books",
  description: "Javascript Wrapper to search for books on Google Books API",
};

const theme = createTheme({
  ...GeistSans.style,
  fontFamilyMonospace: GeistMono.style.fontFamily,
  primaryColor: "dark",
  primaryShade: 4,
  defaultRadius: "md",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
