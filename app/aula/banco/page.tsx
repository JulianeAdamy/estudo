import { sql } from "@vercel/postgres";

export default async function estudo({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from estudo`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.name} - {row.telefone}
        </div>
      ))}
    </div>
  );
}