import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-lg hover:shadow-secondary/25 active:scale-95",
        outline: "border border-border bg-background hover:bg-muted/50 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10 active:scale-95",
        ghost: "hover:bg-muted/50 hover:text-foreground active:scale-95",
        link: "underline-offset-4 hover:underline text-primary hover:text-primary/80"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    // If asChild is true, we need to clone the child element
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        className: cn(buttonVariants({ variant, size }), className),
        ref,
        children: (
          <>
            {children.props.children}
            {/* Glow effect for primary buttons */}
            {variant === "default" && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
            )}
          </>
        )
      })
    }

    // Regular button rendering
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
        {/* Glow effect for primary buttons */}
        {variant === "default" && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
        )}
      </button>
    )
  }
)
Button.displayName = "Button"
