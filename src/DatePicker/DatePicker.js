import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DatePicker = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    let dates = [];

    props.dates ? dates = props.dates : dates = [];

    const dropdownItems = dates.map( (date, i) => {
        return (
            <DropdownItem key={i} onClick={() => props.setPhotoDate(date)}>{date}</DropdownItem>
        );
    });


    return (
        <Dropdown className="text-center" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Select a date...
                </DropdownToggle>
            <DropdownMenu>
                {dropdownItems}
            </DropdownMenu>
        </Dropdown>
    );

}

export default DatePicker;