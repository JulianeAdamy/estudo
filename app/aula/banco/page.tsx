import { sql } from "@vercel/postgres";

export default async function utfpr({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from utfpr `;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.name}
        </div>
      ))}
    </div>
  );
}