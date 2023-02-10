import { ReactElement, ReactNode } from "react";
import { Hero } from "../components/hero";

export const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Hero />
      <main className="px-8 mt-8">{children}</main>
    </>
  );
};
