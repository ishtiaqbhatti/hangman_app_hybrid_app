import { useQuery, QueryHookOptions } from '@apollo/react-hooks'
import { OperationVariables } from 'react-apollo'

export const useImperativeQuery = <TData = any, TVariables = OperationVariables>(
  query: any,
  options: QueryHookOptions<TData, TVariables> = {}
): any => {
  const { refetch, loading } = useQuery<TData, TVariables>(query, {
    ...options,
    skip: true,
  })
  return [refetch, loading]
}
