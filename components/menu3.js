import { Menu } from '@headlessui/react';

export default function MyDropdown() {
  return (
    <>
      <Menu>
        <Menu.Button>More</Menu.Button>

        {/*
        By default, this will automatically show/hide when the
        Menu.Button is pressed.
      */}
        <Menu.Items>
          <Menu.Item className="bg-white" as="div">
            <h1 className="text-3xl">Menu</h1>
          </Menu.Item>
          {/* ... */}
        </Menu.Items>
      </Menu>
    </>
  );
}
