import {Fragment, useState} from 'react'
import {Dialog, Disclosure, Popover, Transition} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from '@heroicons/react/20/solid'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute px-10 py-2 top-0 w-full bg-stone-50 border-b border-stone-300 drop-shadow-md">
      <span className="text-indigo-700 text-2xl">Learn More Words</span>
    </header>
  )
}
export {Header};