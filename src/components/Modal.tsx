"use client";

import { ReactNode, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";

/**
 * Modal Component
 *
 * A reusable modal using Headless UI for accessibility and animations.
 * It dims the background and closes when clicking outside or pressing the close button.
 */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
              {/* Header with Close Button */}
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <Dialog.Title className="text-xl font-semibold">
                  {title}
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className="text-gray-600 hover:text-gray-900">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div>{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
