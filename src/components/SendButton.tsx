

interface PastelButtonProps {
  
  onClick?: () => void
}

export default function PastelButton({  onClick }: PastelButtonProps) {
  return (
    <button
        className="px-6 py-2 mt-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300"
        onClick={onClick}
    >
        Enviar Respuesta
    </button>

  )
}
