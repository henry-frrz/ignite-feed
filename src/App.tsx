import { Header, Profile, Post } from './components'
import { PostType } from './components/post'

import './styles/app.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO at @Rocketseat | Educador na Rocketseat',
    },
    content: `Sou especialista em JavaScript, com foco em React e Node.js. Apaixonado por codar, aprender novas ferramentas e tecnologias e estar sempre à frente do que há de mais atual no mercado de programação. Meu propósito é impulsionar devs para o seu próximo nível.`,
    publishedAt: new Date(),
  },

  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/orodrigogo.png',
      name: 'Rodrigo Gonçalves',
      role: 'Software Engineer | Educador na Rocketseat',
    },
    content: `Sou apaixonado em ensinar devs a criarem apps Android e iOs com React Native, e impulsiona devs iniciantes a evoluírem em programação. 🚀`,
    publishedAt: new Date(),
  },
]

function App() {
  return (
    <>
      <Header />

      <main>
        <Profile />

        <article>
          {posts.map(post => {
            return <Post key={post.id} post={post} />
          })}
        </article>
      </main>
    </>
  )
}

export default App
