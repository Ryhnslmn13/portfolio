import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="project-page project-page--empty">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>This page does not exist.</h1>
          <Link className="btn" to="/">Back home</Link>
        </div>
      </main>
    </>
  )
}
