import React, { useState, useRef, useEffect } from "react";
import { Button, List, Item, Container } from "./DropDownElements";

const DropDown = ({ title = "", items = [], onSelect, defaultType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const dropdown = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    onSelect && onSelect(selectedItem.name);
    setSelectedItem(selectedItem);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const calculateListHeight = () => {
    const items = [
      ...dropdown.current.querySelector(".dropdown__list").childNodes,
    ];

    return items.reduce((acc, item) => {
      acc += item.offsetHeight;
      return acc;
    }, 0);
  };

  const handleGlobalClick = (e) => {
    if (!dropdown.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleGlobalClick);

    defaultType
      ? setSelectedItem(items.find((item) => item.name === defaultType))
      : setSelectedItem(items[0]);
  }, []);

  return (
    <Container ref={dropdown}>
      <Button type="button" className="dropdown__header" onClick={handleClick}>
        <h3 className="dropdown__header__title">
          {title} {selectedItem.name}
        </h3>
        <h3 className="dropdown__header__state">{isOpen ? "Close" : "Open"}</h3>
      </Button>
      <List
        className="dropdown__list"
        style={{ height: isOpen ? calculateListHeight() : "0px" }}
      >
        {items &&
          items.map(({ id, name }) => {
            return (
              <Item
                key={id}
                className="dropdown__list__item"
                onClick={() => {
                  handleItemClick(id);
                }}
              >
                <span>{name}</span>
                <span>{id === selectedItem.id && "selected"}</span>
              </Item>
            );
          })}
      </List>
    </Container>
  );
};

export default DropDown;
