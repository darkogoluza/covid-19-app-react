import { Nav, Form, Input, Button } from "./HeaderElements";

import React, { useState } from "react";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Handle search
  };

  return (
    <Nav>
      <Form onSubmit={handleFormSubmit}>
        <Input
          placeholder="Enter country name..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </Form>
    </Nav>
  );
};

export default Header;
