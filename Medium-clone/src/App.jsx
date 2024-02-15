import Content from './components/content';
import Footer from './components/footer';
import Image from './components/image';
import Tags from './components/tags';
import User from './components/user';
import Header from './layout';
import articleData  from './utils/file.json'

const App = () => {

  const data = articleData;

  return (
    <main>
      <section className='w-full h-screen bg-backgroundColor'>
        <Header/>
        <div className='flex flex-col items-center justify-center'>
          <section className='w-[730px]'>
            <h1 className='text-5xl text-text font-bold pb-11 mt-[120px]'>{data.title}</h1>
            <User 
              userImage={data.userData.userImage}
              username={data.userData.name}
              globantImage={data.userData.imageGlobant}
              publishedBy={data.userData.publishedBy}/>
          </section>
          <section className='w-[730px]'>
            <Image backgroundImage={data.userData.backgroundUrl} alt={data.userData.photoCredit}/>
            <Content 
              text={data.mainText}
              secondText={data.secondaryText}
              techniquesCovered={
                data.techniquesCovered.map((item) =>(
                  <li key={item}>
                    {item}
                  </li>
                ))
              }
              moreTechniquesInfo={data.moreTechniquesInfo}
              title={data.debouncing.tile}
              description={data.debouncing.description}
              useCases={data.debouncing.useCases}
              secondTitle={data.virtualization.title}
              descriptionTwo={data.virtualization.description}
              image={data.virtualization.imageUrl}
            /> 
            <Tags  tags={data.tags}/>
          </section>
        </div>
        <Footer 
          globantImage={data.userData.imageGlobant}
          userImage={data.userData.userImage}
          username={data.userData.name}
          ulrLinked={data.userData.urlLinked}
          cardImage={data.targetData.urlImage}
          cardTitle={data.targetData.title}
          cardDescription={data.targetData.description}
          targetDate={data.targetData.created}
          contacts={data.contact}

        />
        
      </section>
    </main>
  )
}

export default App
