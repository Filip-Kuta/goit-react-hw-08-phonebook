import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { Label, Input } from "../ContactForm/ContactForm.styled";
import { phoneBookSelectors, phoneBookActions} from "redux/contacts";

function Filter() {
    const value = useSelector(phoneBookSelectors.getFilter);
    const dispatch = useDispatch();

    return (
        <Label>Find contacts by name
            <Input
                type="text"
                value={value}
                onChange={(e) => dispatch(phoneBookActions.changeFilter(e.target.value))} />
        </Label>
    )
}

export default Filter; 
