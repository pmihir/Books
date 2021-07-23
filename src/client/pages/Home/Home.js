import CategoryCard from "../../common/category-card/CategoryCard";
import Fiction from '../../../images/Fiction.svg';
import Philosophy from '../../../images/Philosophy.svg';
import Drama from '../../../images/Drama.svg';
import History from '../../../images/History.svg';
import Humour from '../../../images/Humour.svg';
import Adventure from '../../../images/Adventure.svg';
import Politics from '../../../images/Politics.svg';
import "./Home.scss";

export default function Home() {
  const categories = [
    {
      name: "Fiction",
      img: Fiction
    },
    {
      name: "Philosophy",
      img: Philosophy
    },
    {
      name: "Drama",
      img: Drama
    },
    {
      name: "History",
      img: History
    },
    {
      name: "Humour",
      img: Humour
    },
    {
      name: "Adventure",
      img: Adventure
    },
    {
      name: "Politics",
      img: Politics
    }
  ];
  return (
    <div className="home-wrapper">
      <div className="title">
        <div className="title-wrapper">
          <h1 className="title-text">Gutenberg Project</h1>
          <h2 className="title-subtext">
            A social cataloging website that allows you to freely search its
            database of books, annotations, and reviews.
          </h2>
        </div>
      </div>
      <div className="category-inner-wrapper">
        <div className="categories">
          {categories.map((cat, index) => (
            <CategoryCard key={index} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
