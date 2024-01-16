"use client"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function SmoothScroll({children}) {
 
  return (
    <ReactLenis 
        root
        options={{
            lerp:0.05,
            smoothWheel : true
        }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll