import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b2b12150ce1847538e867ad79a83a700",
  },
});
