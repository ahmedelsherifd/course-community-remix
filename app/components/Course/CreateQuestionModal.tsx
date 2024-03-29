/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Form } from "@remix-run/react";
import { Disclosure } from "@headlessui/react";

export function CreateQuestionModal({
  open,
  setOpen,
  action,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  action: string;
}) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <Form action={action} method="post">
                <div className="sm:flex sm:items-start w-full">
                  {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div> */}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Ask question
                    </Dialog.Title>
                    <div className="mt-2 w-full">
                      <textarea
                        rows={4}
                        name="text"
                        id="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                {/* ************************************** */}
                <div className="w-full px-4 pt-6 pb-6">
                  <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                            <span>Is it a multiple choice question?</span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-900">
                            <div>
                              <label
                                htmlFor="ans1"
                                className="block text-lg font-medium text-gray-900"
                              >
                                Choice (a) :
                              </label>
                              <div className="mt-1 pb-4">
                                <input
                                  id="ans1"
                                  name="ans1"
                                  type="ans1"
                                  placeholder="(a)"
                                  required
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="ans2"
                                className="block text-lg font-medium text-gray-900"
                              >
                                Choice (b) :
                              </label>
                              <div className="mt-1 pb-4">
                                <input
                                  id="ans2"
                                  name="ans2"
                                  type="ans2"
                                  placeholder="(b)"
                                  required
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="ans3"
                                className="block text-lg font-medium text-gray-900"
                              >
                                Choice (c) :
                              </label>
                              <div className="mt-1 pb-4">
                                <input
                                  id="ans3"
                                  name="ans3"
                                  type="ans3"
                                  placeholder="(c)"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="ans4"
                                className="block text-lg font-medium text-gray-900"
                              >
                                Choice (d) :
                              </label>
                              <div className="mt-1 pb-4">
                                <input
                                  id="ans4"
                                  name="ans4"
                                  type="ans4"
                                  placeholder="(d)"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
                {/* ************************************************** */}
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  {/* <button
                  type="button"
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Button
                </button> */}
                  <button
                    type="submit"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
