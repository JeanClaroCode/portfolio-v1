import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import nodeIcon from '../../assets/Backend/nodejs.svg'
import nestIcon from '../../assets/Backend/Nest.svg'
import expressIcon from '../../assets/Backend/Express.svg'
import prismaIcon from '../../assets/Backend/prisma.svg'
import javaIcon from '@/assets/Backend/java.svg'
import springBootIcon from '@/assets/Backend/springboot.svg'
import hibernateIcon from '@/assets/Backend/hibernate.svg'
import junitIcon from '@/assets/Backend/junit.svg'
import postgresqlIcon from '@/assets/Backend/postgres.svg'
import mongoDbIcon from '@/assets/Backend/mongo.svg'
import jwtIcon from '@/assets/Backend/jwt.svg'
import oAuthIcon from '@/assets/Backend/oauth.svg'
import stripeIcon from '@/assets/Backend/stripe.svg'
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

export default function BackendStacks() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    amount: 0.01,
    once: true,
  })

  const technologies = [
    { icon: nodeIcon, name: 'Node.js' },
    { icon: nestIcon, name: 'NestJS' },
    { icon: expressIcon, name: 'Express.js' },
    { icon: prismaIcon, name: 'Prisma' },
    { icon: javaIcon, name: 'Java' },
    { icon: springBootIcon, name: 'Spring Boot' },
    { icon: hibernateIcon, name: 'Hibernate' },
    { icon: junitIcon, name: 'Junit' },
    { icon: postgresqlIcon, name: 'PostgreSQL' },
    { icon: mongoDbIcon, name: 'MongoDB' },
    { icon: jwtIcon, name: 'JWT' },
    { icon: oAuthIcon, name: 'Oauth' },
    { icon: stripeIcon, name: 'Stripe' },
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
