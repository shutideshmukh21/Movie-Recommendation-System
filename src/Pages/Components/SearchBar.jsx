import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/SearchBarStyles.css";

function SearchBar({ movies = [], placeholder }) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [notFound, setNotFound] = useState(false);

    const handleChange = (event) => {
        const wordEntered = event.target.value.trim();
        setInputValue(wordEntered);

        if (!wordEntered) {
            setFilteredMovies([]);
            setNotFound(false);
            return;
        }

        // Filter movies based on input value
        const newFilter = movies.filter((movie) =>
            movie.toLowerCase().includes(wordEntered.toLowerCase())
        );

        setFilteredMovies(newFilter);
        setNotFound(newFilter.length === 0);
    };

    const handleSubmit = () => {
        const normalizedInput = inputValue.trim().toLowerCase();

        // Check if the input matches any movie exactly
        const foundMovie = movies.find(
            (movie) => movie.toLowerCase() === normalizedInput
        );

        if (foundMovie) {
            navigate(`/search/${foundMovie}`);
            setNotFound(false);
        } else {
            setNotFound(true);
        }
    };

    return (
        <div className="SearchBody">
            <div className="CompleteBar">
                <div className="BAR">
                    <input
                        placeholder={placeholder}
                        className="searchingbar"
                        type="text"
                        title="Search"
                        value={inputValue}
                        onChange={handleChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSubmit();
                            }
                        }}
                    />
                    <button className="search-button" onClick={handleSubmit}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>

            {notFound && (
                <div className="NotFound">
                    Sorry! The Movie You Searched for is not present in our database.
                </div>
            )}

            {filteredMovies.length > 0 && (
                <div className="searchList">
                    {filteredMovies.slice(0, 10).map((movie, index) => (
                        <div
                            key={index}
                            className="searchItem"
                            onClick={() => navigate(`/search/${movie}`)}
                        >
                            {movie}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;