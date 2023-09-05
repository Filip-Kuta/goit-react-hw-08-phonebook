import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apiService from "services/ApiService";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts", async (_, { rejectWithValue }) => {
    try {
        const contacts = await apiService.fetchContacts();
        return contacts;
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
);

export const addContact = createAsyncThunk(
    "contacts/addContact", async (contact, { rejectWithValue }) => {
    try {
        const data = await apiService.addContact(contact);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
    
});

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async (id, { rejectWithValue }) => {
        try {
            await apiService.deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
});


