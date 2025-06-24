import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

const Footer = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };
  return (
    <div className="">
      <Separator />
      <div className="flex justify-between font-mono text-sm py-5 items-center px-5">
        <div className="basis-64 px-12 text-left">
          <div>
            <div>About this website</div>
            <div>
              <Link to="https://react.dev/" className="underline">
                React
              </Link>
            </div>
            <div>
              <Link to="https://ui.shadcn.com/docs" className="underline">
                Shadcn-ui
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex items-center justify-center ">
            {getGreeting()}
          </div>
          <div>
            © Copyright 2025. Made by
            <Link
              to="https://www.linkedin.com/in/vanbaviet-dev/"
              className="underline font-bold px-2"
            >
              Van Ba Viet
            </Link>
          </div>
        </div>
        <div className="basis-64 px-12 text-right ">
          <div>
            <div>Learning resources</div>
            <div>
              <Link
                to="https://www.youtube.com/watch?v=rfscVS0vtbw"
                className="underline"
              >
                Python
              </Link>
            </div>
          </div>
          <div>
            <Link to="" className="underline">
              SQL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
