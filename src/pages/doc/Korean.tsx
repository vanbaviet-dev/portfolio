import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconAlphabetKorean,
  IconBook2,
  IconDeviceGamepad,
} from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Korean = () => {
  const navigate = useNavigate();
  const notAvailable = () => {
    toast.error("Not available");
  };
  return (
    <div className="grid grid-cols-12 gap-4 py-15">
      <div className="col-span-3"></div>
      <div className="col-span-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
          Korean
        </h1>
        <div className="py-2">
          <p className="text-muted-foreground text-xl leading-7 [&amp;:not(:first-child)]:mt-6">
            This is a place to share tips for learning Korean, necessary
            vocabulary, grammar, etc.
          </p>
          <p className="text-muted-foreground text-xl leading-7 [&amp;:not(:first-child)]:mt-6">
            I will use my native language (Vietnamese) to write this article. to
            make it easier to interpret Korean vocabulary and grammar.
          </p>
          <p className="text-muted-foreground text-xl leading-7 [&amp;:not(:first-child)]:mt-6">
            This section will be updated during my korean learning path.
          </p>
        </div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          The copyright
        </h2>
        <div className="flex flex-row items-center">
          <p> All copyrights of the materials I use belong to</p>
          <Link to="https://sejong.com.vn/">
            <Button variant="link">Sejong Center</Button>
          </Link>
        </div>
        <p>This website is created for educational purposes only.</p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Korean textbook
        </h2>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6 flex flex-col">
          I am using the Sejong textbook throughout my entire learning journey
        </p>
        <div className="flex flex-row my-2 gap-4">
          <a href="https://drive.google.com/drive/folders/1MYKtqWZJ0NNF65_wvvw1ckXNjCkItkBX?usp=sharing">
            <Button variant="default">
              Textbook <FontAwesomeIcon icon={faDownload} />
            </Button>
          </a>
          <a href="https://drive.google.com/drive/folders/1fftR4n-lTiRhA__4eKaKUD2cnWrMm7OZ?usp=sharing">
            <Button variant="ghost">
              Exercise books <FontAwesomeIcon icon={faDownload} />
            </Button>
          </a>{" "}
        </div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Korean vocabulary
        </h2>
        <div className="flex flex-row my-2 gap-4">
          <Button
            variant="default"
            onClick={() => {
              navigate("/kr/all/vocab");
            }}
          >
            Vocabulary <IconAlphabetKorean />
          </Button>
          <Button variant="ghost">
            Exercise <IconDeviceGamepad />
          </Button>
        </div>

        {/* Elementary */}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Elementary
        </h3>
        <div className="flex flex-row w-full justify-between items-center py-5">
          <Card className="min-w-xs min-h-60 max-w-xs hover:scale-110 cursor-pointer">
            <CardHeader>
              <CardTitle>Class A1</CardTitle>
              <CardDescription>
                This class is suitable for beginners who are starting to learn
                Korean
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex flex-row items-center">
                <IconBook2 />
                <Link to="https://drive.google.com/file/d/1K3M5NT7uHOgowhWwTlgs0Wkkwytn6iEx/view?usp=sharing">
                  <Button variant="link">Textbook</Button>
                </Link>
              </div>
              <div className="flex flex-row items-center">
                <IconBook2 />
                <Link to="https://drive.google.com/file/d/1UQUJFPYZ1UP8v1RsEZ7Gg1B2qCzRi4Mc/view?usp=sharing">
                  <Button variant="link">Exercise books</Button>
                </Link>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center text-xs justify-center max-w-1/2">
                  <p>
                    All copyrights of the materials I use belong to{" "}
                    <a
                      className="hover:underline"
                      href="https://sejong.com.vn/"
                    >
                      Sejong Center
                    </a>
                  </p>
                </div>
                <div>
                  <Button> Start </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="min-w-xs min-h-60 max-w-xs hover:scale-110 cursor-pointer">
            <CardHeader>
              <CardTitle>Class A2</CardTitle>
              <CardDescription>
                This class is suitable for beginners who are starting to learn
                Korean
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex flex-row items-center">
                <IconBook2 />
                {/* <Link to="https://drive.google.com/file/d/1K3M5NT7uHOgowhWwTlgs0Wkkwytn6iEx/view?usp=sharing"> */}
                <Button variant="link" onClick={notAvailable}>
                  Textbook
                </Button>
                {/* </Link> */}
              </div>
              <div className="flex flex-row items-center">
                <IconBook2 />
                {/* <Link to="https://drive.google.com/file/d/1UQUJFPYZ1UP8v1RsEZ7Gg1B2qCzRi4Mc/view?usp=sharing"> */}
                <Button variant="link" onClick={notAvailable}>
                  Exercise books
                </Button>
                {/* </Link> */}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center text-xs justify-center max-w-1/2">
                  <p>
                    All copyrights of the materials I use belong to{" "}
                    <a
                      className="hover:underline"
                      href="https://sejong.com.vn/"
                    >
                      Sejong Center
                    </a>
                  </p>
                </div>
                <div>
                  <Button> Start </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/*Intermediate*/}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Intermediate
        </h3>
        <div className="flex flex-row w-full justify-between items-center py-5 ">
          <Card className="min-w-xs min-h-60 max-w-xs hover:scale-110 cursor-pointer">
            <CardHeader>
              <CardTitle>Class B1</CardTitle>
              <CardDescription>
                This class is suitable for beginners who are starting to learn
                Korean
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex flex-row items-center">
                <IconBook2 />
                {/* <Link to="https://drive.google.com/file/d/1K3M5NT7uHOgowhWwTlgs0Wkkwytn6iEx/view?usp=sharing"> */}
                <Button variant="link" onClick={notAvailable}>
                  Textbook
                </Button>
                {/* </Link> */}
              </div>
              <div className="flex flex-row items-center">
                <IconBook2 />
                {/* <Link to="https://drive.google.com/file/d/1UQUJFPYZ1UP8v1RsEZ7Gg1B2qCzRi4Mc/view?usp=sharing"> */}
                <Button variant="link" onClick={notAvailable}>
                  Exercise books
                </Button>
                {/* </Link> */}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center text-xs justify-center max-w-1/2">
                  <p>
                    All copyrights of the materials I use belong to{" "}
                    <a
                      className="hover:underline"
                      href="https://sejong.com.vn/"
                    >
                      Sejong Center
                    </a>
                  </p>
                </div>
                <div>
                  <Button> Start </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="min-w-xs min-h-60 max-w-xs hover:scale-110 cursor-pointer">
            <CardHeader>
              <CardTitle>Class B2</CardTitle>
              <CardDescription>
                This class is suitable for beginners who are starting to learn
                Korean
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex flex-row items-center">
                <IconBook2 />
                {/* <Link to="https://drive.google.com/file/d/1K3M5NT7uHOgowhWwTlgs0Wkkwytn6iEx/view?usp=sharing"> */}
                <Button variant="link" onClick={notAvailable}>
                  Textbook
                </Button>
                {/* </Link> */}
              </div>
              <div className="flex flex-row items-center">
                <IconBook2 />
                {/* <Link to="https://drive.google.com/file/d/1UQUJFPYZ1UP8v1RsEZ7Gg1B2qCzRi4Mc/view?usp=sharing"> */}
                <Button variant="link" onClick={notAvailable}>
                  Exercise books
                </Button>
                {/* </Link> */}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center text-xs justify-center max-w-1/2">
                  <p>
                    All copyrights of the materials I use belong to{" "}
                    <a
                      className="hover:underline"
                      href="https://sejong.com.vn/"
                    >
                      Sejong Center
                    </a>
                  </p>
                </div>
                <div>
                  <Button> Start </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/*Advanced*/}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Advanced
        </h3>
        <div className="flex flex-row w-full justify-between items-center py-5">
          <Card className="min-w-xs min-h-60 max-w-xs hover:scale-110 cursor-pointer">
            <CardHeader>
              <CardTitle>Class C1</CardTitle>
              <CardDescription>
                This class is suitable for beginners who are starting to learn
                Korean
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex flex-row items-center">
                <IconBook2 />
                {/* <Link to="https://drive.google.com/file/d/1K3M5NT7uHOgowhWwTlgs0Wkkwytn6iEx/view?usp=sharing"> */}
                <Button variant="link" onClick={notAvailable}>
                  Textbook
                </Button>
                {/* </Link> */}
              </div>
              <div className="flex flex-row items-center">
                <IconBook2 />
                {/* <Link to="https://drive.google.com/file/d/1UQUJFPYZ1UP8v1RsEZ7Gg1B2qCzRi4Mc/view?usp=sharing"> */}
                <Button variant="link" onClick={notAvailable}>
                  Exercise books
                </Button>
                {/* </Link> */}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center text-xs justify-center max-w-1/2">
                  <p>
                    All copyrights of the materials I use belong to{" "}
                    <a
                      className="hover:underline"
                      href="https://sejong.com.vn/"
                    >
                      Sejong Center
                    </a>
                  </p>
                </div>
                <div>
                  <Button> Start </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="min-w-xs min-h-60 max-w-xs hover:scale-110 cursor-pointer">
            <CardHeader>
              <CardTitle>Class C2</CardTitle>
              <CardDescription>
                This class is suitable for beginners who are starting to learn
                Korean
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex flex-row items-center">
                <IconBook2 />
                {/* <Link to="https://drive.google.com/file/d/1K3M5NT7uHOgowhWwTlgs0Wkkwytn6iEx/view?usp=sharing"> */}
                <Button variant="link" onClick={notAvailable}>
                  Textbook
                </Button>
                {/* </Link> */}
              </div>
              <div className="flex flex-row items-center">
                <IconBook2 />
                {/* <Link to="https://drive.google.com/file/d/1UQUJFPYZ1UP8v1RsEZ7Gg1B2qCzRi4Mc/view?usp=sharing"> */}
                <Button variant="link" onClick={notAvailable}>
                  Exercise books
                </Button>
                {/* </Link> */}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center text-xs justify-center max-w-1/2">
                  <p>
                    All copyrights of the materials I use belong to{" "}
                    <a
                      className="hover:underline"
                      href="https://sejong.com.vn/"
                    >
                      Sejong Center
                    </a>
                  </p>
                </div>
                <div>
                  <Button> Start </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};
export default Korean;
