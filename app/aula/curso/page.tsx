import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function Listcurso() {
    async function deletecurso(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from curso where id=${id}`
        revalidatePath("/aula/curso")
    }
    const { rows } = await sql`SELECT * from curso`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de Cursos</h1>

            <table>
                <thead>
                    <tr> <td>name </td> <td>telefone</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((curso) => {
                            return (
                                <tr key={curso.id}><td>{curso.name}</td> <td>{curso.telefone}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={curso.id}/>   
                                    <button className="text-red-700" formAction={deletecurso}>Excluir</button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}