import { Outlet, Link, NavLink } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-slate-900 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50 relative">
        <div className="container grid grid-cols-3 h-16 items-center">
          <Link to="/" className="font-bold text-2xl tokyo-gradient-text hover:scale-105 transition-transform duration-200">
            Baruckdev
          </Link>
          <nav className="flex gap-6 justify-center">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-primary after:to-accent after:animate-fade-in" 
                  : "text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all after:duration-300"
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-primary after:to-accent after:animate-fade-in" 
                  : "text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all after:duration-300"
              }
            >
              Projects
            </NavLink>
          </nav>
          <div className="flex justify-end">
            <div className="w-3 h-3 bg-tokyo-blue rounded-full animate-glow-pulse"></div>
          </div>
        </div>
      </header>
      <main className="container py-16 flex-1 animate-fade-in relative z-10">
        <Outlet />
      </main>
      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-md relative z-10">
        <div className="container py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-tokyo-purple rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-tokyo-pink rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-tokyo-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} — <span className="text-tokyo-blue font-medium">Baruckdev</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with Tokyo Night Dark theme
          </p>
        </div>
      </footer>
    </div>
  )
}
