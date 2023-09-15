import React from "react";

interface Iprops {
  children: React.ReactNode;
}
const Main = ({ children }: Iprops) => {
  return <div>{children}</div>;
};

export default Main;
