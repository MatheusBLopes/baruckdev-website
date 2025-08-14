import { Outlet, Link, NavLink } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container grid grid-cols-3 h-14 items-center">
          <Link to="/" className="font-semibold">Baruckdev</Link>
          <nav className="flex gap-2 justify-center">
            <NavLink to="/" className={({ isActive }) => isActive ? "underline underline-offset-4" : ""}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "underline underline-offset-4" : ""}>Projects</NavLink>
          </nav>
          <div></div>
        </div>
      </header>
      <main className="container py-10 flex-1">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Baruckdev
        </div>
      </footer>
    </div>
  )
}
