import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function Listcurso() {
    async function deletecurso(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from curso where id=${id}`
        revalidatePath("/aula/curso/new")
    }
    const { rows } = await sql`SELECT * from curso`;
    return (
        <div>
            <h1 className="text-center">Lista de Curso</h1>

            <table>
                <thead>
                    <tr> <td>Cursos</td> </tr>
                </thead>
                <tbody>
                    {
                        rows.map((curso) => {
                            return (
                                <tr key={curso.id}><td>{curso.name}</td> <td>{curso.telefone}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={curso.id}/>   
                                    <button formAction={deletecurso}> Excluir</button>
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