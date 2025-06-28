import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://tugas14-klient-faris-ql1k3ndvv.vercel.app/", // alamat json-server
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
