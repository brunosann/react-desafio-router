import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../Head'

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null)

  React.useEffect(() => {
    (async function getProdutos() {
      const data = await fetch("https://apiranek.devteixeira.com")
      const json = await data.json()
      setProdutos(json.data)
    })()
  }, [])

  if (!produtos) return <p className="container loading"></p>

  const urlPhoto = 'https://apiranek.devteixeira.com/uploads/'

  return (
    <main className="container">
      <Head />
      <div className="produtos">
        {produtos.map(produto => (
          <article key={produto.id_produto} className="card">
            <Link to={`produto/${produto.id_produto}`}>
              <img src={urlPhoto+produto.fotos[0].src} alt={`imagem do ${produto.fotos[0].titulo}`}/>
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
