import "./CategoryCard.scss";
import Arrow from "../../../images/Next.svg";
import { useHistory } from "react-router-dom";

export default function CategoryCard({ category }) {
  const history = useHistory();
  const clickHandler = category => {
    history.push(`/${category}`);
  }

  return (
    <div className="category-card-wrapper">
      <img src={category.img} alt="cat" />
      <div className="text fs-b">{category.name.toUpperCase()}</div>
      <img src={Arrow} onClick={() => clickHandler(category.name)} alt="next" />
    </div>
  );
}
