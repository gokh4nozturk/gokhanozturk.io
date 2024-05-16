import { animated, useSpringRef, useTransition } from 'react-spring'
import { useLayoutEffect, useState } from 'react'
import NextImage from 'next/image'

const IMAGES = [
  'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154443660/original/734570cec0de955789ff0acd80caad3d582b85e0/create-a-generative-art-piece-for-you.png',
  'https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg',
  'https://cdn.pixabay.com/photo/2018/09/04/09/12/generative-art-3653275_1280.jpg',
]

export default function DemoAnimation() {
  const [activeIndex, setActiveIndex] = useState(0)
  const springApi = useSpringRef()

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
    },
    enter: {
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
    },
    leave: {
      clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
    },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item)
        setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1)
    },
    exitBeforeEnter: true,
    config: {
      duration: 4000,
    },
    delay: 1000,
    ref: springApi,
  })

  useLayoutEffect(() => {
    springApi.start()
  }, [activeIndex, springApi])
  return (
    <div className="mt-10">
      {transitions((springs, item) => (
        <animated.div style={springs}>
          <NextImage
            className="rounded-sm"
            src={IMAGES[item]}
            priority
            width={800}
            height={600}
            alt="Gökhan Öztürk"
          />
        </animated.div>
      ))}
    </div>
  )
}
