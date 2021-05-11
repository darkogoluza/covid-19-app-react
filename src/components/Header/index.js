import { Nav, Form, Input, ThemeButton } from "./HeaderElements";
import { useGlobalContext } from "../../context";
import DropDown from "../DropDown";
import React from "react";
import sortByData from "./sortByData";

const Header = () => {
  const {
    setSearchValue,
    setSortBy,
    isDarkTheme,
    setIsDarkTheme,
  } = useGlobalContext();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleOnSortSelect = (name) => {
    setSortBy(name);
  };

  return (
    <Nav>
      <Form>
        <ThemeButton
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          {isDarkTheme ? "Light" : "Dark"}
        </ThemeButton>
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
