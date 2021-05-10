import { Nav, Form, Input } from "./HeaderElements";
import { useGlobalContext } from "../../context";
import DropDown from "../DropDown";
import React from "react";
import sortByData from "./sortByData";

const Header = () => {
  const { setSearchValue, setSortBy } = useGlobalContext();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleOnSortSelect = (name) => {
    setSortBy(name);
  };

  return (
    <Nav>
      <Form>
        <Input
          placeholder="Enter country name..."
          onChange={handleInputChange}
        />
        <DropDown
          title="Sort by:"
          items={sortByData}
          onSelect={handleOnSortSelect}
        />
      </Form>
    </Nav>
  );
};

export default Header;
