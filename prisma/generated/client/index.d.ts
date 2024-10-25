
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model verification_token
 * 
 */
export type verification_token = $Result.DefaultSelection<Prisma.$verification_tokenPayload>
/**
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>
/**
 * Model sessions
 * 
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model user_roles
 * 
 */
export type user_roles = $Result.DefaultSelection<Prisma.$user_rolesPayload>
/**
 * Model permission
 * 
 */
export type permission = $Result.DefaultSelection<Prisma.$permissionPayload>
/**
 * Model role_permissions
 * 
 */
export type role_permissions = $Result.DefaultSelection<Prisma.$role_permissionsPayload>
/**
 * Model database_metric
 * 
 */
export type database_metric = $Result.DefaultSelection<Prisma.$database_metricPayload>
/**
 * Model lecture
 * 
 */
export type lecture = $Result.DefaultSelection<Prisma.$lecturePayload>
/**
 * Model presence
 * 
 */
export type presence = $Result.DefaultSelection<Prisma.$presencePayload>
/**
 * Model schedule
 * 
 */
export type schedule = $Result.DefaultSelection<Prisma.$schedulePayload>
/**
 * Model subject
 * 
 */
export type subject = $Result.DefaultSelection<Prisma.$subjectPayload>
/**
 * Model teacher_subjects
 * 
 */
export type teacher_subjects = $Result.DefaultSelection<Prisma.$teacher_subjectsPayload>
/**
 * Model teacher
 * 
 */
