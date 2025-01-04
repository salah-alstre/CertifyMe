interface Certificate {
  id: number
  name: string
  issuer: string
  date: string
  description: string
  imageUrl: string  // إضافة رابط الصورة
}

interface CertificateCardProps {
  certificate: Certificate
  onClick: () => void
}

export default function CertificateCard({ certificate, onClick }: CertificateCardProps) {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <img 
        src={certificate.imageUrl} 
        alt={certificate.name} 
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{certificate.name}</h3>
      <p className="text-gray-600 dark:text-gray-400">{certificate.issuer}</p>
      <p className="text-gray-500 text-sm dark:text-gray-300">{certificate.date}</p>
    </div>
  )
}
