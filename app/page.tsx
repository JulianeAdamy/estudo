import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <h1 className="text-center text-xl"> Escola</h1>
      <a href="/aula">cadastro </a><br />
      <a href="/aula/new/">listar</a>
    </div>


  )
}
