import React from 'react';
import { Modal, ModalContent, ModalBody } from '@heroui/modal';
import { marked } from 'marked';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  description?: string;
  location: string;
  image: string;
  category: string;
  slug: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
}

export default function TeamMemberModal({
  isOpen,
  onClose,
  member,
}: TeamMemberModalProps) {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="2xl"
          placement="center"
          hideCloseButton={true}
          classNames={{
            base: 'bg-white border-0 shadow-none rounded-lg max-h-[90vh] overflow-hidden focus:outline-none focus:ring-0 relative',
            body: 'py-8 px-8 flex flex-col',
            wrapper: 'flex items-center justify-center min-h-screen',
            backdrop: 'bg-gray-500 bg-opacity-50 backdrop-blur-md',
          }}
        >
          <ModalContent>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0.0, 0.2, 1],
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className="relative"
            >
              {/* Close Button - Top Right Corner */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl font-light w-8 h-8 flex items-center justify-center transition-colors duration-200 z-10 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                ×
              </motion.button>

              <ModalBody>
                {/* Fixed Header */}
                <div className="text-center mb-6">
                  {/* Profile Picture */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name and Title */}
                  <h2
                    className="text-3xl font-medium text-black mb-2"
                    style={{ fontFamily: "'GT Alpina Fine', serif" }}
                  >
                    {member.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 font-medium">
                    {member.title}
                  </p>
                </div>

                {/* Scrollable Description */}
                {member.description && (
                  <div className="text-gray-700 text-left mb-6 leading-relaxed text-base max-w-2xl mx-auto prose prose-gray overflow-y-auto max-h-[30vh] pr-2">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: marked(member.description, {
                          breaks: true,
                          gfm: true,
                        }),
                      }}
                    />
                  </div>
                )}

                {/* Fixed Footer */}
                <div className="flex justify-center space-x-8 mt-auto">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
                    >
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}

                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
                    >
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
                    >
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </ModalBody>
            </motion.div>
          </ModalContent>
        </Modal>
      )}
    </AnimatePresence>
  );
}
