import React from 'react'
import { useParams } from 'react-router-dom'
import Head from '../Head'

const Produto = () => {
  const params = useParams()

  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    (async function getProduto() {
      const data = await fetch(`https://apiranek.devteixeira.com/produto/${params.id}`)
      const json = await data.json()
      setProduto(json.data[0])
      console.log(json.data[0].fotos)
    })()
  }, [params])

  if (!produto) return <div className="container loading"></div>

  const urlPhoto = 'https://apiranek.devteixeira.com/uploads/'

  return (
    <main className="container">
      <Head title="| Produto" />
      <div className="produto">
        <div className="image">
          {produto.fotos.map(foto => <img key={foto.titulo} src={urlPhoto+foto.src} alt={`imagem do ${foto.titulo}`}/> )}
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
