import { QueryKey, useQuery, UseQueryOptions } from "react-query"
import { fetchResocureThrowOnError } from "../fetch/fetchResourceThrowOnError"

export const useFetchQuery = <T>(resocure: string, options?: UseQueryOptions<T, unknown,T, QueryKey>)=> useQuery<T>(resocure, 
    () => fetchResocureThrowOnError(resocure) as Promise<T>, options)