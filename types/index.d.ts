import { Patient } from "@/next-auth";
import { AppointmentStatus, Gender } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type Appointment = {
  id: string;
  patient: Patient;
  schedule: Date;
  status: AppointmentStatus;
  primaryPhysician?: string;
  reason?: string;
  note?: string;
  patientId?: string;
  cancellationReason?: string | null;
};

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

//declare type Gender = "Male" | "Female" | "Other";
declare type Status = "pending" | "scheduled" | "cancelled";

//export type CreateUserParams = DefaultSession["user"] & {
// name: string;
//email: string;
//phone: string;
//password: string;
//role?: UserRole;
//isTwoFactorEnabled?: boolean;
//};

declare interface User extends Patient  {
  id: string;
}

declare type CreateAppointmentParams = {
  patientId: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

//declare type UpdateAppointmentParams = {
//appointmentId: string;
//appointment: Appointment;
//patientId: string;
//type: string;
//};

type UpdateAppointmentParams = {
  appointmentId: string;
  patientId: string | null;
  appointment: {
    schedule: Date;
    reason?: string;
    note?: string;
    primaryPhysician?: string;
    status?: AppointmentStatus;
    cancellationReason?: string;
  };
  type: string;
};


declare interface getUserAppointments  {
  id: string | undefined;
}