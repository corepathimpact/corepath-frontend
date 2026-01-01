import React from "react";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";
import { mockUserProfile } from "./mock/backofficeMock";

function DetailRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 border-b border-slate-100">
      <div className="text-xs uppercase tracking-widest font-bold text-slate-500">{label}</div>
      <div className="text-sm font-semibold text-slate-900 text-right">{value}</div>
    </div>
  );
}

export default function AccountOverviewPage() {
  const u = mockUserProfile;

  return (
    <div>
      <SectionHeader title="Account Overview" subtitle="Profile layout (mock placeholders only)." />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <Card>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-slate-200 border border-slate-300" />
              <div>
                <div className="text-lg font-extrabold text-slate-900">{u.fullName}</div>
                <div className="text-sm text-slate-600">{u.title}</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-8">
          <Card title="Account Details" subtitle="Do not hardcode business logic; values come from APIs later.">
            <div className="space-y-1">
              <DetailRow label="User ID" value={u.userId} />
              <DetailRow label="Enrollment Date" value={u.enrollmentDate} />
              <DetailRow label="Phone Number" value={u.phoneNumber} />
              <DetailRow label="Location" value={u.location} />
              <DetailRow label="Sponsor" value={u.sponsor} />
              <DetailRow label="PAG Coach" value={u.pagCoach} />
              <DetailRow label="Referral Link" value={u.referralLink} />
              <DetailRow label="Email" value={u.email} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}


