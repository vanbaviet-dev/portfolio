import { Link } from "react-router-dom";
import CertificationUnit from "./CertificationUnit";
import { Card } from "./ui/card";

const Certifications = () => {
  const certifications = [
    {
      type: "HackerRank",
      title: "HackerRank",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      size: "w-5 h-5",
      list: [
        {
          title: "SQL (Basic)",
          url: "https://www.hackerrank.com/certificates/16c7898789f2",
        },
        {
          title: "SQL (Intermediate)",
          url: "https://www.hackerrank.com/certificates/add3aab26a3c",
        },
        {
          title: "Software Engineer",
          url: "https://www.hackerrank.com/certificates/4bd460075020",
        },
      ],
    },
    {
      type: "Oracle",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      size: "w-20 h-10",
    },
    ,
    {
      type: "Microsoft",
      title: "Microsoft Fabric",
      image:
        "https://static.wikia.nocookie.net/logopedia/images/a/aa/Microsoft_Fabric_2023.svg",
      size: "w-5 h-5",
    },
  ];

  return (
    <Card className="max-w-5xl">
      <div className="flex flex-row items-start justify-evenly w-full">
        {certifications.map((certification) => (
          <div className="flex flex-col items-center justify-center max-w-3xs min-w-3xs">
            <div
              key={certification?.type}
              className="flex flex-row items-center justify-center min-h-10"
            >
              <img
                src={certification?.image}
                alt={certification?.type}
                className={certification?.size}
              />
              {certification?.title && (
                <p className="text-sm font-bold px-2">{certification?.title}</p>
              )}
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              {certification?.list?.map((item) => (
                <div className="flex flex-col items-center justify-center">
                  <Link to={item.url} className="py-2 hover:scale-110">
                    <CertificationUnit title={item?.title} status="Verified" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
export default Certifications;
