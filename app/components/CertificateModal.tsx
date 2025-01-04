import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface Certificate {
  id: number
  name: string
  issuer: string
  date: string
  description: string
  imageUrl: string 
}

interface CertificateModalProps {
  certificate: Certificate
  onClose: () => void
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                >
                  {certificate.name}
                </Dialog.Title>
                
                <div className="mt-4">
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.name}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Issuer: {certificate.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Date: {certificate.date}
                  </p>
                  <p className="text-sm text-gray-500 mt-2 dark:text-gray-300">
                    {certificate.description}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 dark:bg-blue-600 px-4 py-2 text-sm font-medium text-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
