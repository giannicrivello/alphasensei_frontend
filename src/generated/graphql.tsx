import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  users: Array<User>;
  techniques: Array<Technique>;
  filterByRank: Array<Technique>;
  me?: Maybe<User>;
  myTechnique: Technique;
  drills: Array<Drills>;
  gifs: Array<Gif>;
  gif_to_technique: Array<Gif>;
};


export type QueryFilterByRankArgs = {
  rank: Scalars['String'];
};


export type QueryMyTechniqueArgs = {
  rank: Scalars['String'];
};


export type QueryGif_To_TechniqueArgs = {
  technique: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  age: Scalars['String'];
  gender: Scalars['String'];
  myRank: Scalars['String'];
};

export type Technique = {
  __typename?: 'Technique';
  title: Scalars['String'];
  description: Scalars['String'];
  videoLink: Scalars['String'];
  rank: Scalars['String'];
  category: Scalars['String'];
};

export type Drills = {
  __typename?: 'Drills';
  title: Scalars['String'];
  num_reps: Scalars['Float'];
  num_sets: Scalars['Float'];
  technique: Scalars['Float'];
};

export type Gif = {
  __typename?: 'Gif';
  gif_link: Scalars['String'];
  technique: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  registerUser: Scalars['Boolean'];
  login: LoginResponse;
  registerTechnique: Technique;
  registerDrills: Array<Drills>;
  registerGifs: Array<Gif>;
};


export type MutationRegisterUserArgs = {
  myRank: Scalars['String'];
  gender: Scalars['String'];
  age: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterTechniqueArgs = {
  rank: Scalars['String'];
  category: Scalars['String'];
  videoLink: Scalars['String'];
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationRegisterDrillsArgs = {
  technique: Scalars['Float'];
  num_sets: Scalars['Float'];
  num_reps: Scalars['Float'];
  title: Scalars['String'];
};


export type MutationRegisterGifsArgs = {
  technique: Scalars['Float'];
  gif_link: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type BlackTechQueryVariables = Exact<{ [key: string]: never; }>;


export type BlackTechQuery = (
  { __typename?: 'Query' }
  & { filterByRank: Array<(
    { __typename?: 'Technique' }
    & Pick<Technique, 'title' | 'description' | 'videoLink' | 'rank' | 'category'>
  )> }
);

export type BrownTechQueryVariables = Exact<{ [key: string]: never; }>;


export type BrownTechQuery = (
  { __typename?: 'Query' }
  & { filterByRank: Array<(
    { __typename?: 'Technique' }
    & Pick<Technique, 'title' | 'description' | 'videoLink' | 'rank' | 'category'>
  )> }
);

export type GetAllTechQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTechQuery = (
  { __typename?: 'Query' }
  & { techniques: Array<(
    { __typename?: 'Technique' }
    & Pick<Technique, 'title' | 'description' | 'videoLink' | 'category' | 'rank'>
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'lastName' | 'email' | 'password' | 'age' | 'gender' | 'myRank'>
    ) }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'email' | 'myRank' | 'gender'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  age: Scalars['String'];
  gender: Scalars['String'];
  myRank: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'registerUser'>
);


export const BlackTechDocument = gql`
    query BlackTech {
  filterByRank(rank: "black") {
    title
    description
    videoLink
    rank
    category
  }
}
    `;

/**
 * __useBlackTechQuery__
 *
 * To run a query within a React component, call `useBlackTechQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlackTechQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlackTechQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlackTechQuery(baseOptions?: Apollo.QueryHookOptions<BlackTechQuery, BlackTechQueryVariables>) {
        return Apollo.useQuery<BlackTechQuery, BlackTechQueryVariables>(BlackTechDocument, baseOptions);
      }
export function useBlackTechLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlackTechQuery, BlackTechQueryVariables>) {
          return Apollo.useLazyQuery<BlackTechQuery, BlackTechQueryVariables>(BlackTechDocument, baseOptions);
        }
export type BlackTechQueryHookResult = ReturnType<typeof useBlackTechQuery>;
export type BlackTechLazyQueryHookResult = ReturnType<typeof useBlackTechLazyQuery>;
export type BlackTechQueryResult = Apollo.QueryResult<BlackTechQuery, BlackTechQueryVariables>;
export const BrownTechDocument = gql`
    query BrownTech {
  filterByRank(rank: "brown") {
    title
    description
    videoLink
    rank
    category
  }
}
    `;

/**
 * __useBrownTechQuery__
 *
 * To run a query within a React component, call `useBrownTechQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrownTechQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrownTechQuery({
 *   variables: {
 *   },
 * });
 */
export function useBrownTechQuery(baseOptions?: Apollo.QueryHookOptions<BrownTechQuery, BrownTechQueryVariables>) {
        return Apollo.useQuery<BrownTechQuery, BrownTechQueryVariables>(BrownTechDocument, baseOptions);
      }
export function useBrownTechLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrownTechQuery, BrownTechQueryVariables>) {
          return Apollo.useLazyQuery<BrownTechQuery, BrownTechQueryVariables>(BrownTechDocument, baseOptions);
        }
export type BrownTechQueryHookResult = ReturnType<typeof useBrownTechQuery>;
export type BrownTechLazyQueryHookResult = ReturnType<typeof useBrownTechLazyQuery>;
export type BrownTechQueryResult = Apollo.QueryResult<BrownTechQuery, BrownTechQueryVariables>;
export const GetAllTechDocument = gql`
    query getAllTech {
  techniques {
    title
    description
    videoLink
    category
    rank
  }
}
    `;

/**
 * __useGetAllTechQuery__
 *
 * To run a query within a React component, call `useGetAllTechQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTechQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTechQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTechQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTechQuery, GetAllTechQueryVariables>) {
        return Apollo.useQuery<GetAllTechQuery, GetAllTechQueryVariables>(GetAllTechDocument, baseOptions);
      }
export function useGetAllTechLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTechQuery, GetAllTechQueryVariables>) {
          return Apollo.useLazyQuery<GetAllTechQuery, GetAllTechQueryVariables>(GetAllTechDocument, baseOptions);
        }
export type GetAllTechQueryHookResult = ReturnType<typeof useGetAllTechQuery>;
export type GetAllTechLazyQueryHookResult = ReturnType<typeof useGetAllTechLazyQuery>;
export type GetAllTechQueryResult = Apollo.QueryResult<GetAllTechQuery, GetAllTechQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    user {
      firstName
      lastName
      email
      password
      age
      gender
      myRank
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    firstName
    email
    myRank
    gender
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($firstName: String!, $lastName: String!, $email: String!, $password: String!, $age: String!, $gender: String!, $myRank: String!) {
  registerUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
    age: $age
    gender: $gender
    myRank: $myRank
  )
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options tquery BlackTech{
  filterByRank(rank: "black"){
    title,
    description,
    videoLink,
    rank,
    category
    
  }
}hat will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      age: // value for 'age'
 *      gender: // value for 'gender'
 *      myRank: // value for 'myRank'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;