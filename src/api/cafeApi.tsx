import axios from "axios";

const baseURL='http://192.168.101.76:8080/api';

const cafeApi= axios.create({baseURL});

export default cafeApi;