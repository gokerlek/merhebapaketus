import { Dialog } from "@headlessui/react";
import { IoCloseOutline } from "react-icons/all.js";
import ReactMarkdown from "react-markdown";

const Modal = ({ isOpen, onClose, data }) => {
  return (
    <Dialog className="relative z-50" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="rounded-lg bg-white min-h-[65%] max-w-[700px] w-full overflow-auto relative">
          <Dialog.Title className="sticky z-10 inset-x-0 top-0 rounded-t-lg bg-white font-bold text-xl  text-center p-6 gap-1">
            <div className="relative w-full h-full">
              {data?.title}

              <div
                onClick={onClose}
                className="absolute -top-1 right-0 hover:cursor-pointer hover:text-red-500  hover:scale-110 transform transition duration-300 ease-in-out"
              >
                <IoCloseOutline size={30} />
              </div>
            </div>
          </Dialog.Title>

          <ReactMarkdown className="flex flex-col p-8 prose prose-p:my-1 prose-li:m-0  prose-ol:pl-[14px] prose-ol:my-2 prose-li:marker:font-bold absolute prose-strong:flex prose-strong:mt-2 text-justify   ">
            {data?.content}
          </ReactMarkdown>
        </Dialog.Panel>
        <div className="absolute top-0 right-0 p-4">x</div>
      </div>
    </Dialog>
  );
};

export default Modal;
