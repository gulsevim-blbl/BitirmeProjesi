import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          style={{ width: "400px" }}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          style={{
            color: "black",
            backgroundColor: "white",
            borderColor: "black",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "white";
            e.target.style.backgroundColor = "black";
            e.target.style.borderColor = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "black";
            e.target.style.backgroundColor = "white";
            e.target.style.borderColor = "black";
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
