import type { FaqTableData } from "@/lib/home-content";

type Props = { tableData: FaqTableData };

export function ComparisonTable({ tableData }: Props) {
  const { headers, rows } = tableData;
  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-ink/[0.09]">
        <table className="w-full min-w-[400px] text-[0.9375rem]">
          <thead>
            <tr className="border-b border-ink/[0.09] bg-sand">
              {headers.map((h) => (
                <th
                  key={h}
                  className="px-5 py-3.5 text-left font-semibold text-ink/80 first:rounded-tl-xl last:rounded-tr-xl"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/[0.06]">
            {rows.map(([col1, col2], i) => (
              <tr key={i} className="bg-paper even:bg-sand/40">
                <td className="px-5 py-3.5 leading-snug text-ink/75">{col1}</td>
                <td className="px-5 py-3.5 leading-snug text-ink/75">{col2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
