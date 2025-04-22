
export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50 text-gray-800 font-sans">
      <header className="bg-black text-yellow-400 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <h1 className="text-2xl font-bold">Bee</h1>
        <nav className="space-x-4 text-sm">
          <a href="#portfolio">Portfólio</a>
          <a href="#sobre">Sobre</a>
          <a href="#agende">Agendamentos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="bg-yellow-100 text-center py-20 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Seja uma boa abelha!</h2>
        <p className="italic text-xl md:text-2xl">Mas e esse ferrão? — Eu disse boa, não indefesa.</p>
        <button className="mt-8 bg-black text-yellow-300 px-6 py-2 rounded-full shadow hover:scale-105 transition">
          Agende seu horário
        </button>
      </section>

      <section id="portfolio" className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10">Portfólio</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-yellow-200 rounded-xl shadow-inner"></div>
          ))}
        </div>
      </section>

      <section id="sobre" className="py-16 px-6 bg-yellow-100">
        <h3 className="text-3xl font-bold text-center mb-6">Sobre a Bee</h3>
        <p className="max-w-2xl mx-auto text-center text-lg">
          Body piercer com atitude, estilo e carinho. Atendendo com segurança em Mem Martins & Sintra.
        </p>
      </section>

      <section id="agende" className="py-16 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6">Agendamentos</h3>
        <p className="mb-4">Chama no WhatsApp ou Instagram e garanta seu horário!</p>
        <div className="space-x-4">
          <a href="https://wa.me/" target="_blank" className="bg-green-600 text-white px-6 py-2 rounded-full">WhatsApp</a>
          <a href="https://instagram.com/" target="_blank" className="bg-pink-600 text-white px-6 py-2 rounded-full">Instagram</a>
        </div>
      </section>

      <section className="py-16 px-6 bg-yellow-50">
        <h3 className="text-3xl font-bold text-center mb-8">O que dizem as abelhas?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {['"Amei meu piercing! Super profissional."', '"Volto sempre. Atendimento incrível."', '"Muito cuidadosa e estilosa!"'].map((quote, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <p className="italic text-center">{quote}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contato" className="bg-black text-yellow-400 text-center py-6 text-sm">
        <p>© 2025 Bee | Piercings em Mem Martins & Sintra</p>
        <p>Instagram: @seuuser</p>
      </footer>
    </main>
  );
}