export type teacher = $Result.DefaultSelection<Prisma.$teacherPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Verification_tokens
 * const verification_tokens = await prisma.verification_token.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Verification_tokens
   * const verification_tokens = await prisma.verification_token.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.verification_token`: Exposes CRUD operations for the **verification_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verification_tokens
    * const verification_tokens = await prisma.verification_token.findMany()
    * ```
    */
  get verification_token(): Prisma.verification_tokenDelegate<ExtArgs>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs>;

  /**
   * `prisma.user_roles`: Exposes CRUD operations for the **user_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles
    * const user_roles = await prisma.user_roles.findMany()
    * ```
    */
  get user_roles(): Prisma.user_rolesDelegate<ExtArgs>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.permissionDelegate<ExtArgs>;

  /**
   * `prisma.role_permissions`: Exposes CRUD operations for the **role_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Role_permissions
    * const role_permissions = await prisma.role_permissions.findMany()
    * ```
    */
  get role_permissions(): Prisma.role_permissionsDelegate<ExtArgs>;

  /**
   * `prisma.database_metric`: Exposes CRUD operations for the **database_metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Database_metrics
    * const database_metrics = await prisma.database_metric.findMany()
    * ```
    */
  get database_metric(): Prisma.database_metricDelegate<ExtArgs>;

  /**
   * `prisma.lecture`: Exposes CRUD operations for the **lecture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lectures
    * const lectures = await prisma.lecture.findMany()
    * ```
    */
  get lecture(): Prisma.lectureDelegate<ExtArgs>;

  /**
   * `prisma.presence`: Exposes CRUD operations for the **presence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presences
    * const presences = await prisma.presence.findMany()
    * ```
    */
  get presence(): Prisma.presenceDelegate<ExtArgs>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.scheduleDelegate<ExtArgs>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.subjectDelegate<ExtArgs>;

  /**
   * `prisma.teacher_subjects`: Exposes CRUD operations for the **teacher_subjects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teacher_subjects
    * const teacher_subjects = await prisma.teacher_subjects.findMany()
    * ```
    */
  get teacher_subjects(): Prisma.teacher_subjectsDelegate<ExtArgs>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.teacherDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    verification_token: 'verification_token',
    accounts: 'accounts',
    sessions: 'sessions',
    users: 'users',
    role: 'role',
    user_roles: 'user_roles',
    permission: 'permission',
    role_permissions: 'role_permissions',
    database_metric: 'database_metric',
    lecture: 'lecture',
    presence: 'presence',
    schedule: 'schedule',
    subject: 'subject',
    teacher_subjects: 'teacher_subjects',
    teacher: 'teacher'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "verification_token" | "accounts" | "sessions" | "users" | "role" | "user_roles" | "permission" | "role_permissions" | "database_metric" | "lecture" | "presence" | "schedule" | "subject" | "teacher_subjects" | "teacher"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      verification_token: {
        payload: Prisma.$verification_tokenPayload<ExtArgs>
        fields: Prisma.verification_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verification_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verification_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          findFirst: {
            args: Prisma.verification_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verification_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          findMany: {
            args: Prisma.verification_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>[]
          }
          create: {
            args: Prisma.verification_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          createMany: {
            args: Prisma.verification_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.verification_tokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>[]
          }
          delete: {
            args: Prisma.verification_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          update: {
            args: Prisma.verification_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          deleteMany: {
            args: Prisma.verification_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verification_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.verification_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verification_tokenPayload>
          }
          aggregate: {
            args: Prisma.Verification_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification_token>
          }
          groupBy: {
            args: Prisma.verification_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Verification_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.verification_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<Verification_tokenCountAggregateOutputType> | number
          }
        }
      }
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      user_roles: {
        payload: Prisma.$user_rolesPayload<ExtArgs>
        fields: Prisma.user_rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          findFirst: {
            args: Prisma.user_rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          findMany: {
            args: Prisma.user_rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>[]
          }
          create: {
            args: Prisma.user_rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          createMany: {
            args: Prisma.user_rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>[]
          }
          delete: {
            args: Prisma.user_rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          update: {
            args: Prisma.user_rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          deleteMany: {
            args: Prisma.user_rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolesPayload>
          }
          aggregate: {
            args: Prisma.User_rolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_roles>
          }
          groupBy: {
            args: Prisma.user_rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_rolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_rolesCountArgs<ExtArgs>
            result: $Utils.Optional<User_rolesCountAggregateOutputType> | number
          }
        }
      }
      permission: {
        payload: Prisma.$permissionPayload<ExtArgs>
        fields: Prisma.permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.permissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.permissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          findFirst: {
            args: Prisma.permissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.permissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          findMany: {
            args: Prisma.permissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>[]
          }
          create: {
            args: Prisma.permissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          createMany: {
            args: Prisma.permissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.permissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>[]
          }
          delete: {
            args: Prisma.permissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          update: {
            args: Prisma.permissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          deleteMany: {
            args: Prisma.permissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.permissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.permissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.permissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.permissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      role_permissions: {
        payload: Prisma.$role_permissionsPayload<ExtArgs>
        fields: Prisma.role_permissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.role_permissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.role_permissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          findFirst: {
            args: Prisma.role_permissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.role_permissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          findMany: {
            args: Prisma.role_permissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>[]
          }
          create: {
            args: Prisma.role_permissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          createMany: {
            args: Prisma.role_permissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.role_permissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>[]
          }
          delete: {
            args: Prisma.role_permissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          update: {
            args: Prisma.role_permissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          deleteMany: {
            args: Prisma.role_permissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.role_permissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.role_permissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionsPayload>
          }
          aggregate: {
            args: Prisma.Role_permissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole_permissions>
          }
          groupBy: {
            args: Prisma.role_permissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Role_permissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.role_permissionsCountArgs<ExtArgs>
            result: $Utils.Optional<Role_permissionsCountAggregateOutputType> | number
          }
        }
      }
      database_metric: {
        payload: Prisma.$database_metricPayload<ExtArgs>
        fields: Prisma.database_metricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.database_metricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_metricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.database_metricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_metricPayload>
          }
          findFirst: {
            args: Prisma.database_metricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_metricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.database_metricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_metricPayload>
          }
          findMany: {
            args: Prisma.database_metricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_metricPayload>[]
          }
          create: {
            args: Prisma.database_metricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_metricPayload>
          }
          createMany: {
            args: Prisma.database_metricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.database_metricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_metricPayload>[]
          }
          delete: {
            args: Prisma.database_metricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_metricPayload>
          }
          update: {
            args: Prisma.database_metricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_metricPayload>
          }
          deleteMany: {
            args: Prisma.database_metricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.database_metricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.database_metricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$database_metricPayload>
          }
          aggregate: {
            args: Prisma.Database_metricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatabase_metric>
          }
          groupBy: {
            args: Prisma.database_metricGroupByArgs<ExtArgs>
            result: $Utils.Optional<Database_metricGroupByOutputType>[]
          }
          count: {
            args: Prisma.database_metricCountArgs<ExtArgs>
            result: $Utils.Optional<Database_metricCountAggregateOutputType> | number
          }
        }
      }
      lecture: {
        payload: Prisma.$lecturePayload<ExtArgs>
        fields: Prisma.lectureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lectureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lectureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          findFirst: {
            args: Prisma.lectureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lectureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          findMany: {
            args: Prisma.lectureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>[]
          }
          create: {
            args: Prisma.lectureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          createMany: {
            args: Prisma.lectureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lectureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>[]
          }
          delete: {
            args: Prisma.lectureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          update: {
            args: Prisma.lectureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          deleteMany: {
            args: Prisma.lectureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lectureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lectureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          aggregate: {
            args: Prisma.LectureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecture>
          }
          groupBy: {
            args: Prisma.lectureGroupByArgs<ExtArgs>
            result: $Utils.Optional<LectureGroupByOutputType>[]
          }
          count: {
            args: Prisma.lectureCountArgs<ExtArgs>
            result: $Utils.Optional<LectureCountAggregateOutputType> | number
          }
        }
      }
      presence: {
        payload: Prisma.$presencePayload<ExtArgs>
        fields: Prisma.presenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.presenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.presenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presencePayload>
          }
          findFirst: {
            args: Prisma.presenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.presenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presencePayload>
          }
          findMany: {
            args: Prisma.presenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presencePayload>[]
          }
          create: {
            args: Prisma.presenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presencePayload>
          }
          createMany: {
            args: Prisma.presenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.presenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presencePayload>[]
          }
          delete: {
            args: Prisma.presenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presencePayload>
          }
          update: {
            args: Prisma.presenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presencePayload>
          }
          deleteMany: {
            args: Prisma.presenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.presenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.presenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presencePayload>
          }
          aggregate: {
            args: Prisma.PresenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresence>
          }
          groupBy: {
            args: Prisma.presenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.presenceCountArgs<ExtArgs>
            result: $Utils.Optional<PresenceCountAggregateOutputType> | number
          }
        }
      }
      schedule: {
        payload: Prisma.$schedulePayload<ExtArgs>
        fields: Prisma.scheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.scheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.scheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          findFirst: {
            args: Prisma.scheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.scheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          findMany: {
            args: Prisma.scheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[]
          }
          create: {
            args: Prisma.scheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          createMany: {
            args: Prisma.scheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.scheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[]
          }
          delete: {
            args: Prisma.scheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          update: {
            args: Prisma.scheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          deleteMany: {
            args: Prisma.scheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.scheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.scheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.scheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.scheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      subject: {
        payload: Prisma.$subjectPayload<ExtArgs>
        fields: Prisma.subjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          findFirst: {
            args: Prisma.subjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          findMany: {
            args: Prisma.subjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[]
          }
          create: {
            args: Prisma.subjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          createMany: {
            args: Prisma.subjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[]
          }
          delete: {
            args: Prisma.subjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          update: {
            args: Prisma.subjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          deleteMany: {
            args: Prisma.subjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.subjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.subjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.subjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      teacher_subjects: {
        payload: Prisma.$teacher_subjectsPayload<ExtArgs>
        fields: Prisma.teacher_subjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teacher_subjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_subjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teacher_subjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_subjectsPayload>
          }
          findFirst: {
            args: Prisma.teacher_subjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_subjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teacher_subjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_subjectsPayload>
          }
          findMany: {
            args: Prisma.teacher_subjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_subjectsPayload>[]
          }
          create: {
            args: Prisma.teacher_subjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_subjectsPayload>
          }
          createMany: {
            args: Prisma.teacher_subjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teacher_subjectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_subjectsPayload>[]
          }
          delete: {
            args: Prisma.teacher_subjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_subjectsPayload>
          }
          update: {
            args: Prisma.teacher_subjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_subjectsPayload>
          }
          deleteMany: {
            args: Prisma.teacher_subjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teacher_subjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.teacher_subjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_subjectsPayload>
          }
          aggregate: {
            args: Prisma.Teacher_subjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher_subjects>
          }
          groupBy: {
            args: Prisma.teacher_subjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Teacher_subjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.teacher_subjectsCountArgs<ExtArgs>
            result: $Utils.Optional<Teacher_subjectsCountAggregateOutputType> | number
          }
        }
      }
      teacher: {
        payload: Prisma.$teacherPayload<ExtArgs>
        fields: Prisma.teacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          findFirst: {
            args: Prisma.teacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          findMany: {
            args: Prisma.teacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>[]
          }
          create: {
            args: Prisma.teacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          createMany: {
            args: Prisma.teacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>[]
          }
          delete: {
            args: Prisma.teacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          update: {
            args: Prisma.teacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          deleteMany: {
            args: Prisma.teacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.teacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.teacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.teacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    presence: number
    user_roles: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presence?: boolean | UsersCountOutputTypeCountPresenceArgs
    user_roles?: boolean | UsersCountOutputTypeCountUser_rolesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPresenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: presenceWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    user_roles: number
    role_permissions: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles?: boolean | RoleCountOutputTypeCountUser_rolesArgs
    role_permissions?: boolean | RoleCountOutputTypeCountRole_permissionsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUser_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRole_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionsWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    role_permissions: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role_permissions?: boolean | PermissionCountOutputTypeCountRole_permissionsArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRole_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionsWhereInput
  }


  /**
   * Count Type LectureCountOutputType
   */

  export type LectureCountOutputType = {
    presence: number
  }

  export type LectureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presence?: boolean | LectureCountOutputTypeCountPresenceArgs
  }

  // Custom InputTypes
  /**
   * LectureCountOutputType without action
   */
  export type LectureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureCountOutputType
     */
    select?: LectureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LectureCountOutputType without action
   */
  export type LectureCountOutputTypeCountPresenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: presenceWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    lecture: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture?: boolean | ScheduleCountOutputTypeCountLectureArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountLectureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lectureWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    teacher_subjects: number
    lecture: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_subjects?: boolean | SubjectCountOutputTypeCountTeacher_subjectsArgs
    lecture?: boolean | SubjectCountOutputTypeCountLectureArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTeacher_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacher_subjectsWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountLectureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lectureWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    teacher_subjects: number
    lecture: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_subjects?: boolean | TeacherCountOutputTypeCountTeacher_subjectsArgs
    lecture?: boolean | TeacherCountOutputTypeCountLectureArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountTeacher_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacher_subjectsWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountLectureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lectureWhereInput
  }


  /**
   * Models
   */

  /**
   * Model verification_token
   */

  export type AggregateVerification_token = {
    _count: Verification_tokenCountAggregateOutputType | null
    _min: Verification_tokenMinAggregateOutputType | null
    _max: Verification_tokenMaxAggregateOutputType | null
  }

  export type Verification_tokenMinAggregateOutputType = {
    identifier: string | null
    expires: Date | null
    token: string | null
  }

  export type Verification_tokenMaxAggregateOutputType = {
    identifier: string | null
    expires: Date | null
    token: string | null
  }

  export type Verification_tokenCountAggregateOutputType = {
    identifier: number
    expires: number
    token: number
    _all: number
  }


  export type Verification_tokenMinAggregateInputType = {
    identifier?: true
    expires?: true
    token?: true
  }

  export type Verification_tokenMaxAggregateInputType = {
    identifier?: true
    expires?: true
    token?: true
  }

  export type Verification_tokenCountAggregateInputType = {
    identifier?: true
    expires?: true
    token?: true
    _all?: true
  }

  export type Verification_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verification_token to aggregate.
     */
    where?: verification_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verification_tokens to fetch.
     */
    orderBy?: verification_tokenOrderByWithRelationInput | verification_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verification_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verification_tokens
    **/
    _count?: true | Verification_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Verification_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Verification_tokenMaxAggregateInputType
  }

  export type GetVerification_tokenAggregateType<T extends Verification_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification_token[P]>
      : GetScalarType<T[P], AggregateVerification_token[P]>
  }




  export type verification_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verification_tokenWhereInput
    orderBy?: verification_tokenOrderByWithAggregationInput | verification_tokenOrderByWithAggregationInput[]
    by: Verification_tokenScalarFieldEnum[] | Verification_tokenScalarFieldEnum
    having?: verification_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Verification_tokenCountAggregateInputType | true
    _min?: Verification_tokenMinAggregateInputType
    _max?: Verification_tokenMaxAggregateInputType
  }

  export type Verification_tokenGroupByOutputType = {
    identifier: string
    expires: Date
    token: string
    _count: Verification_tokenCountAggregateOutputType | null
    _min: Verification_tokenMinAggregateOutputType | null
    _max: Verification_tokenMaxAggregateOutputType | null
  }

  type GetVerification_tokenGroupByPayload<T extends verification_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Verification_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Verification_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Verification_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Verification_tokenGroupByOutputType[P]>
        }
      >
    >


  export type verification_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    expires?: boolean
    token?: boolean
  }, ExtArgs["result"]["verification_token"]>

  export type verification_tokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    expires?: boolean
    token?: boolean
  }, ExtArgs["result"]["verification_token"]>

  export type verification_tokenSelectScalar = {
    identifier?: boolean
    expires?: boolean
    token?: boolean
  }


  export type $verification_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verification_token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      expires: Date
      token: string
    }, ExtArgs["result"]["verification_token"]>
    composites: {}
  }

  type verification_tokenGetPayload<S extends boolean | null | undefined | verification_tokenDefaultArgs> = $Result.GetResult<Prisma.$verification_tokenPayload, S>

  type verification_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<verification_tokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Verification_tokenCountAggregateInputType | true
    }

  export interface verification_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verification_token'], meta: { name: 'verification_token' } }
    /**
     * Find zero or one Verification_token that matches the filter.
     * @param {verification_tokenFindUniqueArgs} args - Arguments to find a Verification_token
     * @example
     * // Get one Verification_token
     * const verification_token = await prisma.verification_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verification_tokenFindUniqueArgs>(args: SelectSubset<T, verification_tokenFindUniqueArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Verification_token that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {verification_tokenFindUniqueOrThrowArgs} args - Arguments to find a Verification_token
     * @example
     * // Get one Verification_token
     * const verification_token = await prisma.verification_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verification_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, verification_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Verification_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenFindFirstArgs} args - Arguments to find a Verification_token
     * @example
     * // Get one Verification_token
     * const verification_token = await prisma.verification_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verification_tokenFindFirstArgs>(args?: SelectSubset<T, verification_tokenFindFirstArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Verification_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenFindFirstOrThrowArgs} args - Arguments to find a Verification_token
     * @example
     * // Get one Verification_token
     * const verification_token = await prisma.verification_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verification_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, verification_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Verification_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verification_tokens
     * const verification_tokens = await prisma.verification_token.findMany()
     * 
     * // Get first 10 Verification_tokens
     * const verification_tokens = await prisma.verification_token.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verification_tokenWithIdentifierOnly = await prisma.verification_token.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends verification_tokenFindManyArgs>(args?: SelectSubset<T, verification_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Verification_token.
     * @param {verification_tokenCreateArgs} args - Arguments to create a Verification_token.
     * @example
     * // Create one Verification_token
     * const Verification_token = await prisma.verification_token.create({
     *   data: {
     *     // ... data to create a Verification_token
     *   }
     * })
     * 
     */
    create<T extends verification_tokenCreateArgs>(args: SelectSubset<T, verification_tokenCreateArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Verification_tokens.
     * @param {verification_tokenCreateManyArgs} args - Arguments to create many Verification_tokens.
     * @example
     * // Create many Verification_tokens
     * const verification_token = await prisma.verification_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verification_tokenCreateManyArgs>(args?: SelectSubset<T, verification_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verification_tokens and returns the data saved in the database.
     * @param {verification_tokenCreateManyAndReturnArgs} args - Arguments to create many Verification_tokens.
     * @example
     * // Create many Verification_tokens
     * const verification_token = await prisma.verification_token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verification_tokens and only return the `identifier`
     * const verification_tokenWithIdentifierOnly = await prisma.verification_token.createManyAndReturn({ 
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends verification_tokenCreateManyAndReturnArgs>(args?: SelectSubset<T, verification_tokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Verification_token.
     * @param {verification_tokenDeleteArgs} args - Arguments to delete one Verification_token.
     * @example
     * // Delete one Verification_token
     * const Verification_token = await prisma.verification_token.delete({
     *   where: {
     *     // ... filter to delete one Verification_token
     *   }
     * })
     * 
     */
    delete<T extends verification_tokenDeleteArgs>(args: SelectSubset<T, verification_tokenDeleteArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Verification_token.
     * @param {verification_tokenUpdateArgs} args - Arguments to update one Verification_token.
     * @example
     * // Update one Verification_token
     * const verification_token = await prisma.verification_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verification_tokenUpdateArgs>(args: SelectSubset<T, verification_tokenUpdateArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Verification_tokens.
     * @param {verification_tokenDeleteManyArgs} args - Arguments to filter Verification_tokens to delete.
     * @example
     * // Delete a few Verification_tokens
     * const { count } = await prisma.verification_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verification_tokenDeleteManyArgs>(args?: SelectSubset<T, verification_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verification_tokens
     * const verification_token = await prisma.verification_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verification_tokenUpdateManyArgs>(args: SelectSubset<T, verification_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification_token.
     * @param {verification_tokenUpsertArgs} args - Arguments to update or create a Verification_token.
     * @example
     * // Update or create a Verification_token
     * const verification_token = await prisma.verification_token.upsert({
     *   create: {
     *     // ... data to create a Verification_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification_token we want to update
     *   }
     * })
     */
    upsert<T extends verification_tokenUpsertArgs>(args: SelectSubset<T, verification_tokenUpsertArgs<ExtArgs>>): Prisma__verification_tokenClient<$Result.GetResult<Prisma.$verification_tokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Verification_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenCountArgs} args - Arguments to filter Verification_tokens to count.
     * @example
     * // Count the number of Verification_tokens
     * const count = await prisma.verification_token.count({
     *   where: {
     *     // ... the filter for the Verification_tokens we want to count
     *   }
     * })
    **/
    count<T extends verification_tokenCountArgs>(
      args?: Subset<T, verification_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Verification_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Verification_tokenAggregateArgs>(args: Subset<T, Verification_tokenAggregateArgs>): Prisma.PrismaPromise<GetVerification_tokenAggregateType<T>>

    /**
     * Group by Verification_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verification_tokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends verification_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verification_tokenGroupByArgs['orderBy'] }
        : { orderBy?: verification_tokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, verification_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerification_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verification_token model
   */
  readonly fields: verification_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verification_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verification_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the verification_token model
   */ 
  interface verification_tokenFieldRefs {
    readonly identifier: FieldRef<"verification_token", 'String'>
    readonly expires: FieldRef<"verification_token", 'DateTime'>
    readonly token: FieldRef<"verification_token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * verification_token findUnique
   */
  export type verification_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Filter, which verification_token to fetch.
     */
    where: verification_tokenWhereUniqueInput
  }

  /**
   * verification_token findUniqueOrThrow
   */
  export type verification_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Filter, which verification_token to fetch.
     */
    where: verification_tokenWhereUniqueInput
  }

  /**
   * verification_token findFirst
   */
  export type verification_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Filter, which verification_token to fetch.
     */
    where?: verification_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verification_tokens to fetch.
     */
    orderBy?: verification_tokenOrderByWithRelationInput | verification_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verification_tokens.
     */
    cursor?: verification_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verification_tokens.
     */
    distinct?: Verification_tokenScalarFieldEnum | Verification_tokenScalarFieldEnum[]
  }

  /**
   * verification_token findFirstOrThrow
   */
  export type verification_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Filter, which verification_token to fetch.
     */
    where?: verification_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verification_tokens to fetch.
     */
    orderBy?: verification_tokenOrderByWithRelationInput | verification_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verification_tokens.
     */
    cursor?: verification_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verification_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verification_tokens.
     */
    distinct?: Verification_tokenScalarFieldEnum | Verification_tokenScalarFieldEnum[]
  }

  /**
   * verification_token findMany
   */
  export type verification_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Filter, which verification_tokens to fetch.
     */
    where?: verification_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verification_tokens to fetch.
     */
    orderBy?: verification_tokenOrderByWithRelationInput | verification_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verification_tokens.
     */
    cursor?: verification_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verification_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verification_tokens.
     */
    skip?: number
    distinct?: Verification_tokenScalarFieldEnum | Verification_tokenScalarFieldEnum[]
  }

  /**
   * verification_token create
   */
  export type verification_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * The data needed to create a verification_token.
     */
    data: XOR<verification_tokenCreateInput, verification_tokenUncheckedCreateInput>
  }

  /**
   * verification_token createMany
   */
  export type verification_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verification_tokens.
     */
    data: verification_tokenCreateManyInput | verification_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verification_token createManyAndReturn
   */
  export type verification_tokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many verification_tokens.
     */
    data: verification_tokenCreateManyInput | verification_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verification_token update
   */
  export type verification_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * The data needed to update a verification_token.
     */
    data: XOR<verification_tokenUpdateInput, verification_tokenUncheckedUpdateInput>
    /**
     * Choose, which verification_token to update.
     */
    where: verification_tokenWhereUniqueInput
  }

  /**
   * verification_token updateMany
   */
  export type verification_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verification_tokens.
     */
    data: XOR<verification_tokenUpdateManyMutationInput, verification_tokenUncheckedUpdateManyInput>
    /**
     * Filter which verification_tokens to update
     */
    where?: verification_tokenWhereInput
  }

  /**
   * verification_token upsert
   */
  export type verification_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * The filter to search for the verification_token to update in case it exists.
     */
    where: verification_tokenWhereUniqueInput
    /**
     * In case the verification_token found by the `where` argument doesn't exist, create a new verification_token with this data.
     */
    create: XOR<verification_tokenCreateInput, verification_tokenUncheckedCreateInput>
    /**
     * In case the verification_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verification_tokenUpdateInput, verification_tokenUncheckedUpdateInput>
  }

  /**
   * verification_token delete
   */
  export type verification_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
    /**
     * Filter which verification_token to delete.
     */
    where: verification_tokenWhereUniqueInput
  }

  /**
   * verification_token deleteMany
   */
  export type verification_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verification_tokens to delete
     */
    where?: verification_tokenWhereInput
  }

  /**
   * verification_token without action
   */
  export type verification_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verification_token
     */
    select?: verification_tokenSelect<ExtArgs> | null
  }


  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    expires_at: number | null
  }

  export type AccountsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    expires_at: bigint | null
  }

  export type AccountsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: bigint | null
    id_token: string | null
    scope: string | null
    session_state: string | null
    token_type: string | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: bigint | null
    id_token: string | null
    scope: string | null
    session_state: string | null
    token_type: string | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    id_token: number
    scope: number
    session_state: number
    token_type: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    id?: true
    userId?: true
    expires_at?: true
  }

  export type AccountsSumAggregateInputType = {
    id?: true
    userId?: true
    expires_at?: true
  }

  export type AccountsMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    id_token?: true
    scope?: true
    session_state?: true
    token_type?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    id_token?: true
    scope?: true
    session_state?: true
    token_type?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    id_token?: true
    scope?: true
    session_state?: true
    token_type?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: bigint | null
    id_token: string | null
    scope: string | null
    session_state: string | null
    token_type: string | null
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    id_token?: boolean
    scope?: boolean
    session_state?: boolean
    token_type?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    id_token?: boolean
    scope?: boolean
    session_state?: boolean
    token_type?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    id_token?: boolean
    scope?: boolean
    session_state?: boolean
    token_type?: boolean
  }


  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: bigint | null
      id_token: string | null
      scope: string | null
      session_state: string | null
      token_type: string | null
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountsFindManyArgs>(args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends accountsCreateArgs>(args: SelectSubset<T, accountsCreateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountsCreateManyArgs>(args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountsCreateManyAndReturnArgs>(args?: SelectSubset<T, accountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends accountsDeleteArgs>(args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountsUpdateArgs>(args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountsDeleteManyArgs>(args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountsUpdateManyArgs>(args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the accounts model
   */ 
  interface accountsFieldRefs {
    readonly id: FieldRef<"accounts", 'Int'>
    readonly userId: FieldRef<"accounts", 'Int'>
    readonly type: FieldRef<"accounts", 'String'>
    readonly provider: FieldRef<"accounts", 'String'>
    readonly providerAccountId: FieldRef<"accounts", 'String'>
    readonly refresh_token: FieldRef<"accounts", 'String'>
    readonly access_token: FieldRef<"accounts", 'String'>
    readonly expires_at: FieldRef<"accounts", 'BigInt'>
    readonly id_token: FieldRef<"accounts", 'String'>
    readonly scope: FieldRef<"accounts", 'String'>
    readonly session_state: FieldRef<"accounts", 'String'>
    readonly token_type: FieldRef<"accounts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts createManyAndReturn
   */
  export type accountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    expires: Date | null
    sessionToken: string | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    expires: Date | null
    sessionToken: string | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    userId: number
    expires: number
    sessionToken: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: number
    userId: number
    expires: Date
    sessionToken: string
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectScalar = {
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
  }


  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      expires: Date
      sessionToken: string
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sessions model
   */ 
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'Int'>
    readonly userId: FieldRef<"sessions", 'Int'>
    readonly expires: FieldRef<"sessions", 'DateTime'>
    readonly sessionToken: FieldRef<"sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions createManyAndReturn
   */
  export type sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    presence?: boolean | users$presenceArgs<ExtArgs>
    user_roles?: boolean | users$user_rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presence?: boolean | users$presenceArgs<ExtArgs>
    user_roles?: boolean | users$user_rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      presence: Prisma.$presencePayload<ExtArgs>[]
      user_roles: Prisma.$user_rolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    presence<T extends users$presenceArgs<ExtArgs> = {}>(args?: Subset<T, users$presenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "findMany"> | Null>
    user_roles<T extends users$user_rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly emailVerified: FieldRef<"users", 'DateTime'>
    readonly image: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.presence
   */
  export type users$presenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
    where?: presenceWhereInput
    orderBy?: presenceOrderByWithRelationInput | presenceOrderByWithRelationInput[]
    cursor?: presenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * users.user_roles
   */
  export type users$user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_roles?: boolean | role$user_rolesArgs<ExtArgs>
    role_permissions?: boolean | role$role_permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles?: boolean | role$user_rolesArgs<ExtArgs>
    role_permissions?: boolean | role$role_permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      user_roles: Prisma.$user_rolesPayload<ExtArgs>[]
      role_permissions: Prisma.$role_permissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {roleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roleCreateManyAndReturnArgs>(args?: SelectSubset<T, roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_roles<T extends role$user_rolesArgs<ExtArgs> = {}>(args?: Subset<T, role$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany"> | Null>
    role_permissions<T extends role$role_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, role$role_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role model
   */ 
  interface roleFieldRefs {
    readonly id: FieldRef<"role", 'Int'>
    readonly name: FieldRef<"role", 'String'>
    readonly description: FieldRef<"role", 'String'>
    readonly created_at: FieldRef<"role", 'DateTime'>
    readonly updated_at: FieldRef<"role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role createManyAndReturn
   */
  export type roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
  }

  /**
   * role.user_roles
   */
  export type role$user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    cursor?: user_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * role.role_permissions
   */
  export type role$role_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    where?: role_permissionsWhereInput
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    cursor?: role_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_permissionsScalarFieldEnum | Role_permissionsScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model user_roles
   */

  export type AggregateUser_roles = {
    _count: User_rolesCountAggregateOutputType | null
    _avg: User_rolesAvgAggregateOutputType | null
    _sum: User_rolesSumAggregateOutputType | null
    _min: User_rolesMinAggregateOutputType | null
    _max: User_rolesMaxAggregateOutputType | null
  }

  export type User_rolesAvgAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type User_rolesSumAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type User_rolesMinAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    assigned_at: Date | null
  }

  export type User_rolesMaxAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    assigned_at: Date | null
  }

  export type User_rolesCountAggregateOutputType = {
    user_id: number
    role_id: number
    assigned_at: number
    _all: number
  }


  export type User_rolesAvgAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type User_rolesSumAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type User_rolesMinAggregateInputType = {
    user_id?: true
    role_id?: true
    assigned_at?: true
  }

  export type User_rolesMaxAggregateInputType = {
    user_id?: true
    role_id?: true
    assigned_at?: true
  }

  export type User_rolesCountAggregateInputType = {
    user_id?: true
    role_id?: true
    assigned_at?: true
    _all?: true
  }

  export type User_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to aggregate.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles
    **/
    _count?: true | User_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_rolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_rolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_rolesMaxAggregateInputType
  }

  export type GetUser_rolesAggregateType<T extends User_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_roles[P]>
      : GetScalarType<T[P], AggregateUser_roles[P]>
  }




  export type user_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_rolesWhereInput
    orderBy?: user_rolesOrderByWithAggregationInput | user_rolesOrderByWithAggregationInput[]
    by: User_rolesScalarFieldEnum[] | User_rolesScalarFieldEnum
    having?: user_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_rolesCountAggregateInputType | true
    _avg?: User_rolesAvgAggregateInputType
    _sum?: User_rolesSumAggregateInputType
    _min?: User_rolesMinAggregateInputType
    _max?: User_rolesMaxAggregateInputType
  }

  export type User_rolesGroupByOutputType = {
    user_id: number
    role_id: number
    assigned_at: Date
    _count: User_rolesCountAggregateOutputType | null
    _avg: User_rolesAvgAggregateOutputType | null
    _sum: User_rolesSumAggregateOutputType | null
    _min: User_rolesMinAggregateOutputType | null
    _max: User_rolesMaxAggregateOutputType | null
  }

  type GetUser_rolesGroupByPayload<T extends user_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], User_rolesGroupByOutputType[P]>
        }
      >
    >


  export type user_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    assigned_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles"]>

  export type user_rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    assigned_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles"]>

  export type user_rolesSelectScalar = {
    user_id?: boolean
    role_id?: boolean
    assigned_at?: boolean
  }

  export type user_rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type user_rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }

  export type $user_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_roles"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      role: Prisma.$rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      role_id: number
      assigned_at: Date
    }, ExtArgs["result"]["user_roles"]>
    composites: {}
  }

  type user_rolesGetPayload<S extends boolean | null | undefined | user_rolesDefaultArgs> = $Result.GetResult<Prisma.$user_rolesPayload, S>

  type user_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_rolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_rolesCountAggregateInputType | true
    }

  export interface user_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_roles'], meta: { name: 'user_roles' } }
    /**
     * Find zero or one User_roles that matches the filter.
     * @param {user_rolesFindUniqueArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_rolesFindUniqueArgs>(args: SelectSubset<T, user_rolesFindUniqueArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User_roles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {user_rolesFindUniqueOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, user_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_rolesFindFirstArgs>(args?: SelectSubset<T, user_rolesFindFirstArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindFirstOrThrowArgs} args - Arguments to find a User_roles
     * @example
     * // Get one User_roles
     * const user_roles = await prisma.user_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, user_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_roles.findMany()
     * 
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_roles.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_rolesWithUser_idOnly = await prisma.user_roles.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_rolesFindManyArgs>(args?: SelectSubset<T, user_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User_roles.
     * @param {user_rolesCreateArgs} args - Arguments to create a User_roles.
     * @example
     * // Create one User_roles
     * const User_roles = await prisma.user_roles.create({
     *   data: {
     *     // ... data to create a User_roles
     *   }
     * })
     * 
     */
    create<T extends user_rolesCreateArgs>(args: SelectSubset<T, user_rolesCreateArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many User_roles.
     * @param {user_rolesCreateManyArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_roles = await prisma.user_roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_rolesCreateManyArgs>(args?: SelectSubset<T, user_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_roles and returns the data saved in the database.
     * @param {user_rolesCreateManyAndReturnArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_roles = await prisma.user_roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_roles and only return the `user_id`
     * const user_rolesWithUser_idOnly = await prisma.user_roles.createManyAndReturn({ 
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, user_rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User_roles.
     * @param {user_rolesDeleteArgs} args - Arguments to delete one User_roles.
     * @example
     * // Delete one User_roles
     * const User_roles = await prisma.user_roles.delete({
     *   where: {
     *     // ... filter to delete one User_roles
     *   }
     * })
     * 
     */
    delete<T extends user_rolesDeleteArgs>(args: SelectSubset<T, user_rolesDeleteArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User_roles.
     * @param {user_rolesUpdateArgs} args - Arguments to update one User_roles.
     * @example
     * // Update one User_roles
     * const user_roles = await prisma.user_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_rolesUpdateArgs>(args: SelectSubset<T, user_rolesUpdateArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more User_roles.
     * @param {user_rolesDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_rolesDeleteManyArgs>(args?: SelectSubset<T, user_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_roles = await prisma.user_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_rolesUpdateManyArgs>(args: SelectSubset<T, user_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_roles.
     * @param {user_rolesUpsertArgs} args - Arguments to update or create a User_roles.
     * @example
     * // Update or create a User_roles
     * const user_roles = await prisma.user_roles.upsert({
     *   create: {
     *     // ... data to create a User_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_roles we want to update
     *   }
     * })
     */
    upsert<T extends user_rolesUpsertArgs>(args: SelectSubset<T, user_rolesUpsertArgs<ExtArgs>>): Prisma__user_rolesClient<$Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_roles.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
    **/
    count<T extends user_rolesCountArgs>(
      args?: Subset<T, user_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_rolesAggregateArgs>(args: Subset<T, User_rolesAggregateArgs>): Prisma.PrismaPromise<GetUser_rolesAggregateType<T>>

    /**
     * Group by User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_rolesGroupByArgs['orderBy'] }
        : { orderBy?: user_rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_roles model
   */
  readonly fields: user_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_roles model
   */ 
  interface user_rolesFieldRefs {
    readonly user_id: FieldRef<"user_roles", 'Int'>
    readonly role_id: FieldRef<"user_roles", 'Int'>
    readonly assigned_at: FieldRef<"user_roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_roles findUnique
   */
  export type user_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles findUniqueOrThrow
   */
  export type user_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles findFirst
   */
  export type user_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * user_roles findFirstOrThrow
   */
  export type user_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * user_roles findMany
   */
  export type user_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_rolesOrderByWithRelationInput | user_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles.
     */
    cursor?: user_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    distinct?: User_rolesScalarFieldEnum | User_rolesScalarFieldEnum[]
  }

  /**
   * user_roles create
   */
  export type user_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a user_roles.
     */
    data: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>
  }

  /**
   * user_roles createMany
   */
  export type user_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_rolesCreateManyInput | user_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_roles createManyAndReturn
   */
  export type user_rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many user_roles.
     */
    data: user_rolesCreateManyInput | user_rolesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_roles update
   */
  export type user_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a user_roles.
     */
    data: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>
    /**
     * Choose, which user_roles to update.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles updateMany
   */
  export type user_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_rolesWhereInput
  }

  /**
   * user_roles upsert
   */
  export type user_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the user_roles to update in case it exists.
     */
    where: user_rolesWhereUniqueInput
    /**
     * In case the user_roles found by the `where` argument doesn't exist, create a new user_roles with this data.
     */
    create: XOR<user_rolesCreateInput, user_rolesUncheckedCreateInput>
    /**
     * In case the user_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_rolesUpdateInput, user_rolesUncheckedUpdateInput>
  }

  /**
   * user_roles delete
   */
  export type user_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
    /**
     * Filter which user_roles to delete.
     */
    where: user_rolesWhereUniqueInput
  }

  /**
   * user_roles deleteMany
   */
  export type user_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_rolesWhereInput
  }

  /**
   * user_roles without action
   */
  export type user_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles
     */
    select?: user_rolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_rolesInclude<ExtArgs> | null
  }


  /**
   * Model permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permission to aggregate.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permissionWhereInput
    orderBy?: permissionOrderByWithAggregationInput | permissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_permissions?: boolean | permission$role_permissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type permissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["permission"]>

  export type permissionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type permissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role_permissions?: boolean | permission$role_permissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type permissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "permission"
    objects: {
      role_permissions: Prisma.$role_permissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type permissionGetPayload<S extends boolean | null | undefined | permissionDefaultArgs> = $Result.GetResult<Prisma.$permissionPayload, S>

  type permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<permissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['permission'], meta: { name: 'permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {permissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends permissionFindUniqueArgs>(args: SelectSubset<T, permissionFindUniqueArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {permissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends permissionFindUniqueOrThrowArgs>(args: SelectSubset<T, permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends permissionFindFirstArgs>(args?: SelectSubset<T, permissionFindFirstArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends permissionFindFirstOrThrowArgs>(args?: SelectSubset<T, permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends permissionFindManyArgs>(args?: SelectSubset<T, permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Permission.
     * @param {permissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends permissionCreateArgs>(args: SelectSubset<T, permissionCreateArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Permissions.
     * @param {permissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends permissionCreateManyArgs>(args?: SelectSubset<T, permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {permissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends permissionCreateManyAndReturnArgs>(args?: SelectSubset<T, permissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Permission.
     * @param {permissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends permissionDeleteArgs>(args: SelectSubset<T, permissionDeleteArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Permission.
     * @param {permissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends permissionUpdateArgs>(args: SelectSubset<T, permissionUpdateArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Permissions.
     * @param {permissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends permissionDeleteManyArgs>(args?: SelectSubset<T, permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends permissionUpdateManyArgs>(args: SelectSubset<T, permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {permissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends permissionUpsertArgs>(args: SelectSubset<T, permissionUpsertArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends permissionCountArgs>(
      args?: Subset<T, permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: permissionGroupByArgs['orderBy'] }
        : { orderBy?: permissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the permission model
   */
  readonly fields: permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role_permissions<T extends permission$role_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, permission$role_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the permission model
   */ 
  interface permissionFieldRefs {
    readonly id: FieldRef<"permission", 'Int'>
    readonly name: FieldRef<"permission", 'String'>
    readonly description: FieldRef<"permission", 'String'>
    readonly created_at: FieldRef<"permission", 'DateTime'>
    readonly updated_at: FieldRef<"permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * permission findUnique
   */
  export type permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission findUniqueOrThrow
   */
  export type permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission findFirst
   */
  export type permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission findFirstOrThrow
   */
  export type permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission findMany
   */
  export type permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission create
   */
  export type permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * The data needed to create a permission.
     */
    data: XOR<permissionCreateInput, permissionUncheckedCreateInput>
  }

  /**
   * permission createMany
   */
  export type permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many permissions.
     */
    data: permissionCreateManyInput | permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permission createManyAndReturn
   */
  export type permissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many permissions.
     */
    data: permissionCreateManyInput | permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permission update
   */
  export type permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * The data needed to update a permission.
     */
    data: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
    /**
     * Choose, which permission to update.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission updateMany
   */
  export type permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionUpdateManyMutationInput, permissionUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionWhereInput
  }

  /**
   * permission upsert
   */
  export type permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * The filter to search for the permission to update in case it exists.
     */
    where: permissionWhereUniqueInput
    /**
     * In case the permission found by the `where` argument doesn't exist, create a new permission with this data.
     */
    create: XOR<permissionCreateInput, permissionUncheckedCreateInput>
    /**
     * In case the permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
  }

  /**
   * permission delete
   */
  export type permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter which permission to delete.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission deleteMany
   */
  export type permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permissions to delete
     */
    where?: permissionWhereInput
  }

  /**
   * permission.role_permissions
   */
  export type permission$role_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    where?: role_permissionsWhereInput
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    cursor?: role_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_permissionsScalarFieldEnum | Role_permissionsScalarFieldEnum[]
  }

  /**
   * permission without action
   */
  export type permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
  }


  /**
   * Model role_permissions
   */

  export type AggregateRole_permissions = {
    _count: Role_permissionsCountAggregateOutputType | null
    _avg: Role_permissionsAvgAggregateOutputType | null
    _sum: Role_permissionsSumAggregateOutputType | null
    _min: Role_permissionsMinAggregateOutputType | null
    _max: Role_permissionsMaxAggregateOutputType | null
  }

  export type Role_permissionsAvgAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
  }

  export type Role_permissionsSumAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
  }

  export type Role_permissionsMinAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
    assigned_at: Date | null
  }

  export type Role_permissionsMaxAggregateOutputType = {
    role_id: number | null
    permission_id: number | null
    assigned_at: Date | null
  }

  export type Role_permissionsCountAggregateOutputType = {
    role_id: number
    permission_id: number
    assigned_at: number
    _all: number
  }


  export type Role_permissionsAvgAggregateInputType = {
    role_id?: true
    permission_id?: true
  }

  export type Role_permissionsSumAggregateInputType = {
    role_id?: true
    permission_id?: true
  }

  export type Role_permissionsMinAggregateInputType = {
    role_id?: true
    permission_id?: true
    assigned_at?: true
  }

  export type Role_permissionsMaxAggregateInputType = {
    role_id?: true
    permission_id?: true
    assigned_at?: true
  }

  export type Role_permissionsCountAggregateInputType = {
    role_id?: true
    permission_id?: true
    assigned_at?: true
    _all?: true
  }

  export type Role_permissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_permissions to aggregate.
     */
    where?: role_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: role_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned role_permissions
    **/
    _count?: true | Role_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Role_permissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Role_permissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Role_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Role_permissionsMaxAggregateInputType
  }

  export type GetRole_permissionsAggregateType<T extends Role_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRole_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole_permissions[P]>
      : GetScalarType<T[P], AggregateRole_permissions[P]>
  }




  export type role_permissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionsWhereInput
    orderBy?: role_permissionsOrderByWithAggregationInput | role_permissionsOrderByWithAggregationInput[]
    by: Role_permissionsScalarFieldEnum[] | Role_permissionsScalarFieldEnum
    having?: role_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Role_permissionsCountAggregateInputType | true
    _avg?: Role_permissionsAvgAggregateInputType
    _sum?: Role_permissionsSumAggregateInputType
    _min?: Role_permissionsMinAggregateInputType
    _max?: Role_permissionsMaxAggregateInputType
  }

  export type Role_permissionsGroupByOutputType = {
    role_id: number
    permission_id: number
    assigned_at: Date
    _count: Role_permissionsCountAggregateOutputType | null
    _avg: Role_permissionsAvgAggregateOutputType | null
    _sum: Role_permissionsSumAggregateOutputType | null
    _min: Role_permissionsMinAggregateOutputType | null
    _max: Role_permissionsMaxAggregateOutputType | null
  }

  type GetRole_permissionsGroupByPayload<T extends role_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Role_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Role_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Role_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Role_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type role_permissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    permission_id?: boolean
    assigned_at?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
    permission?: boolean | permissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role_permissions"]>

  export type role_permissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    permission_id?: boolean
    assigned_at?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
    permission?: boolean | permissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role_permissions"]>

  export type role_permissionsSelectScalar = {
    role_id?: boolean
    permission_id?: boolean
    assigned_at?: boolean
  }

  export type role_permissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
    permission?: boolean | permissionDefaultArgs<ExtArgs>
  }
  export type role_permissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
    permission?: boolean | permissionDefaultArgs<ExtArgs>
  }

  export type $role_permissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role_permissions"
    objects: {
      role: Prisma.$rolePayload<ExtArgs>
      permission: Prisma.$permissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      permission_id: number
      assigned_at: Date
    }, ExtArgs["result"]["role_permissions"]>
    composites: {}
  }

  type role_permissionsGetPayload<S extends boolean | null | undefined | role_permissionsDefaultArgs> = $Result.GetResult<Prisma.$role_permissionsPayload, S>

  type role_permissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<role_permissionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Role_permissionsCountAggregateInputType | true
    }

  export interface role_permissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role_permissions'], meta: { name: 'role_permissions' } }
    /**
     * Find zero or one Role_permissions that matches the filter.
     * @param {role_permissionsFindUniqueArgs} args - Arguments to find a Role_permissions
     * @example
     * // Get one Role_permissions
     * const role_permissions = await prisma.role_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends role_permissionsFindUniqueArgs>(args: SelectSubset<T, role_permissionsFindUniqueArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role_permissions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {role_permissionsFindUniqueOrThrowArgs} args - Arguments to find a Role_permissions
     * @example
     * // Get one Role_permissions
     * const role_permissions = await prisma.role_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends role_permissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, role_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsFindFirstArgs} args - Arguments to find a Role_permissions
     * @example
     * // Get one Role_permissions
     * const role_permissions = await prisma.role_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends role_permissionsFindFirstArgs>(args?: SelectSubset<T, role_permissionsFindFirstArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role_permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsFindFirstOrThrowArgs} args - Arguments to find a Role_permissions
     * @example
     * // Get one Role_permissions
     * const role_permissions = await prisma.role_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends role_permissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, role_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Role_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role_permissions
     * const role_permissions = await prisma.role_permissions.findMany()
     * 
     * // Get first 10 Role_permissions
     * const role_permissions = await prisma.role_permissions.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const role_permissionsWithRole_idOnly = await prisma.role_permissions.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends role_permissionsFindManyArgs>(args?: SelectSubset<T, role_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role_permissions.
     * @param {role_permissionsCreateArgs} args - Arguments to create a Role_permissions.
     * @example
     * // Create one Role_permissions
     * const Role_permissions = await prisma.role_permissions.create({
     *   data: {
     *     // ... data to create a Role_permissions
     *   }
     * })
     * 
     */
    create<T extends role_permissionsCreateArgs>(args: SelectSubset<T, role_permissionsCreateArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Role_permissions.
     * @param {role_permissionsCreateManyArgs} args - Arguments to create many Role_permissions.
     * @example
     * // Create many Role_permissions
     * const role_permissions = await prisma.role_permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends role_permissionsCreateManyArgs>(args?: SelectSubset<T, role_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Role_permissions and returns the data saved in the database.
     * @param {role_permissionsCreateManyAndReturnArgs} args - Arguments to create many Role_permissions.
     * @example
     * // Create many Role_permissions
     * const role_permissions = await prisma.role_permissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Role_permissions and only return the `role_id`
     * const role_permissionsWithRole_idOnly = await prisma.role_permissions.createManyAndReturn({ 
     *   select: { role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends role_permissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, role_permissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Role_permissions.
     * @param {role_permissionsDeleteArgs} args - Arguments to delete one Role_permissions.
     * @example
     * // Delete one Role_permissions
     * const Role_permissions = await prisma.role_permissions.delete({
     *   where: {
     *     // ... filter to delete one Role_permissions
     *   }
     * })
     * 
     */
    delete<T extends role_permissionsDeleteArgs>(args: SelectSubset<T, role_permissionsDeleteArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role_permissions.
     * @param {role_permissionsUpdateArgs} args - Arguments to update one Role_permissions.
     * @example
     * // Update one Role_permissions
     * const role_permissions = await prisma.role_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends role_permissionsUpdateArgs>(args: SelectSubset<T, role_permissionsUpdateArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Role_permissions.
     * @param {role_permissionsDeleteManyArgs} args - Arguments to filter Role_permissions to delete.
     * @example
     * // Delete a few Role_permissions
     * const { count } = await prisma.role_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends role_permissionsDeleteManyArgs>(args?: SelectSubset<T, role_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role_permissions
     * const role_permissions = await prisma.role_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends role_permissionsUpdateManyArgs>(args: SelectSubset<T, role_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role_permissions.
     * @param {role_permissionsUpsertArgs} args - Arguments to update or create a Role_permissions.
     * @example
     * // Update or create a Role_permissions
     * const role_permissions = await prisma.role_permissions.upsert({
     *   create: {
     *     // ... data to create a Role_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role_permissions we want to update
     *   }
     * })
     */
    upsert<T extends role_permissionsUpsertArgs>(args: SelectSubset<T, role_permissionsUpsertArgs<ExtArgs>>): Prisma__role_permissionsClient<$Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsCountArgs} args - Arguments to filter Role_permissions to count.
     * @example
     * // Count the number of Role_permissions
     * const count = await prisma.role_permissions.count({
     *   where: {
     *     // ... the filter for the Role_permissions we want to count
     *   }
     * })
    **/
    count<T extends role_permissionsCountArgs>(
      args?: Subset<T, role_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Role_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Role_permissionsAggregateArgs>(args: Subset<T, Role_permissionsAggregateArgs>): Prisma.PrismaPromise<GetRole_permissionsAggregateType<T>>

    /**
     * Group by Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends role_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: role_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: role_permissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, role_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role_permissions model
   */
  readonly fields: role_permissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__role_permissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    permission<T extends permissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, permissionDefaultArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role_permissions model
   */ 
  interface role_permissionsFieldRefs {
    readonly role_id: FieldRef<"role_permissions", 'Int'>
    readonly permission_id: FieldRef<"role_permissions", 'Int'>
    readonly assigned_at: FieldRef<"role_permissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * role_permissions findUnique
   */
  export type role_permissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where: role_permissionsWhereUniqueInput
  }

  /**
   * role_permissions findUniqueOrThrow
   */
  export type role_permissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where: role_permissionsWhereUniqueInput
  }

  /**
   * role_permissions findFirst
   */
  export type role_permissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where?: role_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_permissions.
     */
    cursor?: role_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_permissions.
     */
    distinct?: Role_permissionsScalarFieldEnum | Role_permissionsScalarFieldEnum[]
  }

  /**
   * role_permissions findFirstOrThrow
   */
  export type role_permissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where?: role_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_permissions.
     */
    cursor?: role_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_permissions.
     */
    distinct?: Role_permissionsScalarFieldEnum | Role_permissionsScalarFieldEnum[]
  }

  /**
   * role_permissions findMany
   */
  export type role_permissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where?: role_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionsOrderByWithRelationInput | role_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing role_permissions.
     */
    cursor?: role_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    distinct?: Role_permissionsScalarFieldEnum | Role_permissionsScalarFieldEnum[]
  }

  /**
   * role_permissions create
   */
  export type role_permissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a role_permissions.
     */
    data: XOR<role_permissionsCreateInput, role_permissionsUncheckedCreateInput>
  }

  /**
   * role_permissions createMany
   */
  export type role_permissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many role_permissions.
     */
    data: role_permissionsCreateManyInput | role_permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role_permissions createManyAndReturn
   */
  export type role_permissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many role_permissions.
     */
    data: role_permissionsCreateManyInput | role_permissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * role_permissions update
   */
  export type role_permissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a role_permissions.
     */
    data: XOR<role_permissionsUpdateInput, role_permissionsUncheckedUpdateInput>
    /**
     * Choose, which role_permissions to update.
     */
    where: role_permissionsWhereUniqueInput
  }

  /**
   * role_permissions updateMany
   */
  export type role_permissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update role_permissions.
     */
    data: XOR<role_permissionsUpdateManyMutationInput, role_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which role_permissions to update
     */
    where?: role_permissionsWhereInput
  }

  /**
   * role_permissions upsert
   */
  export type role_permissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the role_permissions to update in case it exists.
     */
    where: role_permissionsWhereUniqueInput
    /**
     * In case the role_permissions found by the `where` argument doesn't exist, create a new role_permissions with this data.
     */
    create: XOR<role_permissionsCreateInput, role_permissionsUncheckedCreateInput>
    /**
     * In case the role_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<role_permissionsUpdateInput, role_permissionsUncheckedUpdateInput>
  }

  /**
   * role_permissions delete
   */
  export type role_permissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
    /**
     * Filter which role_permissions to delete.
     */
    where: role_permissionsWhereUniqueInput
  }

  /**
   * role_permissions deleteMany
   */
  export type role_permissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_permissions to delete
     */
    where?: role_permissionsWhereInput
  }

  /**
   * role_permissions without action
   */
  export type role_permissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permissions
     */
    select?: role_permissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionsInclude<ExtArgs> | null
  }


  /**
   * Model database_metric
   */

  export type AggregateDatabase_metric = {
    _count: Database_metricCountAggregateOutputType | null
    _avg: Database_metricAvgAggregateOutputType | null
    _sum: Database_metricSumAggregateOutputType | null
    _min: Database_metricMinAggregateOutputType | null
    _max: Database_metricMaxAggregateOutputType | null
  }

  export type Database_metricAvgAggregateOutputType = {
    id: number | null
    query_time: number | null
    row_count: number | null
  }

  export type Database_metricSumAggregateOutputType = {
    id: number | null
    query_time: number | null
    row_count: number | null
  }

  export type Database_metricMinAggregateOutputType = {
    id: number | null
    query_time: number | null
    row_count: number | null
    timestamp: Date | null
  }

  export type Database_metricMaxAggregateOutputType = {
    id: number | null
    query_time: number | null
    row_count: number | null
    timestamp: Date | null
  }

  export type Database_metricCountAggregateOutputType = {
    id: number
    query_time: number
    row_count: number
    timestamp: number
    _all: number
  }


  export type Database_metricAvgAggregateInputType = {
    id?: true
    query_time?: true
    row_count?: true
  }

  export type Database_metricSumAggregateInputType = {
    id?: true
    query_time?: true
    row_count?: true
  }

  export type Database_metricMinAggregateInputType = {
    id?: true
    query_time?: true
    row_count?: true
    timestamp?: true
  }

  export type Database_metricMaxAggregateInputType = {
    id?: true
    query_time?: true
    row_count?: true
    timestamp?: true
  }

  export type Database_metricCountAggregateInputType = {
    id?: true
    query_time?: true
    row_count?: true
    timestamp?: true
    _all?: true
  }

  export type Database_metricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which database_metric to aggregate.
     */
    where?: database_metricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of database_metrics to fetch.
     */
    orderBy?: database_metricOrderByWithRelationInput | database_metricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: database_metricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` database_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` database_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned database_metrics
    **/
    _count?: true | Database_metricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Database_metricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Database_metricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Database_metricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Database_metricMaxAggregateInputType
  }

  export type GetDatabase_metricAggregateType<T extends Database_metricAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabase_metric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabase_metric[P]>
      : GetScalarType<T[P], AggregateDatabase_metric[P]>
  }




  export type database_metricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: database_metricWhereInput
    orderBy?: database_metricOrderByWithAggregationInput | database_metricOrderByWithAggregationInput[]
    by: Database_metricScalarFieldEnum[] | Database_metricScalarFieldEnum
    having?: database_metricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Database_metricCountAggregateInputType | true
    _avg?: Database_metricAvgAggregateInputType
    _sum?: Database_metricSumAggregateInputType
    _min?: Database_metricMinAggregateInputType
    _max?: Database_metricMaxAggregateInputType
  }

  export type Database_metricGroupByOutputType = {
    id: number
    query_time: number
    row_count: number
    timestamp: Date
    _count: Database_metricCountAggregateOutputType | null
    _avg: Database_metricAvgAggregateOutputType | null
    _sum: Database_metricSumAggregateOutputType | null
    _min: Database_metricMinAggregateOutputType | null
    _max: Database_metricMaxAggregateOutputType | null
  }

  type GetDatabase_metricGroupByPayload<T extends database_metricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Database_metricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Database_metricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Database_metricGroupByOutputType[P]>
            : GetScalarType<T[P], Database_metricGroupByOutputType[P]>
        }
      >
    >


  export type database_metricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query_time?: boolean
    row_count?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["database_metric"]>

  export type database_metricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    query_time?: boolean
    row_count?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["database_metric"]>

  export type database_metricSelectScalar = {
    id?: boolean
    query_time?: boolean
    row_count?: boolean
    timestamp?: boolean
  }


  export type $database_metricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "database_metric"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      query_time: number
      row_count: number
      timestamp: Date
    }, ExtArgs["result"]["database_metric"]>
    composites: {}
  }

  type database_metricGetPayload<S extends boolean | null | undefined | database_metricDefaultArgs> = $Result.GetResult<Prisma.$database_metricPayload, S>

  type database_metricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<database_metricFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Database_metricCountAggregateInputType | true
    }

  export interface database_metricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['database_metric'], meta: { name: 'database_metric' } }
    /**
     * Find zero or one Database_metric that matches the filter.
     * @param {database_metricFindUniqueArgs} args - Arguments to find a Database_metric
     * @example
     * // Get one Database_metric
     * const database_metric = await prisma.database_metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends database_metricFindUniqueArgs>(args: SelectSubset<T, database_metricFindUniqueArgs<ExtArgs>>): Prisma__database_metricClient<$Result.GetResult<Prisma.$database_metricPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Database_metric that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {database_metricFindUniqueOrThrowArgs} args - Arguments to find a Database_metric
     * @example
     * // Get one Database_metric
     * const database_metric = await prisma.database_metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends database_metricFindUniqueOrThrowArgs>(args: SelectSubset<T, database_metricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__database_metricClient<$Result.GetResult<Prisma.$database_metricPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Database_metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_metricFindFirstArgs} args - Arguments to find a Database_metric
     * @example
     * // Get one Database_metric
     * const database_metric = await prisma.database_metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends database_metricFindFirstArgs>(args?: SelectSubset<T, database_metricFindFirstArgs<ExtArgs>>): Prisma__database_metricClient<$Result.GetResult<Prisma.$database_metricPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Database_metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_metricFindFirstOrThrowArgs} args - Arguments to find a Database_metric
     * @example
     * // Get one Database_metric
     * const database_metric = await prisma.database_metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends database_metricFindFirstOrThrowArgs>(args?: SelectSubset<T, database_metricFindFirstOrThrowArgs<ExtArgs>>): Prisma__database_metricClient<$Result.GetResult<Prisma.$database_metricPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Database_metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_metricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Database_metrics
     * const database_metrics = await prisma.database_metric.findMany()
     * 
     * // Get first 10 Database_metrics
     * const database_metrics = await prisma.database_metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const database_metricWithIdOnly = await prisma.database_metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends database_metricFindManyArgs>(args?: SelectSubset<T, database_metricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$database_metricPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Database_metric.
     * @param {database_metricCreateArgs} args - Arguments to create a Database_metric.
     * @example
     * // Create one Database_metric
     * const Database_metric = await prisma.database_metric.create({
     *   data: {
     *     // ... data to create a Database_metric
     *   }
     * })
     * 
     */
    create<T extends database_metricCreateArgs>(args: SelectSubset<T, database_metricCreateArgs<ExtArgs>>): Prisma__database_metricClient<$Result.GetResult<Prisma.$database_metricPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Database_metrics.
     * @param {database_metricCreateManyArgs} args - Arguments to create many Database_metrics.
     * @example
     * // Create many Database_metrics
     * const database_metric = await prisma.database_metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends database_metricCreateManyArgs>(args?: SelectSubset<T, database_metricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Database_metrics and returns the data saved in the database.
     * @param {database_metricCreateManyAndReturnArgs} args - Arguments to create many Database_metrics.
     * @example
     * // Create many Database_metrics
     * const database_metric = await prisma.database_metric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Database_metrics and only return the `id`
     * const database_metricWithIdOnly = await prisma.database_metric.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends database_metricCreateManyAndReturnArgs>(args?: SelectSubset<T, database_metricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$database_metricPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Database_metric.
     * @param {database_metricDeleteArgs} args - Arguments to delete one Database_metric.
     * @example
     * // Delete one Database_metric
     * const Database_metric = await prisma.database_metric.delete({
     *   where: {
     *     // ... filter to delete one Database_metric
     *   }
     * })
     * 
     */
    delete<T extends database_metricDeleteArgs>(args: SelectSubset<T, database_metricDeleteArgs<ExtArgs>>): Prisma__database_metricClient<$Result.GetResult<Prisma.$database_metricPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Database_metric.
     * @param {database_metricUpdateArgs} args - Arguments to update one Database_metric.
     * @example
     * // Update one Database_metric
     * const database_metric = await prisma.database_metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends database_metricUpdateArgs>(args: SelectSubset<T, database_metricUpdateArgs<ExtArgs>>): Prisma__database_metricClient<$Result.GetResult<Prisma.$database_metricPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Database_metrics.
     * @param {database_metricDeleteManyArgs} args - Arguments to filter Database_metrics to delete.
     * @example
     * // Delete a few Database_metrics
     * const { count } = await prisma.database_metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends database_metricDeleteManyArgs>(args?: SelectSubset<T, database_metricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Database_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_metricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Database_metrics
     * const database_metric = await prisma.database_metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends database_metricUpdateManyArgs>(args: SelectSubset<T, database_metricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Database_metric.
     * @param {database_metricUpsertArgs} args - Arguments to update or create a Database_metric.
     * @example
     * // Update or create a Database_metric
     * const database_metric = await prisma.database_metric.upsert({
     *   create: {
     *     // ... data to create a Database_metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Database_metric we want to update
     *   }
     * })
     */
    upsert<T extends database_metricUpsertArgs>(args: SelectSubset<T, database_metricUpsertArgs<ExtArgs>>): Prisma__database_metricClient<$Result.GetResult<Prisma.$database_metricPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Database_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_metricCountArgs} args - Arguments to filter Database_metrics to count.
     * @example
     * // Count the number of Database_metrics
     * const count = await prisma.database_metric.count({
     *   where: {
     *     // ... the filter for the Database_metrics we want to count
     *   }
     * })
    **/
    count<T extends database_metricCountArgs>(
      args?: Subset<T, database_metricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Database_metricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Database_metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Database_metricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Database_metricAggregateArgs>(args: Subset<T, Database_metricAggregateArgs>): Prisma.PrismaPromise<GetDatabase_metricAggregateType<T>>

    /**
     * Group by Database_metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {database_metricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends database_metricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: database_metricGroupByArgs['orderBy'] }
        : { orderBy?: database_metricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, database_metricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabase_metricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the database_metric model
   */
  readonly fields: database_metricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for database_metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__database_metricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the database_metric model
   */ 
  interface database_metricFieldRefs {
    readonly id: FieldRef<"database_metric", 'Int'>
    readonly query_time: FieldRef<"database_metric", 'Int'>
    readonly row_count: FieldRef<"database_metric", 'Int'>
    readonly timestamp: FieldRef<"database_metric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * database_metric findUnique
   */
  export type database_metricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_metric
     */
    select?: database_metricSelect<ExtArgs> | null
    /**
     * Filter, which database_metric to fetch.
     */
    where: database_metricWhereUniqueInput
  }

  /**
   * database_metric findUniqueOrThrow
   */
  export type database_metricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_metric
     */
    select?: database_metricSelect<ExtArgs> | null
    /**
     * Filter, which database_metric to fetch.
     */
    where: database_metricWhereUniqueInput
  }

  /**
   * database_metric findFirst
   */
  export type database_metricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_metric
     */
    select?: database_metricSelect<ExtArgs> | null
    /**
     * Filter, which database_metric to fetch.
     */
    where?: database_metricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of database_metrics to fetch.
     */
    orderBy?: database_metricOrderByWithRelationInput | database_metricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for database_metrics.
     */
    cursor?: database_metricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` database_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` database_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of database_metrics.
     */
    distinct?: Database_metricScalarFieldEnum | Database_metricScalarFieldEnum[]
  }

  /**
   * database_metric findFirstOrThrow
   */
  export type database_metricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_metric
     */
    select?: database_metricSelect<ExtArgs> | null
    /**
     * Filter, which database_metric to fetch.
     */
    where?: database_metricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of database_metrics to fetch.
     */
    orderBy?: database_metricOrderByWithRelationInput | database_metricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for database_metrics.
     */
    cursor?: database_metricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` database_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` database_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of database_metrics.
     */
    distinct?: Database_metricScalarFieldEnum | Database_metricScalarFieldEnum[]
  }

  /**
   * database_metric findMany
   */
  export type database_metricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_metric
     */
    select?: database_metricSelect<ExtArgs> | null
    /**
     * Filter, which database_metrics to fetch.
     */
    where?: database_metricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of database_metrics to fetch.
     */
    orderBy?: database_metricOrderByWithRelationInput | database_metricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing database_metrics.
     */
    cursor?: database_metricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` database_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` database_metrics.
     */
    skip?: number
    distinct?: Database_metricScalarFieldEnum | Database_metricScalarFieldEnum[]
  }

  /**
   * database_metric create
   */
  export type database_metricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_metric
     */
    select?: database_metricSelect<ExtArgs> | null
    /**
     * The data needed to create a database_metric.
     */
    data: XOR<database_metricCreateInput, database_metricUncheckedCreateInput>
  }

  /**
   * database_metric createMany
   */
  export type database_metricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many database_metrics.
     */
    data: database_metricCreateManyInput | database_metricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * database_metric createManyAndReturn
   */
  export type database_metricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_metric
     */
    select?: database_metricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many database_metrics.
     */
    data: database_metricCreateManyInput | database_metricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * database_metric update
   */
  export type database_metricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_metric
     */
    select?: database_metricSelect<ExtArgs> | null
    /**
     * The data needed to update a database_metric.
     */
    data: XOR<database_metricUpdateInput, database_metricUncheckedUpdateInput>
    /**
     * Choose, which database_metric to update.
     */
    where: database_metricWhereUniqueInput
  }

  /**
   * database_metric updateMany
   */
  export type database_metricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update database_metrics.
     */
    data: XOR<database_metricUpdateManyMutationInput, database_metricUncheckedUpdateManyInput>
    /**
     * Filter which database_metrics to update
     */
    where?: database_metricWhereInput
  }

  /**
   * database_metric upsert
   */
  export type database_metricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_metric
     */
    select?: database_metricSelect<ExtArgs> | null
    /**
     * The filter to search for the database_metric to update in case it exists.
     */
    where: database_metricWhereUniqueInput
    /**
     * In case the database_metric found by the `where` argument doesn't exist, create a new database_metric with this data.
     */
    create: XOR<database_metricCreateInput, database_metricUncheckedCreateInput>
    /**
     * In case the database_metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<database_metricUpdateInput, database_metricUncheckedUpdateInput>
  }

  /**
   * database_metric delete
   */
  export type database_metricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_metric
     */
    select?: database_metricSelect<ExtArgs> | null
    /**
     * Filter which database_metric to delete.
     */
    where: database_metricWhereUniqueInput
  }

  /**
   * database_metric deleteMany
   */
  export type database_metricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which database_metrics to delete
     */
    where?: database_metricWhereInput
  }

  /**
   * database_metric without action
   */
  export type database_metricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the database_metric
     */
    select?: database_metricSelect<ExtArgs> | null
  }


  /**
   * Model lecture
   */

  export type AggregateLecture = {
    _count: LectureCountAggregateOutputType | null
    _avg: LectureAvgAggregateOutputType | null
    _sum: LectureSumAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  export type LectureAvgAggregateOutputType = {
    id: number | null
    subject_id: number | null
    teacher_id: number | null
    schedule_id: number | null
  }

  export type LectureSumAggregateOutputType = {
    id: number | null
    subject_id: number | null
    teacher_id: number | null
    schedule_id: number | null
  }

  export type LectureMinAggregateOutputType = {
    id: number | null
    subject_id: number | null
    teacher_id: number | null
    schedule_id: number | null
    start_time: Date | null
    end_time: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LectureMaxAggregateOutputType = {
    id: number | null
    subject_id: number | null
    teacher_id: number | null
    schedule_id: number | null
    start_time: Date | null
    end_time: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LectureCountAggregateOutputType = {
    id: number
    subject_id: number
    teacher_id: number
    schedule_id: number
    start_time: number
    end_time: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LectureAvgAggregateInputType = {
    id?: true
    subject_id?: true
    teacher_id?: true
    schedule_id?: true
  }

  export type LectureSumAggregateInputType = {
    id?: true
    subject_id?: true
    teacher_id?: true
    schedule_id?: true
  }

  export type LectureMinAggregateInputType = {
    id?: true
    subject_id?: true
    teacher_id?: true
    schedule_id?: true
    start_time?: true
    end_time?: true
    created_at?: true
    updated_at?: true
  }

  export type LectureMaxAggregateInputType = {
    id?: true
    subject_id?: true
    teacher_id?: true
    schedule_id?: true
    start_time?: true
    end_time?: true
    created_at?: true
    updated_at?: true
  }

  export type LectureCountAggregateInputType = {
    id?: true
    subject_id?: true
    teacher_id?: true
    schedule_id?: true
    start_time?: true
    end_time?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LectureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lecture to aggregate.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lectures
    **/
    _count?: true | LectureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LectureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LectureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LectureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LectureMaxAggregateInputType
  }

  export type GetLectureAggregateType<T extends LectureAggregateArgs> = {
        [P in keyof T & keyof AggregateLecture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecture[P]>
      : GetScalarType<T[P], AggregateLecture[P]>
  }




  export type lectureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lectureWhereInput
    orderBy?: lectureOrderByWithAggregationInput | lectureOrderByWithAggregationInput[]
    by: LectureScalarFieldEnum[] | LectureScalarFieldEnum
    having?: lectureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LectureCountAggregateInputType | true
    _avg?: LectureAvgAggregateInputType
    _sum?: LectureSumAggregateInputType
    _min?: LectureMinAggregateInputType
    _max?: LectureMaxAggregateInputType
  }

  export type LectureGroupByOutputType = {
    id: number
    subject_id: number
    teacher_id: number
    schedule_id: number
    start_time: Date
    end_time: Date
    created_at: Date
    updated_at: Date
    _count: LectureCountAggregateOutputType | null
    _avg: LectureAvgAggregateOutputType | null
    _sum: LectureSumAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  type GetLectureGroupByPayload<T extends lectureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LectureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LectureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LectureGroupByOutputType[P]>
            : GetScalarType<T[P], LectureGroupByOutputType[P]>
        }
      >
    >


  export type lectureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    schedule_id?: boolean
    start_time?: boolean
    end_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    schedule?: boolean | scheduleDefaultArgs<ExtArgs>
    presence?: boolean | lecture$presenceArgs<ExtArgs>
    _count?: boolean | LectureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecture"]>

  export type lectureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    schedule_id?: boolean
    start_time?: boolean
    end_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    schedule?: boolean | scheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecture"]>

  export type lectureSelectScalar = {
    id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    schedule_id?: boolean
    start_time?: boolean
    end_time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type lectureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    schedule?: boolean | scheduleDefaultArgs<ExtArgs>
    presence?: boolean | lecture$presenceArgs<ExtArgs>
    _count?: boolean | LectureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type lectureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    schedule?: boolean | scheduleDefaultArgs<ExtArgs>
  }

  export type $lecturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lecture"
    objects: {
      subject: Prisma.$subjectPayload<ExtArgs>
      teacher: Prisma.$teacherPayload<ExtArgs>
      schedule: Prisma.$schedulePayload<ExtArgs>
      presence: Prisma.$presencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subject_id: number
      teacher_id: number
      schedule_id: number
      start_time: Date
      end_time: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["lecture"]>
    composites: {}
  }

  type lectureGetPayload<S extends boolean | null | undefined | lectureDefaultArgs> = $Result.GetResult<Prisma.$lecturePayload, S>

  type lectureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<lectureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LectureCountAggregateInputType | true
    }

  export interface lectureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lecture'], meta: { name: 'lecture' } }
    /**
     * Find zero or one Lecture that matches the filter.
     * @param {lectureFindUniqueArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lectureFindUniqueArgs>(args: SelectSubset<T, lectureFindUniqueArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lecture that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {lectureFindUniqueOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lectureFindUniqueOrThrowArgs>(args: SelectSubset<T, lectureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lecture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureFindFirstArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lectureFindFirstArgs>(args?: SelectSubset<T, lectureFindFirstArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lecture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureFindFirstOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lectureFindFirstOrThrowArgs>(args?: SelectSubset<T, lectureFindFirstOrThrowArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Lectures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lectures
     * const lectures = await prisma.lecture.findMany()
     * 
     * // Get first 10 Lectures
     * const lectures = await prisma.lecture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lectureWithIdOnly = await prisma.lecture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lectureFindManyArgs>(args?: SelectSubset<T, lectureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lecture.
     * @param {lectureCreateArgs} args - Arguments to create a Lecture.
     * @example
     * // Create one Lecture
     * const Lecture = await prisma.lecture.create({
     *   data: {
     *     // ... data to create a Lecture
     *   }
     * })
     * 
     */
    create<T extends lectureCreateArgs>(args: SelectSubset<T, lectureCreateArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Lectures.
     * @param {lectureCreateManyArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lectureCreateManyArgs>(args?: SelectSubset<T, lectureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lectures and returns the data saved in the database.
     * @param {lectureCreateManyAndReturnArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lectures and only return the `id`
     * const lectureWithIdOnly = await prisma.lecture.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lectureCreateManyAndReturnArgs>(args?: SelectSubset<T, lectureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Lecture.
     * @param {lectureDeleteArgs} args - Arguments to delete one Lecture.
     * @example
     * // Delete one Lecture
     * const Lecture = await prisma.lecture.delete({
     *   where: {
     *     // ... filter to delete one Lecture
     *   }
     * })
     * 
     */
    delete<T extends lectureDeleteArgs>(args: SelectSubset<T, lectureDeleteArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lecture.
     * @param {lectureUpdateArgs} args - Arguments to update one Lecture.
     * @example
     * // Update one Lecture
     * const lecture = await prisma.lecture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lectureUpdateArgs>(args: SelectSubset<T, lectureUpdateArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Lectures.
     * @param {lectureDeleteManyArgs} args - Arguments to filter Lectures to delete.
     * @example
     * // Delete a few Lectures
     * const { count } = await prisma.lecture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lectureDeleteManyArgs>(args?: SelectSubset<T, lectureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lectures
     * const lecture = await prisma.lecture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lectureUpdateManyArgs>(args: SelectSubset<T, lectureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lecture.
     * @param {lectureUpsertArgs} args - Arguments to update or create a Lecture.
     * @example
     * // Update or create a Lecture
     * const lecture = await prisma.lecture.upsert({
     *   create: {
     *     // ... data to create a Lecture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecture we want to update
     *   }
     * })
     */
    upsert<T extends lectureUpsertArgs>(args: SelectSubset<T, lectureUpsertArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureCountArgs} args - Arguments to filter Lectures to count.
     * @example
     * // Count the number of Lectures
     * const count = await prisma.lecture.count({
     *   where: {
     *     // ... the filter for the Lectures we want to count
     *   }
     * })
    **/
    count<T extends lectureCountArgs>(
      args?: Subset<T, lectureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LectureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LectureAggregateArgs>(args: Subset<T, LectureAggregateArgs>): Prisma.PrismaPromise<GetLectureAggregateType<T>>

    /**
     * Group by Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lectureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lectureGroupByArgs['orderBy'] }
        : { orderBy?: lectureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lectureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLectureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lecture model
   */
  readonly fields: lectureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lecture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lectureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends subjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subjectDefaultArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    teacher<T extends teacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teacherDefaultArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    schedule<T extends scheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, scheduleDefaultArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    presence<T extends lecture$presenceArgs<ExtArgs> = {}>(args?: Subset<T, lecture$presenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lecture model
   */ 
  interface lectureFieldRefs {
    readonly id: FieldRef<"lecture", 'Int'>
    readonly subject_id: FieldRef<"lecture", 'Int'>
    readonly teacher_id: FieldRef<"lecture", 'Int'>
    readonly schedule_id: FieldRef<"lecture", 'Int'>
    readonly start_time: FieldRef<"lecture", 'DateTime'>
    readonly end_time: FieldRef<"lecture", 'DateTime'>
    readonly created_at: FieldRef<"lecture", 'DateTime'>
    readonly updated_at: FieldRef<"lecture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lecture findUnique
   */
  export type lectureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture findUniqueOrThrow
   */
  export type lectureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture findFirst
   */
  export type lectureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lectures.
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * lecture findFirstOrThrow
   */
  export type lectureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lectures.
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * lecture findMany
   */
  export type lectureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lectures to fetch.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lectures.
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * lecture create
   */
  export type lectureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * The data needed to create a lecture.
     */
    data: XOR<lectureCreateInput, lectureUncheckedCreateInput>
  }

  /**
   * lecture createMany
   */
  export type lectureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lectures.
     */
    data: lectureCreateManyInput | lectureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lecture createManyAndReturn
   */
  export type lectureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many lectures.
     */
    data: lectureCreateManyInput | lectureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lecture update
   */
  export type lectureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * The data needed to update a lecture.
     */
    data: XOR<lectureUpdateInput, lectureUncheckedUpdateInput>
    /**
     * Choose, which lecture to update.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture updateMany
   */
  export type lectureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lectures.
     */
    data: XOR<lectureUpdateManyMutationInput, lectureUncheckedUpdateManyInput>
    /**
     * Filter which lectures to update
     */
    where?: lectureWhereInput
  }

  /**
   * lecture upsert
   */
  export type lectureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * The filter to search for the lecture to update in case it exists.
     */
    where: lectureWhereUniqueInput
    /**
     * In case the lecture found by the `where` argument doesn't exist, create a new lecture with this data.
     */
    create: XOR<lectureCreateInput, lectureUncheckedCreateInput>
    /**
     * In case the lecture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lectureUpdateInput, lectureUncheckedUpdateInput>
  }

  /**
   * lecture delete
   */
  export type lectureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter which lecture to delete.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture deleteMany
   */
  export type lectureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lectures to delete
     */
    where?: lectureWhereInput
  }

  /**
   * lecture.presence
   */
  export type lecture$presenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
    where?: presenceWhereInput
    orderBy?: presenceOrderByWithRelationInput | presenceOrderByWithRelationInput[]
    cursor?: presenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * lecture without action
   */
  export type lectureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
  }


  /**
   * Model presence
   */

  export type AggregatePresence = {
    _count: PresenceCountAggregateOutputType | null
    _avg: PresenceAvgAggregateOutputType | null
    _sum: PresenceSumAggregateOutputType | null
    _min: PresenceMinAggregateOutputType | null
    _max: PresenceMaxAggregateOutputType | null
  }

  export type PresenceAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    lecture_id: number | null
  }

  export type PresenceSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    lecture_id: number | null
  }

  export type PresenceMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    lecture_id: number | null
    is_present: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PresenceMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    lecture_id: number | null
    is_present: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PresenceCountAggregateOutputType = {
    id: number
    user_id: number
    lecture_id: number
    is_present: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PresenceAvgAggregateInputType = {
    id?: true
    user_id?: true
    lecture_id?: true
  }

  export type PresenceSumAggregateInputType = {
    id?: true
    user_id?: true
    lecture_id?: true
  }

  export type PresenceMinAggregateInputType = {
    id?: true
    user_id?: true
    lecture_id?: true
    is_present?: true
    created_at?: true
    updated_at?: true
  }

  export type PresenceMaxAggregateInputType = {
    id?: true
    user_id?: true
    lecture_id?: true
    is_present?: true
    created_at?: true
    updated_at?: true
  }

  export type PresenceCountAggregateInputType = {
    id?: true
    user_id?: true
    lecture_id?: true
    is_present?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PresenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which presence to aggregate.
     */
    where?: presenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presences to fetch.
     */
    orderBy?: presenceOrderByWithRelationInput | presenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: presenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned presences
    **/
    _count?: true | PresenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresenceMaxAggregateInputType
  }

  export type GetPresenceAggregateType<T extends PresenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePresence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresence[P]>
      : GetScalarType<T[P], AggregatePresence[P]>
  }




  export type presenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: presenceWhereInput
    orderBy?: presenceOrderByWithAggregationInput | presenceOrderByWithAggregationInput[]
    by: PresenceScalarFieldEnum[] | PresenceScalarFieldEnum
    having?: presenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresenceCountAggregateInputType | true
    _avg?: PresenceAvgAggregateInputType
    _sum?: PresenceSumAggregateInputType
    _min?: PresenceMinAggregateInputType
    _max?: PresenceMaxAggregateInputType
  }

  export type PresenceGroupByOutputType = {
    id: number
    user_id: number
    lecture_id: number
    is_present: boolean
    created_at: Date
    updated_at: Date
    _count: PresenceCountAggregateOutputType | null
    _avg: PresenceAvgAggregateOutputType | null
    _sum: PresenceSumAggregateOutputType | null
    _min: PresenceMinAggregateOutputType | null
    _max: PresenceMaxAggregateOutputType | null
  }

  type GetPresenceGroupByPayload<T extends presenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresenceGroupByOutputType[P]>
            : GetScalarType<T[P], PresenceGroupByOutputType[P]>
        }
      >
    >


  export type presenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    lecture_id?: boolean
    is_present?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    lecture?: boolean | lectureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presence"]>

  export type presenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    lecture_id?: boolean
    is_present?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    lecture?: boolean | lectureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presence"]>

  export type presenceSelectScalar = {
    id?: boolean
    user_id?: boolean
    lecture_id?: boolean
    is_present?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type presenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    lecture?: boolean | lectureDefaultArgs<ExtArgs>
  }
  export type presenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    lecture?: boolean | lectureDefaultArgs<ExtArgs>
  }

  export type $presencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "presence"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      lecture: Prisma.$lecturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      lecture_id: number
      is_present: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["presence"]>
    composites: {}
  }

  type presenceGetPayload<S extends boolean | null | undefined | presenceDefaultArgs> = $Result.GetResult<Prisma.$presencePayload, S>

  type presenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<presenceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PresenceCountAggregateInputType | true
    }

  export interface presenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['presence'], meta: { name: 'presence' } }
    /**
     * Find zero or one Presence that matches the filter.
     * @param {presenceFindUniqueArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends presenceFindUniqueArgs>(args: SelectSubset<T, presenceFindUniqueArgs<ExtArgs>>): Prisma__presenceClient<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Presence that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {presenceFindUniqueOrThrowArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends presenceFindUniqueOrThrowArgs>(args: SelectSubset<T, presenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__presenceClient<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Presence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presenceFindFirstArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends presenceFindFirstArgs>(args?: SelectSubset<T, presenceFindFirstArgs<ExtArgs>>): Prisma__presenceClient<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Presence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presenceFindFirstOrThrowArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends presenceFindFirstOrThrowArgs>(args?: SelectSubset<T, presenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__presenceClient<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Presences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presences
     * const presences = await prisma.presence.findMany()
     * 
     * // Get first 10 Presences
     * const presences = await prisma.presence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presenceWithIdOnly = await prisma.presence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends presenceFindManyArgs>(args?: SelectSubset<T, presenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Presence.
     * @param {presenceCreateArgs} args - Arguments to create a Presence.
     * @example
     * // Create one Presence
     * const Presence = await prisma.presence.create({
     *   data: {
     *     // ... data to create a Presence
     *   }
     * })
     * 
     */
    create<T extends presenceCreateArgs>(args: SelectSubset<T, presenceCreateArgs<ExtArgs>>): Prisma__presenceClient<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Presences.
     * @param {presenceCreateManyArgs} args - Arguments to create many Presences.
     * @example
     * // Create many Presences
     * const presence = await prisma.presence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends presenceCreateManyArgs>(args?: SelectSubset<T, presenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Presences and returns the data saved in the database.
     * @param {presenceCreateManyAndReturnArgs} args - Arguments to create many Presences.
     * @example
     * // Create many Presences
     * const presence = await prisma.presence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Presences and only return the `id`
     * const presenceWithIdOnly = await prisma.presence.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends presenceCreateManyAndReturnArgs>(args?: SelectSubset<T, presenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Presence.
     * @param {presenceDeleteArgs} args - Arguments to delete one Presence.
     * @example
     * // Delete one Presence
     * const Presence = await prisma.presence.delete({
     *   where: {
     *     // ... filter to delete one Presence
     *   }
     * })
     * 
     */
    delete<T extends presenceDeleteArgs>(args: SelectSubset<T, presenceDeleteArgs<ExtArgs>>): Prisma__presenceClient<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Presence.
     * @param {presenceUpdateArgs} args - Arguments to update one Presence.
     * @example
     * // Update one Presence
     * const presence = await prisma.presence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends presenceUpdateArgs>(args: SelectSubset<T, presenceUpdateArgs<ExtArgs>>): Prisma__presenceClient<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Presences.
     * @param {presenceDeleteManyArgs} args - Arguments to filter Presences to delete.
     * @example
     * // Delete a few Presences
     * const { count } = await prisma.presence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends presenceDeleteManyArgs>(args?: SelectSubset<T, presenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presences
     * const presence = await prisma.presence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends presenceUpdateManyArgs>(args: SelectSubset<T, presenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Presence.
     * @param {presenceUpsertArgs} args - Arguments to update or create a Presence.
     * @example
     * // Update or create a Presence
     * const presence = await prisma.presence.upsert({
     *   create: {
     *     // ... data to create a Presence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Presence we want to update
     *   }
     * })
     */
    upsert<T extends presenceUpsertArgs>(args: SelectSubset<T, presenceUpsertArgs<ExtArgs>>): Prisma__presenceClient<$Result.GetResult<Prisma.$presencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Presences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presenceCountArgs} args - Arguments to filter Presences to count.
     * @example
     * // Count the number of Presences
     * const count = await prisma.presence.count({
     *   where: {
     *     // ... the filter for the Presences we want to count
     *   }
     * })
    **/
    count<T extends presenceCountArgs>(
      args?: Subset<T, presenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Presence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PresenceAggregateArgs>(args: Subset<T, PresenceAggregateArgs>): Prisma.PrismaPromise<GetPresenceAggregateType<T>>

    /**
     * Group by Presence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends presenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: presenceGroupByArgs['orderBy'] }
        : { orderBy?: presenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, presenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the presence model
   */
  readonly fields: presenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for presence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__presenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    lecture<T extends lectureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lectureDefaultArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the presence model
   */ 
  interface presenceFieldRefs {
    readonly id: FieldRef<"presence", 'Int'>
    readonly user_id: FieldRef<"presence", 'Int'>
    readonly lecture_id: FieldRef<"presence", 'Int'>
    readonly is_present: FieldRef<"presence", 'Boolean'>
    readonly created_at: FieldRef<"presence", 'DateTime'>
    readonly updated_at: FieldRef<"presence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * presence findUnique
   */
  export type presenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
    /**
     * Filter, which presence to fetch.
     */
    where: presenceWhereUniqueInput
  }

  /**
   * presence findUniqueOrThrow
   */
  export type presenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
    /**
     * Filter, which presence to fetch.
     */
    where: presenceWhereUniqueInput
  }

  /**
   * presence findFirst
   */
  export type presenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
    /**
     * Filter, which presence to fetch.
     */
    where?: presenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presences to fetch.
     */
    orderBy?: presenceOrderByWithRelationInput | presenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for presences.
     */
    cursor?: presenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of presences.
     */
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * presence findFirstOrThrow
   */
  export type presenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
    /**
     * Filter, which presence to fetch.
     */
    where?: presenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presences to fetch.
     */
    orderBy?: presenceOrderByWithRelationInput | presenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for presences.
     */
    cursor?: presenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of presences.
     */
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * presence findMany
   */
  export type presenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
    /**
     * Filter, which presences to fetch.
     */
    where?: presenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presences to fetch.
     */
    orderBy?: presenceOrderByWithRelationInput | presenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing presences.
     */
    cursor?: presenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presences.
     */
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * presence create
   */
  export type presenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
    /**
     * The data needed to create a presence.
     */
    data: XOR<presenceCreateInput, presenceUncheckedCreateInput>
  }

  /**
   * presence createMany
   */
  export type presenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many presences.
     */
    data: presenceCreateManyInput | presenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * presence createManyAndReturn
   */
  export type presenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many presences.
     */
    data: presenceCreateManyInput | presenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * presence update
   */
  export type presenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
    /**
     * The data needed to update a presence.
     */
    data: XOR<presenceUpdateInput, presenceUncheckedUpdateInput>
    /**
     * Choose, which presence to update.
     */
    where: presenceWhereUniqueInput
  }

  /**
   * presence updateMany
   */
  export type presenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update presences.
     */
    data: XOR<presenceUpdateManyMutationInput, presenceUncheckedUpdateManyInput>
    /**
     * Filter which presences to update
     */
    where?: presenceWhereInput
  }

  /**
   * presence upsert
   */
  export type presenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
    /**
     * The filter to search for the presence to update in case it exists.
     */
    where: presenceWhereUniqueInput
    /**
     * In case the presence found by the `where` argument doesn't exist, create a new presence with this data.
     */
    create: XOR<presenceCreateInput, presenceUncheckedCreateInput>
    /**
     * In case the presence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<presenceUpdateInput, presenceUncheckedUpdateInput>
  }

  /**
   * presence delete
   */
  export type presenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
    /**
     * Filter which presence to delete.
     */
    where: presenceWhereUniqueInput
  }

  /**
   * presence deleteMany
   */
  export type presenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which presences to delete
     */
    where?: presenceWhereInput
  }

  /**
   * presence without action
   */
  export type presenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presence
     */
    select?: presenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presenceInclude<ExtArgs> | null
  }


  /**
   * Model schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    date?: true
    created_at?: true
    updated_at?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    date?: true
    created_at?: true
    updated_at?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedule to aggregate.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput
    orderBy?: scheduleOrderByWithAggregationInput | scheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: scheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    date: Date
    created_at: Date
    updated_at: Date
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
    lecture?: boolean | schedule$lectureArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type scheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type scheduleSelectScalar = {
    id?: boolean
    date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type scheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture?: boolean | schedule$lectureArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type scheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schedule"
    objects: {
      lecture: Prisma.$lecturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type scheduleGetPayload<S extends boolean | null | undefined | scheduleDefaultArgs> = $Result.GetResult<Prisma.$schedulePayload, S>

  type scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<scheduleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedule'], meta: { name: 'schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {scheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends scheduleFindUniqueArgs>(args: SelectSubset<T, scheduleFindUniqueArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {scheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends scheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, scheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends scheduleFindFirstArgs>(args?: SelectSubset<T, scheduleFindFirstArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends scheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, scheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends scheduleFindManyArgs>(args?: SelectSubset<T, scheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Schedule.
     * @param {scheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends scheduleCreateArgs>(args: SelectSubset<T, scheduleCreateArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Schedules.
     * @param {scheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends scheduleCreateManyArgs>(args?: SelectSubset<T, scheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {scheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends scheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, scheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Schedule.
     * @param {scheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends scheduleDeleteArgs>(args: SelectSubset<T, scheduleDeleteArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Schedule.
     * @param {scheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends scheduleUpdateArgs>(args: SelectSubset<T, scheduleUpdateArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Schedules.
     * @param {scheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends scheduleDeleteManyArgs>(args?: SelectSubset<T, scheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends scheduleUpdateManyArgs>(args: SelectSubset<T, scheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {scheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends scheduleUpsertArgs>(args: SelectSubset<T, scheduleUpsertArgs<ExtArgs>>): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends scheduleCountArgs>(
      args?: Subset<T, scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends scheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scheduleGroupByArgs['orderBy'] }
        : { orderBy?: scheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, scheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schedule model
   */
  readonly fields: scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecture<T extends schedule$lectureArgs<ExtArgs> = {}>(args?: Subset<T, schedule$lectureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the schedule model
   */ 
  interface scheduleFieldRefs {
    readonly id: FieldRef<"schedule", 'Int'>
    readonly date: FieldRef<"schedule", 'DateTime'>
    readonly created_at: FieldRef<"schedule", 'DateTime'>
    readonly updated_at: FieldRef<"schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * schedule findUnique
   */
  export type scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule findUniqueOrThrow
   */
  export type scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule findFirst
   */
  export type scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule findFirstOrThrow
   */
  export type scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule findMany
   */
  export type scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter, which schedules to fetch.
     */
    where?: scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schedules.
     */
    cursor?: scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * schedule create
   */
  export type scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a schedule.
     */
    data: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>
  }

  /**
   * schedule createMany
   */
  export type scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schedule createManyAndReturn
   */
  export type scheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schedule update
   */
  export type scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a schedule.
     */
    data: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>
    /**
     * Choose, which schedule to update.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule updateMany
   */
  export type scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>
    /**
     * Filter which schedules to update
     */
    where?: scheduleWhereInput
  }

  /**
   * schedule upsert
   */
  export type scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the schedule to update in case it exists.
     */
    where: scheduleWhereUniqueInput
    /**
     * In case the schedule found by the `where` argument doesn't exist, create a new schedule with this data.
     */
    create: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>
    /**
     * In case the schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>
  }

  /**
   * schedule delete
   */
  export type scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
    /**
     * Filter which schedule to delete.
     */
    where: scheduleWhereUniqueInput
  }

  /**
   * schedule deleteMany
   */
  export type scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: scheduleWhereInput
  }

  /**
   * schedule.lecture
   */
  export type schedule$lectureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    where?: lectureWhereInput
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    cursor?: lectureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * schedule without action
   */
  export type scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduleInclude<ExtArgs> | null
  }


  /**
   * Model subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subject to aggregate.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type subjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectWhereInput
    orderBy?: subjectOrderByWithAggregationInput | subjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: subjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends subjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type subjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher_subjects?: boolean | subject$teacher_subjectsArgs<ExtArgs>
    lecture?: boolean | subject$lectureArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type subjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["subject"]>

  export type subjectSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type subjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_subjects?: boolean | subject$teacher_subjectsArgs<ExtArgs>
    lecture?: boolean | subject$lectureArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $subjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subject"
    objects: {
      teacher_subjects: Prisma.$teacher_subjectsPayload<ExtArgs>[]
      lecture: Prisma.$lecturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type subjectGetPayload<S extends boolean | null | undefined | subjectDefaultArgs> = $Result.GetResult<Prisma.$subjectPayload, S>

  type subjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<subjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface subjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subject'], meta: { name: 'subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {subjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subjectFindUniqueArgs>(args: SelectSubset<T, subjectFindUniqueArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {subjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subjectFindUniqueOrThrowArgs>(args: SelectSubset<T, subjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subjectFindFirstArgs>(args?: SelectSubset<T, subjectFindFirstArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subjectFindFirstOrThrowArgs>(args?: SelectSubset<T, subjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subjectFindManyArgs>(args?: SelectSubset<T, subjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subject.
     * @param {subjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends subjectCreateArgs>(args: SelectSubset<T, subjectCreateArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subjects.
     * @param {subjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subjectCreateManyArgs>(args?: SelectSubset<T, subjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {subjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subjectCreateManyAndReturnArgs>(args?: SelectSubset<T, subjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subject.
     * @param {subjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends subjectDeleteArgs>(args: SelectSubset<T, subjectDeleteArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subject.
     * @param {subjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subjectUpdateArgs>(args: SelectSubset<T, subjectUpdateArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subjects.
     * @param {subjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subjectDeleteManyArgs>(args?: SelectSubset<T, subjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subjectUpdateManyArgs>(args: SelectSubset<T, subjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subject.
     * @param {subjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends subjectUpsertArgs>(args: SelectSubset<T, subjectUpsertArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends subjectCountArgs>(
      args?: Subset<T, subjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subjectGroupByArgs['orderBy'] }
        : { orderBy?: subjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subject model
   */
  readonly fields: subjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher_subjects<T extends subject$teacher_subjectsArgs<ExtArgs> = {}>(args?: Subset<T, subject$teacher_subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "findMany"> | Null>
    lecture<T extends subject$lectureArgs<ExtArgs> = {}>(args?: Subset<T, subject$lectureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the subject model
   */ 
  interface subjectFieldRefs {
    readonly id: FieldRef<"subject", 'Int'>
    readonly name: FieldRef<"subject", 'String'>
    readonly created_at: FieldRef<"subject", 'DateTime'>
    readonly updated_at: FieldRef<"subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subject findUnique
   */
  export type subjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject findUniqueOrThrow
   */
  export type subjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject findFirst
   */
  export type subjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject findFirstOrThrow
   */
  export type subjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject findMany
   */
  export type subjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject create
   */
  export type subjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The data needed to create a subject.
     */
    data: XOR<subjectCreateInput, subjectUncheckedCreateInput>
  }

  /**
   * subject createMany
   */
  export type subjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subjects.
     */
    data: subjectCreateManyInput | subjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subject createManyAndReturn
   */
  export type subjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many subjects.
     */
    data: subjectCreateManyInput | subjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subject update
   */
  export type subjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The data needed to update a subject.
     */
    data: XOR<subjectUpdateInput, subjectUncheckedUpdateInput>
    /**
     * Choose, which subject to update.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject updateMany
   */
  export type subjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectUpdateManyMutationInput, subjectUncheckedUpdateManyInput>
    /**
     * Filter which subjects to update
     */
    where?: subjectWhereInput
  }

  /**
   * subject upsert
   */
  export type subjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The filter to search for the subject to update in case it exists.
     */
    where: subjectWhereUniqueInput
    /**
     * In case the subject found by the `where` argument doesn't exist, create a new subject with this data.
     */
    create: XOR<subjectCreateInput, subjectUncheckedCreateInput>
    /**
     * In case the subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subjectUpdateInput, subjectUncheckedUpdateInput>
  }

  /**
   * subject delete
   */
  export type subjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter which subject to delete.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject deleteMany
   */
  export type subjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to delete
     */
    where?: subjectWhereInput
  }

  /**
   * subject.teacher_subjects
   */
  export type subject$teacher_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
    where?: teacher_subjectsWhereInput
    orderBy?: teacher_subjectsOrderByWithRelationInput | teacher_subjectsOrderByWithRelationInput[]
    cursor?: teacher_subjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Teacher_subjectsScalarFieldEnum | Teacher_subjectsScalarFieldEnum[]
  }

  /**
   * subject.lecture
   */
  export type subject$lectureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    where?: lectureWhereInput
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    cursor?: lectureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * subject without action
   */
  export type subjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
  }


  /**
   * Model teacher_subjects
   */

  export type AggregateTeacher_subjects = {
    _count: Teacher_subjectsCountAggregateOutputType | null
    _avg: Teacher_subjectsAvgAggregateOutputType | null
    _sum: Teacher_subjectsSumAggregateOutputType | null
    _min: Teacher_subjectsMinAggregateOutputType | null
    _max: Teacher_subjectsMaxAggregateOutputType | null
  }

  export type Teacher_subjectsAvgAggregateOutputType = {
    teacher_id: number | null
    subject_id: number | null
  }

  export type Teacher_subjectsSumAggregateOutputType = {
    teacher_id: number | null
    subject_id: number | null
  }

  export type Teacher_subjectsMinAggregateOutputType = {
    teacher_id: number | null
    subject_id: number | null
    assigned_at: Date | null
    is_primary: boolean | null
  }

  export type Teacher_subjectsMaxAggregateOutputType = {
    teacher_id: number | null
    subject_id: number | null
    assigned_at: Date | null
    is_primary: boolean | null
  }

  export type Teacher_subjectsCountAggregateOutputType = {
    teacher_id: number
    subject_id: number
    assigned_at: number
    is_primary: number
    _all: number
  }


  export type Teacher_subjectsAvgAggregateInputType = {
    teacher_id?: true
    subject_id?: true
  }

  export type Teacher_subjectsSumAggregateInputType = {
    teacher_id?: true
    subject_id?: true
  }

  export type Teacher_subjectsMinAggregateInputType = {
    teacher_id?: true
    subject_id?: true
    assigned_at?: true
    is_primary?: true
  }

  export type Teacher_subjectsMaxAggregateInputType = {
    teacher_id?: true
    subject_id?: true
    assigned_at?: true
    is_primary?: true
  }

  export type Teacher_subjectsCountAggregateInputType = {
    teacher_id?: true
    subject_id?: true
    assigned_at?: true
    is_primary?: true
    _all?: true
  }

  export type Teacher_subjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher_subjects to aggregate.
     */
    where?: teacher_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teacher_subjects to fetch.
     */
    orderBy?: teacher_subjectsOrderByWithRelationInput | teacher_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teacher_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teacher_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teacher_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teacher_subjects
    **/
    _count?: true | Teacher_subjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Teacher_subjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Teacher_subjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Teacher_subjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Teacher_subjectsMaxAggregateInputType
  }

  export type GetTeacher_subjectsAggregateType<T extends Teacher_subjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher_subjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher_subjects[P]>
      : GetScalarType<T[P], AggregateTeacher_subjects[P]>
  }




  export type teacher_subjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacher_subjectsWhereInput
    orderBy?: teacher_subjectsOrderByWithAggregationInput | teacher_subjectsOrderByWithAggregationInput[]
    by: Teacher_subjectsScalarFieldEnum[] | Teacher_subjectsScalarFieldEnum
    having?: teacher_subjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Teacher_subjectsCountAggregateInputType | true
    _avg?: Teacher_subjectsAvgAggregateInputType
    _sum?: Teacher_subjectsSumAggregateInputType
    _min?: Teacher_subjectsMinAggregateInputType
    _max?: Teacher_subjectsMaxAggregateInputType
  }

  export type Teacher_subjectsGroupByOutputType = {
    teacher_id: number
    subject_id: number
    assigned_at: Date
    is_primary: boolean
    _count: Teacher_subjectsCountAggregateOutputType | null
    _avg: Teacher_subjectsAvgAggregateOutputType | null
    _sum: Teacher_subjectsSumAggregateOutputType | null
    _min: Teacher_subjectsMinAggregateOutputType | null
    _max: Teacher_subjectsMaxAggregateOutputType | null
  }

  type GetTeacher_subjectsGroupByPayload<T extends teacher_subjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Teacher_subjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Teacher_subjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Teacher_subjectsGroupByOutputType[P]>
            : GetScalarType<T[P], Teacher_subjectsGroupByOutputType[P]>
        }
      >
    >


  export type teacher_subjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacher_id?: boolean
    subject_id?: boolean
    assigned_at?: boolean
    is_primary?: boolean
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher_subjects"]>

  export type teacher_subjectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacher_id?: boolean
    subject_id?: boolean
    assigned_at?: boolean
    is_primary?: boolean
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher_subjects"]>

  export type teacher_subjectsSelectScalar = {
    teacher_id?: boolean
    subject_id?: boolean
    assigned_at?: boolean
    is_primary?: boolean
  }

  export type teacher_subjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
  }
  export type teacher_subjectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
  }

  export type $teacher_subjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teacher_subjects"
    objects: {
      teacher: Prisma.$teacherPayload<ExtArgs>
      subject: Prisma.$subjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      teacher_id: number
      subject_id: number
      assigned_at: Date
      is_primary: boolean
    }, ExtArgs["result"]["teacher_subjects"]>
    composites: {}
  }

  type teacher_subjectsGetPayload<S extends boolean | null | undefined | teacher_subjectsDefaultArgs> = $Result.GetResult<Prisma.$teacher_subjectsPayload, S>

  type teacher_subjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<teacher_subjectsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Teacher_subjectsCountAggregateInputType | true
    }

  export interface teacher_subjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teacher_subjects'], meta: { name: 'teacher_subjects' } }
    /**
     * Find zero or one Teacher_subjects that matches the filter.
     * @param {teacher_subjectsFindUniqueArgs} args - Arguments to find a Teacher_subjects
     * @example
     * // Get one Teacher_subjects
     * const teacher_subjects = await prisma.teacher_subjects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teacher_subjectsFindUniqueArgs>(args: SelectSubset<T, teacher_subjectsFindUniqueArgs<ExtArgs>>): Prisma__teacher_subjectsClient<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Teacher_subjects that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {teacher_subjectsFindUniqueOrThrowArgs} args - Arguments to find a Teacher_subjects
     * @example
     * // Get one Teacher_subjects
     * const teacher_subjects = await prisma.teacher_subjects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teacher_subjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, teacher_subjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teacher_subjectsClient<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Teacher_subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_subjectsFindFirstArgs} args - Arguments to find a Teacher_subjects
     * @example
     * // Get one Teacher_subjects
     * const teacher_subjects = await prisma.teacher_subjects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teacher_subjectsFindFirstArgs>(args?: SelectSubset<T, teacher_subjectsFindFirstArgs<ExtArgs>>): Prisma__teacher_subjectsClient<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Teacher_subjects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_subjectsFindFirstOrThrowArgs} args - Arguments to find a Teacher_subjects
     * @example
     * // Get one Teacher_subjects
     * const teacher_subjects = await prisma.teacher_subjects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teacher_subjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, teacher_subjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__teacher_subjectsClient<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Teacher_subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_subjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teacher_subjects
     * const teacher_subjects = await prisma.teacher_subjects.findMany()
     * 
     * // Get first 10 Teacher_subjects
     * const teacher_subjects = await prisma.teacher_subjects.findMany({ take: 10 })
     * 
     * // Only select the `teacher_id`
     * const teacher_subjectsWithTeacher_idOnly = await prisma.teacher_subjects.findMany({ select: { teacher_id: true } })
     * 
     */
    findMany<T extends teacher_subjectsFindManyArgs>(args?: SelectSubset<T, teacher_subjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Teacher_subjects.
     * @param {teacher_subjectsCreateArgs} args - Arguments to create a Teacher_subjects.
     * @example
     * // Create one Teacher_subjects
     * const Teacher_subjects = await prisma.teacher_subjects.create({
     *   data: {
     *     // ... data to create a Teacher_subjects
     *   }
     * })
     * 
     */
    create<T extends teacher_subjectsCreateArgs>(args: SelectSubset<T, teacher_subjectsCreateArgs<ExtArgs>>): Prisma__teacher_subjectsClient<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Teacher_subjects.
     * @param {teacher_subjectsCreateManyArgs} args - Arguments to create many Teacher_subjects.
     * @example
     * // Create many Teacher_subjects
     * const teacher_subjects = await prisma.teacher_subjects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teacher_subjectsCreateManyArgs>(args?: SelectSubset<T, teacher_subjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teacher_subjects and returns the data saved in the database.
     * @param {teacher_subjectsCreateManyAndReturnArgs} args - Arguments to create many Teacher_subjects.
     * @example
     * // Create many Teacher_subjects
     * const teacher_subjects = await prisma.teacher_subjects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teacher_subjects and only return the `teacher_id`
     * const teacher_subjectsWithTeacher_idOnly = await prisma.teacher_subjects.createManyAndReturn({ 
     *   select: { teacher_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teacher_subjectsCreateManyAndReturnArgs>(args?: SelectSubset<T, teacher_subjectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Teacher_subjects.
     * @param {teacher_subjectsDeleteArgs} args - Arguments to delete one Teacher_subjects.
     * @example
     * // Delete one Teacher_subjects
     * const Teacher_subjects = await prisma.teacher_subjects.delete({
     *   where: {
     *     // ... filter to delete one Teacher_subjects
     *   }
     * })
     * 
     */
    delete<T extends teacher_subjectsDeleteArgs>(args: SelectSubset<T, teacher_subjectsDeleteArgs<ExtArgs>>): Prisma__teacher_subjectsClient<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Teacher_subjects.
     * @param {teacher_subjectsUpdateArgs} args - Arguments to update one Teacher_subjects.
     * @example
     * // Update one Teacher_subjects
     * const teacher_subjects = await prisma.teacher_subjects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teacher_subjectsUpdateArgs>(args: SelectSubset<T, teacher_subjectsUpdateArgs<ExtArgs>>): Prisma__teacher_subjectsClient<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Teacher_subjects.
     * @param {teacher_subjectsDeleteManyArgs} args - Arguments to filter Teacher_subjects to delete.
     * @example
     * // Delete a few Teacher_subjects
     * const { count } = await prisma.teacher_subjects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teacher_subjectsDeleteManyArgs>(args?: SelectSubset<T, teacher_subjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teacher_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_subjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teacher_subjects
     * const teacher_subjects = await prisma.teacher_subjects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teacher_subjectsUpdateManyArgs>(args: SelectSubset<T, teacher_subjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher_subjects.
     * @param {teacher_subjectsUpsertArgs} args - Arguments to update or create a Teacher_subjects.
     * @example
     * // Update or create a Teacher_subjects
     * const teacher_subjects = await prisma.teacher_subjects.upsert({
     *   create: {
     *     // ... data to create a Teacher_subjects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher_subjects we want to update
     *   }
     * })
     */
    upsert<T extends teacher_subjectsUpsertArgs>(args: SelectSubset<T, teacher_subjectsUpsertArgs<ExtArgs>>): Prisma__teacher_subjectsClient<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Teacher_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_subjectsCountArgs} args - Arguments to filter Teacher_subjects to count.
     * @example
     * // Count the number of Teacher_subjects
     * const count = await prisma.teacher_subjects.count({
     *   where: {
     *     // ... the filter for the Teacher_subjects we want to count
     *   }
     * })
    **/
    count<T extends teacher_subjectsCountArgs>(
      args?: Subset<T, teacher_subjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Teacher_subjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teacher_subjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Teacher_subjectsAggregateArgs>(args: Subset<T, Teacher_subjectsAggregateArgs>): Prisma.PrismaPromise<GetTeacher_subjectsAggregateType<T>>

    /**
     * Group by Teacher_subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_subjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teacher_subjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacher_subjectsGroupByArgs['orderBy'] }
        : { orderBy?: teacher_subjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teacher_subjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacher_subjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teacher_subjects model
   */
  readonly fields: teacher_subjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacher_subjects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacher_subjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends teacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teacherDefaultArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    subject<T extends subjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subjectDefaultArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teacher_subjects model
   */ 
  interface teacher_subjectsFieldRefs {
    readonly teacher_id: FieldRef<"teacher_subjects", 'Int'>
    readonly subject_id: FieldRef<"teacher_subjects", 'Int'>
    readonly assigned_at: FieldRef<"teacher_subjects", 'DateTime'>
    readonly is_primary: FieldRef<"teacher_subjects", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * teacher_subjects findUnique
   */
  export type teacher_subjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which teacher_subjects to fetch.
     */
    where: teacher_subjectsWhereUniqueInput
  }

  /**
   * teacher_subjects findUniqueOrThrow
   */
  export type teacher_subjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which teacher_subjects to fetch.
     */
    where: teacher_subjectsWhereUniqueInput
  }

  /**
   * teacher_subjects findFirst
   */
  export type teacher_subjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which teacher_subjects to fetch.
     */
    where?: teacher_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teacher_subjects to fetch.
     */
    orderBy?: teacher_subjectsOrderByWithRelationInput | teacher_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teacher_subjects.
     */
    cursor?: teacher_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teacher_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teacher_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teacher_subjects.
     */
    distinct?: Teacher_subjectsScalarFieldEnum | Teacher_subjectsScalarFieldEnum[]
  }

  /**
   * teacher_subjects findFirstOrThrow
   */
  export type teacher_subjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which teacher_subjects to fetch.
     */
    where?: teacher_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teacher_subjects to fetch.
     */
    orderBy?: teacher_subjectsOrderByWithRelationInput | teacher_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teacher_subjects.
     */
    cursor?: teacher_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teacher_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teacher_subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teacher_subjects.
     */
    distinct?: Teacher_subjectsScalarFieldEnum | Teacher_subjectsScalarFieldEnum[]
  }

  /**
   * teacher_subjects findMany
   */
  export type teacher_subjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
    /**
     * Filter, which teacher_subjects to fetch.
     */
    where?: teacher_subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teacher_subjects to fetch.
     */
    orderBy?: teacher_subjectsOrderByWithRelationInput | teacher_subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teacher_subjects.
     */
    cursor?: teacher_subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teacher_subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teacher_subjects.
     */
    skip?: number
    distinct?: Teacher_subjectsScalarFieldEnum | Teacher_subjectsScalarFieldEnum[]
  }

  /**
   * teacher_subjects create
   */
  export type teacher_subjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a teacher_subjects.
     */
    data: XOR<teacher_subjectsCreateInput, teacher_subjectsUncheckedCreateInput>
  }

  /**
   * teacher_subjects createMany
   */
  export type teacher_subjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teacher_subjects.
     */
    data: teacher_subjectsCreateManyInput | teacher_subjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teacher_subjects createManyAndReturn
   */
  export type teacher_subjectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many teacher_subjects.
     */
    data: teacher_subjectsCreateManyInput | teacher_subjectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * teacher_subjects update
   */
  export type teacher_subjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a teacher_subjects.
     */
    data: XOR<teacher_subjectsUpdateInput, teacher_subjectsUncheckedUpdateInput>
    /**
     * Choose, which teacher_subjects to update.
     */
    where: teacher_subjectsWhereUniqueInput
  }

  /**
   * teacher_subjects updateMany
   */
  export type teacher_subjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teacher_subjects.
     */
    data: XOR<teacher_subjectsUpdateManyMutationInput, teacher_subjectsUncheckedUpdateManyInput>
    /**
     * Filter which teacher_subjects to update
     */
    where?: teacher_subjectsWhereInput
  }

  /**
   * teacher_subjects upsert
   */
  export type teacher_subjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the teacher_subjects to update in case it exists.
     */
    where: teacher_subjectsWhereUniqueInput
    /**
     * In case the teacher_subjects found by the `where` argument doesn't exist, create a new teacher_subjects with this data.
     */
    create: XOR<teacher_subjectsCreateInput, teacher_subjectsUncheckedCreateInput>
    /**
     * In case the teacher_subjects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacher_subjectsUpdateInput, teacher_subjectsUncheckedUpdateInput>
  }

  /**
   * teacher_subjects delete
   */
  export type teacher_subjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
    /**
     * Filter which teacher_subjects to delete.
     */
    where: teacher_subjectsWhereUniqueInput
  }

  /**
   * teacher_subjects deleteMany
   */
  export type teacher_subjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher_subjects to delete
     */
    where?: teacher_subjectsWhereInput
  }

  /**
   * teacher_subjects without action
   */
  export type teacher_subjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
  }


  /**
   * Model teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher to aggregate.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type teacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacherWhereInput
    orderBy?: teacherOrderByWithAggregationInput | teacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: teacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    name: string
    email: string | null
    created_at: Date
    updated_at: Date
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends teacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type teacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher_subjects?: boolean | teacher$teacher_subjectsArgs<ExtArgs>
    lecture?: boolean | teacher$lectureArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type teacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type teacherSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type teacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_subjects?: boolean | teacher$teacher_subjectsArgs<ExtArgs>
    lecture?: boolean | teacher$lectureArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type teacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $teacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teacher"
    objects: {
      teacher_subjects: Prisma.$teacher_subjectsPayload<ExtArgs>[]
      lecture: Prisma.$lecturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type teacherGetPayload<S extends boolean | null | undefined | teacherDefaultArgs> = $Result.GetResult<Prisma.$teacherPayload, S>

  type teacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<teacherFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface teacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teacher'], meta: { name: 'teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {teacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teacherFindUniqueArgs>(args: SelectSubset<T, teacherFindUniqueArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {teacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teacherFindUniqueOrThrowArgs>(args: SelectSubset<T, teacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teacherFindFirstArgs>(args?: SelectSubset<T, teacherFindFirstArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teacherFindFirstOrThrowArgs>(args?: SelectSubset<T, teacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teacherFindManyArgs>(args?: SelectSubset<T, teacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Teacher.
     * @param {teacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends teacherCreateArgs>(args: SelectSubset<T, teacherCreateArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Teachers.
     * @param {teacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teacherCreateManyArgs>(args?: SelectSubset<T, teacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {teacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teacherCreateManyAndReturnArgs>(args?: SelectSubset<T, teacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Teacher.
     * @param {teacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends teacherDeleteArgs>(args: SelectSubset<T, teacherDeleteArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Teacher.
     * @param {teacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teacherUpdateArgs>(args: SelectSubset<T, teacherUpdateArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Teachers.
     * @param {teacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teacherDeleteManyArgs>(args?: SelectSubset<T, teacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teacherUpdateManyArgs>(args: SelectSubset<T, teacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {teacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends teacherUpsertArgs>(args: SelectSubset<T, teacherUpsertArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends teacherCountArgs>(
      args?: Subset<T, teacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacherGroupByArgs['orderBy'] }
        : { orderBy?: teacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teacher model
   */
  readonly fields: teacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher_subjects<T extends teacher$teacher_subjectsArgs<ExtArgs> = {}>(args?: Subset<T, teacher$teacher_subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacher_subjectsPayload<ExtArgs>, T, "findMany"> | Null>
    lecture<T extends teacher$lectureArgs<ExtArgs> = {}>(args?: Subset<T, teacher$lectureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teacher model
   */ 
  interface teacherFieldRefs {
    readonly id: FieldRef<"teacher", 'Int'>
    readonly name: FieldRef<"teacher", 'String'>
    readonly email: FieldRef<"teacher", 'String'>
    readonly created_at: FieldRef<"teacher", 'DateTime'>
    readonly updated_at: FieldRef<"teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * teacher findUnique
   */
  export type teacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher findUniqueOrThrow
   */
  export type teacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher findFirst
   */
  export type teacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher findFirstOrThrow
   */
  export type teacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher findMany
   */
  export type teacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teachers to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher create
   */
  export type teacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The data needed to create a teacher.
     */
    data: XOR<teacherCreateInput, teacherUncheckedCreateInput>
  }

  /**
   * teacher createMany
   */
  export type teacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teachers.
     */
    data: teacherCreateManyInput | teacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teacher createManyAndReturn
   */
  export type teacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many teachers.
     */
    data: teacherCreateManyInput | teacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teacher update
   */
  export type teacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The data needed to update a teacher.
     */
    data: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>
    /**
     * Choose, which teacher to update.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher updateMany
   */
  export type teacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teachers.
     */
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyInput>
    /**
     * Filter which teachers to update
     */
    where?: teacherWhereInput
  }

  /**
   * teacher upsert
   */
  export type teacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The filter to search for the teacher to update in case it exists.
     */
    where: teacherWhereUniqueInput
    /**
     * In case the teacher found by the `where` argument doesn't exist, create a new teacher with this data.
     */
    create: XOR<teacherCreateInput, teacherUncheckedCreateInput>
    /**
     * In case the teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>
  }

  /**
   * teacher delete
   */
  export type teacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter which teacher to delete.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher deleteMany
   */
  export type teacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers to delete
     */
    where?: teacherWhereInput
  }

  /**
   * teacher.teacher_subjects
   */
  export type teacher$teacher_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_subjects
     */
    select?: teacher_subjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_subjectsInclude<ExtArgs> | null
    where?: teacher_subjectsWhereInput
    orderBy?: teacher_subjectsOrderByWithRelationInput | teacher_subjectsOrderByWithRelationInput[]
    cursor?: teacher_subjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Teacher_subjectsScalarFieldEnum | Teacher_subjectsScalarFieldEnum[]
  }

  /**
   * teacher.lecture
   */
  export type teacher$lectureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    where?: lectureWhereInput
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    cursor?: lectureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * teacher without action
   */
  export type teacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Verification_tokenScalarFieldEnum: {
    identifier: 'identifier',
    expires: 'expires',
    token: 'token'
  };

  export type Verification_tokenScalarFieldEnum = (typeof Verification_tokenScalarFieldEnum)[keyof typeof Verification_tokenScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    id_token: 'id_token',
    scope: 'scope',
    session_state: 'session_state',
    token_type: 'token_type'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expires: 'expires',
    sessionToken: 'sessionToken'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const User_rolesScalarFieldEnum: {
    user_id: 'user_id',
    role_id: 'role_id',
    assigned_at: 'assigned_at'
  };

  export type User_rolesScalarFieldEnum = (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const Role_permissionsScalarFieldEnum: {
    role_id: 'role_id',
    permission_id: 'permission_id',
    assigned_at: 'assigned_at'
  };

  export type Role_permissionsScalarFieldEnum = (typeof Role_permissionsScalarFieldEnum)[keyof typeof Role_permissionsScalarFieldEnum]


  export const Database_metricScalarFieldEnum: {
    id: 'id',
    query_time: 'query_time',
    row_count: 'row_count',
    timestamp: 'timestamp'
  };

  export type Database_metricScalarFieldEnum = (typeof Database_metricScalarFieldEnum)[keyof typeof Database_metricScalarFieldEnum]


  export const LectureScalarFieldEnum: {
    id: 'id',
    subject_id: 'subject_id',
    teacher_id: 'teacher_id',
    schedule_id: 'schedule_id',
    start_time: 'start_time',
    end_time: 'end_time',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LectureScalarFieldEnum = (typeof LectureScalarFieldEnum)[keyof typeof LectureScalarFieldEnum]


  export const PresenceScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    lecture_id: 'lecture_id',
    is_present: 'is_present',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PresenceScalarFieldEnum = (typeof PresenceScalarFieldEnum)[keyof typeof PresenceScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    date: 'date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const Teacher_subjectsScalarFieldEnum: {
    teacher_id: 'teacher_id',
    subject_id: 'subject_id',
    assigned_at: 'assigned_at',
    is_primary: 'is_primary'
  };

  export type Teacher_subjectsScalarFieldEnum = (typeof Teacher_subjectsScalarFieldEnum)[keyof typeof Teacher_subjectsScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type verification_tokenWhereInput = {
    AND?: verification_tokenWhereInput | verification_tokenWhereInput[]
    OR?: verification_tokenWhereInput[]
    NOT?: verification_tokenWhereInput | verification_tokenWhereInput[]
    identifier?: StringFilter<"verification_token"> | string
    expires?: DateTimeFilter<"verification_token"> | Date | string
    token?: StringFilter<"verification_token"> | string
  }

  export type verification_tokenOrderByWithRelationInput = {
    identifier?: SortOrder
    expires?: SortOrder
    token?: SortOrder
  }

  export type verification_tokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: verification_tokenIdentifierTokenCompoundUniqueInput
    AND?: verification_tokenWhereInput | verification_tokenWhereInput[]
    OR?: verification_tokenWhereInput[]
    NOT?: verification_tokenWhereInput | verification_tokenWhereInput[]
    identifier?: StringFilter<"verification_token"> | string
    expires?: DateTimeFilter<"verification_token"> | Date | string
    token?: StringFilter<"verification_token"> | string
  }, "identifier_token">

  export type verification_tokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    expires?: SortOrder
    token?: SortOrder
    _count?: verification_tokenCountOrderByAggregateInput
    _max?: verification_tokenMaxOrderByAggregateInput
    _min?: verification_tokenMinOrderByAggregateInput
  }

  export type verification_tokenScalarWhereWithAggregatesInput = {
    AND?: verification_tokenScalarWhereWithAggregatesInput | verification_tokenScalarWhereWithAggregatesInput[]
    OR?: verification_tokenScalarWhereWithAggregatesInput[]
    NOT?: verification_tokenScalarWhereWithAggregatesInput | verification_tokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"verification_token"> | string
    expires?: DateTimeWithAggregatesFilter<"verification_token"> | Date | string
    token?: StringWithAggregatesFilter<"verification_token"> | string
  }

  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    id?: IntFilter<"accounts"> | number
    userId?: IntFilter<"accounts"> | number
    type?: StringFilter<"accounts"> | string
    provider?: StringFilter<"accounts"> | string
    providerAccountId?: StringFilter<"accounts"> | string
    refresh_token?: StringNullableFilter<"accounts"> | string | null
    access_token?: StringNullableFilter<"accounts"> | string | null
    expires_at?: BigIntNullableFilter<"accounts"> | bigint | number | null
    id_token?: StringNullableFilter<"accounts"> | string | null
    scope?: StringNullableFilter<"accounts"> | string | null
    session_state?: StringNullableFilter<"accounts"> | string | null
    token_type?: StringNullableFilter<"accounts"> | string | null
  }

  export type accountsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    userId?: IntFilter<"accounts"> | number
    type?: StringFilter<"accounts"> | string
    provider?: StringFilter<"accounts"> | string
    providerAccountId?: StringFilter<"accounts"> | string
    refresh_token?: StringNullableFilter<"accounts"> | string | null
    access_token?: StringNullableFilter<"accounts"> | string | null
    expires_at?: BigIntNullableFilter<"accounts"> | bigint | number | null
    id_token?: StringNullableFilter<"accounts"> | string | null
    scope?: StringNullableFilter<"accounts"> | string | null
    session_state?: StringNullableFilter<"accounts"> | string | null
    token_type?: StringNullableFilter<"accounts"> | string | null
  }, "id">

  export type accountsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    _count?: accountsCountOrderByAggregateInput
    _avg?: accountsAvgOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
    _sum?: accountsSumOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"accounts"> | number
    userId?: IntWithAggregatesFilter<"accounts"> | number
    type?: StringWithAggregatesFilter<"accounts"> | string
    provider?: StringWithAggregatesFilter<"accounts"> | string
    providerAccountId?: StringWithAggregatesFilter<"accounts"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    expires_at?: BigIntNullableWithAggregatesFilter<"accounts"> | bigint | number | null
    id_token?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    scope?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    token_type?: StringNullableWithAggregatesFilter<"accounts"> | string | null
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: IntFilter<"sessions"> | number
    userId?: IntFilter<"sessions"> | number
    expires?: DateTimeFilter<"sessions"> | Date | string
    sessionToken?: StringFilter<"sessions"> | string
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    userId?: IntFilter<"sessions"> | number
    expires?: DateTimeFilter<"sessions"> | Date | string
    sessionToken?: StringFilter<"sessions"> | string
  }, "id">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sessions"> | number
    userId?: IntWithAggregatesFilter<"sessions"> | number
    expires?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    sessionToken?: StringWithAggregatesFilter<"sessions"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    emailVerified?: DateTimeNullableFilter<"users"> | Date | string | null
    image?: StringNullableFilter<"users"> | string | null
    presence?: PresenceListRelationFilter
    user_roles?: User_rolesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    presence?: presenceOrderByRelationAggregateInput
    user_roles?: user_rolesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    emailVerified?: DateTimeNullableFilter<"users"> | Date | string | null
    image?: StringNullableFilter<"users"> | string | null
    presence?: PresenceListRelationFilter
    user_roles?: User_rolesListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id?: IntFilter<"role"> | number
    name?: StringFilter<"role"> | string
    description?: StringNullableFilter<"role"> | string | null
    created_at?: DateTimeFilter<"role"> | Date | string
    updated_at?: DateTimeFilter<"role"> | Date | string
    user_roles?: User_rolesListRelationFilter
    role_permissions?: Role_permissionsListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_roles?: user_rolesOrderByRelationAggregateInput
    role_permissions?: role_permissionsOrderByRelationAggregateInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    description?: StringNullableFilter<"role"> | string | null
    created_at?: DateTimeFilter<"role"> | Date | string
    updated_at?: DateTimeFilter<"role"> | Date | string
    user_roles?: User_rolesListRelationFilter
    role_permissions?: Role_permissionsListRelationFilter
  }, "id" | "name">

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _avg?: roleAvgOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
    _sum?: roleSumOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"role"> | number
    name?: StringWithAggregatesFilter<"role"> | string
    description?: StringNullableWithAggregatesFilter<"role"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"role"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"role"> | Date | string
  }

  export type user_rolesWhereInput = {
    AND?: user_rolesWhereInput | user_rolesWhereInput[]
    OR?: user_rolesWhereInput[]
    NOT?: user_rolesWhereInput | user_rolesWhereInput[]
    user_id?: IntFilter<"user_roles"> | number
    role_id?: IntFilter<"user_roles"> | number
    assigned_at?: DateTimeFilter<"user_roles"> | Date | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    role?: XOR<RoleRelationFilter, roleWhereInput>
  }

  export type user_rolesOrderByWithRelationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_at?: SortOrder
    user?: usersOrderByWithRelationInput
    role?: roleOrderByWithRelationInput
  }

  export type user_rolesWhereUniqueInput = Prisma.AtLeast<{
    user_id_role_id?: user_rolesUser_idRole_idCompoundUniqueInput
    AND?: user_rolesWhereInput | user_rolesWhereInput[]
    OR?: user_rolesWhereInput[]
    NOT?: user_rolesWhereInput | user_rolesWhereInput[]
    user_id?: IntFilter<"user_roles"> | number
    role_id?: IntFilter<"user_roles"> | number
    assigned_at?: DateTimeFilter<"user_roles"> | Date | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    role?: XOR<RoleRelationFilter, roleWhereInput>
  }, "user_id_role_id">

  export type user_rolesOrderByWithAggregationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_at?: SortOrder
    _count?: user_rolesCountOrderByAggregateInput
    _avg?: user_rolesAvgOrderByAggregateInput
    _max?: user_rolesMaxOrderByAggregateInput
    _min?: user_rolesMinOrderByAggregateInput
    _sum?: user_rolesSumOrderByAggregateInput
  }

  export type user_rolesScalarWhereWithAggregatesInput = {
    AND?: user_rolesScalarWhereWithAggregatesInput | user_rolesScalarWhereWithAggregatesInput[]
    OR?: user_rolesScalarWhereWithAggregatesInput[]
    NOT?: user_rolesScalarWhereWithAggregatesInput | user_rolesScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user_roles"> | number
    role_id?: IntWithAggregatesFilter<"user_roles"> | number
    assigned_at?: DateTimeWithAggregatesFilter<"user_roles"> | Date | string
  }

  export type permissionWhereInput = {
    AND?: permissionWhereInput | permissionWhereInput[]
    OR?: permissionWhereInput[]
    NOT?: permissionWhereInput | permissionWhereInput[]
    id?: IntFilter<"permission"> | number
    name?: StringFilter<"permission"> | string
    description?: StringNullableFilter<"permission"> | string | null
    created_at?: DateTimeFilter<"permission"> | Date | string
    updated_at?: DateTimeFilter<"permission"> | Date | string
    role_permissions?: Role_permissionsListRelationFilter
  }

  export type permissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_permissions?: role_permissionsOrderByRelationAggregateInput
  }

  export type permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: permissionWhereInput | permissionWhereInput[]
    OR?: permissionWhereInput[]
    NOT?: permissionWhereInput | permissionWhereInput[]
    description?: StringNullableFilter<"permission"> | string | null
    created_at?: DateTimeFilter<"permission"> | Date | string
    updated_at?: DateTimeFilter<"permission"> | Date | string
    role_permissions?: Role_permissionsListRelationFilter
  }, "id" | "name">

  export type permissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: permissionCountOrderByAggregateInput
    _avg?: permissionAvgOrderByAggregateInput
    _max?: permissionMaxOrderByAggregateInput
    _min?: permissionMinOrderByAggregateInput
    _sum?: permissionSumOrderByAggregateInput
  }

  export type permissionScalarWhereWithAggregatesInput = {
    AND?: permissionScalarWhereWithAggregatesInput | permissionScalarWhereWithAggregatesInput[]
    OR?: permissionScalarWhereWithAggregatesInput[]
    NOT?: permissionScalarWhereWithAggregatesInput | permissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"permission"> | number
    name?: StringWithAggregatesFilter<"permission"> | string
    description?: StringNullableWithAggregatesFilter<"permission"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"permission"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"permission"> | Date | string
  }

  export type role_permissionsWhereInput = {
    AND?: role_permissionsWhereInput | role_permissionsWhereInput[]
    OR?: role_permissionsWhereInput[]
    NOT?: role_permissionsWhereInput | role_permissionsWhereInput[]
    role_id?: IntFilter<"role_permissions"> | number
    permission_id?: IntFilter<"role_permissions"> | number
    assigned_at?: DateTimeFilter<"role_permissions"> | Date | string
    role?: XOR<RoleRelationFilter, roleWhereInput>
    permission?: XOR<PermissionRelationFilter, permissionWhereInput>
  }

  export type role_permissionsOrderByWithRelationInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    assigned_at?: SortOrder
    role?: roleOrderByWithRelationInput
    permission?: permissionOrderByWithRelationInput
  }

  export type role_permissionsWhereUniqueInput = Prisma.AtLeast<{
    role_id_permission_id?: role_permissionsRole_idPermission_idCompoundUniqueInput
    AND?: role_permissionsWhereInput | role_permissionsWhereInput[]
    OR?: role_permissionsWhereInput[]
    NOT?: role_permissionsWhereInput | role_permissionsWhereInput[]
    role_id?: IntFilter<"role_permissions"> | number
    permission_id?: IntFilter<"role_permissions"> | number
    assigned_at?: DateTimeFilter<"role_permissions"> | Date | string
    role?: XOR<RoleRelationFilter, roleWhereInput>
    permission?: XOR<PermissionRelationFilter, permissionWhereInput>
  }, "role_id_permission_id">

  export type role_permissionsOrderByWithAggregationInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    assigned_at?: SortOrder
    _count?: role_permissionsCountOrderByAggregateInput
    _avg?: role_permissionsAvgOrderByAggregateInput
    _max?: role_permissionsMaxOrderByAggregateInput
    _min?: role_permissionsMinOrderByAggregateInput
    _sum?: role_permissionsSumOrderByAggregateInput
  }

  export type role_permissionsScalarWhereWithAggregatesInput = {
    AND?: role_permissionsScalarWhereWithAggregatesInput | role_permissionsScalarWhereWithAggregatesInput[]
    OR?: role_permissionsScalarWhereWithAggregatesInput[]
    NOT?: role_permissionsScalarWhereWithAggregatesInput | role_permissionsScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"role_permissions"> | number
    permission_id?: IntWithAggregatesFilter<"role_permissions"> | number
    assigned_at?: DateTimeWithAggregatesFilter<"role_permissions"> | Date | string
  }

  export type database_metricWhereInput = {
    AND?: database_metricWhereInput | database_metricWhereInput[]
    OR?: database_metricWhereInput[]
    NOT?: database_metricWhereInput | database_metricWhereInput[]
    id?: IntFilter<"database_metric"> | number
    query_time?: IntFilter<"database_metric"> | number
    row_count?: IntFilter<"database_metric"> | number
    timestamp?: DateTimeFilter<"database_metric"> | Date | string
  }

  export type database_metricOrderByWithRelationInput = {
    id?: SortOrder
    query_time?: SortOrder
    row_count?: SortOrder
    timestamp?: SortOrder
  }

  export type database_metricWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: database_metricWhereInput | database_metricWhereInput[]
    OR?: database_metricWhereInput[]
    NOT?: database_metricWhereInput | database_metricWhereInput[]
    query_time?: IntFilter<"database_metric"> | number
    row_count?: IntFilter<"database_metric"> | number
    timestamp?: DateTimeFilter<"database_metric"> | Date | string
  }, "id">

  export type database_metricOrderByWithAggregationInput = {
    id?: SortOrder
    query_time?: SortOrder
    row_count?: SortOrder
    timestamp?: SortOrder
    _count?: database_metricCountOrderByAggregateInput
    _avg?: database_metricAvgOrderByAggregateInput
    _max?: database_metricMaxOrderByAggregateInput
    _min?: database_metricMinOrderByAggregateInput
    _sum?: database_metricSumOrderByAggregateInput
  }

  export type database_metricScalarWhereWithAggregatesInput = {
    AND?: database_metricScalarWhereWithAggregatesInput | database_metricScalarWhereWithAggregatesInput[]
    OR?: database_metricScalarWhereWithAggregatesInput[]
    NOT?: database_metricScalarWhereWithAggregatesInput | database_metricScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"database_metric"> | number
    query_time?: IntWithAggregatesFilter<"database_metric"> | number
    row_count?: IntWithAggregatesFilter<"database_metric"> | number
    timestamp?: DateTimeWithAggregatesFilter<"database_metric"> | Date | string
  }

  export type lectureWhereInput = {
    AND?: lectureWhereInput | lectureWhereInput[]
    OR?: lectureWhereInput[]
    NOT?: lectureWhereInput | lectureWhereInput[]
    id?: IntFilter<"lecture"> | number
    subject_id?: IntFilter<"lecture"> | number
    teacher_id?: IntFilter<"lecture"> | number
    schedule_id?: IntFilter<"lecture"> | number
    start_time?: DateTimeFilter<"lecture"> | Date | string
    end_time?: DateTimeFilter<"lecture"> | Date | string
    created_at?: DateTimeFilter<"lecture"> | Date | string
    updated_at?: DateTimeFilter<"lecture"> | Date | string
    subject?: XOR<SubjectRelationFilter, subjectWhereInput>
    teacher?: XOR<TeacherRelationFilter, teacherWhereInput>
    schedule?: XOR<ScheduleRelationFilter, scheduleWhereInput>
    presence?: PresenceListRelationFilter
  }

  export type lectureOrderByWithRelationInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    schedule_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    subject?: subjectOrderByWithRelationInput
    teacher?: teacherOrderByWithRelationInput
    schedule?: scheduleOrderByWithRelationInput
    presence?: presenceOrderByRelationAggregateInput
  }

  export type lectureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: lectureWhereInput | lectureWhereInput[]
    OR?: lectureWhereInput[]
    NOT?: lectureWhereInput | lectureWhereInput[]
    subject_id?: IntFilter<"lecture"> | number
    teacher_id?: IntFilter<"lecture"> | number
    schedule_id?: IntFilter<"lecture"> | number
    start_time?: DateTimeFilter<"lecture"> | Date | string
    end_time?: DateTimeFilter<"lecture"> | Date | string
    created_at?: DateTimeFilter<"lecture"> | Date | string
    updated_at?: DateTimeFilter<"lecture"> | Date | string
    subject?: XOR<SubjectRelationFilter, subjectWhereInput>
    teacher?: XOR<TeacherRelationFilter, teacherWhereInput>
    schedule?: XOR<ScheduleRelationFilter, scheduleWhereInput>
    presence?: PresenceListRelationFilter
  }, "id">

  export type lectureOrderByWithAggregationInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    schedule_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: lectureCountOrderByAggregateInput
    _avg?: lectureAvgOrderByAggregateInput
    _max?: lectureMaxOrderByAggregateInput
    _min?: lectureMinOrderByAggregateInput
    _sum?: lectureSumOrderByAggregateInput
  }

  export type lectureScalarWhereWithAggregatesInput = {
    AND?: lectureScalarWhereWithAggregatesInput | lectureScalarWhereWithAggregatesInput[]
    OR?: lectureScalarWhereWithAggregatesInput[]
    NOT?: lectureScalarWhereWithAggregatesInput | lectureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lecture"> | number
    subject_id?: IntWithAggregatesFilter<"lecture"> | number
    teacher_id?: IntWithAggregatesFilter<"lecture"> | number
    schedule_id?: IntWithAggregatesFilter<"lecture"> | number
    start_time?: DateTimeWithAggregatesFilter<"lecture"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"lecture"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"lecture"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"lecture"> | Date | string
  }

  export type presenceWhereInput = {
    AND?: presenceWhereInput | presenceWhereInput[]
    OR?: presenceWhereInput[]
    NOT?: presenceWhereInput | presenceWhereInput[]
    id?: IntFilter<"presence"> | number
    user_id?: IntFilter<"presence"> | number
    lecture_id?: IntFilter<"presence"> | number
    is_present?: BoolFilter<"presence"> | boolean
    created_at?: DateTimeFilter<"presence"> | Date | string
    updated_at?: DateTimeFilter<"presence"> | Date | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    lecture?: XOR<LectureRelationFilter, lectureWhereInput>
  }

  export type presenceOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    lecture_id?: SortOrder
    is_present?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: usersOrderByWithRelationInput
    lecture?: lectureOrderByWithRelationInput
  }

  export type presenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_lecture_id?: presenceUser_idLecture_idCompoundUniqueInput
    AND?: presenceWhereInput | presenceWhereInput[]
    OR?: presenceWhereInput[]
    NOT?: presenceWhereInput | presenceWhereInput[]
    user_id?: IntFilter<"presence"> | number
    lecture_id?: IntFilter<"presence"> | number
    is_present?: BoolFilter<"presence"> | boolean
    created_at?: DateTimeFilter<"presence"> | Date | string
    updated_at?: DateTimeFilter<"presence"> | Date | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    lecture?: XOR<LectureRelationFilter, lectureWhereInput>
  }, "id" | "user_id_lecture_id">

  export type presenceOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    lecture_id?: SortOrder
    is_present?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: presenceCountOrderByAggregateInput
    _avg?: presenceAvgOrderByAggregateInput
    _max?: presenceMaxOrderByAggregateInput
    _min?: presenceMinOrderByAggregateInput
    _sum?: presenceSumOrderByAggregateInput
  }

  export type presenceScalarWhereWithAggregatesInput = {
    AND?: presenceScalarWhereWithAggregatesInput | presenceScalarWhereWithAggregatesInput[]
    OR?: presenceScalarWhereWithAggregatesInput[]
    NOT?: presenceScalarWhereWithAggregatesInput | presenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"presence"> | number
    user_id?: IntWithAggregatesFilter<"presence"> | number
    lecture_id?: IntWithAggregatesFilter<"presence"> | number
    is_present?: BoolWithAggregatesFilter<"presence"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"presence"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"presence"> | Date | string
  }

  export type scheduleWhereInput = {
    AND?: scheduleWhereInput | scheduleWhereInput[]
    OR?: scheduleWhereInput[]
    NOT?: scheduleWhereInput | scheduleWhereInput[]
    id?: IntFilter<"schedule"> | number
    date?: DateTimeFilter<"schedule"> | Date | string
    created_at?: DateTimeFilter<"schedule"> | Date | string
    updated_at?: DateTimeFilter<"schedule"> | Date | string
    lecture?: LectureListRelationFilter
  }

  export type scheduleOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lecture?: lectureOrderByRelationAggregateInput
  }

  export type scheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: scheduleWhereInput | scheduleWhereInput[]
    OR?: scheduleWhereInput[]
    NOT?: scheduleWhereInput | scheduleWhereInput[]
    date?: DateTimeFilter<"schedule"> | Date | string
    created_at?: DateTimeFilter<"schedule"> | Date | string
    updated_at?: DateTimeFilter<"schedule"> | Date | string
    lecture?: LectureListRelationFilter
  }, "id">

  export type scheduleOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: scheduleCountOrderByAggregateInput
    _avg?: scheduleAvgOrderByAggregateInput
    _max?: scheduleMaxOrderByAggregateInput
    _min?: scheduleMinOrderByAggregateInput
    _sum?: scheduleSumOrderByAggregateInput
  }

  export type scheduleScalarWhereWithAggregatesInput = {
    AND?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[]
    OR?: scheduleScalarWhereWithAggregatesInput[]
    NOT?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"schedule"> | number
    date?: DateTimeWithAggregatesFilter<"schedule"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"schedule"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"schedule"> | Date | string
  }

  export type subjectWhereInput = {
    AND?: subjectWhereInput | subjectWhereInput[]
    OR?: subjectWhereInput[]
    NOT?: subjectWhereInput | subjectWhereInput[]
    id?: IntFilter<"subject"> | number
    name?: StringFilter<"subject"> | string
    created_at?: DateTimeFilter<"subject"> | Date | string
    updated_at?: DateTimeFilter<"subject"> | Date | string
    teacher_subjects?: Teacher_subjectsListRelationFilter
    lecture?: LectureListRelationFilter
  }

  export type subjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    teacher_subjects?: teacher_subjectsOrderByRelationAggregateInput
    lecture?: lectureOrderByRelationAggregateInput
  }

  export type subjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: subjectWhereInput | subjectWhereInput[]
    OR?: subjectWhereInput[]
    NOT?: subjectWhereInput | subjectWhereInput[]
    name?: StringFilter<"subject"> | string
    created_at?: DateTimeFilter<"subject"> | Date | string
    updated_at?: DateTimeFilter<"subject"> | Date | string
    teacher_subjects?: Teacher_subjectsListRelationFilter
    lecture?: LectureListRelationFilter
  }, "id">

  export type subjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: subjectCountOrderByAggregateInput
    _avg?: subjectAvgOrderByAggregateInput
    _max?: subjectMaxOrderByAggregateInput
    _min?: subjectMinOrderByAggregateInput
    _sum?: subjectSumOrderByAggregateInput
  }

  export type subjectScalarWhereWithAggregatesInput = {
    AND?: subjectScalarWhereWithAggregatesInput | subjectScalarWhereWithAggregatesInput[]
    OR?: subjectScalarWhereWithAggregatesInput[]
    NOT?: subjectScalarWhereWithAggregatesInput | subjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subject"> | number
    name?: StringWithAggregatesFilter<"subject"> | string
    created_at?: DateTimeWithAggregatesFilter<"subject"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"subject"> | Date | string
  }

  export type teacher_subjectsWhereInput = {
    AND?: teacher_subjectsWhereInput | teacher_subjectsWhereInput[]
    OR?: teacher_subjectsWhereInput[]
    NOT?: teacher_subjectsWhereInput | teacher_subjectsWhereInput[]
    teacher_id?: IntFilter<"teacher_subjects"> | number
    subject_id?: IntFilter<"teacher_subjects"> | number
    assigned_at?: DateTimeFilter<"teacher_subjects"> | Date | string
    is_primary?: BoolFilter<"teacher_subjects"> | boolean
    teacher?: XOR<TeacherRelationFilter, teacherWhereInput>
    subject?: XOR<SubjectRelationFilter, subjectWhereInput>
  }

  export type teacher_subjectsOrderByWithRelationInput = {
    teacher_id?: SortOrder
    subject_id?: SortOrder
    assigned_at?: SortOrder
    is_primary?: SortOrder
    teacher?: teacherOrderByWithRelationInput
    subject?: subjectOrderByWithRelationInput
  }

  export type teacher_subjectsWhereUniqueInput = Prisma.AtLeast<{
    teacher_id_subject_id?: teacher_subjectsTeacher_idSubject_idCompoundUniqueInput
    AND?: teacher_subjectsWhereInput | teacher_subjectsWhereInput[]
    OR?: teacher_subjectsWhereInput[]
    NOT?: teacher_subjectsWhereInput | teacher_subjectsWhereInput[]
    teacher_id?: IntFilter<"teacher_subjects"> | number
    subject_id?: IntFilter<"teacher_subjects"> | number
    assigned_at?: DateTimeFilter<"teacher_subjects"> | Date | string
    is_primary?: BoolFilter<"teacher_subjects"> | boolean
    teacher?: XOR<TeacherRelationFilter, teacherWhereInput>
    subject?: XOR<SubjectRelationFilter, subjectWhereInput>
  }, "teacher_id_subject_id">

  export type teacher_subjectsOrderByWithAggregationInput = {
    teacher_id?: SortOrder
    subject_id?: SortOrder
    assigned_at?: SortOrder
    is_primary?: SortOrder
    _count?: teacher_subjectsCountOrderByAggregateInput
    _avg?: teacher_subjectsAvgOrderByAggregateInput
    _max?: teacher_subjectsMaxOrderByAggregateInput
    _min?: teacher_subjectsMinOrderByAggregateInput
    _sum?: teacher_subjectsSumOrderByAggregateInput
  }

  export type teacher_subjectsScalarWhereWithAggregatesInput = {
    AND?: teacher_subjectsScalarWhereWithAggregatesInput | teacher_subjectsScalarWhereWithAggregatesInput[]
    OR?: teacher_subjectsScalarWhereWithAggregatesInput[]
    NOT?: teacher_subjectsScalarWhereWithAggregatesInput | teacher_subjectsScalarWhereWithAggregatesInput[]
    teacher_id?: IntWithAggregatesFilter<"teacher_subjects"> | number
    subject_id?: IntWithAggregatesFilter<"teacher_subjects"> | number
    assigned_at?: DateTimeWithAggregatesFilter<"teacher_subjects"> | Date | string
    is_primary?: BoolWithAggregatesFilter<"teacher_subjects"> | boolean
  }

  export type teacherWhereInput = {
    AND?: teacherWhereInput | teacherWhereInput[]
    OR?: teacherWhereInput[]
    NOT?: teacherWhereInput | teacherWhereInput[]
    id?: IntFilter<"teacher"> | number
    name?: StringFilter<"teacher"> | string
    email?: StringNullableFilter<"teacher"> | string | null
    created_at?: DateTimeFilter<"teacher"> | Date | string
    updated_at?: DateTimeFilter<"teacher"> | Date | string
    teacher_subjects?: Teacher_subjectsListRelationFilter
    lecture?: LectureListRelationFilter
  }

  export type teacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    teacher_subjects?: teacher_subjectsOrderByRelationAggregateInput
    lecture?: lectureOrderByRelationAggregateInput
  }

  export type teacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: teacherWhereInput | teacherWhereInput[]
    OR?: teacherWhereInput[]
    NOT?: teacherWhereInput | teacherWhereInput[]
    name?: StringFilter<"teacher"> | string
    email?: StringNullableFilter<"teacher"> | string | null
    created_at?: DateTimeFilter<"teacher"> | Date | string
    updated_at?: DateTimeFilter<"teacher"> | Date | string
    teacher_subjects?: Teacher_subjectsListRelationFilter
    lecture?: LectureListRelationFilter
  }, "id">

  export type teacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: teacherCountOrderByAggregateInput
    _avg?: teacherAvgOrderByAggregateInput
    _max?: teacherMaxOrderByAggregateInput
    _min?: teacherMinOrderByAggregateInput
    _sum?: teacherSumOrderByAggregateInput
  }

  export type teacherScalarWhereWithAggregatesInput = {
    AND?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[]
    OR?: teacherScalarWhereWithAggregatesInput[]
    NOT?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"teacher"> | number
    name?: StringWithAggregatesFilter<"teacher"> | string
    email?: StringNullableWithAggregatesFilter<"teacher"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"teacher"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"teacher"> | Date | string
  }

  export type verification_tokenCreateInput = {
    identifier: string
    expires: Date | string
    token: string
  }

  export type verification_tokenUncheckedCreateInput = {
    identifier: string
    expires: Date | string
    token: string
  }

  export type verification_tokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type verification_tokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type verification_tokenCreateManyInput = {
    identifier: string
    expires: Date | string
    token: string
  }

  export type verification_tokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type verification_tokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type accountsCreateInput = {
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: bigint | number | null
    id_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
  }

  export type accountsUncheckedCreateInput = {
    id?: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: bigint | number | null
    id_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
  }

  export type accountsUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountsCreateManyInput = {
    id?: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: bigint | number | null
    id_token?: string | null
    scope?: string | null
    session_state?: string | null
    token_type?: string | null
  }

  export type accountsUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsCreateInput = {
    userId: number
    expires: Date | string
    sessionToken: string
  }

  export type sessionsUncheckedCreateInput = {
    id?: number
    userId: number
    expires: Date | string
    sessionToken: string
  }

  export type sessionsUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsCreateManyInput = {
    id?: number
    userId: number
    expires: Date | string
    sessionToken: string
  }

  export type sessionsUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    presence?: presenceCreateNestedManyWithoutUserInput
    user_roles?: user_rolesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    presence?: presenceUncheckedCreateNestedManyWithoutUserInput
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    presence?: presenceUpdateManyWithoutUserNestedInput
    user_roles?: user_rolesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    presence?: presenceUncheckedUpdateManyWithoutUserNestedInput
    user_roles?: user_rolesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roleCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_roles?: user_rolesCreateNestedManyWithoutRoleInput
    role_permissions?: role_permissionsCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutRoleInput
    role_permissions?: role_permissionsUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_rolesUpdateManyWithoutRoleNestedInput
    role_permissions?: role_permissionsUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_rolesUncheckedUpdateManyWithoutRoleNestedInput
    role_permissions?: role_permissionsUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type roleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesCreateInput = {
    assigned_at?: Date | string
    user: usersCreateNestedOneWithoutUser_rolesInput
    role: roleCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateInput = {
    user_id: number
    role_id: number
    assigned_at?: Date | string
  }

  export type user_rolesUpdateInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutUser_rolesNestedInput
    role?: roleUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesCreateManyInput = {
    user_id: number
    role_id: number
    assigned_at?: Date | string
  }

  export type user_rolesUpdateManyMutationInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role_permissions?: role_permissionsCreateNestedManyWithoutPermissionInput
  }

  export type permissionUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role_permissions?: role_permissionsUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type permissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_permissions?: role_permissionsUpdateManyWithoutPermissionNestedInput
  }

  export type permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_permissions?: role_permissionsUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type permissionCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type permissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionsCreateInput = {
    assigned_at?: Date | string
    role: roleCreateNestedOneWithoutRole_permissionsInput
    permission: permissionCreateNestedOneWithoutRole_permissionsInput
  }

  export type role_permissionsUncheckedCreateInput = {
    role_id: number
    permission_id: number
    assigned_at?: Date | string
  }

  export type role_permissionsUpdateInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: roleUpdateOneRequiredWithoutRole_permissionsNestedInput
    permission?: permissionUpdateOneRequiredWithoutRole_permissionsNestedInput
  }

  export type role_permissionsUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionsCreateManyInput = {
    role_id: number
    permission_id: number
    assigned_at?: Date | string
  }

  export type role_permissionsUpdateManyMutationInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionsUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type database_metricCreateInput = {
    query_time: number
    row_count: number
    timestamp: Date | string
  }

  export type database_metricUncheckedCreateInput = {
    id?: number
    query_time: number
    row_count: number
    timestamp: Date | string
  }

  export type database_metricUpdateInput = {
    query_time?: IntFieldUpdateOperationsInput | number
    row_count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type database_metricUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    query_time?: IntFieldUpdateOperationsInput | number
    row_count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type database_metricCreateManyInput = {
    id?: number
    query_time: number
    row_count: number
    timestamp: Date | string
  }

  export type database_metricUpdateManyMutationInput = {
    query_time?: IntFieldUpdateOperationsInput | number
    row_count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type database_metricUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    query_time?: IntFieldUpdateOperationsInput | number
    row_count?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lectureCreateInput = {
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    subject: subjectCreateNestedOneWithoutLectureInput
    teacher: teacherCreateNestedOneWithoutLectureInput
    schedule: scheduleCreateNestedOneWithoutLectureInput
    presence?: presenceCreateNestedManyWithoutLectureInput
  }

  export type lectureUncheckedCreateInput = {
    id?: number
    subject_id: number
    teacher_id: number
    schedule_id: number
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    presence?: presenceUncheckedCreateNestedManyWithoutLectureInput
  }

  export type lectureUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: subjectUpdateOneRequiredWithoutLectureNestedInput
    teacher?: teacherUpdateOneRequiredWithoutLectureNestedInput
    schedule?: scheduleUpdateOneRequiredWithoutLectureNestedInput
    presence?: presenceUpdateManyWithoutLectureNestedInput
  }

  export type lectureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    presence?: presenceUncheckedUpdateManyWithoutLectureNestedInput
  }

  export type lectureCreateManyInput = {
    id?: number
    subject_id: number
    teacher_id: number
    schedule_id: number
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lectureUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lectureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type presenceCreateInput = {
    is_present: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: usersCreateNestedOneWithoutPresenceInput
    lecture: lectureCreateNestedOneWithoutPresenceInput
  }

  export type presenceUncheckedCreateInput = {
    id?: number
    user_id: number
    lecture_id: number
    is_present: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type presenceUpdateInput = {
    is_present?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutPresenceNestedInput
    lecture?: lectureUpdateOneRequiredWithoutPresenceNestedInput
  }

  export type presenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    lecture_id?: IntFieldUpdateOperationsInput | number
    is_present?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type presenceCreateManyInput = {
    id?: number
    user_id: number
    lecture_id: number
    is_present: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type presenceUpdateManyMutationInput = {
    is_present?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type presenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    lecture_id?: IntFieldUpdateOperationsInput | number
    is_present?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scheduleCreateInput = {
    date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    lecture?: lectureCreateNestedManyWithoutScheduleInput
  }

  export type scheduleUncheckedCreateInput = {
    id?: number
    date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    lecture?: lectureUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type scheduleUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture?: lectureUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture?: lectureUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type scheduleCreateManyInput = {
    id?: number
    date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type scheduleUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subjectCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    teacher_subjects?: teacher_subjectsCreateNestedManyWithoutSubjectInput
    lecture?: lectureCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    teacher_subjects?: teacher_subjectsUncheckedCreateNestedManyWithoutSubjectInput
    lecture?: lectureUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: teacher_subjectsUpdateManyWithoutSubjectNestedInput
    lecture?: lectureUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: teacher_subjectsUncheckedUpdateManyWithoutSubjectNestedInput
    lecture?: lectureUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type subjectCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teacher_subjectsCreateInput = {
    assigned_at?: Date | string
    is_primary?: boolean
    teacher: teacherCreateNestedOneWithoutTeacher_subjectsInput
    subject: subjectCreateNestedOneWithoutTeacher_subjectsInput
  }

  export type teacher_subjectsUncheckedCreateInput = {
    teacher_id: number
    subject_id: number
    assigned_at?: Date | string
    is_primary?: boolean
  }

  export type teacher_subjectsUpdateInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    teacher?: teacherUpdateOneRequiredWithoutTeacher_subjectsNestedInput
    subject?: subjectUpdateOneRequiredWithoutTeacher_subjectsNestedInput
  }

  export type teacher_subjectsUncheckedUpdateInput = {
    teacher_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type teacher_subjectsCreateManyInput = {
    teacher_id: number
    subject_id: number
    assigned_at?: Date | string
    is_primary?: boolean
  }

  export type teacher_subjectsUpdateManyMutationInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type teacher_subjectsUncheckedUpdateManyInput = {
    teacher_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type teacherCreateInput = {
    name: string
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher_subjects?: teacher_subjectsCreateNestedManyWithoutTeacherInput
    lecture?: lectureCreateNestedManyWithoutTeacherInput
  }

  export type teacherUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher_subjects?: teacher_subjectsUncheckedCreateNestedManyWithoutTeacherInput
    lecture?: lectureUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type teacherUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: teacher_subjectsUpdateManyWithoutTeacherNestedInput
    lecture?: lectureUpdateManyWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: teacher_subjectsUncheckedUpdateManyWithoutTeacherNestedInput
    lecture?: lectureUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type teacherCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type teacherUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type verification_tokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type verification_tokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    expires?: SortOrder
    token?: SortOrder
  }

  export type verification_tokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    expires?: SortOrder
    token?: SortOrder
  }

  export type verification_tokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    expires?: SortOrder
    token?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type accountsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    id_token?: SortOrder
    scope?: SortOrder
    session_state?: SortOrder
    token_type?: SortOrder
  }

  export type accountsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    id_token?: SortOrder
    scope?: SortOrder
    session_state?: SortOrder
    token_type?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    id_token?: SortOrder
    scope?: SortOrder
    session_state?: SortOrder
    token_type?: SortOrder
  }

  export type accountsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PresenceListRelationFilter = {
    every?: presenceWhereInput
    some?: presenceWhereInput
    none?: presenceWhereInput
  }

  export type User_rolesListRelationFilter = {
    every?: user_rolesWhereInput
    some?: user_rolesWhereInput
    none?: user_rolesWhereInput
  }

  export type presenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Role_permissionsListRelationFilter = {
    every?: role_permissionsWhereInput
    some?: role_permissionsWhereInput
    none?: role_permissionsWhereInput
  }

  export type role_permissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type roleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type roleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type RoleRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type user_rolesUser_idRole_idCompoundUniqueInput = {
    user_id: number
    role_id: number
  }

  export type user_rolesCountOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_at?: SortOrder
  }

  export type user_rolesAvgOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type user_rolesMaxOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_at?: SortOrder
  }

  export type user_rolesMinOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    assigned_at?: SortOrder
  }

  export type user_rolesSumOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type permissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type permissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionRelationFilter = {
    is?: permissionWhereInput
    isNot?: permissionWhereInput
  }

  export type role_permissionsRole_idPermission_idCompoundUniqueInput = {
    role_id: number
    permission_id: number
  }

  export type role_permissionsCountOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    assigned_at?: SortOrder
  }

  export type role_permissionsAvgOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type role_permissionsMaxOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    assigned_at?: SortOrder
  }

  export type role_permissionsMinOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
    assigned_at?: SortOrder
  }

  export type role_permissionsSumOrderByAggregateInput = {
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type database_metricCountOrderByAggregateInput = {
    id?: SortOrder
    query_time?: SortOrder
    row_count?: SortOrder
    timestamp?: SortOrder
  }

  export type database_metricAvgOrderByAggregateInput = {
    id?: SortOrder
    query_time?: SortOrder
    row_count?: SortOrder
  }

  export type database_metricMaxOrderByAggregateInput = {
    id?: SortOrder
    query_time?: SortOrder
    row_count?: SortOrder
    timestamp?: SortOrder
  }

  export type database_metricMinOrderByAggregateInput = {
    id?: SortOrder
    query_time?: SortOrder
    row_count?: SortOrder
    timestamp?: SortOrder
  }

  export type database_metricSumOrderByAggregateInput = {
    id?: SortOrder
    query_time?: SortOrder
    row_count?: SortOrder
  }

  export type SubjectRelationFilter = {
    is?: subjectWhereInput
    isNot?: subjectWhereInput
  }

  export type TeacherRelationFilter = {
    is?: teacherWhereInput
    isNot?: teacherWhereInput
  }

  export type ScheduleRelationFilter = {
    is?: scheduleWhereInput
    isNot?: scheduleWhereInput
  }

  export type lectureCountOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    schedule_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lectureAvgOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    schedule_id?: SortOrder
  }

  export type lectureMaxOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    schedule_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lectureMinOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    schedule_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lectureSumOrderByAggregateInput = {
    id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    schedule_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LectureRelationFilter = {
    is?: lectureWhereInput
    isNot?: lectureWhereInput
  }

  export type presenceUser_idLecture_idCompoundUniqueInput = {
    user_id: number
    lecture_id: number
  }

  export type presenceCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    lecture_id?: SortOrder
    is_present?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type presenceAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    lecture_id?: SortOrder
  }

  export type presenceMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    lecture_id?: SortOrder
    is_present?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type presenceMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    lecture_id?: SortOrder
    is_present?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type presenceSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    lecture_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LectureListRelationFilter = {
    every?: lectureWhereInput
    some?: lectureWhereInput
    none?: lectureWhereInput
  }

  export type lectureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type scheduleCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type scheduleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type scheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type scheduleMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type scheduleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Teacher_subjectsListRelationFilter = {
    every?: teacher_subjectsWhereInput
    some?: teacher_subjectsWhereInput
    none?: teacher_subjectsWhereInput
  }

  export type teacher_subjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type subjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type subjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type subjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type subjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type teacher_subjectsTeacher_idSubject_idCompoundUniqueInput = {
    teacher_id: number
    subject_id: number
  }

  export type teacher_subjectsCountOrderByAggregateInput = {
    teacher_id?: SortOrder
    subject_id?: SortOrder
    assigned_at?: SortOrder
    is_primary?: SortOrder
  }

  export type teacher_subjectsAvgOrderByAggregateInput = {
    teacher_id?: SortOrder
    subject_id?: SortOrder
  }

  export type teacher_subjectsMaxOrderByAggregateInput = {
    teacher_id?: SortOrder
    subject_id?: SortOrder
    assigned_at?: SortOrder
    is_primary?: SortOrder
  }

  export type teacher_subjectsMinOrderByAggregateInput = {
    teacher_id?: SortOrder
    subject_id?: SortOrder
    assigned_at?: SortOrder
    is_primary?: SortOrder
  }

  export type teacher_subjectsSumOrderByAggregateInput = {
    teacher_id?: SortOrder
    subject_id?: SortOrder
  }

  export type teacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type teacherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type teacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type teacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type teacherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type presenceCreateNestedManyWithoutUserInput = {
    create?: XOR<presenceCreateWithoutUserInput, presenceUncheckedCreateWithoutUserInput> | presenceCreateWithoutUserInput[] | presenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: presenceCreateOrConnectWithoutUserInput | presenceCreateOrConnectWithoutUserInput[]
    createMany?: presenceCreateManyUserInputEnvelope
    connect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
  }

  export type user_rolesCreateNestedManyWithoutUserInput = {
    create?: XOR<user_rolesCreateWithoutUserInput, user_rolesUncheckedCreateWithoutUserInput> | user_rolesCreateWithoutUserInput[] | user_rolesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUserInput | user_rolesCreateOrConnectWithoutUserInput[]
    createMany?: user_rolesCreateManyUserInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type presenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<presenceCreateWithoutUserInput, presenceUncheckedCreateWithoutUserInput> | presenceCreateWithoutUserInput[] | presenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: presenceCreateOrConnectWithoutUserInput | presenceCreateOrConnectWithoutUserInput[]
    createMany?: presenceCreateManyUserInputEnvelope
    connect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
  }

  export type user_rolesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_rolesCreateWithoutUserInput, user_rolesUncheckedCreateWithoutUserInput> | user_rolesCreateWithoutUserInput[] | user_rolesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUserInput | user_rolesCreateOrConnectWithoutUserInput[]
    createMany?: user_rolesCreateManyUserInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type presenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<presenceCreateWithoutUserInput, presenceUncheckedCreateWithoutUserInput> | presenceCreateWithoutUserInput[] | presenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: presenceCreateOrConnectWithoutUserInput | presenceCreateOrConnectWithoutUserInput[]
    upsert?: presenceUpsertWithWhereUniqueWithoutUserInput | presenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: presenceCreateManyUserInputEnvelope
    set?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    disconnect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    delete?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    connect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    update?: presenceUpdateWithWhereUniqueWithoutUserInput | presenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: presenceUpdateManyWithWhereWithoutUserInput | presenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: presenceScalarWhereInput | presenceScalarWhereInput[]
  }

  export type user_rolesUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_rolesCreateWithoutUserInput, user_rolesUncheckedCreateWithoutUserInput> | user_rolesCreateWithoutUserInput[] | user_rolesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUserInput | user_rolesCreateOrConnectWithoutUserInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUserInput | user_rolesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_rolesCreateManyUserInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUserInput | user_rolesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUserInput | user_rolesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type presenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<presenceCreateWithoutUserInput, presenceUncheckedCreateWithoutUserInput> | presenceCreateWithoutUserInput[] | presenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: presenceCreateOrConnectWithoutUserInput | presenceCreateOrConnectWithoutUserInput[]
    upsert?: presenceUpsertWithWhereUniqueWithoutUserInput | presenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: presenceCreateManyUserInputEnvelope
    set?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    disconnect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    delete?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    connect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    update?: presenceUpdateWithWhereUniqueWithoutUserInput | presenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: presenceUpdateManyWithWhereWithoutUserInput | presenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: presenceScalarWhereInput | presenceScalarWhereInput[]
  }

  export type user_rolesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_rolesCreateWithoutUserInput, user_rolesUncheckedCreateWithoutUserInput> | user_rolesCreateWithoutUserInput[] | user_rolesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutUserInput | user_rolesCreateOrConnectWithoutUserInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutUserInput | user_rolesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_rolesCreateManyUserInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutUserInput | user_rolesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutUserInput | user_rolesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type user_rolesCreateNestedManyWithoutRoleInput = {
    create?: XOR<user_rolesCreateWithoutRoleInput, user_rolesUncheckedCreateWithoutRoleInput> | user_rolesCreateWithoutRoleInput[] | user_rolesUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRoleInput | user_rolesCreateOrConnectWithoutRoleInput[]
    createMany?: user_rolesCreateManyRoleInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type role_permissionsCreateNestedManyWithoutRoleInput = {
    create?: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput> | role_permissionsCreateWithoutRoleInput[] | role_permissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutRoleInput | role_permissionsCreateOrConnectWithoutRoleInput[]
    createMany?: role_permissionsCreateManyRoleInputEnvelope
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
  }

  export type user_rolesUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<user_rolesCreateWithoutRoleInput, user_rolesUncheckedCreateWithoutRoleInput> | user_rolesCreateWithoutRoleInput[] | user_rolesUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRoleInput | user_rolesCreateOrConnectWithoutRoleInput[]
    createMany?: user_rolesCreateManyRoleInputEnvelope
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
  }

  export type role_permissionsUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput> | role_permissionsCreateWithoutRoleInput[] | role_permissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutRoleInput | role_permissionsCreateOrConnectWithoutRoleInput[]
    createMany?: role_permissionsCreateManyRoleInputEnvelope
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
  }

  export type user_rolesUpdateManyWithoutRoleNestedInput = {
    create?: XOR<user_rolesCreateWithoutRoleInput, user_rolesUncheckedCreateWithoutRoleInput> | user_rolesCreateWithoutRoleInput[] | user_rolesUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRoleInput | user_rolesCreateOrConnectWithoutRoleInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutRoleInput | user_rolesUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: user_rolesCreateManyRoleInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutRoleInput | user_rolesUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutRoleInput | user_rolesUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type role_permissionsUpdateManyWithoutRoleNestedInput = {
    create?: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput> | role_permissionsCreateWithoutRoleInput[] | role_permissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutRoleInput | role_permissionsCreateOrConnectWithoutRoleInput[]
    upsert?: role_permissionsUpsertWithWhereUniqueWithoutRoleInput | role_permissionsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: role_permissionsCreateManyRoleInputEnvelope
    set?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    disconnect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    delete?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    update?: role_permissionsUpdateWithWhereUniqueWithoutRoleInput | role_permissionsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: role_permissionsUpdateManyWithWhereWithoutRoleInput | role_permissionsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
  }

  export type user_rolesUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<user_rolesCreateWithoutRoleInput, user_rolesUncheckedCreateWithoutRoleInput> | user_rolesCreateWithoutRoleInput[] | user_rolesUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_rolesCreateOrConnectWithoutRoleInput | user_rolesCreateOrConnectWithoutRoleInput[]
    upsert?: user_rolesUpsertWithWhereUniqueWithoutRoleInput | user_rolesUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: user_rolesCreateManyRoleInputEnvelope
    set?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    disconnect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    delete?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    connect?: user_rolesWhereUniqueInput | user_rolesWhereUniqueInput[]
    update?: user_rolesUpdateWithWhereUniqueWithoutRoleInput | user_rolesUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: user_rolesUpdateManyWithWhereWithoutRoleInput | user_rolesUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
  }

  export type role_permissionsUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput> | role_permissionsCreateWithoutRoleInput[] | role_permissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutRoleInput | role_permissionsCreateOrConnectWithoutRoleInput[]
    upsert?: role_permissionsUpsertWithWhereUniqueWithoutRoleInput | role_permissionsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: role_permissionsCreateManyRoleInputEnvelope
    set?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    disconnect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    delete?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    update?: role_permissionsUpdateWithWhereUniqueWithoutRoleInput | role_permissionsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: role_permissionsUpdateManyWithWhereWithoutRoleInput | role_permissionsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    connect?: usersWhereUniqueInput
  }

  export type roleCreateNestedOneWithoutUser_rolesInput = {
    create?: XOR<roleCreateWithoutUser_rolesInput, roleUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: roleCreateOrConnectWithoutUser_rolesInput
    connect?: roleWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_rolesInput
    upsert?: usersUpsertWithoutUser_rolesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_rolesInput, usersUpdateWithoutUser_rolesInput>, usersUncheckedUpdateWithoutUser_rolesInput>
  }

  export type roleUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: XOR<roleCreateWithoutUser_rolesInput, roleUncheckedCreateWithoutUser_rolesInput>
    connectOrCreate?: roleCreateOrConnectWithoutUser_rolesInput
    upsert?: roleUpsertWithoutUser_rolesInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutUser_rolesInput, roleUpdateWithoutUser_rolesInput>, roleUncheckedUpdateWithoutUser_rolesInput>
  }

  export type role_permissionsCreateNestedManyWithoutPermissionInput = {
    create?: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput> | role_permissionsCreateWithoutPermissionInput[] | role_permissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutPermissionInput | role_permissionsCreateOrConnectWithoutPermissionInput[]
    createMany?: role_permissionsCreateManyPermissionInputEnvelope
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
  }

  export type role_permissionsUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput> | role_permissionsCreateWithoutPermissionInput[] | role_permissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutPermissionInput | role_permissionsCreateOrConnectWithoutPermissionInput[]
    createMany?: role_permissionsCreateManyPermissionInputEnvelope
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
  }

  export type role_permissionsUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput> | role_permissionsCreateWithoutPermissionInput[] | role_permissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutPermissionInput | role_permissionsCreateOrConnectWithoutPermissionInput[]
    upsert?: role_permissionsUpsertWithWhereUniqueWithoutPermissionInput | role_permissionsUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: role_permissionsCreateManyPermissionInputEnvelope
    set?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    disconnect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    delete?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    update?: role_permissionsUpdateWithWhereUniqueWithoutPermissionInput | role_permissionsUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: role_permissionsUpdateManyWithWhereWithoutPermissionInput | role_permissionsUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
  }

  export type role_permissionsUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput> | role_permissionsCreateWithoutPermissionInput[] | role_permissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionsCreateOrConnectWithoutPermissionInput | role_permissionsCreateOrConnectWithoutPermissionInput[]
    upsert?: role_permissionsUpsertWithWhereUniqueWithoutPermissionInput | role_permissionsUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: role_permissionsCreateManyPermissionInputEnvelope
    set?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    disconnect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    delete?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    connect?: role_permissionsWhereUniqueInput | role_permissionsWhereUniqueInput[]
    update?: role_permissionsUpdateWithWhereUniqueWithoutPermissionInput | role_permissionsUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: role_permissionsUpdateManyWithWhereWithoutPermissionInput | role_permissionsUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
  }

  export type roleCreateNestedOneWithoutRole_permissionsInput = {
    create?: XOR<roleCreateWithoutRole_permissionsInput, roleUncheckedCreateWithoutRole_permissionsInput>
    connectOrCreate?: roleCreateOrConnectWithoutRole_permissionsInput
    connect?: roleWhereUniqueInput
  }

  export type permissionCreateNestedOneWithoutRole_permissionsInput = {
    create?: XOR<permissionCreateWithoutRole_permissionsInput, permissionUncheckedCreateWithoutRole_permissionsInput>
    connectOrCreate?: permissionCreateOrConnectWithoutRole_permissionsInput
    connect?: permissionWhereUniqueInput
  }

  export type roleUpdateOneRequiredWithoutRole_permissionsNestedInput = {
    create?: XOR<roleCreateWithoutRole_permissionsInput, roleUncheckedCreateWithoutRole_permissionsInput>
    connectOrCreate?: roleCreateOrConnectWithoutRole_permissionsInput
    upsert?: roleUpsertWithoutRole_permissionsInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutRole_permissionsInput, roleUpdateWithoutRole_permissionsInput>, roleUncheckedUpdateWithoutRole_permissionsInput>
  }

  export type permissionUpdateOneRequiredWithoutRole_permissionsNestedInput = {
    create?: XOR<permissionCreateWithoutRole_permissionsInput, permissionUncheckedCreateWithoutRole_permissionsInput>
    connectOrCreate?: permissionCreateOrConnectWithoutRole_permissionsInput
    upsert?: permissionUpsertWithoutRole_permissionsInput
    connect?: permissionWhereUniqueInput
    update?: XOR<XOR<permissionUpdateToOneWithWhereWithoutRole_permissionsInput, permissionUpdateWithoutRole_permissionsInput>, permissionUncheckedUpdateWithoutRole_permissionsInput>
  }

  export type subjectCreateNestedOneWithoutLectureInput = {
    create?: XOR<subjectCreateWithoutLectureInput, subjectUncheckedCreateWithoutLectureInput>
    connectOrCreate?: subjectCreateOrConnectWithoutLectureInput
    connect?: subjectWhereUniqueInput
  }

  export type teacherCreateNestedOneWithoutLectureInput = {
    create?: XOR<teacherCreateWithoutLectureInput, teacherUncheckedCreateWithoutLectureInput>
    connectOrCreate?: teacherCreateOrConnectWithoutLectureInput
    connect?: teacherWhereUniqueInput
  }

  export type scheduleCreateNestedOneWithoutLectureInput = {
    create?: XOR<scheduleCreateWithoutLectureInput, scheduleUncheckedCreateWithoutLectureInput>
    connectOrCreate?: scheduleCreateOrConnectWithoutLectureInput
    connect?: scheduleWhereUniqueInput
  }

  export type presenceCreateNestedManyWithoutLectureInput = {
    create?: XOR<presenceCreateWithoutLectureInput, presenceUncheckedCreateWithoutLectureInput> | presenceCreateWithoutLectureInput[] | presenceUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: presenceCreateOrConnectWithoutLectureInput | presenceCreateOrConnectWithoutLectureInput[]
    createMany?: presenceCreateManyLectureInputEnvelope
    connect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
  }

  export type presenceUncheckedCreateNestedManyWithoutLectureInput = {
    create?: XOR<presenceCreateWithoutLectureInput, presenceUncheckedCreateWithoutLectureInput> | presenceCreateWithoutLectureInput[] | presenceUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: presenceCreateOrConnectWithoutLectureInput | presenceCreateOrConnectWithoutLectureInput[]
    createMany?: presenceCreateManyLectureInputEnvelope
    connect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
  }

  export type subjectUpdateOneRequiredWithoutLectureNestedInput = {
    create?: XOR<subjectCreateWithoutLectureInput, subjectUncheckedCreateWithoutLectureInput>
    connectOrCreate?: subjectCreateOrConnectWithoutLectureInput
    upsert?: subjectUpsertWithoutLectureInput
    connect?: subjectWhereUniqueInput
    update?: XOR<XOR<subjectUpdateToOneWithWhereWithoutLectureInput, subjectUpdateWithoutLectureInput>, subjectUncheckedUpdateWithoutLectureInput>
  }

  export type teacherUpdateOneRequiredWithoutLectureNestedInput = {
    create?: XOR<teacherCreateWithoutLectureInput, teacherUncheckedCreateWithoutLectureInput>
    connectOrCreate?: teacherCreateOrConnectWithoutLectureInput
    upsert?: teacherUpsertWithoutLectureInput
    connect?: teacherWhereUniqueInput
    update?: XOR<XOR<teacherUpdateToOneWithWhereWithoutLectureInput, teacherUpdateWithoutLectureInput>, teacherUncheckedUpdateWithoutLectureInput>
  }

  export type scheduleUpdateOneRequiredWithoutLectureNestedInput = {
    create?: XOR<scheduleCreateWithoutLectureInput, scheduleUncheckedCreateWithoutLectureInput>
    connectOrCreate?: scheduleCreateOrConnectWithoutLectureInput
    upsert?: scheduleUpsertWithoutLectureInput
    connect?: scheduleWhereUniqueInput
    update?: XOR<XOR<scheduleUpdateToOneWithWhereWithoutLectureInput, scheduleUpdateWithoutLectureInput>, scheduleUncheckedUpdateWithoutLectureInput>
  }

  export type presenceUpdateManyWithoutLectureNestedInput = {
    create?: XOR<presenceCreateWithoutLectureInput, presenceUncheckedCreateWithoutLectureInput> | presenceCreateWithoutLectureInput[] | presenceUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: presenceCreateOrConnectWithoutLectureInput | presenceCreateOrConnectWithoutLectureInput[]
    upsert?: presenceUpsertWithWhereUniqueWithoutLectureInput | presenceUpsertWithWhereUniqueWithoutLectureInput[]
    createMany?: presenceCreateManyLectureInputEnvelope
    set?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    disconnect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    delete?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    connect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    update?: presenceUpdateWithWhereUniqueWithoutLectureInput | presenceUpdateWithWhereUniqueWithoutLectureInput[]
    updateMany?: presenceUpdateManyWithWhereWithoutLectureInput | presenceUpdateManyWithWhereWithoutLectureInput[]
    deleteMany?: presenceScalarWhereInput | presenceScalarWhereInput[]
  }

  export type presenceUncheckedUpdateManyWithoutLectureNestedInput = {
    create?: XOR<presenceCreateWithoutLectureInput, presenceUncheckedCreateWithoutLectureInput> | presenceCreateWithoutLectureInput[] | presenceUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: presenceCreateOrConnectWithoutLectureInput | presenceCreateOrConnectWithoutLectureInput[]
    upsert?: presenceUpsertWithWhereUniqueWithoutLectureInput | presenceUpsertWithWhereUniqueWithoutLectureInput[]
    createMany?: presenceCreateManyLectureInputEnvelope
    set?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    disconnect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    delete?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    connect?: presenceWhereUniqueInput | presenceWhereUniqueInput[]
    update?: presenceUpdateWithWhereUniqueWithoutLectureInput | presenceUpdateWithWhereUniqueWithoutLectureInput[]
    updateMany?: presenceUpdateManyWithWhereWithoutLectureInput | presenceUpdateManyWithWhereWithoutLectureInput[]
    deleteMany?: presenceScalarWhereInput | presenceScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPresenceInput = {
    create?: XOR<usersCreateWithoutPresenceInput, usersUncheckedCreateWithoutPresenceInput>
    connectOrCreate?: usersCreateOrConnectWithoutPresenceInput
    connect?: usersWhereUniqueInput
  }

  export type lectureCreateNestedOneWithoutPresenceInput = {
    create?: XOR<lectureCreateWithoutPresenceInput, lectureUncheckedCreateWithoutPresenceInput>
    connectOrCreate?: lectureCreateOrConnectWithoutPresenceInput
    connect?: lectureWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneRequiredWithoutPresenceNestedInput = {
    create?: XOR<usersCreateWithoutPresenceInput, usersUncheckedCreateWithoutPresenceInput>
    connectOrCreate?: usersCreateOrConnectWithoutPresenceInput
    upsert?: usersUpsertWithoutPresenceInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPresenceInput, usersUpdateWithoutPresenceInput>, usersUncheckedUpdateWithoutPresenceInput>
  }

  export type lectureUpdateOneRequiredWithoutPresenceNestedInput = {
    create?: XOR<lectureCreateWithoutPresenceInput, lectureUncheckedCreateWithoutPresenceInput>
    connectOrCreate?: lectureCreateOrConnectWithoutPresenceInput
    upsert?: lectureUpsertWithoutPresenceInput
    connect?: lectureWhereUniqueInput
    update?: XOR<XOR<lectureUpdateToOneWithWhereWithoutPresenceInput, lectureUpdateWithoutPresenceInput>, lectureUncheckedUpdateWithoutPresenceInput>
  }

  export type lectureCreateNestedManyWithoutScheduleInput = {
    create?: XOR<lectureCreateWithoutScheduleInput, lectureUncheckedCreateWithoutScheduleInput> | lectureCreateWithoutScheduleInput[] | lectureUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutScheduleInput | lectureCreateOrConnectWithoutScheduleInput[]
    createMany?: lectureCreateManyScheduleInputEnvelope
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
  }

  export type lectureUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<lectureCreateWithoutScheduleInput, lectureUncheckedCreateWithoutScheduleInput> | lectureCreateWithoutScheduleInput[] | lectureUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutScheduleInput | lectureCreateOrConnectWithoutScheduleInput[]
    createMany?: lectureCreateManyScheduleInputEnvelope
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
  }

  export type lectureUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<lectureCreateWithoutScheduleInput, lectureUncheckedCreateWithoutScheduleInput> | lectureCreateWithoutScheduleInput[] | lectureUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutScheduleInput | lectureCreateOrConnectWithoutScheduleInput[]
    upsert?: lectureUpsertWithWhereUniqueWithoutScheduleInput | lectureUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: lectureCreateManyScheduleInputEnvelope
    set?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    disconnect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    delete?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    update?: lectureUpdateWithWhereUniqueWithoutScheduleInput | lectureUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: lectureUpdateManyWithWhereWithoutScheduleInput | lectureUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: lectureScalarWhereInput | lectureScalarWhereInput[]
  }

  export type lectureUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<lectureCreateWithoutScheduleInput, lectureUncheckedCreateWithoutScheduleInput> | lectureCreateWithoutScheduleInput[] | lectureUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutScheduleInput | lectureCreateOrConnectWithoutScheduleInput[]
    upsert?: lectureUpsertWithWhereUniqueWithoutScheduleInput | lectureUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: lectureCreateManyScheduleInputEnvelope
    set?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    disconnect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    delete?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    update?: lectureUpdateWithWhereUniqueWithoutScheduleInput | lectureUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: lectureUpdateManyWithWhereWithoutScheduleInput | lectureUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: lectureScalarWhereInput | lectureScalarWhereInput[]
  }

  export type teacher_subjectsCreateNestedManyWithoutSubjectInput = {
    create?: XOR<teacher_subjectsCreateWithoutSubjectInput, teacher_subjectsUncheckedCreateWithoutSubjectInput> | teacher_subjectsCreateWithoutSubjectInput[] | teacher_subjectsUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: teacher_subjectsCreateOrConnectWithoutSubjectInput | teacher_subjectsCreateOrConnectWithoutSubjectInput[]
    createMany?: teacher_subjectsCreateManySubjectInputEnvelope
    connect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
  }

  export type lectureCreateNestedManyWithoutSubjectInput = {
    create?: XOR<lectureCreateWithoutSubjectInput, lectureUncheckedCreateWithoutSubjectInput> | lectureCreateWithoutSubjectInput[] | lectureUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutSubjectInput | lectureCreateOrConnectWithoutSubjectInput[]
    createMany?: lectureCreateManySubjectInputEnvelope
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
  }

  export type teacher_subjectsUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<teacher_subjectsCreateWithoutSubjectInput, teacher_subjectsUncheckedCreateWithoutSubjectInput> | teacher_subjectsCreateWithoutSubjectInput[] | teacher_subjectsUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: teacher_subjectsCreateOrConnectWithoutSubjectInput | teacher_subjectsCreateOrConnectWithoutSubjectInput[]
    createMany?: teacher_subjectsCreateManySubjectInputEnvelope
    connect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
  }

  export type lectureUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<lectureCreateWithoutSubjectInput, lectureUncheckedCreateWithoutSubjectInput> | lectureCreateWithoutSubjectInput[] | lectureUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutSubjectInput | lectureCreateOrConnectWithoutSubjectInput[]
    createMany?: lectureCreateManySubjectInputEnvelope
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
  }

  export type teacher_subjectsUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<teacher_subjectsCreateWithoutSubjectInput, teacher_subjectsUncheckedCreateWithoutSubjectInput> | teacher_subjectsCreateWithoutSubjectInput[] | teacher_subjectsUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: teacher_subjectsCreateOrConnectWithoutSubjectInput | teacher_subjectsCreateOrConnectWithoutSubjectInput[]
    upsert?: teacher_subjectsUpsertWithWhereUniqueWithoutSubjectInput | teacher_subjectsUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: teacher_subjectsCreateManySubjectInputEnvelope
    set?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    disconnect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    delete?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    connect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    update?: teacher_subjectsUpdateWithWhereUniqueWithoutSubjectInput | teacher_subjectsUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: teacher_subjectsUpdateManyWithWhereWithoutSubjectInput | teacher_subjectsUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: teacher_subjectsScalarWhereInput | teacher_subjectsScalarWhereInput[]
  }

  export type lectureUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<lectureCreateWithoutSubjectInput, lectureUncheckedCreateWithoutSubjectInput> | lectureCreateWithoutSubjectInput[] | lectureUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutSubjectInput | lectureCreateOrConnectWithoutSubjectInput[]
    upsert?: lectureUpsertWithWhereUniqueWithoutSubjectInput | lectureUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: lectureCreateManySubjectInputEnvelope
    set?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    disconnect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    delete?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    update?: lectureUpdateWithWhereUniqueWithoutSubjectInput | lectureUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: lectureUpdateManyWithWhereWithoutSubjectInput | lectureUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: lectureScalarWhereInput | lectureScalarWhereInput[]
  }

  export type teacher_subjectsUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<teacher_subjectsCreateWithoutSubjectInput, teacher_subjectsUncheckedCreateWithoutSubjectInput> | teacher_subjectsCreateWithoutSubjectInput[] | teacher_subjectsUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: teacher_subjectsCreateOrConnectWithoutSubjectInput | teacher_subjectsCreateOrConnectWithoutSubjectInput[]
    upsert?: teacher_subjectsUpsertWithWhereUniqueWithoutSubjectInput | teacher_subjectsUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: teacher_subjectsCreateManySubjectInputEnvelope
    set?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    disconnect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    delete?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    connect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    update?: teacher_subjectsUpdateWithWhereUniqueWithoutSubjectInput | teacher_subjectsUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: teacher_subjectsUpdateManyWithWhereWithoutSubjectInput | teacher_subjectsUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: teacher_subjectsScalarWhereInput | teacher_subjectsScalarWhereInput[]
  }

  export type lectureUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<lectureCreateWithoutSubjectInput, lectureUncheckedCreateWithoutSubjectInput> | lectureCreateWithoutSubjectInput[] | lectureUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutSubjectInput | lectureCreateOrConnectWithoutSubjectInput[]
    upsert?: lectureUpsertWithWhereUniqueWithoutSubjectInput | lectureUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: lectureCreateManySubjectInputEnvelope
    set?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    disconnect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    delete?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    update?: lectureUpdateWithWhereUniqueWithoutSubjectInput | lectureUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: lectureUpdateManyWithWhereWithoutSubjectInput | lectureUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: lectureScalarWhereInput | lectureScalarWhereInput[]
  }

  export type teacherCreateNestedOneWithoutTeacher_subjectsInput = {
    create?: XOR<teacherCreateWithoutTeacher_subjectsInput, teacherUncheckedCreateWithoutTeacher_subjectsInput>
    connectOrCreate?: teacherCreateOrConnectWithoutTeacher_subjectsInput
    connect?: teacherWhereUniqueInput
  }

  export type subjectCreateNestedOneWithoutTeacher_subjectsInput = {
    create?: XOR<subjectCreateWithoutTeacher_subjectsInput, subjectUncheckedCreateWithoutTeacher_subjectsInput>
    connectOrCreate?: subjectCreateOrConnectWithoutTeacher_subjectsInput
    connect?: subjectWhereUniqueInput
  }

  export type teacherUpdateOneRequiredWithoutTeacher_subjectsNestedInput = {
    create?: XOR<teacherCreateWithoutTeacher_subjectsInput, teacherUncheckedCreateWithoutTeacher_subjectsInput>
    connectOrCreate?: teacherCreateOrConnectWithoutTeacher_subjectsInput
    upsert?: teacherUpsertWithoutTeacher_subjectsInput
    connect?: teacherWhereUniqueInput
    update?: XOR<XOR<teacherUpdateToOneWithWhereWithoutTeacher_subjectsInput, teacherUpdateWithoutTeacher_subjectsInput>, teacherUncheckedUpdateWithoutTeacher_subjectsInput>
  }

  export type subjectUpdateOneRequiredWithoutTeacher_subjectsNestedInput = {
    create?: XOR<subjectCreateWithoutTeacher_subjectsInput, subjectUncheckedCreateWithoutTeacher_subjectsInput>
    connectOrCreate?: subjectCreateOrConnectWithoutTeacher_subjectsInput
    upsert?: subjectUpsertWithoutTeacher_subjectsInput
    connect?: subjectWhereUniqueInput
    update?: XOR<XOR<subjectUpdateToOneWithWhereWithoutTeacher_subjectsInput, subjectUpdateWithoutTeacher_subjectsInput>, subjectUncheckedUpdateWithoutTeacher_subjectsInput>
  }

  export type teacher_subjectsCreateNestedManyWithoutTeacherInput = {
    create?: XOR<teacher_subjectsCreateWithoutTeacherInput, teacher_subjectsUncheckedCreateWithoutTeacherInput> | teacher_subjectsCreateWithoutTeacherInput[] | teacher_subjectsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: teacher_subjectsCreateOrConnectWithoutTeacherInput | teacher_subjectsCreateOrConnectWithoutTeacherInput[]
    createMany?: teacher_subjectsCreateManyTeacherInputEnvelope
    connect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
  }

  export type lectureCreateNestedManyWithoutTeacherInput = {
    create?: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput> | lectureCreateWithoutTeacherInput[] | lectureUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutTeacherInput | lectureCreateOrConnectWithoutTeacherInput[]
    createMany?: lectureCreateManyTeacherInputEnvelope
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
  }

  export type teacher_subjectsUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<teacher_subjectsCreateWithoutTeacherInput, teacher_subjectsUncheckedCreateWithoutTeacherInput> | teacher_subjectsCreateWithoutTeacherInput[] | teacher_subjectsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: teacher_subjectsCreateOrConnectWithoutTeacherInput | teacher_subjectsCreateOrConnectWithoutTeacherInput[]
    createMany?: teacher_subjectsCreateManyTeacherInputEnvelope
    connect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
  }

  export type lectureUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput> | lectureCreateWithoutTeacherInput[] | lectureUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutTeacherInput | lectureCreateOrConnectWithoutTeacherInput[]
    createMany?: lectureCreateManyTeacherInputEnvelope
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
  }

  export type teacher_subjectsUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<teacher_subjectsCreateWithoutTeacherInput, teacher_subjectsUncheckedCreateWithoutTeacherInput> | teacher_subjectsCreateWithoutTeacherInput[] | teacher_subjectsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: teacher_subjectsCreateOrConnectWithoutTeacherInput | teacher_subjectsCreateOrConnectWithoutTeacherInput[]
    upsert?: teacher_subjectsUpsertWithWhereUniqueWithoutTeacherInput | teacher_subjectsUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: teacher_subjectsCreateManyTeacherInputEnvelope
    set?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    disconnect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    delete?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    connect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    update?: teacher_subjectsUpdateWithWhereUniqueWithoutTeacherInput | teacher_subjectsUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: teacher_subjectsUpdateManyWithWhereWithoutTeacherInput | teacher_subjectsUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: teacher_subjectsScalarWhereInput | teacher_subjectsScalarWhereInput[]
  }

  export type lectureUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput> | lectureCreateWithoutTeacherInput[] | lectureUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutTeacherInput | lectureCreateOrConnectWithoutTeacherInput[]
    upsert?: lectureUpsertWithWhereUniqueWithoutTeacherInput | lectureUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: lectureCreateManyTeacherInputEnvelope
    set?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    disconnect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    delete?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    update?: lectureUpdateWithWhereUniqueWithoutTeacherInput | lectureUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: lectureUpdateManyWithWhereWithoutTeacherInput | lectureUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: lectureScalarWhereInput | lectureScalarWhereInput[]
  }

  export type teacher_subjectsUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<teacher_subjectsCreateWithoutTeacherInput, teacher_subjectsUncheckedCreateWithoutTeacherInput> | teacher_subjectsCreateWithoutTeacherInput[] | teacher_subjectsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: teacher_subjectsCreateOrConnectWithoutTeacherInput | teacher_subjectsCreateOrConnectWithoutTeacherInput[]
    upsert?: teacher_subjectsUpsertWithWhereUniqueWithoutTeacherInput | teacher_subjectsUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: teacher_subjectsCreateManyTeacherInputEnvelope
    set?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    disconnect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    delete?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    connect?: teacher_subjectsWhereUniqueInput | teacher_subjectsWhereUniqueInput[]
    update?: teacher_subjectsUpdateWithWhereUniqueWithoutTeacherInput | teacher_subjectsUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: teacher_subjectsUpdateManyWithWhereWithoutTeacherInput | teacher_subjectsUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: teacher_subjectsScalarWhereInput | teacher_subjectsScalarWhereInput[]
  }

  export type lectureUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput> | lectureCreateWithoutTeacherInput[] | lectureUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutTeacherInput | lectureCreateOrConnectWithoutTeacherInput[]
    upsert?: lectureUpsertWithWhereUniqueWithoutTeacherInput | lectureUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: lectureCreateManyTeacherInputEnvelope
    set?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    disconnect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    delete?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    update?: lectureUpdateWithWhereUniqueWithoutTeacherInput | lectureUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: lectureUpdateManyWithWhereWithoutTeacherInput | lectureUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: lectureScalarWhereInput | lectureScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type presenceCreateWithoutUserInput = {
    is_present: boolean
    created_at?: Date | string
    updated_at?: Date | string
    lecture: lectureCreateNestedOneWithoutPresenceInput
  }

  export type presenceUncheckedCreateWithoutUserInput = {
    id?: number
    lecture_id: number
    is_present: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type presenceCreateOrConnectWithoutUserInput = {
    where: presenceWhereUniqueInput
    create: XOR<presenceCreateWithoutUserInput, presenceUncheckedCreateWithoutUserInput>
  }

  export type presenceCreateManyUserInputEnvelope = {
    data: presenceCreateManyUserInput | presenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_rolesCreateWithoutUserInput = {
    assigned_at?: Date | string
    role: roleCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateWithoutUserInput = {
    role_id: number
    assigned_at?: Date | string
  }

  export type user_rolesCreateOrConnectWithoutUserInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutUserInput, user_rolesUncheckedCreateWithoutUserInput>
  }

  export type user_rolesCreateManyUserInputEnvelope = {
    data: user_rolesCreateManyUserInput | user_rolesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type presenceUpsertWithWhereUniqueWithoutUserInput = {
    where: presenceWhereUniqueInput
    update: XOR<presenceUpdateWithoutUserInput, presenceUncheckedUpdateWithoutUserInput>
    create: XOR<presenceCreateWithoutUserInput, presenceUncheckedCreateWithoutUserInput>
  }

  export type presenceUpdateWithWhereUniqueWithoutUserInput = {
    where: presenceWhereUniqueInput
    data: XOR<presenceUpdateWithoutUserInput, presenceUncheckedUpdateWithoutUserInput>
  }

  export type presenceUpdateManyWithWhereWithoutUserInput = {
    where: presenceScalarWhereInput
    data: XOR<presenceUpdateManyMutationInput, presenceUncheckedUpdateManyWithoutUserInput>
  }

  export type presenceScalarWhereInput = {
    AND?: presenceScalarWhereInput | presenceScalarWhereInput[]
    OR?: presenceScalarWhereInput[]
    NOT?: presenceScalarWhereInput | presenceScalarWhereInput[]
    id?: IntFilter<"presence"> | number
    user_id?: IntFilter<"presence"> | number
    lecture_id?: IntFilter<"presence"> | number
    is_present?: BoolFilter<"presence"> | boolean
    created_at?: DateTimeFilter<"presence"> | Date | string
    updated_at?: DateTimeFilter<"presence"> | Date | string
  }

  export type user_rolesUpsertWithWhereUniqueWithoutUserInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutUserInput, user_rolesUncheckedUpdateWithoutUserInput>
    create: XOR<user_rolesCreateWithoutUserInput, user_rolesUncheckedCreateWithoutUserInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutUserInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutUserInput, user_rolesUncheckedUpdateWithoutUserInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutUserInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutUserInput>
  }

  export type user_rolesScalarWhereInput = {
    AND?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
    OR?: user_rolesScalarWhereInput[]
    NOT?: user_rolesScalarWhereInput | user_rolesScalarWhereInput[]
    user_id?: IntFilter<"user_roles"> | number
    role_id?: IntFilter<"user_roles"> | number
    assigned_at?: DateTimeFilter<"user_roles"> | Date | string
  }

  export type user_rolesCreateWithoutRoleInput = {
    assigned_at?: Date | string
    user: usersCreateNestedOneWithoutUser_rolesInput
  }

  export type user_rolesUncheckedCreateWithoutRoleInput = {
    user_id: number
    assigned_at?: Date | string
  }

  export type user_rolesCreateOrConnectWithoutRoleInput = {
    where: user_rolesWhereUniqueInput
    create: XOR<user_rolesCreateWithoutRoleInput, user_rolesUncheckedCreateWithoutRoleInput>
  }

  export type user_rolesCreateManyRoleInputEnvelope = {
    data: user_rolesCreateManyRoleInput | user_rolesCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type role_permissionsCreateWithoutRoleInput = {
    assigned_at?: Date | string
    permission: permissionCreateNestedOneWithoutRole_permissionsInput
  }

  export type role_permissionsUncheckedCreateWithoutRoleInput = {
    permission_id: number
    assigned_at?: Date | string
  }

  export type role_permissionsCreateOrConnectWithoutRoleInput = {
    where: role_permissionsWhereUniqueInput
    create: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput>
  }

  export type role_permissionsCreateManyRoleInputEnvelope = {
    data: role_permissionsCreateManyRoleInput | role_permissionsCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type user_rolesUpsertWithWhereUniqueWithoutRoleInput = {
    where: user_rolesWhereUniqueInput
    update: XOR<user_rolesUpdateWithoutRoleInput, user_rolesUncheckedUpdateWithoutRoleInput>
    create: XOR<user_rolesCreateWithoutRoleInput, user_rolesUncheckedCreateWithoutRoleInput>
  }

  export type user_rolesUpdateWithWhereUniqueWithoutRoleInput = {
    where: user_rolesWhereUniqueInput
    data: XOR<user_rolesUpdateWithoutRoleInput, user_rolesUncheckedUpdateWithoutRoleInput>
  }

  export type user_rolesUpdateManyWithWhereWithoutRoleInput = {
    where: user_rolesScalarWhereInput
    data: XOR<user_rolesUpdateManyMutationInput, user_rolesUncheckedUpdateManyWithoutRoleInput>
  }

  export type role_permissionsUpsertWithWhereUniqueWithoutRoleInput = {
    where: role_permissionsWhereUniqueInput
    update: XOR<role_permissionsUpdateWithoutRoleInput, role_permissionsUncheckedUpdateWithoutRoleInput>
    create: XOR<role_permissionsCreateWithoutRoleInput, role_permissionsUncheckedCreateWithoutRoleInput>
  }

  export type role_permissionsUpdateWithWhereUniqueWithoutRoleInput = {
    where: role_permissionsWhereUniqueInput
    data: XOR<role_permissionsUpdateWithoutRoleInput, role_permissionsUncheckedUpdateWithoutRoleInput>
  }

  export type role_permissionsUpdateManyWithWhereWithoutRoleInput = {
    where: role_permissionsScalarWhereInput
    data: XOR<role_permissionsUpdateManyMutationInput, role_permissionsUncheckedUpdateManyWithoutRoleInput>
  }

  export type role_permissionsScalarWhereInput = {
    AND?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
    OR?: role_permissionsScalarWhereInput[]
    NOT?: role_permissionsScalarWhereInput | role_permissionsScalarWhereInput[]
    role_id?: IntFilter<"role_permissions"> | number
    permission_id?: IntFilter<"role_permissions"> | number
    assigned_at?: DateTimeFilter<"role_permissions"> | Date | string
  }

  export type usersCreateWithoutUser_rolesInput = {
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    presence?: presenceCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutUser_rolesInput = {
    id?: number
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    presence?: presenceUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutUser_rolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
  }

  export type roleCreateWithoutUser_rolesInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role_permissions?: role_permissionsCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutUser_rolesInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role_permissions?: role_permissionsUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleCreateOrConnectWithoutUser_rolesInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUser_rolesInput, roleUncheckedCreateWithoutUser_rolesInput>
  }

  export type usersUpsertWithoutUser_rolesInput = {
    update: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<usersCreateWithoutUser_rolesInput, usersUncheckedCreateWithoutUser_rolesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_rolesInput, usersUncheckedUpdateWithoutUser_rolesInput>
  }

  export type usersUpdateWithoutUser_rolesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    presence?: presenceUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_rolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    presence?: presenceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type roleUpsertWithoutUser_rolesInput = {
    update: XOR<roleUpdateWithoutUser_rolesInput, roleUncheckedUpdateWithoutUser_rolesInput>
    create: XOR<roleCreateWithoutUser_rolesInput, roleUncheckedCreateWithoutUser_rolesInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutUser_rolesInput, roleUncheckedUpdateWithoutUser_rolesInput>
  }

  export type roleUpdateWithoutUser_rolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_permissions?: role_permissionsUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutUser_rolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_permissions?: role_permissionsUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type role_permissionsCreateWithoutPermissionInput = {
    assigned_at?: Date | string
    role: roleCreateNestedOneWithoutRole_permissionsInput
  }

  export type role_permissionsUncheckedCreateWithoutPermissionInput = {
    role_id: number
    assigned_at?: Date | string
  }

  export type role_permissionsCreateOrConnectWithoutPermissionInput = {
    where: role_permissionsWhereUniqueInput
    create: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput>
  }

  export type role_permissionsCreateManyPermissionInputEnvelope = {
    data: role_permissionsCreateManyPermissionInput | role_permissionsCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type role_permissionsUpsertWithWhereUniqueWithoutPermissionInput = {
    where: role_permissionsWhereUniqueInput
    update: XOR<role_permissionsUpdateWithoutPermissionInput, role_permissionsUncheckedUpdateWithoutPermissionInput>
    create: XOR<role_permissionsCreateWithoutPermissionInput, role_permissionsUncheckedCreateWithoutPermissionInput>
  }

  export type role_permissionsUpdateWithWhereUniqueWithoutPermissionInput = {
    where: role_permissionsWhereUniqueInput
    data: XOR<role_permissionsUpdateWithoutPermissionInput, role_permissionsUncheckedUpdateWithoutPermissionInput>
  }

  export type role_permissionsUpdateManyWithWhereWithoutPermissionInput = {
    where: role_permissionsScalarWhereInput
    data: XOR<role_permissionsUpdateManyMutationInput, role_permissionsUncheckedUpdateManyWithoutPermissionInput>
  }

  export type roleCreateWithoutRole_permissionsInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_roles?: user_rolesCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutRole_permissionsInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleCreateOrConnectWithoutRole_permissionsInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutRole_permissionsInput, roleUncheckedCreateWithoutRole_permissionsInput>
  }

  export type permissionCreateWithoutRole_permissionsInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type permissionUncheckedCreateWithoutRole_permissionsInput = {
    id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type permissionCreateOrConnectWithoutRole_permissionsInput = {
    where: permissionWhereUniqueInput
    create: XOR<permissionCreateWithoutRole_permissionsInput, permissionUncheckedCreateWithoutRole_permissionsInput>
  }

  export type roleUpsertWithoutRole_permissionsInput = {
    update: XOR<roleUpdateWithoutRole_permissionsInput, roleUncheckedUpdateWithoutRole_permissionsInput>
    create: XOR<roleCreateWithoutRole_permissionsInput, roleUncheckedCreateWithoutRole_permissionsInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutRole_permissionsInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutRole_permissionsInput, roleUncheckedUpdateWithoutRole_permissionsInput>
  }

  export type roleUpdateWithoutRole_permissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_rolesUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutRole_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_roles?: user_rolesUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type permissionUpsertWithoutRole_permissionsInput = {
    update: XOR<permissionUpdateWithoutRole_permissionsInput, permissionUncheckedUpdateWithoutRole_permissionsInput>
    create: XOR<permissionCreateWithoutRole_permissionsInput, permissionUncheckedCreateWithoutRole_permissionsInput>
    where?: permissionWhereInput
  }

  export type permissionUpdateToOneWithWhereWithoutRole_permissionsInput = {
    where?: permissionWhereInput
    data: XOR<permissionUpdateWithoutRole_permissionsInput, permissionUncheckedUpdateWithoutRole_permissionsInput>
  }

  export type permissionUpdateWithoutRole_permissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionUncheckedUpdateWithoutRole_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subjectCreateWithoutLectureInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    teacher_subjects?: teacher_subjectsCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateWithoutLectureInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    teacher_subjects?: teacher_subjectsUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectCreateOrConnectWithoutLectureInput = {
    where: subjectWhereUniqueInput
    create: XOR<subjectCreateWithoutLectureInput, subjectUncheckedCreateWithoutLectureInput>
  }

  export type teacherCreateWithoutLectureInput = {
    name: string
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher_subjects?: teacher_subjectsCreateNestedManyWithoutTeacherInput
  }

  export type teacherUncheckedCreateWithoutLectureInput = {
    id?: number
    name: string
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher_subjects?: teacher_subjectsUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type teacherCreateOrConnectWithoutLectureInput = {
    where: teacherWhereUniqueInput
    create: XOR<teacherCreateWithoutLectureInput, teacherUncheckedCreateWithoutLectureInput>
  }

  export type scheduleCreateWithoutLectureInput = {
    date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type scheduleUncheckedCreateWithoutLectureInput = {
    id?: number
    date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type scheduleCreateOrConnectWithoutLectureInput = {
    where: scheduleWhereUniqueInput
    create: XOR<scheduleCreateWithoutLectureInput, scheduleUncheckedCreateWithoutLectureInput>
  }

  export type presenceCreateWithoutLectureInput = {
    is_present: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: usersCreateNestedOneWithoutPresenceInput
  }

  export type presenceUncheckedCreateWithoutLectureInput = {
    id?: number
    user_id: number
    is_present: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type presenceCreateOrConnectWithoutLectureInput = {
    where: presenceWhereUniqueInput
    create: XOR<presenceCreateWithoutLectureInput, presenceUncheckedCreateWithoutLectureInput>
  }

  export type presenceCreateManyLectureInputEnvelope = {
    data: presenceCreateManyLectureInput | presenceCreateManyLectureInput[]
    skipDuplicates?: boolean
  }

  export type subjectUpsertWithoutLectureInput = {
    update: XOR<subjectUpdateWithoutLectureInput, subjectUncheckedUpdateWithoutLectureInput>
    create: XOR<subjectCreateWithoutLectureInput, subjectUncheckedCreateWithoutLectureInput>
    where?: subjectWhereInput
  }

  export type subjectUpdateToOneWithWhereWithoutLectureInput = {
    where?: subjectWhereInput
    data: XOR<subjectUpdateWithoutLectureInput, subjectUncheckedUpdateWithoutLectureInput>
  }

  export type subjectUpdateWithoutLectureInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: teacher_subjectsUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateWithoutLectureInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: teacher_subjectsUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type teacherUpsertWithoutLectureInput = {
    update: XOR<teacherUpdateWithoutLectureInput, teacherUncheckedUpdateWithoutLectureInput>
    create: XOR<teacherCreateWithoutLectureInput, teacherUncheckedCreateWithoutLectureInput>
    where?: teacherWhereInput
  }

  export type teacherUpdateToOneWithWhereWithoutLectureInput = {
    where?: teacherWhereInput
    data: XOR<teacherUpdateWithoutLectureInput, teacherUncheckedUpdateWithoutLectureInput>
  }

  export type teacherUpdateWithoutLectureInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: teacher_subjectsUpdateManyWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateWithoutLectureInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher_subjects?: teacher_subjectsUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type scheduleUpsertWithoutLectureInput = {
    update: XOR<scheduleUpdateWithoutLectureInput, scheduleUncheckedUpdateWithoutLectureInput>
    create: XOR<scheduleCreateWithoutLectureInput, scheduleUncheckedCreateWithoutLectureInput>
    where?: scheduleWhereInput
  }

  export type scheduleUpdateToOneWithWhereWithoutLectureInput = {
    where?: scheduleWhereInput
    data: XOR<scheduleUpdateWithoutLectureInput, scheduleUncheckedUpdateWithoutLectureInput>
  }

  export type scheduleUpdateWithoutLectureInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scheduleUncheckedUpdateWithoutLectureInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type presenceUpsertWithWhereUniqueWithoutLectureInput = {
    where: presenceWhereUniqueInput
    update: XOR<presenceUpdateWithoutLectureInput, presenceUncheckedUpdateWithoutLectureInput>
    create: XOR<presenceCreateWithoutLectureInput, presenceUncheckedCreateWithoutLectureInput>
  }

  export type presenceUpdateWithWhereUniqueWithoutLectureInput = {
    where: presenceWhereUniqueInput
    data: XOR<presenceUpdateWithoutLectureInput, presenceUncheckedUpdateWithoutLectureInput>
  }

  export type presenceUpdateManyWithWhereWithoutLectureInput = {
    where: presenceScalarWhereInput
    data: XOR<presenceUpdateManyMutationInput, presenceUncheckedUpdateManyWithoutLectureInput>
  }

  export type usersCreateWithoutPresenceInput = {
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    user_roles?: user_rolesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPresenceInput = {
    id?: number
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    user_roles?: user_rolesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPresenceInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPresenceInput, usersUncheckedCreateWithoutPresenceInput>
  }

  export type lectureCreateWithoutPresenceInput = {
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    subject: subjectCreateNestedOneWithoutLectureInput
    teacher: teacherCreateNestedOneWithoutLectureInput
    schedule: scheduleCreateNestedOneWithoutLectureInput
  }

  export type lectureUncheckedCreateWithoutPresenceInput = {
    id?: number
    subject_id: number
    teacher_id: number
    schedule_id: number
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lectureCreateOrConnectWithoutPresenceInput = {
    where: lectureWhereUniqueInput
    create: XOR<lectureCreateWithoutPresenceInput, lectureUncheckedCreateWithoutPresenceInput>
  }

  export type usersUpsertWithoutPresenceInput = {
    update: XOR<usersUpdateWithoutPresenceInput, usersUncheckedUpdateWithoutPresenceInput>
    create: XOR<usersCreateWithoutPresenceInput, usersUncheckedCreateWithoutPresenceInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPresenceInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPresenceInput, usersUncheckedUpdateWithoutPresenceInput>
  }

  export type usersUpdateWithoutPresenceInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    user_roles?: user_rolesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPresenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    user_roles?: user_rolesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type lectureUpsertWithoutPresenceInput = {
    update: XOR<lectureUpdateWithoutPresenceInput, lectureUncheckedUpdateWithoutPresenceInput>
    create: XOR<lectureCreateWithoutPresenceInput, lectureUncheckedCreateWithoutPresenceInput>
    where?: lectureWhereInput
  }

  export type lectureUpdateToOneWithWhereWithoutPresenceInput = {
    where?: lectureWhereInput
    data: XOR<lectureUpdateWithoutPresenceInput, lectureUncheckedUpdateWithoutPresenceInput>
  }

  export type lectureUpdateWithoutPresenceInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: subjectUpdateOneRequiredWithoutLectureNestedInput
    teacher?: teacherUpdateOneRequiredWithoutLectureNestedInput
    schedule?: scheduleUpdateOneRequiredWithoutLectureNestedInput
  }

  export type lectureUncheckedUpdateWithoutPresenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lectureCreateWithoutScheduleInput = {
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    subject: subjectCreateNestedOneWithoutLectureInput
    teacher: teacherCreateNestedOneWithoutLectureInput
    presence?: presenceCreateNestedManyWithoutLectureInput
  }

  export type lectureUncheckedCreateWithoutScheduleInput = {
    id?: number
    subject_id: number
    teacher_id: number
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    presence?: presenceUncheckedCreateNestedManyWithoutLectureInput
  }

  export type lectureCreateOrConnectWithoutScheduleInput = {
    where: lectureWhereUniqueInput
    create: XOR<lectureCreateWithoutScheduleInput, lectureUncheckedCreateWithoutScheduleInput>
  }

  export type lectureCreateManyScheduleInputEnvelope = {
    data: lectureCreateManyScheduleInput | lectureCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type lectureUpsertWithWhereUniqueWithoutScheduleInput = {
    where: lectureWhereUniqueInput
    update: XOR<lectureUpdateWithoutScheduleInput, lectureUncheckedUpdateWithoutScheduleInput>
    create: XOR<lectureCreateWithoutScheduleInput, lectureUncheckedCreateWithoutScheduleInput>
  }

  export type lectureUpdateWithWhereUniqueWithoutScheduleInput = {
    where: lectureWhereUniqueInput
    data: XOR<lectureUpdateWithoutScheduleInput, lectureUncheckedUpdateWithoutScheduleInput>
  }

  export type lectureUpdateManyWithWhereWithoutScheduleInput = {
    where: lectureScalarWhereInput
    data: XOR<lectureUpdateManyMutationInput, lectureUncheckedUpdateManyWithoutScheduleInput>
  }

  export type lectureScalarWhereInput = {
    AND?: lectureScalarWhereInput | lectureScalarWhereInput[]
    OR?: lectureScalarWhereInput[]
    NOT?: lectureScalarWhereInput | lectureScalarWhereInput[]
    id?: IntFilter<"lecture"> | number
    subject_id?: IntFilter<"lecture"> | number
    teacher_id?: IntFilter<"lecture"> | number
    schedule_id?: IntFilter<"lecture"> | number
    start_time?: DateTimeFilter<"lecture"> | Date | string
    end_time?: DateTimeFilter<"lecture"> | Date | string
    created_at?: DateTimeFilter<"lecture"> | Date | string
    updated_at?: DateTimeFilter<"lecture"> | Date | string
  }

  export type teacher_subjectsCreateWithoutSubjectInput = {
    assigned_at?: Date | string
    is_primary?: boolean
    teacher: teacherCreateNestedOneWithoutTeacher_subjectsInput
  }

  export type teacher_subjectsUncheckedCreateWithoutSubjectInput = {
    teacher_id: number
    assigned_at?: Date | string
    is_primary?: boolean
  }

  export type teacher_subjectsCreateOrConnectWithoutSubjectInput = {
    where: teacher_subjectsWhereUniqueInput
    create: XOR<teacher_subjectsCreateWithoutSubjectInput, teacher_subjectsUncheckedCreateWithoutSubjectInput>
  }

  export type teacher_subjectsCreateManySubjectInputEnvelope = {
    data: teacher_subjectsCreateManySubjectInput | teacher_subjectsCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type lectureCreateWithoutSubjectInput = {
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    teacher: teacherCreateNestedOneWithoutLectureInput
    schedule: scheduleCreateNestedOneWithoutLectureInput
    presence?: presenceCreateNestedManyWithoutLectureInput
  }

  export type lectureUncheckedCreateWithoutSubjectInput = {
    id?: number
    teacher_id: number
    schedule_id: number
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    presence?: presenceUncheckedCreateNestedManyWithoutLectureInput
  }

  export type lectureCreateOrConnectWithoutSubjectInput = {
    where: lectureWhereUniqueInput
    create: XOR<lectureCreateWithoutSubjectInput, lectureUncheckedCreateWithoutSubjectInput>
  }

  export type lectureCreateManySubjectInputEnvelope = {
    data: lectureCreateManySubjectInput | lectureCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type teacher_subjectsUpsertWithWhereUniqueWithoutSubjectInput = {
    where: teacher_subjectsWhereUniqueInput
    update: XOR<teacher_subjectsUpdateWithoutSubjectInput, teacher_subjectsUncheckedUpdateWithoutSubjectInput>
    create: XOR<teacher_subjectsCreateWithoutSubjectInput, teacher_subjectsUncheckedCreateWithoutSubjectInput>
  }

  export type teacher_subjectsUpdateWithWhereUniqueWithoutSubjectInput = {
    where: teacher_subjectsWhereUniqueInput
    data: XOR<teacher_subjectsUpdateWithoutSubjectInput, teacher_subjectsUncheckedUpdateWithoutSubjectInput>
  }

  export type teacher_subjectsUpdateManyWithWhereWithoutSubjectInput = {
    where: teacher_subjectsScalarWhereInput
    data: XOR<teacher_subjectsUpdateManyMutationInput, teacher_subjectsUncheckedUpdateManyWithoutSubjectInput>
  }

  export type teacher_subjectsScalarWhereInput = {
    AND?: teacher_subjectsScalarWhereInput | teacher_subjectsScalarWhereInput[]
    OR?: teacher_subjectsScalarWhereInput[]
    NOT?: teacher_subjectsScalarWhereInput | teacher_subjectsScalarWhereInput[]
    teacher_id?: IntFilter<"teacher_subjects"> | number
    subject_id?: IntFilter<"teacher_subjects"> | number
    assigned_at?: DateTimeFilter<"teacher_subjects"> | Date | string
    is_primary?: BoolFilter<"teacher_subjects"> | boolean
  }

  export type lectureUpsertWithWhereUniqueWithoutSubjectInput = {
    where: lectureWhereUniqueInput
    update: XOR<lectureUpdateWithoutSubjectInput, lectureUncheckedUpdateWithoutSubjectInput>
    create: XOR<lectureCreateWithoutSubjectInput, lectureUncheckedCreateWithoutSubjectInput>
  }

  export type lectureUpdateWithWhereUniqueWithoutSubjectInput = {
    where: lectureWhereUniqueInput
    data: XOR<lectureUpdateWithoutSubjectInput, lectureUncheckedUpdateWithoutSubjectInput>
  }

  export type lectureUpdateManyWithWhereWithoutSubjectInput = {
    where: lectureScalarWhereInput
    data: XOR<lectureUpdateManyMutationInput, lectureUncheckedUpdateManyWithoutSubjectInput>
  }

  export type teacherCreateWithoutTeacher_subjectsInput = {
    name: string
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    lecture?: lectureCreateNestedManyWithoutTeacherInput
  }

  export type teacherUncheckedCreateWithoutTeacher_subjectsInput = {
    id?: number
    name: string
    email?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    lecture?: lectureUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type teacherCreateOrConnectWithoutTeacher_subjectsInput = {
    where: teacherWhereUniqueInput
    create: XOR<teacherCreateWithoutTeacher_subjectsInput, teacherUncheckedCreateWithoutTeacher_subjectsInput>
  }

  export type subjectCreateWithoutTeacher_subjectsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    lecture?: lectureCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateWithoutTeacher_subjectsInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    lecture?: lectureUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectCreateOrConnectWithoutTeacher_subjectsInput = {
    where: subjectWhereUniqueInput
    create: XOR<subjectCreateWithoutTeacher_subjectsInput, subjectUncheckedCreateWithoutTeacher_subjectsInput>
  }

  export type teacherUpsertWithoutTeacher_subjectsInput = {
    update: XOR<teacherUpdateWithoutTeacher_subjectsInput, teacherUncheckedUpdateWithoutTeacher_subjectsInput>
    create: XOR<teacherCreateWithoutTeacher_subjectsInput, teacherUncheckedCreateWithoutTeacher_subjectsInput>
    where?: teacherWhereInput
  }

  export type teacherUpdateToOneWithWhereWithoutTeacher_subjectsInput = {
    where?: teacherWhereInput
    data: XOR<teacherUpdateWithoutTeacher_subjectsInput, teacherUncheckedUpdateWithoutTeacher_subjectsInput>
  }

  export type teacherUpdateWithoutTeacher_subjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture?: lectureUpdateManyWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateWithoutTeacher_subjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture?: lectureUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type subjectUpsertWithoutTeacher_subjectsInput = {
    update: XOR<subjectUpdateWithoutTeacher_subjectsInput, subjectUncheckedUpdateWithoutTeacher_subjectsInput>
    create: XOR<subjectCreateWithoutTeacher_subjectsInput, subjectUncheckedCreateWithoutTeacher_subjectsInput>
    where?: subjectWhereInput
  }

  export type subjectUpdateToOneWithWhereWithoutTeacher_subjectsInput = {
    where?: subjectWhereInput
    data: XOR<subjectUpdateWithoutTeacher_subjectsInput, subjectUncheckedUpdateWithoutTeacher_subjectsInput>
  }

  export type subjectUpdateWithoutTeacher_subjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture?: lectureUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateWithoutTeacher_subjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture?: lectureUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type teacher_subjectsCreateWithoutTeacherInput = {
    assigned_at?: Date | string
    is_primary?: boolean
    subject: subjectCreateNestedOneWithoutTeacher_subjectsInput
  }

  export type teacher_subjectsUncheckedCreateWithoutTeacherInput = {
    subject_id: number
    assigned_at?: Date | string
    is_primary?: boolean
  }

  export type teacher_subjectsCreateOrConnectWithoutTeacherInput = {
    where: teacher_subjectsWhereUniqueInput
    create: XOR<teacher_subjectsCreateWithoutTeacherInput, teacher_subjectsUncheckedCreateWithoutTeacherInput>
  }

  export type teacher_subjectsCreateManyTeacherInputEnvelope = {
    data: teacher_subjectsCreateManyTeacherInput | teacher_subjectsCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type lectureCreateWithoutTeacherInput = {
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    subject: subjectCreateNestedOneWithoutLectureInput
    schedule: scheduleCreateNestedOneWithoutLectureInput
    presence?: presenceCreateNestedManyWithoutLectureInput
  }

  export type lectureUncheckedCreateWithoutTeacherInput = {
    id?: number
    subject_id: number
    schedule_id: number
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    presence?: presenceUncheckedCreateNestedManyWithoutLectureInput
  }

  export type lectureCreateOrConnectWithoutTeacherInput = {
    where: lectureWhereUniqueInput
    create: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput>
  }

  export type lectureCreateManyTeacherInputEnvelope = {
    data: lectureCreateManyTeacherInput | lectureCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type teacher_subjectsUpsertWithWhereUniqueWithoutTeacherInput = {
    where: teacher_subjectsWhereUniqueInput
    update: XOR<teacher_subjectsUpdateWithoutTeacherInput, teacher_subjectsUncheckedUpdateWithoutTeacherInput>
    create: XOR<teacher_subjectsCreateWithoutTeacherInput, teacher_subjectsUncheckedCreateWithoutTeacherInput>
  }

  export type teacher_subjectsUpdateWithWhereUniqueWithoutTeacherInput = {
    where: teacher_subjectsWhereUniqueInput
    data: XOR<teacher_subjectsUpdateWithoutTeacherInput, teacher_subjectsUncheckedUpdateWithoutTeacherInput>
  }

  export type teacher_subjectsUpdateManyWithWhereWithoutTeacherInput = {
    where: teacher_subjectsScalarWhereInput
    data: XOR<teacher_subjectsUpdateManyMutationInput, teacher_subjectsUncheckedUpdateManyWithoutTeacherInput>
  }

  export type lectureUpsertWithWhereUniqueWithoutTeacherInput = {
    where: lectureWhereUniqueInput
    update: XOR<lectureUpdateWithoutTeacherInput, lectureUncheckedUpdateWithoutTeacherInput>
    create: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput>
  }

  export type lectureUpdateWithWhereUniqueWithoutTeacherInput = {
    where: lectureWhereUniqueInput
    data: XOR<lectureUpdateWithoutTeacherInput, lectureUncheckedUpdateWithoutTeacherInput>
  }

  export type lectureUpdateManyWithWhereWithoutTeacherInput = {
    where: lectureScalarWhereInput
    data: XOR<lectureUpdateManyMutationInput, lectureUncheckedUpdateManyWithoutTeacherInput>
  }

  export type presenceCreateManyUserInput = {
    id?: number
    lecture_id: number
    is_present: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_rolesCreateManyUserInput = {
    role_id: number
    assigned_at?: Date | string
  }

  export type presenceUpdateWithoutUserInput = {
    is_present?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture?: lectureUpdateOneRequiredWithoutPresenceNestedInput
  }

  export type presenceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecture_id?: IntFieldUpdateOperationsInput | number
    is_present?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type presenceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lecture_id?: IntFieldUpdateOperationsInput | number
    is_present?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUpdateWithoutUserInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: roleUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutUserInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUncheckedUpdateManyWithoutUserInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesCreateManyRoleInput = {
    user_id: number
    assigned_at?: Date | string
  }

  export type role_permissionsCreateManyRoleInput = {
    permission_id: number
    assigned_at?: Date | string
  }

  export type user_rolesUpdateWithoutRoleInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutUser_rolesNestedInput
  }

  export type user_rolesUncheckedUpdateWithoutRoleInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_rolesUncheckedUpdateManyWithoutRoleInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionsUpdateWithoutRoleInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: permissionUpdateOneRequiredWithoutRole_permissionsNestedInput
  }

  export type role_permissionsUncheckedUpdateWithoutRoleInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionsUncheckedUpdateManyWithoutRoleInput = {
    permission_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionsCreateManyPermissionInput = {
    role_id: number
    assigned_at?: Date | string
  }

  export type role_permissionsUpdateWithoutPermissionInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: roleUpdateOneRequiredWithoutRole_permissionsNestedInput
  }

  export type role_permissionsUncheckedUpdateWithoutPermissionInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type role_permissionsUncheckedUpdateManyWithoutPermissionInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type presenceCreateManyLectureInput = {
    id?: number
    user_id: number
    is_present: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type presenceUpdateWithoutLectureInput = {
    is_present?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutPresenceNestedInput
  }

  export type presenceUncheckedUpdateWithoutLectureInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    is_present?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type presenceUncheckedUpdateManyWithoutLectureInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    is_present?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lectureCreateManyScheduleInput = {
    id?: number
    subject_id: number
    teacher_id: number
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lectureUpdateWithoutScheduleInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: subjectUpdateOneRequiredWithoutLectureNestedInput
    teacher?: teacherUpdateOneRequiredWithoutLectureNestedInput
    presence?: presenceUpdateManyWithoutLectureNestedInput
  }

  export type lectureUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    presence?: presenceUncheckedUpdateManyWithoutLectureNestedInput
  }

  export type lectureUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teacher_subjectsCreateManySubjectInput = {
    teacher_id: number
    assigned_at?: Date | string
    is_primary?: boolean
  }

  export type lectureCreateManySubjectInput = {
    id?: number
    teacher_id: number
    schedule_id: number
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type teacher_subjectsUpdateWithoutSubjectInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    teacher?: teacherUpdateOneRequiredWithoutTeacher_subjectsNestedInput
  }

  export type teacher_subjectsUncheckedUpdateWithoutSubjectInput = {
    teacher_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type teacher_subjectsUncheckedUpdateManyWithoutSubjectInput = {
    teacher_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type lectureUpdateWithoutSubjectInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: teacherUpdateOneRequiredWithoutLectureNestedInput
    schedule?: scheduleUpdateOneRequiredWithoutLectureNestedInput
    presence?: presenceUpdateManyWithoutLectureNestedInput
  }

  export type lectureUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    presence?: presenceUncheckedUpdateManyWithoutLectureNestedInput
  }

  export type lectureUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teacher_subjectsCreateManyTeacherInput = {
    subject_id: number
    assigned_at?: Date | string
    is_primary?: boolean
  }

  export type lectureCreateManyTeacherInput = {
    id?: number
    subject_id: number
    schedule_id: number
    start_time: Date | string
    end_time: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type teacher_subjectsUpdateWithoutTeacherInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    subject?: subjectUpdateOneRequiredWithoutTeacher_subjectsNestedInput
  }

  export type teacher_subjectsUncheckedUpdateWithoutTeacherInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type teacher_subjectsUncheckedUpdateManyWithoutTeacherInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type lectureUpdateWithoutTeacherInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: subjectUpdateOneRequiredWithoutLectureNestedInput
    schedule?: scheduleUpdateOneRequiredWithoutLectureNestedInput
    presence?: presenceUpdateManyWithoutLectureNestedInput
  }

  export type lectureUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    presence?: presenceUncheckedUpdateManyWithoutLectureNestedInput
  }

  export type lectureUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    schedule_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionCountOutputTypeDefaultArgs instead
     */
    export type PermissionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LectureCountOutputTypeDefaultArgs instead
     */
    export type LectureCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LectureCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScheduleCountOutputTypeDefaultArgs instead
     */
    export type ScheduleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScheduleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubjectCountOutputTypeDefaultArgs instead
     */
    export type SubjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeacherCountOutputTypeDefaultArgs instead
     */
    export type TeacherCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeacherCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use verification_tokenDefaultArgs instead
     */
    export type verification_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = verification_tokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use accountsDefaultArgs instead
     */
    export type accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = accountsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sessionsDefaultArgs instead
     */
    export type sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sessionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use roleDefaultArgs instead
     */
    export type roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = roleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_rolesDefaultArgs instead
     */
    export type user_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_rolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use permissionDefaultArgs instead
     */
    export type permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = permissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use role_permissionsDefaultArgs instead
     */
    export type role_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = role_permissionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use database_metricDefaultArgs instead
     */
    export type database_metricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = database_metricDefaultArgs<ExtArgs>
    /**
     * @deprecated Use lectureDefaultArgs instead
     */
    export type lectureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = lectureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use presenceDefaultArgs instead
     */
    export type presenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = presenceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use scheduleDefaultArgs instead
     */
    export type scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = scheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use subjectDefaultArgs instead
     */
    export type subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = subjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use teacher_subjectsDefaultArgs instead
     */
    export type teacher_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teacher_subjectsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use teacherDefaultArgs instead
     */
    export type teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teacherDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}