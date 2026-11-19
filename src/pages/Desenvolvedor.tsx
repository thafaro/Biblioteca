export default function Desenvolvedor(){
    return (
        <div className="min-h-screen bg-gray-100">

      <header className="bg-[#0F172A] text-white p-8 text-center">
        <h1 className="text-3xl font-bold">
          Desenvolvedor
        </h1>
        <p className="mt-2 text-gray-300">
          Conheça o criador da Biblioteca
        </p>
      </header>

      <main className="max-w-4xl mx-auto p-6">

        {/* Apresentação */}
        <section className="bg-white p-6 rounded-xl shadow mb-6">

  <div className="flex flex-col md:flex-row items-center gap-6">

    {/* Foto do desenvolvedor */}
    <img
      src="/foto.jpg"
      alt="foto.jpg"
      className="w-40 h-40 rounded-full object-cover border-4 border-blue-600"
    />

    {/* Informações */}
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Quem sou eu
      </h2>

      <p className="text-gray-600">
        Olá! Meu nome é Gustavo P.
        Sou estudante de programação e
        desenvolvedor deste projeto Biblioteca.
      </p>
    </div>

  </div>

</section>

        {/* Habilidades */}
        <section className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Minhas habilidades
          </h2>

          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript",
              "React", "Java", "SQL"].map(
                (habilidade) => (
                  <span
                    key={habilidade}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg"
                  >
                    {habilidade}
                  </span>
                )
              )}
          </div>
        </section>

        {/* Contato */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            Contato
          </h2>

          <p className="text-gray-600">
            Entre em contato com o desenvolvedor.
          </p>
        </section>

        <a
          href="/"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Voltar para Biblioteca
        </a>

      </main>
    </div>
    )
}