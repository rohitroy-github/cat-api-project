// api data fetching code

import axios from "axios";

export const baseURL = "https://api.thecatapi.com/v1";

export const fetchAPI = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "x-api-key":
        "live_GT4JJ6QqiVdOu8LQKdxnzHjHWUHvkGOPl0SrK2oLnEzyglgdpeWb2IEr6Vpl032L",
    },
  });

  return data;
};
