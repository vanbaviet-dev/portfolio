import * as React from "react";
import { Link } from "react-router-dom";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import FlagKR from "../assets/flag-kr.svg";

import FlagUS from "../assets/flag-us.svg";

import Python from "../assets/python.svg";

import Sql from "../assets/sql.svg";

import Tools from "../assets/tools.svg";

import { Button } from "./ui/button";

const components: {
  title: string;
  href: string;
  description: string;
  icon: string | null;
}[] = [
  {
    title: "Korean",
    href: "/docs/kr",
    description:
      "Notes and lessons from my journey learning the Korean language.",
    icon: FlagKR,
  },
  {
    title: "English",
    href: "/docs/eng",
    description:
      "Reflections and tips on improving English skills, especially for non-native learners.",
    icon: FlagUS,
  },
  {
    title: "SQL",
    href: "/docs/sql",
    description:
      "Learnings and practical examples from working with SQL and databases.",
    icon: Sql,
  },
  {
    title: "Python",
    href: "/docs/python",
    description:
      "Python tutorials, code snippets, and real-world applications I've explored.",
    icon: Python,
  },
  {
    title: "Tools",
    href: "/docs/tools",
    description:
      "Useful tools, coding tricks, or small utilities I've picked up and used",
    icon: Tools,
  },
];

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between py-5">
      <div className="basis-64 flex justify-center items-center">
        <Link to="https://vanbaviet.dev" className="font-mono">
          <span className="text-2xl font-extrabold">vanbaviet</span>
          <span className="text-lg font-extralight">.dev</span>
        </Link>
      </div>
      <div className="">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Learning</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component.icon}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>List</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#">
                        <div className="font-medium">Components</div>
                        <div className="text-muted-foreground">
                          Browse all components in the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">
                        <div className="font-medium">Documentation</div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#">Components</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">Documentation</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">Blocks</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex-row items-center gap-2">
                        <CircleHelpIcon />
                        Backlog
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex-row items-center gap-2">
                        <CircleIcon />
                        To Do
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#" className="flex-row items-center gap-2">
                        <CircleCheckIcon />
                        Done
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="basis-64 flex justify-center items-center">
        <div className="flex justify-evenly items-center w-full">
          <Link to="https://github.com/vanbaviet-dev">
            <Button variant="link" size="sm">
              <IconBrandGithub />
            </Button>
          </Link>

          <Link to="https://www.linkedin.com/in/vanbaviet-dev/">
            <Button variant="link" size="sm">
              <IconBrandLinkedin />
            </Button>
          </Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  icon: string | null;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex justify-between items-center">
            <div className="text-sm leading-none font-medium">{title}</div>
            {icon != null ? <img src={icon} className="w-auto h-4" /> : <></>}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
