import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";


export const revalidate =0


export default function NewAula(){

    async function saveaula(formData: FormData){
        "use server"
        const nome = formData.get("nome") as string;
        const telefone = formData.get("telefone") as string;
        await sql`INSERT INTO aula (nome, telefone) VALUES(${nome}, ${telefone})`
        console.log("Acessou a função")
    }
    return (
        <div>
        <h1 className="text-white text-center text-4xl">Listar Cursos</h1>
            <form>
                <input type="text" name="nome" placeholder="Digite o nome do curos"/><br/><br/>
                <input type="text" name="telefone" placeholder="Digite o telefone do curso"/> <br/><br/>
                <br/>
                
                <button  formAction={saveaula} className="text-lime-950">Salvar</button>
            </form>
            </div>

    )
}