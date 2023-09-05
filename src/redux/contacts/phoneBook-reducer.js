import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import * as phoneBookActions from "./phoneBook-actions";
import { fetchContacts, addContact, deleteContact } from "./phoneBook-operations";

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, action) => action.payload,
    [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,

})

const error = createReducer(null, {
    [fetchContacts.pending]: null,
    [fetchContacts.rejected]: (_, action) => action.payload,
    [addContact.pending]: null,
    [addContact.rejected]: (_, action) => action.payload,
    [deleteContact.pending]: null,
    [deleteContact.rejected]: (_,action) => action.payload,
})

const filter = createReducer("", {
    [phoneBookActions.changeFilter]: (_, action) => action.payload,
})

export default combineReducers({
    items,
    isLoading,
    error,
    filter,
})

