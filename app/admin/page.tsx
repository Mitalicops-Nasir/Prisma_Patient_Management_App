import { getRecentAppointmentsList } from "@/actions/appointment.actions";
import StatCard from "@/components/patient-manager-component/StatCard";
import { columns } from "@/components/Admin-Table/columns";
import { DataTable } from "@/components/Admin-Table/DataTable";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCancel, MdOutlinePendingActions } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { RoleGate } from "@/components/auth/role-gate";

const AdminPage = async () => {
  const appointment = await getRecentAppointmentsList();

  return (
    //<RoleGate allowedRole="Admin">
      <div className="mx-auto flex max-w-7xl flex-col space-y-14">
        <header className="admin-header">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/icons/logo.svg"
              width={32}
              height={162}
              alt="logo"
              className="h-8 w-fit"
            />
          </Link>

          <p className="text-16-semibold">Admin Dashboard</p>
        </header>

        <main className="admin-main">
          <section className="w-full space-y-4">
            <h1 className="header">Welcome👋</h1>
            <p className="text-dark-700">
              Start the day with managing new appointments
            </p>
          </section>

          <section className="admin-stat">
            <StatCard
              type="appointments"
              count={appointment.scheduledCount}
              label="Scheduled Appointments"
              icon={<RiCalendarScheduleFill />}
            />

            <StatCard
              type="pending"
              count={appointment.pendingCount}
              label="Pending Appointments"
              icon={<MdOutlinePendingActions />}
            />

            <StatCard
              type="cancelled"
              count={appointment.cancelledCount}
              label="Cancelled Appointments"
              icon={<MdCancel />}
            />
          </section>

          <DataTable columns={columns} data={appointment.documents} />
        </main>
      </div>
    //</RoleGate>
  );
};

export default AdminPage;
