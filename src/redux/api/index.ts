import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://brand-store.up.railway.app",
  prepareHeaders: (headers) => {
    const localToken = localStorage.getItem("token");
    console.log(localToken);

    if (localToken) {
      headers.set("Authorization", `Bearer ${localToken}`);
    }
    return headers;
  },
  // credentials: "include",
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnReconnect: true,
  refetchOnFocus: false,
  tagTypes: ["user"],
  endpoints: () => ({}),
});
