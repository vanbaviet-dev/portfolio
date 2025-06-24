import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const Greeting = () => {
    return (
      <div className="flex flex-col items-center gap-16 ">
        <div className="flex flex-col items-center gap-3">
          <div className="font-bold text-5xl">Hi, I'm Van Ba Viet</div>
          <div className="font-bold text-3xl">Welcome to my website</div>
        </div>
        <div className=" flex flex-col items-center text-xl">
          <div>
            I created this website to share the knowledge I learned from my work
            process.
          </div>
          <div>
            I hope you will learn something interesting with my website.
          </div>
        </div>
        <div className="flex gap-10">
          <Button
            variant="ghost"
            size="lg"
            onClick={() => {
              navigate("/docs");
            }}
          >
            Documents
          </Button>
          <Button
            size="lg"
            onClick={() => {
              navigate("/portfolio");
            }}
          >
            My portfolio
          </Button>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Greeting />
    </div>
  );
};

export default Home;
