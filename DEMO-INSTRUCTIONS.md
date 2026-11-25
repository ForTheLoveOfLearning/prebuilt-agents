# Facilitator Guide — Copilot Follow-Along: Pre-Built Agents

**Site:** https://fortheloveoflearning.github.io/prebuilt-agents/
**Classification:** Public · **Fictional company:** Contoso Home & Auto · **Loyalty program:** Compass Rewards (fictitious)
**Audience:** store and head-office teams who are new or light Copilot users
**Agents:** Researcher, Analyst, Prompt Coach, Idea Coach, Writing Coach, Career Coach, Learning Coach

> Everything on this site is fictitious. Do not use customer or employee confidential information. Agent availability depends on license and admin settings; check before the session.

## Before the session

1. Open the site and download the 5 practice files. Save the 3 CSV files to OneDrive (or open them in Excel and save as .xlsx).
2. In the Microsoft 365 Copilot app, open **Agents** and confirm you can see Researcher and Analyst. Add the five coach agents from **All agents** if they are not pinned.
3. Run R1, A1 and W1 once yourself. Researcher and Analyst can take several minutes. Keep finished results open as a backup.
4. Ask learners to pick their role in the role bar so they see the prompts that fit their work.

## Run of show — 3 hours

| Time | Segment | Prompts | Notes |
|---|---|---|---|
| 0:00 | Welcome, scenario, role picker | — | Show the "Which agent when?" table |
| 0:10 | Warm-up in Copilot Chat | 0.1, 0.2 | Ask: which element changed the result most? |
| 0:25 | Prompt Coach | PC1, PC2 | Learners improve a real prompt from their week |
| 0:45 | Researcher | R1 or role prompt, R6 | Start a run, then talk while it works |
| 1:15 | Break (10 min) | | |
| 1:25 | Analyst | A1, then A2 to A6 by role | Show "view code"; check one number by hand |
| 1:55 | Idea Coach | I1 or I2 | Rank ideas by impact and effort |
| 2:10 | Break (10 min) | | |
| 2:20 | Writing Coach | W1, then W2 to W5 by role | Feedback before rewrite |
| 2:35 | Career Coach and Learning Coach | C1 or C3; L1 or L3 | Personal productivity; remind about privacy |
| 2:50 | Capstone demo and close | Capstone; day-one habits | Learners pick one agent for this week |

## Run of show — 90 minutes

| Time | Segment | Prompts |
|---|---|---|
| 0:00 | Scenario + warm-up | 0.1, 0.2 |
| 0:10 | Prompt Coach | PC1 |
| 0:20 | Researcher | R1 (start it running) |
| 0:30 | Analyst | A1, A3 |
| 0:50 | Idea Coach + Writing Coach | I1, W1 |
| 1:10 | Career Coach or Learning Coach | C1 or L3 |
| 1:20 | Day-one habits + questions | — |

## Answer key (practice data)

AI output varies, so expect answers close to these values, not identical.

**Monthly KPIs file (288 clean rows, 24 months: Nov 2024 to Oct 2026)**

- Data quality traps: 3 rows have Region "west" in lowercase; 2 blank AppActiveMembers values (Central); 1 exact duplicate row (2025-05 Central Trailblazer).
- Active members: 3,420,119 in Oct 2026 vs 3,298,199 in Oct 2025 (+3.7%).
- Member sales, last 12 months: $3,149.2M vs $3,102.8M prior 12 months (+1.5%).
- Redemption rate, first 6 vs last 6 months: North 61.8% → 49.4%; West 69.9% → 69.8%; Central 70.5% → 72.5%; East 67.0% → 68.6%.
- Unredeemed Compass Cash, last 12 months: $12.0M total; $1.8M in North.
- Capstone sizing: North issued $3.7M in the last 12 months at a 51.3% redemption rate vs 70.3% for other regions. Matching the others would mean about $0.7M more redeemed.
- Churn Feb-Mar 2026 vs Feb-Mar 2025: East +134.8%; other regions +5.4% to +7.0%. The timing lines up with the February 1, 2026 program change (hypothesis, not proof).
- Tiers (Oct 2026 members / last-12-month sales): Explorer 81.3% / 41.5%; Trailblazer 14.3% / 32.5%; Summit 4.4% / 26.0%.
- App-active members: 45.3% of active members in Oct 2026.

**Campaigns file (16 campaigns)** — ROI = (IncrementalSales − CampaignCost − CompassCashBonusIssued) ÷ (CampaignCost + CompassCashBonusIssued)

- Top 3: Winter Tire Ready (2025-10) 266.2%, Winter Tire Ready (2026-10) 249.3%, Spring Tire Swap Double Cash (2026-04) 227.6%.
- Bottom 3: Holiday Mega Bonus 10x 13.1%, Partner Fuel Bonus 8.0%, Win-Back: Inactive 12+ Months -28.6%.
- Average ROI: App-only campaigns 185.3% vs other channels 135.4%.

**Member feedback file (60 comments)**

- NPS: 17 promoters, 35 detractors → NPS -30. Remind learners this is a small comment sample, not the full membership.
- Lowest-scoring themes: Missing points (4.0/10, 5 comments), Expiry confusion (4.3/10, 6 comments).
- Highest-scoring themes: App experience and Staff helpfulness (both 7.4/10).
- By channel: In-store kiosk 5.4 (13), Email survey 4.6 (16), App survey 6.5 (22), Contact centre 7.3 (9).

**Writing Coach draft email (W1)** — issues to expect: a 15-word subject line, passive voice, jargon ("stakeholders", "optimizing"), key facts buried in paragraph 2, "18 month" and "more then" errors, triple exclamation marks, apology that sounds defensive, no clear call to action.

**Program guide facts (L3, L5, W3)** — Trailblazer $1,000+ and Summit $3,000+ rolling 12-month spend; minimum redemption $10; inactive after 18 months (was 24); fuel partner earn 1.5% (was 2.0%); no tier grace period; in-store missing Compass Cash can be added up to 30 days after purchase.

## Discussion questions

- After Researcher: what did it find that a quick Copilot Chat answer would have missed?
- After Analyst: did you check the code or one number? What did you learn?
- After the coaches: which coach would you use this week, and for what task?
- Close: which prompt element changed your results most: Goal, Context, Source or Expectations?

## Troubleshooting

- **An agent is missing:** select All agents and add it. If it isn't there, your administrator may not have enabled it, or your license may not include it.
- **Researcher or Analyst is slow:** that's expected; they reason over several steps. Start the run, then teach while it works.
- **The file won't attach:** open the file and paste its text, or save it to OneDrive and type / to reference it.
- **Usage limits:** Researcher and Analyst can have usage limits depending on license. Pair learners up if needed.
