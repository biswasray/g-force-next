import { GraphQLResolveInfo } from "graphql";
import { api } from "./baseApi";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token: Scalars["String"]["output"];
  user: User;
};

export type Avatar = {
  __typename?: "Avatar";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  link: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createProfile: Profile;
  createRole: Role;
  deleteProfile: Profile;
  deleteRole: Role;
  deleteUser: User;
  signIn: AuthPayload;
  signUp: AuthPayload;
  updateProfile: Profile;
  updateRole: Role;
  updateUser: User;
};

export type MutationCreateProfileArgs = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationCreateRoleArgs = {
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationDeleteProfileArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteRoleArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationSignInArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationSignUpArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  roleId: Scalars["ID"]["input"];
  username: Scalars["String"]["input"];
};

export type MutationUpdateProfileArgs = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  lastName?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateRoleArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
  roleId?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type Profile = {
  __typename?: "Profile";
  avatar?: Maybe<Scalars["String"]["output"]>;
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["String"]["output"];
  createdBy: User;
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
  updatedBy: User;
  user: User;
  userId: Scalars["ID"]["output"];
};

export type Query = {
  __typename?: "Query";
  avatars: Array<Avatar>;
  me?: Maybe<User>;
  profile: Profile;
  profiles: Array<Profile>;
  role: Role;
  roles: Array<Role>;
  user: User;
  users: Array<User>;
};

export type QueryProfileArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRoleArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type Role = {
  __typename?: "Role";
  createdAt: Scalars["String"]["output"];
  createdBy: User;
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
  updatedBy: User;
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["String"]["output"];
  createdBy?: Maybe<User>;
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  profile?: Maybe<Profile>;
  role: Role;
  roleId: Scalars["ID"]["output"];
  updatedAt: Scalars["String"]["output"];
  updatedBy?: Maybe<User>;
  username: Scalars["String"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Avatar: ResolverTypeWrapper<Avatar>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Profile: ResolverTypeWrapper<Profile>;
  Query: ResolverTypeWrapper<{}>;
  Role: ResolverTypeWrapper<Role>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  Avatar: Avatar;
  Boolean: Scalars["Boolean"]["output"];
  ID: Scalars["ID"]["output"];
  Mutation: {};
  Profile: Profile;
  Query: {};
  Role: Role;
  String: Scalars["String"]["output"];
  User: User;
};

export type AuthPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuthPayload"] = ResolversParentTypes["AuthPayload"]
> = {
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvatarResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Avatar"] = ResolversParentTypes["Avatar"]
> = {
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  link?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createProfile?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateProfileArgs,
      "firstName" | "lastName" | "userId"
    >
  >;
  createRole?: Resolver<
    ResolversTypes["Role"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateRoleArgs, "description" | "name">
  >;
  deleteProfile?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProfileArgs, "id">
  >;
  deleteRole?: Resolver<
    ResolversTypes["Role"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteRoleArgs, "id">
  >;
  deleteUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, "id">
  >;
  signIn?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationSignInArgs, "email" | "password">
  >;
  signUp?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    RequireFields<
      MutationSignUpArgs,
      "email" | "password" | "roleId" | "username"
    >
  >;
  updateProfile?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProfileArgs, "id">
  >;
  updateRole?: Resolver<
    ResolversTypes["Role"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRoleArgs, "id">
  >;
  updateUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, "id">
  >;
};

export type ProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Profile"] = ResolversParentTypes["Profile"]
> = {
  avatar?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedBy?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  avatars?: Resolver<Array<ResolversTypes["Avatar"]>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  profile?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<QueryProfileArgs, "id">
  >;
  profiles?: Resolver<
    Array<ResolversTypes["Profile"]>,
    ParentType,
    ContextType
  >;
  role?: Resolver<
    ResolversTypes["Role"],
    ParentType,
    ContextType,
    RequireFields<QueryRoleArgs, "id">
  >;
  roles?: Resolver<Array<ResolversTypes["Role"]>, ParentType, ContextType>;
  user?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
  users?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type RoleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Role"] = ResolversParentTypes["Role"]
> = {
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedBy?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes["Profile"]>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes["Role"], ParentType, ContextType>;
  roleId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Avatar?: AvatarResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export type SignInMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  signIn: {
    __typename?: "AuthPayload";
    token: string;
    user: {
      __typename?: "User";
      id: string;
      email: string;
      role: { __typename?: "Role"; name: string };
    };
  };
};

export type GetRolesQueryVariables = Exact<{ [key: string]: never }>;

export type GetRolesQuery = {
  __typename?: "Query";
  roles: Array<{ __typename?: "Role"; id: string; name: string }>;
};

export const SignInDocument = `
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    token
    user {
      id
      email
      role {
        name
      }
    }
  }
}
    `;
export const GetRolesDocument = `
    query GetRoles {
  roles {
    id
    name
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    SignIn: build.mutation<SignInMutation, SignInMutationVariables>({
      query: (variables) => ({ document: SignInDocument, variables }),
    }),
    GetRoles: build.query<GetRolesQuery, GetRolesQueryVariables | void>({
      query: (variables) => ({ document: GetRolesDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as api };
export const { useSignInMutation, useGetRolesQuery, useLazyGetRolesQuery } =
  injectedRtkApi;
