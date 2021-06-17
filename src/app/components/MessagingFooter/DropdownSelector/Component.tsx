
import { IUser } from "app/types";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import {IoIosArrowDown} from 'react-icons/io';

type CustomToggleProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {};
};

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(
  (props: CustomToggleProps, ref: React.Ref<HTMLAnchorElement>) => (
    <a
      href="https://www.leboncoin.com"
      ref={ref}
      onClick={e => {
        e.preventDefault();
        if (props.onClick) props.onClick(e);
      }}
    >
      {props.children}
      <span style={{ paddingLeft: "5px" }}><IoIosArrowDown /></span>
    </a>
  )
);

type CustomMenuProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  labeledBy?: string;
};

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  (props: CustomMenuProps, ref: React.Ref<HTMLDivElement>) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={props.style}
        className={props.className}
        aria-labelledby={props.labeledBy}
      >
        <FormControl
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(props.children).filter(
            (child: any) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

interface DropdownSelectorProps {
  classname: string;
  data?: Array<IUser>;
  chooseOption: (selectedOption:number) => string;
}

export const DropdownSelector = ({classname, data, chooseOption}:DropdownSelectorProps) => {
  const [selectedOption, setSelectedOption] = useState(99999);


  return (
    <Dropdown onSelect={(e: string | null) => setSelectedOption(Number(e))} className={classname}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {chooseOption(selectedOption)}
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item key='Public-xdsjsd-9999' eventKey='99999'>
              Public
            </Dropdown.Item>
        {data?.map(option => {
          return (
            <Dropdown.Item key={option.id} eventKey={option.id.toString()}>
              {option.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
