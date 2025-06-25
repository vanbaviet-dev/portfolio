import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faJava,
  faReact,
  faUbuntu,
} from "@fortawesome/free-brands-svg-icons";
import IconPowerBI from "./icons/IconPowerBI";
import IconPySpark from "./icons/IconPySpark";
import { IconStack3 } from "@tabler/icons-react";
import AnimatedDashedLine from "./AnimatedDashedLine";
import { useTheme } from "../components/theme-provider";
import { Link } from "react-scroll";
const items = [
  { label: "SQL", icon: <FontAwesomeIcon icon={faDatabase} fontSize={24} /> },
  { label: "Python", icon: <FontAwesomeIcon icon={faPython} fontSize={24} /> },
  { label: "Java", icon: <FontAwesomeIcon icon={faJava} fontSize={24} /> },
  { label: "React", icon: <FontAwesomeIcon icon={faReact} fontSize={24} /> },
  { label: "Ubuntu", icon: <FontAwesomeIcon icon={faUbuntu} fontSize={24} /> },
  { label: "Power Bi", icon: <IconPowerBI /> },
  { label: "PySpark", icon: <IconPySpark /> },
];

export default function CircleDiagram() {
  const radius = 180;
  const center = 200;
  const angleStep = (2 * Math.PI) / items.length;
  const { getTheme } = useTheme();
  return (
    <div className="relative w-[400px] h-[400px] mx-auto my-10">
      {/* All lines in one SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-10"
        viewBox="0 0 400 400"
      >
        {items.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);

          return (
            <AnimatedDashedLine
              key={i}
              x1={x}
              y1={y}
              x2={center}
              y2={center}
              color={getTheme() === "light" ? "black" : "white"}
            />
          );
        })}
      </svg>

      {/* Center circle */}
      <Link to="myskills" smooth={true} duration={500}>
        <Button
          variant="skill"
          className="absolute left-1/2 top-1/2 w-[120px] h-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-center p-4 hover:scale-110 z-10"
        >
          <div className="flex flex-col items-center justify-center gap-1.5">
            <IconStack3 />
            <div>My skills</div>
          </div>
        </Button>
      </Link>

      {/* Outer skills */}
      {items.map((item, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);

        return (
          <Button
            variant="skill"
            key={i}
            className="absolute w-[80px] h-[80px] rounded-full flex flex-col items-center justify-center text-sm text-center shadow-md hover:scale-110 z-10"
            style={{
              left: `${x - 40}px`,
              top: `${y - 40}px`,
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <div>{item.icon}</div>
              <div>{item.label}</div>
            </div>
          </Button>
        );
      })}
    </div>
  );
}
