// =======================================================================
// SESSION DETAILS PAGE — PROTECTED ZOOM LINK PAGE
// =======================================================================

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSessionDetails } from "../api/studentApi";
import LockedSession from "../components/StudentDashboard/LockedSession";

export default function SessionDetails() {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);
  const [locked, setLocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSession();
  }, []);

  const loadSession = async () => {
    try {
      const response = await getSessionDetails(sessionId);
      setSession(response.data);
      setLoading(false);
    } catch (error) {
      setLocked(true);
      setErrorMsg(
        error.response?.data?.message ||
          "You are not permitted to access this session."
      );
      setLoading(false);
    }
  };

  if (loading) return <p className="p-6">Loading session details...</p>;

  if (locked)
    return <LockedSession message={errorMsg} sessionId={sessionId} />;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{session.title}</h1>

      <p className="text-gray-700 mb-3">
        <strong>Date:</strong>{" "}
        {new Date(session.date).toLocaleString()}
      </p>

      <div className="mt-6 p-4 border rounded bg-green-50 shadow">
        <p className="mb-3 text-lg font-semibold">
          Your Zoom Link:
        </p>

        <a
          href={session.zoomLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded inline-block"
        >
          Join Session
        </a>
      </div>

      <div className="mt-6">
        <Link
          to="/dashboard"
          className="text-blue-600 underline"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
