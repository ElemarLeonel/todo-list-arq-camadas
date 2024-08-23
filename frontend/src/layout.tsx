import { ReactNode, FC } from "react";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = { children: ReactNode };

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2.5">
      <Navbar />
      {children}
      <ToastContainer />
    </div>
  );
};
