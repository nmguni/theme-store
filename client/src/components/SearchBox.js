import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Themes..."
        className="mr-sm-2 ml-sm-5"
        style={{ padding: "5px" }}
      ></Form.Control>
      <Button style={{ padding: "0" }} variant="link" type="submit">
        <i
          style={{ fontSize: "14px", color: "rgba(2, 2, 2, 0.62)" }}
          className="fas fa-search"
        ></i>
      </Button>
    </Form>
  );
};

export default SearchBox;
