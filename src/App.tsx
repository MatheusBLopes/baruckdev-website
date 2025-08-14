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

      <header className="border-b border-border/40 bg-background/95 backdrop-blur-md sticky top-0 z-50 relative">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link to="/" className="font-bold text-lg sm:text-xl lg:text-2xl tokyo-gradient-text hover:scale-105 transition-transform duration-200">
              Baruckdev
            </Link>
            <nav className="flex items-center gap-4 sm:gap-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-primary after:to-accent after:animate-fade-in text-sm sm:text-base px-2 py-1 rounded-md hover:bg-muted/50 transition-all duration-200" 
                    : "text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all after:duration-300 text-sm sm:text-base px-2 py-1 rounded-md hover:bg-muted/50"
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-primary after:to-accent after:animate-fade-in text-sm sm:text-base px-2 py-1 rounded-md hover:bg-muted/50 transition-all duration-200" 
                    : "text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all after:duration-300 text-sm sm:text-base px-2 py-1 rounded-md hover:bg-muted/50"
                }
              >
                Projects
              </NavLink>
            </nav>
            <div className="flex items-center">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-tokyo-blue rounded-full animate-glow-pulse"></div>
            </div>
          </div>
        </div>
      </header>
      <main className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1 animate-fade-in relative z-10">
        <Outlet />
      </main>
      <footer className="border-t border-border/40 bg-background/90 backdrop-blur-md relative z-10">
        <div className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-tokyo-purple rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-tokyo-pink rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-tokyo-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} — <span className="text-tokyo-blue font-medium">Baruckdev</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1 sm:mt-2">
            Built with Tokyo Night Dark theme
          </p>
        </div>
      </footer>
    </div>
  )
}
