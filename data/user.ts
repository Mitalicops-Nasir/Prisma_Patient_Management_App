import { db } from "@/lib/db";
import { parseStringify } from "@/lib/utils";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.patient.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};


export const getUserById = async (id: string) => {
    try {
      const user = await db.patient.findUnique({ where: { id } });
  
      return parseStringify(user);
    } catch {
      return null;
    }
  };
  