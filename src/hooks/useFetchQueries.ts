import { QueryKey, useQueries, UseQueryOptions, UseQueryResult } from "react-query"
import { fetchResocureThrowOnError } from "../fetch/fetchResourceThrowOnError"

export const useFetchQueries = <T>(resocures: string[], options?: UseQueryOptions<T, unknown,T, QueryKey>) : UseQueryResult<T>[]=> useQueries(resocures.map(resocure=>({
    queryKey: [resocure],
    queryFn: () => fetchResocureThrowOnError(resocure),
}))) as UseQueryResult<T>[]