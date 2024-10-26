/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // Create roles
  const superAdminRole = await prisma.role.create({
    data: {
      name: "SUPER_ADMIN",
      description: "Super-Administrator role",
    },
  });

  const adminRole = await prisma.role.create({
    data: {
      name: "ADMIN",
      description: "Administrator role",
    },
  });

  const userRole = await prisma.role.create({
    data: {
      name: "USER",
      description: "Regular user role",
    },
  });

  // Create permissions
  const permissions = [
    // Lecture permissions
    { name: "create:lecture", description: "Can create lectures" },
    { name: "read:lecture", description: "Can read lectures" },
    { name: "update:lecture", description: "Can update lectures" },
    { name: "delete:lecture", description: "Can delete lectures" },

    // Schedule permissions
    { name: "create:schedule", description: "Can create schedules" },
    { name: "read:schedule", description: "Can read schedules" },
    { name: "update:schedule", description: "Can update schedules" },
    { name: "delete:schedule", description: "Can delete schedules" },

    // Subject permissions
    { name: "create:subject", description: "Can create subjects" },
    { name: "read:subject", description: "Can read subjects" },
    { name: "update:subject", description: "Can update subjects" },
    { name: "delete:subject", description: "Can delete subjects" },

    // Class Level permissions
    {
      name: "create:class_level",
      description: "Can create class level records",
    },
    { name: "read:class_level", description: "Can read class level records" },
    {
      name: "update:class_level",
      description: "Can update class level records",
    },
    {
      name: "delete:class_level",
      description: "Can delete class level records",
    },

    // Teacher permissions
    { name: "create:teacher", description: "Can create teacher records" },
    { name: "read:teacher", description: "Can read teacher records" },
    { name: "update:teacher", description: "Can update teacher records" },
    { name: "delete:teacher", description: "Can delete teacher records" },

    // User permissions
    { name: "create:user", description: "Can create user records" },
    { name: "read:user", description: "Can read user records" },
    { name: "update:user", description: "Can update user records" },
    { name: "delete:user", description: "Can delete user records" },

    // Role permissions
    { name: "create:role", description: "Can create role records" },
    { name: "read:role", description: "Can read role records" },
    { name: "update:role", description: "Can update role records" },
    { name: "delete:role", description: "Can delete role records" },

    // Permission permissions
    { name: "create:permission", description: "Can create permission records" },
    { name: "read:permission", description: "Can read permission records" },
    { name: "update:permission", description: "Can update permission records" },
    { name: "delete:permission", description: "Can delete permission records" },

    // Academic Performance permissions
    {
      name: "create:academic_performance",
      description: "Can create academic performance records",
    },
    {
      name: "read:academic_performance",
      description: "Can read academic performance records",
    },
    {
      name: "update:academic_performance",
      description: "Can update academic performance records",
    },
    {
      name: "delete:academic_performance",
      description: "Can delete academic performance records",
    },
  ];

  const createdPermissions = await Promise.all(
    permissions.map((permission) =>
      prisma.permission.create({
        data: permission,
      })
    )
  );

  // Assign permissions to roles
  const superAdminPermissions = createdPermissions.map((permission) => ({
    role_id: superAdminRole.id,
    permission_id: permission.id,
  }));

  const adminPermissions = createdPermissions
    .filter(
      (permission) =>
        !permission.name.startsWith("delete:") &&
        !permission.name.includes(":user") &&
        !permission.name.includes(":role") &&
        !permission.name.includes(":permission")
    )
    .map((permission) => ({
      role_id: adminRole.id,
      permission_id: permission.id,
    }));

  // Add read:user permission for admin
  adminPermissions.push({
    role_id: adminRole.id,
    permission_id: createdPermissions.find((p) => p.name === "read:user")!.id,
  });

  await prisma.role_permissions.createMany({
    data: [...superAdminPermissions, ...adminPermissions],
  });

  // Create users
  const createUser = async (role: typeof superAdminRole) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return await prisma.users.create({
      data: {
        name: `${firstName} ${lastName}`,
        email: faker.internet.email({ firstName, lastName }),
        user_roles: {
          create: {
            role_id: role.id,
          },
        },
      },
    });
  };

  const superAdmin = await createUser(superAdminRole);
  const admin = await createUser(adminRole);
  const regularUser = await createUser(userRole);

  // Create class levels
  const classLevels = ["Freshman", "Sophomore", "Junior", "Senior"];
  const createdClassLevels = await Promise.all(
    classLevels.map((name) =>
      prisma.class_level.create({
        data: { name, description: `${name} year` },
      })
    )
  );

  // Create subjects
  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
  ];
  const createdSubjects = await Promise.all(
    subjects.map((subject) =>
      prisma.subject.create({
        data: { name: subject },
      })
    )
  );

  // Create teachers
  const createTeacher = async (subjectId: number) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return await prisma.teacher.create({
      data: {
        name: `${firstName} ${lastName}`,
        email: faker.internet.email({ firstName, lastName }),
        teacher_subjects: {
          create: {
            subject_id: subjectId,
            is_primary: true,
          },
        },
      },
    });
  };

  const teachers = await Promise.all(
    createdSubjects.map((subject) => createTeacher(subject.id))
  );

  // Create academic years
  const academicYears = [
    {
      name: "2023-2024 Regular",
      type: "REGULAR",
      start_date: new Date("2023-09-01"),
      end_date: new Date("2024-06-30"),
    },
    {
      name: "2023-2024 Winter",
      type: "WINTER",
      start_date: new Date("2023-12-01"),
      end_date: new Date("2024-02-28"),
    },
  ];

  const createdAcademicYears = await Promise.all(
    academicYears.map((year) => prisma.academic_year.create({ data: year }))
  );

  // Create courses
  const createCourse = (
    subjectId: number,
    teacherId: number,
    classLevelId: number,
    academicYearId: number
  ) => {
    return prisma.course.create({
      data: {
        subject_id: subjectId,
        teacher_id: teacherId,
        class_level_id: classLevelId,
        academic_year_id: academicYearId,
      },
    });
  };

  const courses = await Promise.all(
    createdSubjects.flatMap((subject, index) =>
      createdClassLevels.flatMap((classLevel) =>
        createdAcademicYears.map((academicYear) =>
          createCourse(
            subject.id,
            teachers[index].id,
            classLevel.id,
            academicYear.id
          )
        )
      )
    )
  );

  // Create schedules and lectures
  for (const course of courses) {
    const schedule = await prisma.schedule.create({
      data: {
        course_id: course.id,
        class_level_id: course.class_level_id,
        date: faker.date.future(),
        start_time: faker.date.future(),
        end_time: faker.date.future(),
      },
    });

    await prisma.lecture.create({
      data: {
        schedule_id: schedule.id,
        topic: faker.lorem.words(3),
        subjectId: course.subject_id,
        teacherId: course.teacher_id,
      },
    });
  }

  // Create enrollments and academic performances
  for (const course of courses) {
    const students = await Promise.all(
      Array.from({ length: 5 }, () => createUser(userRole))
    );

    for (const student of students) {
      await prisma.enrollment.create({
        data: {
          student_id: student.id,
          course_id: course.id,
        },
      });

      await prisma.academic_performance.create({
        data: {
          student_id: student.id,
          course_id: course.id,
          score: faker.number.float({ min: 0, max: 100, precision: 0.1 }),
          grade: faker.helpers.arrayElement(["A", "B", "C", "D", "F"]),
          term: faker.helpers.arrayElement([
            "Midterm",
            "Final",
            "Q1",
            "Q2",
            "Q3",
            "Q4",
          ]),
        },
      });
    }
  }

  console.log("Database has been seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

console.log("Seed script completed.");
