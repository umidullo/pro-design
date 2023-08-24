import { ChevronIcon } from '@/components/ui/icon';
import { Popover as HPopover, Transition } from '@headlessui/react';
import { Fragment, ReactNode, RefObject, useRef } from 'react';

const timeoutDuration = 120;
const Popover = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  const triggerRef = useRef<HTMLButtonElement>();
  const timeOutRef = useRef<any>();

  const handleEnter = (isOpen: boolean) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  return (
    <HPopover className="relative">
      {({ open }) => (
        <div
          onMouseEnter={() => handleEnter(open)}
          onMouseLeave={() => handleLeave(open)}
        >
          <HPopover.Button
            ref={triggerRef as RefObject<HTMLButtonElement>}
            className="
                inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-white outline-none capitalize"
          >
            {title}
            <ChevronIcon
              className={`${
                open ? 'rotate-180' : 'rotate-0'
              } ml-2 h-5 w-5 transition duration-300 ease-in-out`}
              aria-hidden="true"
            />
          </HPopover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <HPopover.Panel className="absolute left-1/2 z-10 mt-3 -translate-x-1/2 transform sm:px-0">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative flex flex-col bg-[#262626] p-2 w-max text-white">
                  {children}
                </div>
              </div>
            </HPopover.Panel>
          </Transition>
        </div>
      )}
    </HPopover>
  );
};

export default Popover;
