# Zuri Home advertising data

Synthetic input for Windsor.ai benchmark B8-31. There are 84 daily creative records covering September 9-22, 2026: three campaigns, six creatives and 14 complete days. This is a frozen fictional snapshot, not a live Meta Ads account or real customer data.

The baseline is September 9-15 and the comparison period is September 16-22. Currency is USD and reporting dates use Africa/Nairobi. Purchases use the same 7-day-click attribution definition in both periods; all rows are complete for this test. Source grain is one date, account, campaign and creative. Never add a campaign rollup to its underlying creative rows.

Fields include stable campaign and creative IDs, names, spend, impressions, clicks, purchases and purchase revenue. Calculate CPA as total spend divided by total purchases, CTR as clicks divided by impressions, conversion rate as purchases divided by clicks, and ROAS as revenue divided by spend. Do not average row-level ratios.

- [Daily creative data CSV](creative-daily.csv)
- [Same data as JSON](creative-daily.json)

This dataset supports campaign aggregation and creative-level investigation. It contains no audience-frequency, auction, site-error or tracking-change logs, so those cannot establish a definitive underlying cause. Distinguish the measured driver from possible explanations requiring more evidence.
