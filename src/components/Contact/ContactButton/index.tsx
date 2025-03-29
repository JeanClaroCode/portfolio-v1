import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import ContactForm from '../ContactForm'

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-darkpurple hover:bg-ametista cursor-pointer rounded-2xl text-lavanda text-4xl  h-20">
          Entre em Contato
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center justify-center mt-8 bg-[#0a0a0a] text-white p-6 border-ametista rounded-lg w-full">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  )
}
