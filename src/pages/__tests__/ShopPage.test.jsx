import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { BackofficeProvider } from "../../context/BackofficeContext";
import EligibilityBootstrap from "../../context/EligibilityBootstrap";
import App from "../../App";
import { setAuth } from "../../services/authStorage";
import { server } from "../../tests/mocks/server";

function renderAuthedAppAt(hashPath) {
  setAuth({ token: "test-token", user: { email: "test@corepathimpact.com" } });
  localStorage.setItem("accessToken", "test-access-token");
  window.location.hash = `#${hashPath}`;

  return render(
    <BackofficeProvider>
      <EligibilityBootstrap>
        <App />
      </EligibilityBootstrap>
    </BackofficeProvider>
  );
}

test("locks bot purchase CTA when eligibility.can_purchase_bot is false", async () => {
  server.use(
    rest.get(/.*\/vdp\/backoffice\/overview$/, (_req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          user: {
            id: "USR-10291",
            full_name: "Gibson Namasake",
            title: "Parent",
            country: "Kenya",
            language: "EN",
          },
          training: {
            values_covered: 7,
            total_values: 12,
            current_value: "Responsibility",
            practices_today: 5,
            total_practices_today: 6,
            logic_areas_covered: 6,
            total_logic_areas: 10,
          },
          performance: {
            apat_today: 78,
            apat_average: 72,
            consistency_band: "Good",
          },
          financials: {
            wallet_balance: 125.5,
            sources: ["Learning", "Impact Transfer"],
            locked: false,
          },
          impact: {
            its0: 1,
            its1: 3,
            its2: 5,
            its3: 8,
            its4: 13,
            active_members: 30,
            inactive_members: 5,
          },
          pag: {
            id: "PAG-8843",
            coach_name: "Jane Mwangi",
            members: 12,
            score_today: 74,
            score_week: 76,
            score_month: 73,
            wallet_balance: 42.3,
          },
          children: [
            {
              id: "CH-01",
              name: "Daniel",
              predisposition: "Blue",
              values_trained: 6,
              current_value: "Respect",
              progress_pct: 68,
              average_score: 72,
              common_card: "Star",
              struggled_area: "Time Management",
              values_remaining: 3,
            },
          ],
          eligibility: {
            can_withdraw: true,
            can_purchase_bot: false,
            max_bot_tier: null,
            reasons: ["Low APAT"],
          },
        })
      )
    )
  );

  renderAuthedAppAt("/shop");

  await waitFor(() => {
    expect(screen.getByText(/Bot purchase locked/i)).toBeInTheDocument();
    expect(screen.getByText("Low APAT")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Purchase Bot/i })).toBeDisabled();
  });
});


