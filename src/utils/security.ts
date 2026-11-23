export function sanitizeInput(value: string): string {
  return value
    .replace(/[<>]/g, '')
    .trim()
}

export function buildWhatsAppLink(phone: string, text: string): string {
  const sanitizedText = sanitizeInput(text)
  return `https://wa.me/${phone}?text=${encodeURIComponent(sanitizedText)}`
}
