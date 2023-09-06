/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "staff" */
  delete_staff?: Maybe<Staff_Mutation_Response>;
  /** delete single row from the table: "staff" */
  delete_staff_by_pk?: Maybe<Staff>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "staff" */
  insert_staff?: Maybe<Staff_Mutation_Response>;
  /** insert a single row into the table: "staff" */
  insert_staff_one?: Maybe<Staff>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "staff" */
  update_staff?: Maybe<Staff_Mutation_Response>;
  /** update single row of the table: "staff" */
  update_staff_by_pk?: Maybe<Staff>;
  /** update multiples rows of table: "staff" */
  update_staff_many?: Maybe<Array<Maybe<Staff_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_StaffArgs = {
  where: Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staff_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_StaffArgs = {
  objects: Array<Staff_Insert_Input>;
  on_conflict?: InputMaybe<Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staff_OneArgs = {
  object: Staff_Insert_Input;
  on_conflict?: InputMaybe<Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_StaffArgs = {
  _inc?: InputMaybe<Staff_Inc_Input>;
  _set?: InputMaybe<Staff_Set_Input>;
  where: Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_By_PkArgs = {
  _inc?: InputMaybe<Staff_Inc_Input>;
  _set?: InputMaybe<Staff_Set_Input>;
  pk_columns: Staff_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_ManyArgs = {
  updates: Array<Staff_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "staff" */
  staff: Array<Staff>;
  /** fetch aggregated fields from the table: "staff" */
  staff_aggregate: Staff_Aggregate;
  /** fetch data from the table: "staff" using primary key columns */
  staff_by_pk?: Maybe<Staff>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootStaffArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Query_RootStaff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Query_RootStaff_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** columns and relationships of "staff" */
export type Staff = {
  __typename?: 'staff';
  age: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  line_id?: Maybe<Scalars['String']['output']>;
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  x_username?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "staff" */
export type Staff_Aggregate = {
  __typename?: 'staff_aggregate';
  aggregate?: Maybe<Staff_Aggregate_Fields>;
  nodes: Array<Staff>;
};

/** aggregate fields of "staff" */
export type Staff_Aggregate_Fields = {
  __typename?: 'staff_aggregate_fields';
  avg?: Maybe<Staff_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staff_Max_Fields>;
  min?: Maybe<Staff_Min_Fields>;
  stddev?: Maybe<Staff_Stddev_Fields>;
  stddev_pop?: Maybe<Staff_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staff_Stddev_Samp_Fields>;
  sum?: Maybe<Staff_Sum_Fields>;
  var_pop?: Maybe<Staff_Var_Pop_Fields>;
  var_samp?: Maybe<Staff_Var_Samp_Fields>;
  variance?: Maybe<Staff_Variance_Fields>;
};


/** aggregate fields of "staff" */
export type Staff_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staff_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Staff_Avg_Fields = {
  __typename?: 'staff_avg_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "staff". All fields are combined with a logical 'AND'. */
export type Staff_Bool_Exp = {
  _and?: InputMaybe<Array<Staff_Bool_Exp>>;
  _not?: InputMaybe<Staff_Bool_Exp>;
  _or?: InputMaybe<Array<Staff_Bool_Exp>>;
  age?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  line_id?: InputMaybe<String_Comparison_Exp>;
  mobile?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  x_username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "staff" */
export enum Staff_Constraint {
  /** unique or primary key constraint on columns "email" */
  StaffEmailKey = 'staff_email_key',
  /** unique or primary key constraint on columns "id" */
  StaffPkey = 'staff_pkey'
}

/** input type for incrementing numeric columns in table "staff" */
export type Staff_Inc_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "staff" */
export type Staff_Insert_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  line_id?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  x_username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Staff_Max_Fields = {
  __typename?: 'staff_max_fields';
  age?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  line_id?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  x_username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Staff_Min_Fields = {
  __typename?: 'staff_min_fields';
  age?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  line_id?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  x_username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "staff" */
export type Staff_Mutation_Response = {
  __typename?: 'staff_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Staff>;
};

/** on_conflict condition type for table "staff" */
export type Staff_On_Conflict = {
  constraint: Staff_Constraint;
  update_columns?: Array<Staff_Update_Column>;
  where?: InputMaybe<Staff_Bool_Exp>;
};

/** Ordering options when selecting data from "staff". */
export type Staff_Order_By = {
  age?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  mobile?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  x_username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: staff */
export type Staff_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "staff" */
export enum Staff_Select_Column {
  /** column name */
  Age = 'age',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LineId = 'line_id',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  Name = 'name',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  XUsername = 'x_username'
}

/** input type for updating data in table "staff" */
export type Staff_Set_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  line_id?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  x_username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Staff_Stddev_Fields = {
  __typename?: 'staff_stddev_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Staff_Stddev_Pop_Fields = {
  __typename?: 'staff_stddev_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Staff_Stddev_Samp_Fields = {
  __typename?: 'staff_stddev_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "staff" */
export type Staff_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staff_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staff_Stream_Cursor_Value_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  line_id?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  x_username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Staff_Sum_Fields = {
  __typename?: 'staff_sum_fields';
  age?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "staff" */
export enum Staff_Update_Column {
  /** column name */
  Age = 'age',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LineId = 'line_id',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  Name = 'name',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  XUsername = 'x_username'
}

export type Staff_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staff_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staff_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staff_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staff_Var_Pop_Fields = {
  __typename?: 'staff_var_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Staff_Var_Samp_Fields = {
  __typename?: 'staff_var_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Staff_Variance_Fields = {
  __typename?: 'staff_variance_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "staff" */
  staff: Array<Staff>;
  /** fetch aggregated fields from the table: "staff" */
  staff_aggregate: Staff_Aggregate;
  /** fetch data from the table: "staff" using primary key columns */
  staff_by_pk?: Maybe<Staff>;
  /** fetch data from the table in a streaming manner: "staff" */
  staff_stream: Array<Staff>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootStaffArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Subscription_RootStaff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Subscription_RootStaff_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStaff_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staff_Stream_Cursor_Input>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name: Scalars['String']['output'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name: string }> };

export type CreateStaffMutationVariables = Exact<{
  id: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nickname: Scalars['String']['input'];
  age: Scalars['Int']['input'];
  mobile: Scalars['String']['input'];
  line_id?: InputMaybe<Scalars['String']['input']>;
  x_username?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateStaffMutation = { __typename?: 'mutation_root', insert_staff_one?: { __typename?: 'staff', id: string, email: string, name: string, nickname: string, age: number, mobile: string, line_id?: string | null, x_username?: string | null } | null };

export type GetStaffQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStaffQuery = { __typename?: 'query_root', staff: Array<{ __typename?: 'staff', email: string, name: string, nickname: string, age: number, mobile: string, line_id?: string | null, x_username?: string | null }> };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const CreateStaffDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStaff"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"age"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mobile"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"line_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"x_username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_staff_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"nickname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"age"},"value":{"kind":"Variable","name":{"kind":"Name","value":"age"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mobile"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mobile"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"line_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"line_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"x_username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"x_username"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"line_id"}},{"kind":"Field","name":{"kind":"Name","value":"x_username"}}]}}]}}]} as unknown as DocumentNode<CreateStaffMutation, CreateStaffMutationVariables>;
export const GetStaffDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStaff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"line_id"}},{"kind":"Field","name":{"kind":"Name","value":"x_username"}}]}}]}}]} as unknown as DocumentNode<GetStaffQuery, GetStaffQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "staff" */
  delete_staff?: Maybe<Staff_Mutation_Response>;
  /** delete single row from the table: "staff" */
  delete_staff_by_pk?: Maybe<Staff>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "staff" */
  insert_staff?: Maybe<Staff_Mutation_Response>;
  /** insert a single row into the table: "staff" */
  insert_staff_one?: Maybe<Staff>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "staff" */
  update_staff?: Maybe<Staff_Mutation_Response>;
  /** update single row of the table: "staff" */
  update_staff_by_pk?: Maybe<Staff>;
  /** update multiples rows of table: "staff" */
  update_staff_many?: Maybe<Array<Maybe<Staff_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_StaffArgs = {
  where: Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staff_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_StaffArgs = {
  objects: Array<Staff_Insert_Input>;
  on_conflict?: InputMaybe<Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staff_OneArgs = {
  object: Staff_Insert_Input;
  on_conflict?: InputMaybe<Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_StaffArgs = {
  _inc?: InputMaybe<Staff_Inc_Input>;
  _set?: InputMaybe<Staff_Set_Input>;
  where: Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_By_PkArgs = {
  _inc?: InputMaybe<Staff_Inc_Input>;
  _set?: InputMaybe<Staff_Set_Input>;
  pk_columns: Staff_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_ManyArgs = {
  updates: Array<Staff_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "staff" */
  staff: Array<Staff>;
  /** fetch aggregated fields from the table: "staff" */
  staff_aggregate: Staff_Aggregate;
  /** fetch data from the table: "staff" using primary key columns */
  staff_by_pk?: Maybe<Staff>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootStaffArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Query_RootStaff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Query_RootStaff_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** columns and relationships of "staff" */
export type Staff = {
  __typename?: 'staff';
  age: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  line_id?: Maybe<Scalars['String']['output']>;
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  x_username?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "staff" */
export type Staff_Aggregate = {
  __typename?: 'staff_aggregate';
  aggregate?: Maybe<Staff_Aggregate_Fields>;
  nodes: Array<Staff>;
};

/** aggregate fields of "staff" */
export type Staff_Aggregate_Fields = {
  __typename?: 'staff_aggregate_fields';
  avg?: Maybe<Staff_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staff_Max_Fields>;
  min?: Maybe<Staff_Min_Fields>;
  stddev?: Maybe<Staff_Stddev_Fields>;
  stddev_pop?: Maybe<Staff_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staff_Stddev_Samp_Fields>;
  sum?: Maybe<Staff_Sum_Fields>;
  var_pop?: Maybe<Staff_Var_Pop_Fields>;
  var_samp?: Maybe<Staff_Var_Samp_Fields>;
  variance?: Maybe<Staff_Variance_Fields>;
};


/** aggregate fields of "staff" */
export type Staff_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staff_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Staff_Avg_Fields = {
  __typename?: 'staff_avg_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "staff". All fields are combined with a logical 'AND'. */
export type Staff_Bool_Exp = {
  _and?: InputMaybe<Array<Staff_Bool_Exp>>;
  _not?: InputMaybe<Staff_Bool_Exp>;
  _or?: InputMaybe<Array<Staff_Bool_Exp>>;
  age?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  line_id?: InputMaybe<String_Comparison_Exp>;
  mobile?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  x_username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "staff" */
export enum Staff_Constraint {
  /** unique or primary key constraint on columns "email" */
  StaffEmailKey = 'staff_email_key',
  /** unique or primary key constraint on columns "id" */
  StaffPkey = 'staff_pkey'
}

/** input type for incrementing numeric columns in table "staff" */
export type Staff_Inc_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "staff" */
export type Staff_Insert_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  line_id?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  x_username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Staff_Max_Fields = {
  __typename?: 'staff_max_fields';
  age?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  line_id?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  x_username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Staff_Min_Fields = {
  __typename?: 'staff_min_fields';
  age?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  line_id?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  x_username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "staff" */
export type Staff_Mutation_Response = {
  __typename?: 'staff_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Staff>;
};

/** on_conflict condition type for table "staff" */
export type Staff_On_Conflict = {
  constraint: Staff_Constraint;
  update_columns?: Array<Staff_Update_Column>;
  where?: InputMaybe<Staff_Bool_Exp>;
};

/** Ordering options when selecting data from "staff". */
export type Staff_Order_By = {
  age?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  line_id?: InputMaybe<Order_By>;
  mobile?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  x_username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: staff */
export type Staff_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "staff" */
export enum Staff_Select_Column {
  /** column name */
  Age = 'age',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LineId = 'line_id',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  Name = 'name',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  XUsername = 'x_username'
}

/** input type for updating data in table "staff" */
export type Staff_Set_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  line_id?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  x_username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Staff_Stddev_Fields = {
  __typename?: 'staff_stddev_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Staff_Stddev_Pop_Fields = {
  __typename?: 'staff_stddev_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Staff_Stddev_Samp_Fields = {
  __typename?: 'staff_stddev_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "staff" */
export type Staff_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staff_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staff_Stream_Cursor_Value_Input = {
  age?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  line_id?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  x_username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Staff_Sum_Fields = {
  __typename?: 'staff_sum_fields';
  age?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "staff" */
export enum Staff_Update_Column {
  /** column name */
  Age = 'age',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LineId = 'line_id',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  Name = 'name',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  XUsername = 'x_username'
}

export type Staff_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staff_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staff_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staff_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staff_Var_Pop_Fields = {
  __typename?: 'staff_var_pop_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Staff_Var_Samp_Fields = {
  __typename?: 'staff_var_samp_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Staff_Variance_Fields = {
  __typename?: 'staff_variance_fields';
  age?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "staff" */
  staff: Array<Staff>;
  /** fetch aggregated fields from the table: "staff" */
  staff_aggregate: Staff_Aggregate;
  /** fetch data from the table: "staff" using primary key columns */
  staff_by_pk?: Maybe<Staff>;
  /** fetch data from the table in a streaming manner: "staff" */
  staff_stream: Array<Staff>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootStaffArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Subscription_RootStaff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Subscription_RootStaff_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStaff_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staff_Stream_Cursor_Input>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name: Scalars['String']['output'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name: string }> };

export type CreateStaffMutationVariables = Exact<{
  id: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nickname: Scalars['String']['input'];
  age: Scalars['Int']['input'];
  mobile: Scalars['String']['input'];
  line_id?: InputMaybe<Scalars['String']['input']>;
  x_username?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateStaffMutation = { __typename?: 'mutation_root', insert_staff_one?: { __typename?: 'staff', id: string, email: string, name: string, nickname: string, age: number, mobile: string, line_id?: string | null, x_username?: string | null } | null };

export type GetStaffQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStaffQuery = { __typename?: 'query_root', staff: Array<{ __typename?: 'staff', email: string, name: string, nickname: string, age: number, mobile: string, line_id?: string | null, x_username?: string | null }> };


export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    name
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const CreateStaffDocument = gql`
    mutation CreateStaff($id: String!, $email: String!, $name: String!, $nickname: String!, $age: Int!, $mobile: String!, $line_id: String, $x_username: String) {
  insert_staff_one(
    object: {id: $id, email: $email, name: $name, nickname: $nickname, age: $age, mobile: $mobile, line_id: $line_id, x_username: $x_username}
  ) {
    id
    email
    name
    nickname
    age
    mobile
    line_id
    x_username
  }
}
    `;
export type CreateStaffMutationFn = Apollo.MutationFunction<CreateStaffMutation, CreateStaffMutationVariables>;

/**
 * __useCreateStaffMutation__
 *
 * To run a mutation, you first call `useCreateStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStaffMutation, { data, loading, error }] = useCreateStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      nickname: // value for 'nickname'
 *      age: // value for 'age'
 *      mobile: // value for 'mobile'
 *      line_id: // value for 'line_id'
 *      x_username: // value for 'x_username'
 *   },
 * });
 */
export function useCreateStaffMutation(baseOptions?: Apollo.MutationHookOptions<CreateStaffMutation, CreateStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStaffMutation, CreateStaffMutationVariables>(CreateStaffDocument, options);
      }
export type CreateStaffMutationHookResult = ReturnType<typeof useCreateStaffMutation>;
export type CreateStaffMutationResult = Apollo.MutationResult<CreateStaffMutation>;
export type CreateStaffMutationOptions = Apollo.BaseMutationOptions<CreateStaffMutation, CreateStaffMutationVariables>;
export const GetStaffDocument = gql`
    query GetStaff {
  staff {
    email
    name
    nickname
    age
    mobile
    line_id
    x_username
  }
}
    `;

/**
 * __useGetStaffQuery__
 *
 * To run a query within a React component, call `useGetStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaffQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStaffQuery(baseOptions?: Apollo.QueryHookOptions<GetStaffQuery, GetStaffQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStaffQuery, GetStaffQueryVariables>(GetStaffDocument, options);
      }
export function useGetStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStaffQuery, GetStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStaffQuery, GetStaffQueryVariables>(GetStaffDocument, options);
        }
export type GetStaffQueryHookResult = ReturnType<typeof useGetStaffQuery>;
export type GetStaffLazyQueryHookResult = ReturnType<typeof useGetStaffLazyQuery>;
export type GetStaffQueryResult = Apollo.QueryResult<GetStaffQuery, GetStaffQueryVariables>;