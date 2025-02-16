"use server"; // Ini adalah Server Component

import { GetUsers } from "@/lib/data";
import UserTable from "@/components/UserTable";

const UserTableWrapper = async () => {
  const users = await GetUsers(); // Ambil data dari Prisma (server)
  return <UserTable users={users || []} />;
};

export default UserTableWrapper;
