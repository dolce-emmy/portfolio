import React from 'react'
import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

const LocomotiveScrollComponent = ({children}) => {

    const scrollRef = useRef(null)

    useEffect(()=>{
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,


        });

        return()=>{
            scroll.destroy()
        }

    }, [])


  return (
    <div ref={scrollRef}>{children}</div>
  )
}

export default LocomotiveScrollComponent