import { type QueryParams } from "sanity";
import { sanityClient } from "sanity:client";

type FetchQueryOptions = {
    query: string
    params?: QueryParams
}

export const loadQuery = async <QueryResponse>({ query, params }: FetchQueryOptions) => {
    const { result } = await sanityClient.fetch<QueryResponse>(query, params ?? {}, { filterResponse: false });
    return { data: result }
}