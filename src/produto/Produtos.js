import React from 'react'
import { Link } from 'react-router-dom'

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null)

  React.useEffect(() => {
    (async function getProdutos() {
      const data = await fetch("https://ranekapi.origamid.dev/json/api/produto")
      const json = await data.json()
      setProdutos(json)
    })()
  }, [])

  if (!produtos) return <p className="container loading"></p>

  return (
    <main className="container">
      <div className="produtos">
        {produtos.map(produto => (
          <article key={produto.id} className="card">
            <Link to={`produto/${produto.id}`}>
              <img src={produto.fotos[0].src} alt={`imagem do ${produto.fotos[0].titulo}`}/>
            </Link>
            <h2>{produto.nome}</h2>
          </article>
        ))}
      </div>
      <p className="copy">Desenvolvido por Bruno Teixeira</p>
    </main>
  )
}

export default Produtos
