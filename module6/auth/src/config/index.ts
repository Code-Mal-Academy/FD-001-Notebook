import axios from "axios";

axios.defaults.headers.common.Authorization = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")!) : null