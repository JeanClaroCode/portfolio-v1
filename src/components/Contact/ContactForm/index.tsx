import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { env } from '@/constants/env'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    toast.promise(
      new Promise((resolve, reject) => {
        emailjs
          .send(env.SERVICE_ID!, env.TEMPLATE_ID!, formData, env.PUBLIC_KEY!)
          .then(() => {
            resolve('Mensagem enviada com sucesso!')
            setFormData({ name: '', email: '', message: '' })
          })
          .catch(() => {
            reject(new Error('Erro ao enviar mensagem, tente novamente.'))
          })
      }),
      {
        loading: 'Enviando...',
        success: <b>Mensagem enviada!</b>,
        error: <b>Erro ao enviar.</b>,
      },
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 p-4 w-full max-w-lg text-white"
    >
      <Input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        className="p-2 border-ametista  rounded-md"
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        value={formData.email}
        onChange={handleChange}
        className="p-2 border-ametista text-white rounded-md"
        required
      />
      <Textarea
        name="message"
        placeholder="Sua mensagem"
        value={formData.message}
        onChange={handleChange}
        className="p-2 border-ametista resize-none text-white rounded-md h-24"
        required
      />
      <Button
        type="submit"
        className="bg-darkpurple text-white p-2 rounded-md w-full hover:bg-ametista"
      >
        Enviar Email
      </Button>
    </form>
  )
}
