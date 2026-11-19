import Header from '../components/Header'
import CardLivros from '../components/CardLivros'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">
          Livros disponíveis
        </h2>

        <CardLivros
          titulo="1984"
          autor="George Orwell"
          categoria="Ficção"
        />

        <CardLivros
          titulo="O Senhor dos Anéis"
          autor="J.R.R. Tolkien"
          categoria="Fantasia"
        />

        <CardLivros
          titulo="Dom Casmurro"
          autor="Machado de Assis"
          categoria="Romance"
        />

        <CardLivros
          titulo="O Pequeno Príncipe"
          autor="Antoine de Saint-Exupéry"
          categoria="Literatura"
        />
      </main>
    </div>
  )
}

export default App