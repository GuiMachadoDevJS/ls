import { WHATSAPP_URL } from '@/lib/site'
import { WhatsAppIcon } from './whatsapp-icon'

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/50 ring-2 ring-gold transition hover:scale-110 sm:bottom-8 sm:right-8 sm:size-16"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366]/40" aria-hidden="true" />
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  )
}
