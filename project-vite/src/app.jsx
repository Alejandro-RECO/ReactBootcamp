import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

export function App (){
    const formatUserName = (userName) =>`@${userName}`  

    return(  
        <section className='App'>
            {
                users.map(user =>{
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
