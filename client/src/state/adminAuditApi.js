import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// We're using a simple fetchBaseQuery without any custom headers or authentication
const simpleFetchBaseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL_ASP,
});

export const adminAuditApi = createApi({
  baseQuery: simpleFetchBaseQuery,
  reducerPath: "adminAuditApi",
  tagTypes: ["AuditLogs"],
  endpoints: (build) => ({
    getAuditLogs: build.query({
      query: () => "management/auditLogs",
      providesTags: ["AuditLogs"],
    }),
    // Add more endpoints here as needed
  }),
});

export const {
  useGetAuditLogsQuery,
  // Add more exports for other hooks here as needed
} = adminAuditApi;
