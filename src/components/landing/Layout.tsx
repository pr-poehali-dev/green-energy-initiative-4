import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{ background: '#1a0f05' }}>
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="#5a4020"
          hoverFillColor="#3d2b10"
        />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}