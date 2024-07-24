import NextAuth from "next-auth";

import { getUserById } from "./data/user";
import { db } from "@/lib/db";

import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import authConfig from "./auth.config";
import { Gender, UserRole } from "@prisma/client";
import { getAccountByUserId } from "./data/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.patient.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      //Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      //prevent sign in without email verfication
      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );

        console.log({ twoFactorConfirmation });

        if (!twoFactorConfirmation) return false;

        //delete two factor confirmation for next sign in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      return true;
    },

    async session({ token, session }) {
      console.log({ sessionToken: token });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      if (session.user) {
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.phone = token.phone as string;
        session.user.insurancePolicyNumber =
          token.insurancePolicyNumber as string;
        session.user.address = token.address as string;
        session.user.birthDate = token.birthDate as Date;
        session.user.gender = token.gender as Gender | undefined;
        session.user.currentMedication = token.currentMedication as string;
        session.user.allergies = token.allergies as string;
        session.user.emergencyContactName =
          token.emergencyContactName as string;
        session.user.emergencyContactNumber =
          token.emergencyContactNumber as string;
        //session.user.identificationDocument =
        //token.identificationDocuments as File;
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
        session.user.identificationNumber =
          token.identificationNumber as string;
        session.user.insuranceProvider = token.insuranceProvider as string;
        session.user.occupation = token.occupation as string;
        session.user.privacyConsent = token.privacyConsent as boolean;
        session.user.primaryPhysician = token.primaryPhysician as string;
        session.user.pastMedicalHistory = token.pastMedicalHistory as string;
        session.user.role = token.role as UserRole;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.phone = existingUser.phone;
      token.insurancePolicyNumber = existingUser.insurancePolicyNumber;
      token.address = existingUser.address;
      token.birthDate = existingUser.birthDate;
      token.gender = existingUser.gender;
      token.currentMedication = existingUser.currentMedication;
      token.allergies = existingUser.allergies;
      token.emergencyContactName = existingUser.emergencyContactName;
      token.emergencyContactNumber = existingUser.emergencyContactNumber;
      //token.identificationDocument = existingUser.identificationDocumentId;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      token.identificationNumber = existingUser.identificationNumber;
      token.insuranceProvider = existingUser.insuranceProvider;
      token.occupation = existingUser.occupation;
      token.privacyConsent = existingUser.privacyConsent;
      token.primaryPhysician = existingUser.primaryPhysician;
      token.pastMedicalHistory = existingUser.pastMedicalHistory;
      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
