import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineUserDelete } from "react-icons/ai"
import { ContactListContainer, ContactListItem, Button } from "./ContactList.styled";
import { phoneBookOperations, phoneBookSelectors} from "redux/contacts";

export default function ContactList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(phoneBookOperations.fetchContacts());
    }, [dispatch]);

    const contacts = useSelector(phoneBookSelectors.getVisibleContacts);

    return (
        <ContactListContainer>
            {contacts.length > 0 && contacts.map(({id, name, number}) => (
                <ContactListItem key={id}>
                    {name}: {number}
                    <Button onClick={() => dispatch(phoneBookOperations.deleteContact(id))}>
                        <AiOutlineUserDelete />
                        Delete</Button>
                </ContactListItem>
            ))}
        </ContactListContainer>
    )
}