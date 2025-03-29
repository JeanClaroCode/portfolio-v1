import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

import dockerIcon from '@/assets/Tools/docker.svg'
import awsIcon from '@/assets/Tools/aws.svg'
import gitIcon from '@/assets/Tools/git.svg'
import githubIcon from '@/assets/Tools/github.svg'
import githubActionsIcon from '@/assets/Tools/githubactions.svg'
import cicdIcon from '@/assets/Tools/ci-cd.svg'
import figmaIcon from '@/assets/Tools/Figma.svg'

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
export default function ToolsStacks() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    amount: 0.01,
    once: true,
  })

  const technologies = [
    { icon: dockerIcon, name: 'Docker' },
    { icon: awsIcon, name: 'AWS' },
    { icon: gitIcon, name: 'Git' },
    { icon: githubIcon, name: 'Github' },
    { icon: githubActionsIcon, name: 'Github Actions' },
    { icon: cicdIcon, name: 'CI/CD' },
    { icon: figmaIcon, name: 'Figma' },
  ]
  return (
    <>
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
            <Image src={tech.icon} alt={tech.name} width={40} height={40} />
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
