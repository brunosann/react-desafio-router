import React from 'react'
import { useParams } from 'react-router-dom'

const Produto = () => {
  const params = useParams()

  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    (async function getProduto() {
      const data = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      const json = await data.json()
      setProduto(json)
    })()
  }, [params])

  if (!produto) return <div className="container loading"></div>

  return (
    <main className="container">
      <div className="produto">
        <div className="image">
          {produto.fotos.map(foto => <img key={foto.titulo} src={foto.src} alt={`imagem do ${foto.titulo}`}/> )}
        </div>
        <div className="info">
          <h1>{produto.nome}</h1>
          <p className="price">R$ {Number(produto.preco).toFixed(2).replace('.', ',')}</p>
          <p className="description">{produto.descricao}</p>
        </div>
      </div>
    </main>
  )
}

export default Produto
