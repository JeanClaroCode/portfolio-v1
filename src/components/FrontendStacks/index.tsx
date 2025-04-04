import * as React from 'react'
import { motion, useInView } from 'framer-motion'

import Image from 'next/image'
import typescriptIcon from '@/assets/Frontend/typescript.svg'
import reactIcon from '../../assets/Frontend/react.svg'
import nextIcon from '../../assets/Frontend/next.svg'
import reduxIcon from '../../assets/Frontend/redux.svg'
import axiosIcon from '../../assets/Frontend/axios.svg'
import nextAuthIcon from '../../assets/Frontend/nextauth.svg'
import reactHookFormIcon from '../../assets/Frontend/reactHookForm.svg'
import zodIcon from '../../assets/Frontend/zod.svg'
import sassIcon from '../../assets/Frontend/sass.svg'
import styledComponentsIcon from '../../assets/Frontend/styled-components.svg'
import tailwindIcon from '../../assets/Frontend/tailwind.svg'
import radixIcon from '../../assets/Frontend/radix.svg'
import viteIcon from '@/assets/Frontend/vite.svg'
import framerMotion from '@/assets/Frontend/framer-motion.svg'

import { useRef } from 'react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function FrontendStacks() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    amount: 0.01,
    once: true,
  })

  const technologies = [
    { icon: typescriptIcon, name: 'TypeScript' },
    { icon: reactIcon, name: 'React/React Native' },
    { icon: nextIcon, name: 'Next.js' },
    { icon: reduxIcon, name: 'Redux' },
    { icon: axiosIcon, name: 'Axios' },
    { icon: nextAuthIcon, name: 'NextAuth.js' },
    { icon: reactHookFormIcon, name: 'React Hook Form' },
    { icon: zodIcon, name: 'Zod' },
    { icon: sassIcon, name: 'Sass' },
    { icon: styledComponentsIcon, name: 'Styled Components' },
    { icon: tailwindIcon, name: 'Tailwind CSS' },
    { icon: radixIcon, name: 'Radix' },
    { icon: viteIcon, name: 'Vite' },
    { icon: framerMotion, name: 'Framer Motion' },
  ]

  return (
    <motion.div
      ref={ref}
      className="space-x-5 flex flex-wrap"
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="mt-2 space-x-3 flex items-center"
          variants={item}
        >
          <Image
            src={tech.icon}
            alt={tech.name}
            width={15}
            height={15}
            className="sm:w-[40px] sm:h-[40px]"
          />
          <span>{tech.name}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
