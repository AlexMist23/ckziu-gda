/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

// Helper to create model-based permissions
const createModelPermissions = (modelName: string) => [
  `read:${modelName}`,
  `create:${modelName}`,
  `edit:${modelName}`,
  `delete:${modelName}`,
];

// Define all models that need permissions
const models = [
  "Schedule",
  "Lesson",
  "Teacher",
  "Subject",
  "Attendance",
  "User",
  "Role",
  "Permission",
  "UserRole",
  "RolePermission",
  "DatabaseMetric",
];

async function main() {
  console.log("Starting database seed...");

  // Clean the database
  console.log("Cleaning existing data...");
  await prisma.$transaction([
    prisma.attendance.deleteMany(),
    prisma.lesson.deleteMany(),
    prisma.schedule.deleteMany(),
    prisma.subject.deleteMany(),
    prisma.teacher.deleteMany(),
    prisma.rolePermission.deleteMany(),
    prisma.userRole.deleteMany(),
    prisma.permission.deleteMany(),
    prisma.role.deleteMany(),
    prisma.user.deleteMany(),
    prisma.account.deleteMany(),
    prisma.session.deleteMany(),
    prisma.verificationToken.deleteMany(),
  ]);

  // Create all permissions
  console.log("Creating permissions...");
  const permissionsData = models.flatMap((model) =>
    createModelPermissions(model).map((permissionName) => ({
      name: permissionName,
      description: `Permission to ${permissionName.split(":")[0]} ${model}`,
    }))
  );

  await prisma.permission.createMany({
    data: permissionsData,
  });

  await prisma.permission.create({
    data: {
      name: "view:admin_panel",
      description: "Permission to view all admin routes",
    },
  });

  await prisma.permission.create({
    data: {
      name: "routes:admin",
      description: "Permission to view all admin routes",
    },
  });

  // Create roles
  console.log("Creating roles...");
  const superAdminRole = await prisma.role.create({
    data: {
      name: "SUPER_ADMIN",
      description: "Super Administrator with all permissions",
    },
  });

  const adminRole = await prisma.role.create({
    data: {
      name: "ADMIN",
      description: "Administrator with limited permissions",
    },
  });

  const userRole = await prisma.role.create({
    data: {
      name: "USER",
      description: "Regular user with minimal permissions",
    },
  });

  // Get all permissions
  const allPermissions = await prisma.permission.findMany();

  // Assign all permissions to SUPER_ADMIN
  console.log("Assigning permissions to SUPER_ADMIN...");
  await Promise.all(
    allPermissions.map((permission) =>
      prisma.rolePermission.create({
        data: {
          roleId: superAdminRole.id,
          permissionId: permission.id,
        },
      })
    )
  );

  // Assign non-auth permissions to ADMIN
  console.log("Assigning permissions to ADMIN...");
  const nonAuthPermissions = allPermissions.filter(
    (permission) =>
      !["User", "Role", "Permission", "UserRole", "RolePermission"].some(
        (authModel) => permission.name.includes(authModel)
      )
  );

  await Promise.all(
    nonAuthPermissions.map((permission) =>
      prisma.rolePermission.create({
        data: {
          roleId: adminRole.id,
          permissionId: permission.id,
        },
      })
    )
  );

  // Create Teachers
  console.log("Creating teachers...");
  const teachers = await Promise.all(
    Array.from({ length: 10 }, async () => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      return prisma.teacher.create({
        data: {
          first_name: firstName,
          second_name: lastName,
          email: faker.internet.email({
            firstName,
            lastName,
            provider: "school.com",
          }),
        },
      });
    })
  );

  // Create Subjects
  console.log("Creating subjects...");
  const subjectNames = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English Literature",
    "History",
    "Geography",
    "Computer Science",
    "Art",
    "Music",
  ];

  const subjects = await Promise.all(
    subjectNames.map((name) =>
      prisma.subject.create({
        data: { name },
      })
    )
  );

  // Create schedules for the next 2 weeks
  console.log("Creating schedules...");
  const schedules = await Promise.all(
    Array.from({ length: 10 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return prisma.schedule.create({
        data: { date },
      });
    })
  );

  // Create lessons
  console.log("Creating lessons...");
  const rooms = Array.from({ length: 10 }, (_, i) => `Room ${101 + i}`);

  await Promise.all(
    schedules.flatMap((schedule) =>
      Array.from({ length: 6 }, async () => {
        const startTime = new Date(schedule.date);
        startTime.setHours(faker.number.int({ min: 8, max: 16 }), 0, 0);
        const endTime = new Date(startTime);
        endTime.setHours(startTime.getHours() + 1);

        const subject = faker.helpers.arrayElement(subjects);
        const teacher = faker.helpers.arrayElement(teachers);

        return prisma.lesson.create({
          data: {
            start_time: startTime,
            end_time: endTime,
            subject: { connect: { id: subject.id } },
            teacher: { connect: { id: teacher.id } },
            schedule: { connect: { id: schedule.id } },
            room: faker.helpers.arrayElement(rooms),
          },
        });
      })
    )
  );

  // Create regular users with USER role
  console.log("Creating users...");
  const users = await Promise.all(
    Array.from({ length: 20 }, async () => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();

      return prisma.user.create({
        data: {
          name: `${firstName} ${lastName}`,
          email: faker.internet.email({ firstName, lastName }),
          userRoles: {
            create: {
              roleId: userRole.id,
            },
          },
        },
      });
    })
  );

  // Create random attendance records
  console.log("Creating attendance records...");
  const lessons = await prisma.lesson.findMany();

  await Promise.all(
    users.flatMap((user) =>
      faker.helpers
        .arrayElements(lessons, faker.number.int({ min: 5, max: 15 }))
        .map((lesson) =>
          prisma.attendance.create({
            data: {
              userID: user.id,
              lessonId: lesson.id,
              present: faker.datatype.boolean({ probability: 0.8 }),
            },
          })
        )
    )
  );

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
