import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function register(userData) {
  const data = await axios.post(`/users/signup`, userData);
  console.log(data);
  return data;
}

export async function logIn(userData) {
  const data = await axios.post(`/users/login`, userData);
  return data;
}

export async function logOut() {
  const data = await axios.post(`/users/logout`);
  return data;
}

export async function currentUser() {
  const data = await axios.get(`/users/current`);
  return data;
}

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(contact) {
const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}


