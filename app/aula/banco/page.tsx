import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from estudo`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.name} - {row.telefone}
        </div>
      ))}
    </div>
  );
}