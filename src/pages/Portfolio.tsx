import Certifications from "@/components/Certifications";
import CircleDiagram from "@/components/CircleDiagram";
import ScrollDownIndicator from "@/components/ScrollDownIndicator";
import { Button } from "@/components/ui/button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const Portfolio = () => {
  return (
    <div className="py-20">
      <div className="flex flex-row w-full justify-evenly items-center min-h-[calc(100dvh-150px)]">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold">Van Ba Viet</h1>
          <div className="text-3xl font-light">Data Engineer</div>
          <div></div>
          <div className="flex gap-10">
            <Link to="projects" smooth={true} duration={500}>
              <Button variant="ghost" className="hover:scale-110">
                View projects
              </Button>
            </Link>
            <Button className="hover:scale-110">
              Get my CV
              <FontAwesomeIcon icon={faDownload} />
            </Button>
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center">
            <CircleDiagram />
          </div>
        </div>
      </div>
      <ScrollDownIndicator />
      <div className="flex flex-col justify-center items-center pt-15">
        <div className="text-4xl font-bold" id="myskills">
          My skills
        </div>
        <div className="min-h-screen"></div>
      </div>
      <div className="flex flex-col justify-center items-center pt-15">
        <div className="text-4xl font-bold" id="projects">
          Projects
        </div>
        <div className="min-h-screen"></div>
      </div>
      <div className="flex flex-col justify-center items-center pt-15">
        <div className="text-4xl font-bold" id="certifications">
          Certifications
        </div>
        <div className="w-full flex justify-center py-10">
          <Certifications />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
