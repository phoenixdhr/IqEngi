
// Importaciones necesarias de React y componentes de Headless UI junto con íconos de Heroicons
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,

  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon,  CalendarIcon, NewspaperIcon, BriefcaseIcon, ArrowRightStartOnRectangleIcon} from '@heroicons/react/20/solid'

// Datos de ejemplo para productos y acciones principales
const products = [
  { name: 'Blog', description: 'Entérate de novedades y lo último de la industria', href: '#', icon: NewspaperIcon },
  { name: 'Calendario', description: 'Revisa nuestros eventos y actividades', href: '#', icon: CalendarIcon },
]
const callsToAction = [
  { name: 'Youtube', href: '#', icon: PlayCircleIcon },
  { name: 'LinkedIn', href: '#', icon: BriefcaseIcon },
]

// Función para unir clases de CSS condicionalmente
function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

// Componente principal
export default function Example() {
  // Estado para manejar la visibilidad del menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    // Cabecera del sitio
    <header className="bg-white">

      {/* Navegación principal */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

        {/* Logo y enlace de la empresa */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">IqEngi</span>
            <img className="h-8 w-auto" src="../../public/favicon.svg" alt="Logo IqEngi" />
          </a>
        </div>



        {/* Botón para mostrar el menú en dispositivos móviles */}
        <div className="flex lg:hidden">

          {/* Botón Crear Cuenta */}
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 ">Crear Cuenta</button>

          {/* Simbolo de flecha de iniciar sesión */}
          <div className=" flex items-center justify-between me-3">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                <ArrowRightStartOnRectangleIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </a>
          </div>

          {/* Botón Sandwich*/}
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>





        {/* Grupo de enlaces mostrados solo en pantallas grandes (lg) */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">


          {/* Enlaces adicionales en el menú de navegación */}
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Cursos
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contáctanos
          </a>


          {/* Popover para el menú de productos */}
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Comunidad
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            {/* Transición para animar la aparición del menú de productos */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              {/* Panel del Popover con los productos listados */}
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                {/* Productos listados */}
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Acciones principales listadas */}
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

        </Popover.Group>



        {/* Enlace para iniciar sesión, visible solo en pantallas grandes */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">

          <div className="flex">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">Crear Cuenta</button>
          </div>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Iniciar Sesión <span aria-hidden="true">&rarr;</span>
          </a>

        </div>


      </nav>







      {/* Diálogo para el menú móvil */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

          {/* Cabecera del menú móvil con logo y botón de cierre */}
          <div className="flex items-center justify-between">

            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">IqEngi</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Contenido del menú móvil con enlaces */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">


                {/* Enlaces adicionales en el menú móvil */}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Cursos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contáctanos
                </a>

                {/* Disclosure para productos y acciones en el menú móvil */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Comunidad
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>


              </div>


              {/* Enlace para iniciar sesión en el menú móvil */}
              <div className="py-6 flex items-center justify-between">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Iniciar Sesión
                </a>
              {/* Simbolo de flecha de iniciar sesión */}
                <ArrowRightStartOnRectangleIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>




    </header>
  )
}
