import { Nav, Form, Input } from "./HeaderElements";
import { useGlobalContext } from "../../context";
import React, { useState } from "react";

const Header = () => {
  const { setSearchValue } = useGlobalContext();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Nav>
      <Form>
        <Input
          placeholder="Enter country name..."
          onChange={handleInputChange}
        />
      </Form>
    </Nav>
  );
};

export default Header;
