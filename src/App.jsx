import { Header, Profile, Post } from './components'

import './styles/app.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Profile />

        <article>
          <Post />
        </article>
      </main>
    </>
  )
}

export default App
