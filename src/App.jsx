import { Header, Profile, Post } from './components'

import './styles/app.css'

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/henry-frrz.png',
      name: 'Henrique Ferraz',
      role: 'Desenvolvedor Frontend',
    },
    content: `
      Fala galeraa 👋

      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
    `,
    publishedAt: new Date(),
  },

  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/henry-frrz.png',
      name: 'Henrique Ferraz',
      role: 'Desenvolvedor Frontend',
    },
    content: `
      Fala galeraa 👋

      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
    `,
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
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </article>
      </main>
    </>
  )
}

export default App
