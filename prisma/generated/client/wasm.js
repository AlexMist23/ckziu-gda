
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Verification_tokenScalarFieldEnum = {
  identifier: 'identifier',
  expires: 'expires',
  token: 'token'
};

exports.Prisma.AccountsScalarFieldEnum = {
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

exports.Prisma.SessionsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  expires: 'expires',
  sessionToken: 'sessionToken'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_rolesScalarFieldEnum = {
  user_id: 'user_id',
  role_id: 'role_id',
  assigned_at: 'assigned_at'
};

exports.Prisma.PermissionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Role_permissionsScalarFieldEnum = {
  role_id: 'role_id',
  permission_id: 'permission_id',
  assigned_at: 'assigned_at'
};

exports.Prisma.Database_metricScalarFieldEnum = {
  id: 'id',
  query_time: 'query_time',
  row_count: 'row_count',
  timestamp: 'timestamp'
};

exports.Prisma.Academic_yearScalarFieldEnum = {
  id: 'id',
  name: 'name',
  start_date: 'start_date',
  end_date: 'end_date',
  type: 'type',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  subject_id: 'subject_id',
  teacher_id: 'teacher_id',
  grade_id: 'grade_id',
  academic_year_id: 'academic_year_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.LectureScalarFieldEnum = {
  id: 'id',
  schedule_id: 'schedule_id',
  topic: 'topic',
  created_at: 'created_at',
  updated_at: 'updated_at',
  subjectId: 'subjectId',
  teacherId: 'teacherId'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  lecture_id: 'lecture_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ScheduleScalarFieldEnum = {
  id: 'id',
  course_id: 'course_id',
  date: 'date',
  start_time: 'start_time',
  end_time: 'end_time',
  created_at: 'created_at',
  updated_at: 'updated_at',
  gradeId: 'gradeId'
};

exports.Prisma.SubjectScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Teacher_subjectsScalarFieldEnum = {
  teacher_id: 'teacher_id',
  subject_id: 'subject_id',
  assigned_at: 'assigned_at',
  is_primary: 'is_primary'
};

exports.Prisma.TeacherScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.GradeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_gradesScalarFieldEnum = {
  user_id: 'user_id',
  grade_id: 'grade_id',
  joined_at: 'joined_at'
};

exports.Prisma.EnrollmentScalarFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  course_id: 'course_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Academic_performanceScalarFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  course_id: 'course_id',
  score: 'score',
  grade: 'grade',
  term: 'term',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  users: 'users',
  verification_token: 'verification_token',
  accounts: 'accounts',
  sessions: 'sessions',
  role: 'role',
  user_roles: 'user_roles',
  permission: 'permission',
  role_permissions: 'role_permissions',
  database_metric: 'database_metric',
  academic_year: 'academic_year',
  course: 'course',
  lecture: 'lecture',
  attendance: 'attendance',
  schedule: 'schedule',
  subject: 'subject',
  teacher_subjects: 'teacher_subjects',
  teacher: 'teacher',
  grade: 'grade',
  user_grades: 'user_grades',
  enrollment: 'enrollment',
  academic_performance: 'academic_performance'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
