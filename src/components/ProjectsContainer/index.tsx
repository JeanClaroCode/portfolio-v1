/* eslint-disable @typescript-eslint/no-explicit-any */
import VideoPlayer from '../VideoPlayer'
import { Image, Tooltip } from 'antd'
import NextImage from 'next/image'

import reactIcon from '../../assets/Frontend/react.svg'
import typescriptIcon from '@/assets/Frontend/typescript.svg'
import nextIcon from '../../assets/Frontend/next.svg'
import styledComponentsIcon from '../../assets/Frontend/styled-components.svg'
import reduxIcon from '../../assets/Frontend/redux.svg'
import nodeIcon from '../../assets/Backend/nodejs.svg'
import prismaIcon from '../../assets/Backend/prisma.svg'
import javaIcon from '@/assets/Backend/java.svg'
import springBootIcon from '@/assets/Backend/springboot.svg'
import stripeIcon from '@/assets/Backend/stripe.svg'
import jwtIcon from '@/assets/Backend/jwt.svg'
import oAuthIcon from '@/assets/Backend/oauth.svg'
import postgresqlIcon from '@/assets/Backend/postgres.svg'
import junitIcon from '@/assets/Backend/junit.svg'
import hibernateIcon from '@/assets/Backend/hibernate.svg'
import dockerIcon from '@/assets/Tools/docker.svg'
import awsIcon from '@/assets/Tools/aws.svg'
import googleMapsIcon from '@/assets/Google_Maps_icon_(2015-2020).svg'
import springSecurityIcon from '@/assets/springSecurity.svg'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProjectsContainer() {
  const iconSize = 25

  const Card = ({ children, index }: any) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.01, once: true })

    const cardVariants = {
      hidden: { x: index % 2 === 0 ? '-50%' : '50%', opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    }

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={cardVariants}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <>
      <Card index={0}>
        <div className=" flex flex-col items-center text-center justify-between ">
          <div className=" flex flex-col items-center text-center  ">
            <h1 className=" mb-2 text-2xl text-center ">Gasta Pouco</h1>

            <VideoPlayer videosrc="/Projects/video-pronto.mp4" />
            <div className="flex flex-wrap  items-center text-center justify-center space-x-4 mt-2 ">
              <div>
                <Tooltip title="React">
                  <NextImage
                    data-tooltip-target="tooltip-default"
                    width={iconSize}
                    src={reactIcon}
                    alt="React"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Typescript">
                  <NextImage
                    width={iconSize}
                    src={typescriptIcon}
                    alt="Typescript"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Node.js">
                  <NextImage width={iconSize} src={nodeIcon} alt="Node.js" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Java">
                  <NextImage width={iconSize} src={javaIcon} alt="Java" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Spring Boot">
                  <NextImage
                    width={iconSize}
                    src={springBootIcon}
                    alt="Spring Boot"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="JWT">
                  <NextImage width={iconSize} src={jwtIcon} alt="JWT" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Docker">
                  <NextImage width={iconSize} src={dockerIcon} alt="Docker" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="AWS">
                  <NextImage width={iconSize} src={awsIcon} alt="AWS" />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <button className="border-2 border-ametista hover:underline p-2 rounded-2xl">
              <a
                href="
              
              https://www.linkedin.com/posts/jeanclaro_meu-primeiro-projeto-fullstack-sistema-activity-7254110312121962499--k3p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-0eWgBEjoUbNQyknBqh_W5U6bFRuz6Lqw"
              >
                Para mais informações
              </a>
            </button>
          </div>
        </div>
      </Card>
      <Card index={1}>
        <div className=" flex flex-col items-center text-center justify-between ">
          <div className=" flex flex-col items-center text-center">
            <h1 className="mb-2 text-2xl text-center">Ignite Call</h1>
            <VideoPlayer videosrc="/Projects/ignite-call.mp4" />
            <div className="flex flex-wrap  items-center text-center justify-center space-x-4 mt-2">
              <div>
                <Tooltip title="Next.js">
                  <NextImage width={iconSize} src={nextIcon} alt="Next.js" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="React">
                  <NextImage
                    data-tooltip-target="tooltip-default"
                    width={iconSize}
                    src={reactIcon}
                    alt="React"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Node.js">
                  <NextImage width={iconSize} src={nodeIcon} alt="Node.js" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Prisma">
                  <NextImage width={iconSize} src={prismaIcon} alt="Prisma" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Styled Components">
                  <NextImage
                    width={iconSize}
                    src={styledComponentsIcon}
                    alt="Styled Components"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Oauth">
                  <NextImage width={iconSize} src={oAuthIcon} alt="React" />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <button className="border-2 border-ametista hover:underline p-2 rounded-2xl">
              <a
                href="
              https://github.com/JeanClaroCode/ignite-call"
              >
                Para mais informações
              </a>
            </button>
          </div>
        </div>
      </Card>
      <Card index={2}>
        <div className=" flex flex-col items-center text-center justify-between">
          <div className=" flex flex-col items-center text-center">
            <h1 className="text-2xl text-center ">Ignite Shop</h1>
            <span className="text-[10px] invisible">(space)</span>
            <VideoPlayer videosrc="/Projects/ignite-shop.mp4" />
            <div className="flex flex-wrap  items-center text-center justify-center space-x-4 mt-2">
              <div>
                <Tooltip title="Next.js">
                  <NextImage width={iconSize} src={nextIcon} alt="Next.js" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Typescript">
                  <NextImage
                    width={iconSize}
                    src={typescriptIcon}
                    alt="Typescript"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="React">
                  <NextImage
                    data-tooltip-target="tooltip-default"
                    width={iconSize}
                    src={reactIcon}
                    alt="React"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Node.js">
                  <NextImage width={iconSize} src={nodeIcon} alt="Node.js" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Styled Components">
                  <NextImage
                    width={iconSize}
                    src={styledComponentsIcon}
                    alt="Styled Components"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Stripe">
                  <NextImage width={iconSize} src={stripeIcon} alt="React" />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <button className="border-2 border-ametista hover:underline p-2 rounded-2xl">
              <a href="https://github.com/JeanClaroCode/ignite-shop">
                Para mais informações
              </a>
            </button>
          </div>
        </div>
      </Card>
      <Card index={3}>
        <div className=" flex flex-col items-center text-center justify-between ">
          <div className=" flex flex-col items-center text-center ">
            <h1 className=" mb-0 text-xl text-center ">Desafio Front-end</h1>
            <span className="text-[10px]">(Harpia Tech)</span>
            <VideoPlayer videosrc="/Projects/Desafio_frontend_Harpia.mp4" />
            <div className="flex flex-wrap  items-center text-center justify-center space-x-4 mt-2 ">
              <div>
                <Tooltip title="Typescript">
                  <NextImage
                    width={iconSize}
                    src={typescriptIcon}
                    alt="Typescript"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="React">
                  <NextImage
                    data-tooltip-target="tooltip-default"
                    width={iconSize}
                    src={reactIcon}
                    alt="React"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Google Maps API">
                  <NextImage
                    width={iconSize}
                    src={googleMapsIcon}
                    alt="React"
                  />
                </Tooltip>
              </div>

              <div>
                <Tooltip title="Docker">
                  <NextImage width={iconSize} src={dockerIcon} alt="React" />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <button className="border-2 border-ametista hover:underline p-2 rounded-2xl">
              <a href="https://www.linkedin.com/posts/jeanclaro_frontend-googlemapsapi-restcountriesapi-activity-7208639218292580352-QNGo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-0eWgBEjoUbNQyknBqh_W5U6bFRuz6Lqw">
                Para mais informações
              </a>
            </button>
          </div>
        </div>
      </Card>
      <Card index={4}>
        <div className=" flex flex-col items-center text-center justify-between ">
          <div className=" flex flex-col items-center text-center  ">
            <h1 className="text-2xl text-center">Desafio Front-end</h1>
            <span className="text-[10px]">(Sea Tecnologia)</span>
            <VideoPlayer videosrc="/Projects/Desafio_sea_tecnologia.mp4" />
            <div className="flex flex-wrap  items-center text-center justify-center space-x-4 mt-2">
              <div>
                <Tooltip title="Next.js">
                  <NextImage width={iconSize} src={nextIcon} alt="Next.js" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="React">
                  <NextImage
                    data-tooltip-target="tooltip-default"
                    width={iconSize}
                    src={reactIcon}
                    alt="React"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Redux">
                  <NextImage width={iconSize} src={reduxIcon} alt="Redux" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Styled Components">
                  <NextImage
                    width={iconSize}
                    src={styledComponentsIcon}
                    alt="Styled Components"
                  />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <button className="border-2 border-ametista hover:underline cursor-not-allowed disabled p-2 rounded-2xl">
              <a className="cursor-not-allowed disabled ">Em processo</a>
            </button>
          </div>
        </div>
      </Card>
      <Card index={5}>
        <div className="  flex flex-col items-center text-center justify-between ">
          <div className=" flex flex-col items-center text-center  ">
            <h1 className="text-2xl text-center">Gestão de Vagas</h1>
            <span className="text-[10px] invisible">(space)</span>
            <div className="overflow-hidden flex items-center justify-center cursor-pointer ">
              <div className="border-4 border-darkpurple rounded flex items-center w-full justify-center">
                <Image
                  src="https://i.imgur.com/keeECAc.png"
                  preview={{
                    src: 'https://i.imgur.com/LYkJNCa.png',
                  }}
                  alt="Projeto gestão de vagas java"
                />
              </div>
            </div>

            <div className="flex flex-wrap  items-center text-center justify-center space-x-4 mt-2">
              <div>
                <Tooltip title="Java">
                  <NextImage width={iconSize} src={javaIcon} alt="Java" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Spring Boot">
                  <NextImage
                    width={iconSize}
                    src={springBootIcon}
                    alt="Spring Boot"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Hibernate">
                  <NextImage
                    width={iconSize}
                    src={hibernateIcon}
                    alt="Hibernate"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="PostgreSQL">
                  <NextImage
                    width={iconSize}
                    src={postgresqlIcon}
                    alt="PostgreSQL"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Spring Security">
                  <NextImage
                    width={iconSize}
                    src={springSecurityIcon}
                    alt="React"
                  />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Junit">
                  <NextImage width={iconSize} src={junitIcon} alt="Junit" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="JWT">
                  <NextImage width={iconSize} src={jwtIcon} alt="JWT" />
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Docker">
                  <NextImage width={iconSize} src={dockerIcon} alt="Docker" />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <button className="border-2 border-ametista hover:underline p-2 rounded-2xl">
              <a href="https://github.com/JeanClaroCode/sistema_gestao_vagas">
                Para mais informações
              </a>
            </button>
          </div>
        </div>
      </Card>
    </>
  )
}
