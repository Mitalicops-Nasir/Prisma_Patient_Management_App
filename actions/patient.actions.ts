"use server";

import { parseStringify } from "@/lib/utils";
import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import { FirebaseApp } from "firebase/app";
import { PatientFormValidation, UserFormValidation } from "@/lib/validation";
import { uploadFile } from "@/lib/uploadFile";
import { Patient } from "@/next-auth";

export const registerUser = async (
  values: z.infer<typeof UserFormValidation>
) => {
  try {
    const validatedFields = UserFormValidation.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }

    const { email, password, name, phone } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return { error: "Email already in use!" };
    }
    //const patient = await db.patient.create({
    //data: {
    //name,
    //email,
    //phone,
    //password: hashedPassword,
    //},
    //});

    //const verificationToken = await generateVerificationToken(email);
    //await sendVerificationEmail(
    //verificationToken.email,
    //verificationToken.token
    //);

    //return { success: "User Created!" } && parseStringify(patient);
  } catch (error) {
    console.log({ error });
  }
};

export const getUser = async (userId: string) => {
  try {
    const patient = await db.patient.findUnique({ where: { id: userId } });

    return parseStringify(patient);
  } catch (error) {
    console.log({ error });
  }
};

export const getPatient = async (userId: string) => {
  try {
    const patient = await db.patient.findUnique({
      where: { id: userId },
    });

    return parseStringify(patient);
  } catch (error) {
    console.log({ error });
  }
};

export const registerPatient = async ({ ...patient }: Patient) => {
  try {
    const hashedPassword = await bcrypt.hash(patient.password, 10);

    const existingUser = await getUserByEmail(patient.email);

    if (existingUser) {
      return { error: "Email already in use!" };
    }

    //let fileUrl: string | null = null;

    //if (identificationDocument) {
    //fileUrl = await uploadFile(identificationDocument);
    //}

    const newPatient = await db.patient.create({
      data: {
        ...patient,
        id: patient.id ? patient.id : undefined,
        password: hashedPassword,
      },
    });

    const verificationToken = await generateVerificationToken(newPatient.email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "User Created!" } && parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new user", error);
    throw new Error("Failed to register user");
  }
};
