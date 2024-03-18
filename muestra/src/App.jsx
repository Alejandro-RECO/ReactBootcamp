
function App() {

  const lenguajes = [
    {title: 'Python', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png'},
    {title: 'JavaScript', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
    {title: 'PHP', img:'https://www.php.net/images/meta-image.png'}
  ]

  return (
    <section className='flex flex-col items-center p-2 bg-indigo-50 h-screen'>
      <h1 className='uppercase text-xl font-bold pb-3 hover:bg-red-400'>Lenguajes mas utilizados</h1>
      <ul className='flex h-[300px] gap-x-5  '>
      {
        lenguajes.map((item) => (
          <li className=' w-[220px] flex flex-col items-center  p-4 bg-slate-300 rounded-md hover:shadow-lg transition-all text-lg uppercase text-start' key={item.title}>
            <h5 className="border-b-2 w-full mb-3">{item.title}</h5>
            <img className="bg-cover hover:shadow-lg" src={item.img} alt={item.title}/>
          </li>
        ))
      }
      </ul>
    </section>
  )
}

export default App
