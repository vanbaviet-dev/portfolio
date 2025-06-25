import spark from "../../assets/spark.svg";
export default function IconPySpark({ size = 24 }) {
  return (
    <img
      src={spark} // Tải từ Wikipedia hoặc logo PySpark chính thức
      alt="PySpark"
      width={size}
      height={size}
      className="inline-block transition-all invert dark:invert-0"
    />
  );
}
