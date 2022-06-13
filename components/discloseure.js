import { Transition } from '@headlessui/react';
import { useState } from 'react';

export default function MyComponent() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <button
        className="relative"
        onClick={() => setIsShowing((isShowing) => !isShowing)}
      >
        Toggle
      </button>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          as="modal"
          className="h-[100vh] w-[350px] z-10 to-0 right-0 bg-slate-200 absolute"
        >
          I will fade in and out
        </div>
      </Transition>
    </>
  );
}
