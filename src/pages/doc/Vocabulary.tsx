import { useParams } from "react-router-dom";

const Vocabulary = () => {
  const { class: classParam } = useParams<{ class: string }>();
  return (
    <div>
      <div>{classParam}</div>
    </div>
  );
};
export default Vocabulary;
