import powerbi from "../../assets/power-bi.svg";
export default function IconPowerBI({ size = 24 }) {
  return (
    <img
      src={powerbi} // bạn nên tải SVG về và để vào public/icons/
      alt="Power BI"
      width={size}
      height={size}
      className="inline-block transition-all invert dark:invert-0"
    />
  );
}
