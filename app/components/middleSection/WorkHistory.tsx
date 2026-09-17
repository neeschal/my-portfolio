import React from "react";
import WorkDetail from "./WorkDetail";

interface WorkProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const WorkHistory = ({ ref }: WorkProps) => {
  return (
    <div ref={ref} className="flex flex-col pb-32 2xl:pb-40 items-center">
      <h1 className="text-4xl font-bold mb-16">Work History</h1>
      <div className="w-full bg-component-background">
        <WorkDetail
          jobTitle="Lead Software Engineer"
          date="Aug 2023 - Current"
          company="Akkodis Consulting Co.Ltd."
          detail="Delivered end-to-end manufacturing software across data, UI, and infrastructure: built dashboards and real-time defect alerts from SMT mounter data, rebuilt a machine operator UI in Rust (Tauri), created an Android/Kotlin smartwatch app for real-time production-line alerts, built a full-stack certificate-issuance portal for secure machine communications, and developed a Rust-based image pipeline (S3 upload, labeling, training triggers) for production equipment."
        />
        <hr className="text-gray-200 mx-8" />
        <WorkDetail
          jobTitle="Senior Software Engineer"
          date="Nov 2021 - July 2023"
          company="EMD Co.Ltd."
          detail="Inventory & Warehouse Management Systems — Contributed to several inventory, warehouse, and asset-management systems (ASP.NET/C#, React, PostgreSQL/SQL Server) covering parts receiving/shipping, stock visibility, and user management."
        />
        <hr className="text-gray-200 mx-8" />
        <WorkDetail
          jobTitle="Junior Software Engineer"
          date="Apr 2020 - Oct 2021"
          company="Daiki Engineering Co.Ltd."
          detail="Developed projects spanning enterprise, automation, and healthcare domains: an ERP add-on (VB.NET, PostgreSQL, SQL Server) to generate sales and project-transfer data following a cloud migration, built end-to-end from design through testing; automation scripts (Python, VBA) to streamline repetitive Excel workflows and manage email filtering/forwarding; and an Android/Java smartwatch application that monitors patient vitals (temperature, blood pressure) and alerts nursing staff to abnormal readings."
        />
      </div>
    </div>
  );
};

export default WorkHistory;
