import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function InvoiceModal({ onClose }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="py-2 w-24 text-violet-100 bg-indigo-600 rounded-md"
          type="button"
          onClick={openModal}
        >
          Asignar
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Notas de crédito asignadas correctamente
                  </Dialog.Title>

                  <div className="mt-4 flex justify-center space-y-8">
                    <button
                      type="button"
                      className="rounded-md border border-transparent text-violet-100 bg-indigo-600 px-4 py-2 text-sm font-medium"
                      onClick={() => {
                        onClose();
                        closeModal();
                      }}
                    >
                      Seguir asignando
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
