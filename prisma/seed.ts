/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from "@/lib/prisma";
import { faker } from "@faker-js/faker";

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
        !permission.name.includes(":user")
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

  // Create schedules
  const schedules = await Promise.all(
    Array.from({ length: 5 }, (_, i) =>
      prisma.schedule.create({
        data: {
          date: faker.date.future(),
        },
      })
    )
  );

  // Create lectures
  const createLecture = (
    subjectId: number,
    teacherId: number,
    scheduleId: number
  ) => {
    const startTime = faker.date.future();
    const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
    return prisma.lecture.create({
      data: {
        subject_id: subjectId,
        teacher_id: teacherId,
        schedule_id: scheduleId,
        start_time: startTime,
        end_time: endTime,
      },
    });
  };

  await Promise.all(
    schedules.flatMap((schedule) =>
      createdSubjects.map((subject, index) =>
        createLecture(subject.id, teachers[index].id, schedule.id)
      )
    )
  );

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
