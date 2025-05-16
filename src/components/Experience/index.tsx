/* eslint-disable react/no-unescaped-entities */
import typescriptIcon from '@/assets/Frontend/typescript.svg'
import nodeIcon from '@/assets/Backend/nodejs.svg'
import restApiIcon from '@/assets/Backend/restAPi.svg'
import n8nIcon from '@/assets/Backend/n8n.png'
import xmlIcon from '@/assets/Backend/xml.svg'
import Image from 'next/image'

export default function Experience() {
  return (
    <>
      <div className="mt-3.5 space-y-4">
        <div className="xl:text-3xl flex flex-col text-ametista">
          <span>Dall'Oca Negócios | Desenvolvedor de Software </span>
          <span className="text-white">
            📍 Brasília - DF | 04/2025 - Presente
          </span>
        </div>
        <div className="xl:text-2xl space-y-4 xl:space-y-0 flex flex-col">
          <span className="flex ">
            <span className="hidden mr-2 xl:block"> - </span>
            Desenvolvimento com TypeScript/JavaScript e Node.js
          </span>
          <span className="flex ">
            <span className="hidden mr-2 xl:block"> - </span>
            Criação de workflows automatizados com n8n para otimização
            operacional.
          </span>
          <span className="flex ">
            <span className="hidden mr-2 xl:block"> - </span>
            Desenvolvimento e integração de APIs REST & webhooks para automação
            de processos.
          </span>
          <span className="flex ">
            <span className="hidden mr-2 xl:block"> - </span>
            Manipulação de banco de dados
          </span>
          <span className="flex ">
            <span className="hidden mr-2 xl:block"> - </span>
            Análise/Estrutura de dados em JSON/XML
          </span>
          <span className="flex ">
            <span className="hidden mr-2 xl:block"> - </span>
            Gerenciamento e desenvolvimento de CRM para equipe comercial.
          </span>
        </div>
        <div className="mt-3 flex flex-wrap space-x-3 space-y-1">
          <div className="flex space-x-2">
            <Image src={typescriptIcon} width={40} height={40} alt="python" />
            <span className="border-2  border-ametista rounded text-lavanda flex items-center justify-center w-flex p-1 ">
              TypeScript
            </span>
          </div>
          <div className="flex space-x-2">
            <Image
              src={nodeIcon}
              width={40}
              height={40}
              alt="python"
              className="object-cover"
            />
            <span className="border-2  border-ametista rounded text-lavanda flex items-center justify-center w-20 ">
              Node.js
            </span>
          </div>
          <div className="flex space-x-2">
            <Image src={restApiIcon} width={40} height={40} alt="python" />
            <span className="border-2  border-ametista rounded text-lavanda flex items-center justify-center w-flex p-1 ">
              REST API
            </span>
          </div>
          <div className="flex space-x-2">
            <Image src={n8nIcon} width={40} height={40} alt="python" />
            <span className="border-2  border-ametista rounded text-lavanda flex items-center justify-center w-flex p-1 ">
              n8n
            </span>
          </div>
          <div className="flex space-x-2">
            <Image
              src={xmlIcon}
              width={40}
              height={40}
              alt="python"
              className="object-contain"
            />
            <span className="border-2  border-ametista rounded text-lavanda flex items-center justify-center w-flex  p-1 ">
              XML
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
