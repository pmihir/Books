import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./PageByCategory.scss";
import Back from "../../../images/Back.svg";
import Search from "../../../images/Search.svg";
import Cancel from "../../../images/Cancel.svg"
import { useHistory } from "react-router-dom";
import { getBookByCat, getBookBySearch } from "../../../api/api";
import Book from "../../common/book/Book";

export default function PageByCategory() {
    const [searchText, setSearchText] = useState("");
    const [catData, setCatData] = useState([]);
    const { category } = useParams();
    const history = useHistory();
    const searchInput = React.useRef(null);
    const isfocus = document?.activeElement === searchInput?.current;
    const goBack = () => {
        history.push("/");
    }

    const cancelClicked = () => {
        setSearchText("");
    }

    const fetchSearchData = async (value) => {
        const res = await getBookBySearch(value);
        setCatData(res.results);
    }

    const searchTextHandler = (e) => {
        const value = e.target.value;
        setSearchText(value);
        const timer = setTimeout(async () => {
            fetchSearchData(value);
        }, 750);
        return () => {
            clearTimeout(timer);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await getBookByCat(category);
            setCatData(res.results);
            return res.results;
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="category-page-wrapper">
            <div className="title-search-wrapper">
                <div className="title-wrapper">
                    <img src={Back} onClick={goBack} alt="" />
                    <div className="title">{category}</div>
                </div>
                <div className={`${isfocus ? "search-wrapper" : "search-wrapper outline"}`}>
                    <img src={Search} alt="" />
                    <input type="text" ref={searchInput} onChange={e => searchTextHandler(e)} value={searchText} placeholder="search" />
                    {searchText?.length > 0 && <img src={Cancel} onClick={cancelClicked} alt="" />}
                </div>
            </div>
            <div className="result-wrapper">
                {catData.map(book => (
                    <Book key={book.id} id={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}