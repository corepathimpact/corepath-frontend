import React from "react";
import RequireAuth from "../components/auth/RequireAuth";
import RequireRaeAdmin from "../components/auth/RequireRaeAdmin";
import RaeAdminShell from "./rae-admin/RaeAdminShell";

export default function RaeAdmin() {
  return (
    <RequireAuth>
      <RequireRaeAdmin>
        <RaeAdminShell />
      </RequireRaeAdmin>
    </RequireAuth>
  );
}


