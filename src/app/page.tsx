'use client'
import Image from 'next/image'
import ParticlesComponent from '../components/ParticlesComponent/index'
import { useEffect, useState } from 'react'
import FrontendStacks from '@/components/FrontendStacks'
import BackendStacks from '@/components/BackendStacks'
import ToolsStacks from '@/components/ToolsStacks'

import pythonIcon from '@/assets/experience/python.svg'
import rasaIcon from '@/assets/experience/Rasa.svg'
import rdsIcon from '@/assets/experience/RDS.svg'
import ec2Icon from '@/assets/experience/EC2.svg'
import swaggerIcon from '@/assets/experience/Swagger.svg'
import umlIcon from '@/assets/experience/UML.svg'

import githubIcon from '@/assets/socials/github.svg'
import linkedinIcon from '@/assets/socials/linkedin.svg'
import whatsappIcon from '@/assets/socials/whatsapp.svg'

import ProjectsContainer from '@/components/ProjectsContainer'

import { ContactDialog } from '@/components/Contact/ContactButton'

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <div className="flex flex-col px-60 text-white w-full h-full">
        {isClient && <ParticlesComponent id="particles" />}
        <div className="flex items-center justify-center w-full mt-5">
          <header className="flex items-center justify-between p-6 border-2 rounded-3xl border-ametista text-ametista text-md w-auto h-auto space-x-4">
            <span
              onClick={() => handleScroll('sobre')}
              className="hover:underline cursor-pointer"
            >
              Sobre
            </span>
            <span
              onClick={() => handleScroll('projetos')}
              className="hover:underline cursor-pointer"
            >
              Projetos
            </span>
            <span
              onClick={() => handleScroll('experiencias')}
              className="hover:underline cursor-pointer"
            >
              Experiências
            </span>
            <span
              onClick={() => handleScroll('contato')}
              className="hover:underline cursor-pointer"
            >
              Contato
            </span>
          </header>
        </div>

        <div
          id="sobre"
          className="flex flex-col items-center justify-center  mt-24 space-y-3"
        >
          <span>Olá, Sou o Jean!</span>
          <div className="flex space-x-3 text-5xl">
            <h1 className="text-lavanda">Desenvolvedor</h1>
            <h1 className="text-ametista">Fullstack</h1>
          </div>
          <span className="text-xl">
            Transformando ideias em soluções digitais inovadoras 🚀
          </span>
          <div className="flex space-x-2">
            <span>📍 Brasília - DF | </span>
            <a className="hover:underline" href="https://wa.me/5561992689268">
              (61) 99268-9268
            </a>
          </div>
          <span className="max-w-4/6 mt-9 text-center">
            Acredito que a tecnologia tem o poder de transformar o mundo, e
            estou comprometido em usar minhas habilidades para criar soluções
            que façam a diferença. Minha experiência como pesquisador voluntário
            em desenvolvimento de chatbot para saúde mental me mostrou o impacto
            positivo que a tecnologia pode ter na vida das pessoas
          </span>
        </div>

        <div className=" mt-48 flex flex-col">
          <div className="flex space-x-1">
            <span className="flex items-center justify-center text-6xl rotating-asterisk">
              *
            </span>
            <span className="text-5xl">Tecnologias</span>
          </div>

          <div className=" flex mt-3.5 space-x-16">
            <span className="text-5xl">Frontend</span>
            <FrontendStacks />
          </div>

          <div className=" flex mt-9 space-x-24">
            <span className="text-5xl">Backend</span>
            <BackendStacks />
          </div>
          <div className=" flex mt-9 space-x-31">
            <span className="text-5xl">DevOps</span>
            <ToolsStacks />
          </div>
        </div>

        <div id="projetos" className="mt-20 flex flex-col ">
          <div className="flex space-x-1">
            <span className="flex items-center justify-center text-6xl rotating-asterisk">
              *
            </span>
            <span className="text-5xl">Projetos</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-10 gap-y-10 w-full px-6 mt-11">
            <ProjectsContainer />
          </div>
        </div>

        <div id="experiencias" className="mt-22 flex flex-col ">
          <div className="flex space-x-1">
            <span className="flex items-center justify-center text-6xl rotating-asterisk">
              *
            </span>
            <span className="text-5xl">Experiências</span>
          </div>

          <div className="mt-3.5 space-y-4">
            <div className="text-3xl flex flex-col text-ametista">
              <span>
                GPCA | Pesquisador Voluntário em Desenvolvimento de Chatbot para
                Saúde Mental
              </span>
              <span className="text-white">
                📍 Brasília - DF | 05/2024 - Presente
              </span>
            </div>
            <div className="text-2xl  flex flex-col">
              <span>
                - Desenvolvimento de chatbot em Python para suporte a
                profissionais da saúde mental
              </span>
              <span>
                - Coleta e análise de dados para melhoria contínua do chatbot
              </span>
              <span>
                - Documentação de software UML e implementação de soluções AWS
                para hospedagem e gerenciamento do chatbot.
              </span>
            </div>
            <div className="mt-3 flex flex-wrap space-x-3">
              <div className="flex space-x-2">
                <Image src={pythonIcon} width={40} height={40} alt="python" />
                <span className="border-2  border-ametista rounded text-lavanda flex items-center justify-center w-20 h-10">
                  Python
                </span>
              </div>
              <div className="flex space-x-2">
                <Image
                  src={rasaIcon}
                  width={40}
                  height={40}
                  alt="python"
                  className="object-cover"
                />
                <span className="border-2  border-ametista rounded text-lavanda flex items-center justify-center w-20 h-10">
                  Rasa
                </span>
              </div>
              <div className="flex space-x-2">
                <Image src={rdsIcon} width={40} height={40} alt="python" />
                <span className="border-2  border-ametista rounded text-lavanda flex items-center justify-center w-20 h-10">
                  RDS
                </span>
              </div>
              <div className="flex space-x-2">
                <Image src={ec2Icon} width={40} height={40} alt="python" />
                <span className="border-2  border-ametista rounded text-lavanda flex items-center justify-center w-20 h-10">
                  EC2
                </span>
              </div>
              <div className="flex space-x-2">
                <Image src={swaggerIcon} width={40} height={40} alt="python" />
                <span className="border-2  border-ametista rounded text-lavanda flex items-center justify-center w-20 h-10">
                  Swagger
                </span>
              </div>
              <div className="flex space-x-2 ">
                <Image src={umlIcon} width={40} height={40} alt="python" />
                <span className="border-2 border-ametista rounded text-lavanda flex items-center justify-center w-20 h-10">
                  UML
                </span>
              </div>
            </div>
          </div>
        </div>

        <div id="contato" className="space-y-4 ">
          <div className="flex items-center justify-center w-full mt-22 text-5xl">
            <span className="text-8xl text-ametista text-center">
              Vamos Conversar?
            </span>
          </div>
          <div className="flex items-center justify-center w-full  mt-8 space-x-24">
            <ContactDialog />
          </div>

          <div className="flex  items-center justify-center mt-2 space-x-5">
            <a href="https://github.com/JeanClaroCode">
              <Image
                src={githubIcon}
                width={50}
                height={50}
                alt="Github Icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/jeanclaro/">
              <Image
                src={linkedinIcon}
                width={40}
                height={40}
                alt="Linkedin Icon"
              />
            </a>
            <a href="https://wa.me/5561992689268">
              <Image
                src={whatsappIcon}
                width={40}
                height={40}
                alt="Whatsapp Icon"
              />
            </a>
          </div>
          <div className="text-white text-3xl flex items-center justify-center mb-2 mt-2">
            <span>© 2025 Jean Claro</span>
          </div>
        </div>
      </div>
    </>
  )
}
