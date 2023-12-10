import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export const revalidate =0


export default function NewAula(){
    
    async function saveAula(){
        "use server"
        /*const name = formData.get("name") as string;
        const telefone = formData.get("telefone") as string;
        console.log(name, telefone)


        await sql`INSERT INTO aula (name, telefone) VALUES(${name}, ${telefone})`*/
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className="text-black text-center text-4xl">Cadastrar Aulas</h1>
            <form>
                <input type="text" name="name" placeholder="Digite o nome do professor"/><br/><br/>
                <input type="text" name="materia" placeholder="Digite a materia"/> <br/><br/>
                <br/>
                <button formAction={saveAula} className="text-black">Salvar</button>
            </form>
        </div>


    )
}

