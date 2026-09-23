# Windsor.ai B8-31: Zuri Home anomaly investigation

## Setup status

Connected and verified through Windsor.ai on September 23, 2026. Authenticated user: zz215@expert.micro1.ai, connectors team. File source account ID: 368. Dataset: zuri_home_b8_31. Windsor returned all 84 rows, and all 1,428 values matched the source CSV/JSON by date and creative ID. Campaign and creative identifiers and numeric metrics are available through the connector. This is preparation verification, not the scored test run.

The setup forms initially loaded slowly but became available, and the File account was successfully added. No campaigns, budgets, ads or real customer data were changed.

## Source data

[Data-only review folder](data/README.md) contains 84 daily creative records, across three campaigns and six creatives, for September 9-22, 2026. The same creative-grain data supports both campaign-level aggregation and creative drilldown. USD; Africa/Nairobi dates; consistent 7-day-click attribution; frozen complete synthetic snapshot. No real advertising spend or customers.

[CSV for import](https://raw.githubusercontent.com/wikimags/zuri-windsor-b8-31-zz215/main/data/creative-daily.csv)

Dataset name for Windsor: zuri_home_b8_31. The CSV URL is connected through Windsor's File source. The File connector is community supported; this tests Windsor querying connected synthetic campaign and creative data, not a native Meta Ads integration. It should be declared as such in the submission.

[File source connection](https://onboard.windsor.ai/connect?connector=file&client=CHATGPT&next=/app/file)

[Google Sheets alternative](https://onboard.windsor.ai/connect?connector=googlesheets&client=CHATGPT&next=/app/googlesheets) requires importing the CSV as a Sheet and sharing it as Viewer with the service account displayed by Windsor. That alternative has not been created or connected.

## Before evidence

- [Connected source screenshot](evidence/B8-31_Run1_Windsor_Before_ConnectedDataset_01.png)
- [Connector readback: all 84 records](evidence/windsor-query-result.json)
- [Discovered field IDs and types](evidence/windsor-field-definitions.json)
- [Full source-to-connector comparison](evidence/connector-verification.json)
- [Input counts and file hash](evidence/input-manifest.json)

For the scored run, use the Windsor connector to retrieve this data. Do not supply the expected calculations as model input or replace connector queries with local/GitHub CSV analysis. For Run 2, use the same unchanged dataset and preserve the two runs' outputs separately. This is a read-only test; no reset of source data is needed unless a run changes it unexpectedly.

## Expected numerical findings

Account CPA rises from $17.14 to $29.63, up approximately 72.84%. Spend rises from $4,200 to $5,600, while purchases fall from 245 to 189. The comparison uses September 16-22 against September 9-15, equal seven-day periods.

Prospecting - Home Essentials (ZH-PROS) accounts for the entire $1,400 spend increase and all 56 lost purchases. Its CPA rises from $20 to $71.43. Within it, Room makeover video (ZH-C01) moves from $1,400 spend and 70 purchases to $2,800 spend and 14 purchases; creative CPA rises from $20 to $200. The other five creatives have unchanged weekly totals. Driver creative CTR falls from 2% to 0.5%, CPC rises from $1 to $4, and click-to-purchase conversion falls from 5% to 2%; CPM remains $20. These show the measured performance driver, but do not prove fatigue, a broken landing page or tracking failure. Those require additional evidence.

[Calculation evidence](evidence/expected-calculations.json). Keep the answer key out of the tested model's input. The model must retrieve and analyze the campaign and creative data through Windsor.

## Prompt

Use Windsor.ai to explain why Zuri Home's cost per purchase jumped in September 16-22, 2026 compared with September 9-15. Use the zuri_home_b8_31 test dataset, check the campaign and creative details, and show which changes drove the increase. Give me a short client-ready explanation with the key numbers, source references and what we should check next. Keep everything read-only and separate what the data proves from possible explanations.

## Expected result

I expect Codex to query the campaign and creative data through Windsor.ai and calculate that cost per purchase rose from $17.14 to $29.63, about 72.84%. It should identify Prospecting - Home Essentials and its Room makeover video creative as the driver, accounting for the full $1,400 increase in spend and 56 fewer purchases, while the other creatives stayed stable. It should explain the drop in click-through and purchase conversion rates, use totals rather than averaging daily ratios, and give a clear client-ready summary with source references and sensible next checks. It should not claim that fatigue or a tracking problem is proven, change any settings, or substitute a GitHub file read for a successful Windsor query.

## Keywords

Zuri Home; zuri_home_b8_31; campaign detail; creative detail; ZH-PROS; ZH-C01; weighted CPA; $17.14; $29.63; 72.84%; $1,400 extra spend; 56 fewer purchases; CTR; CPC; conversion rate; unchanged CPM; source references; read-only; cause versus hypothesis.

