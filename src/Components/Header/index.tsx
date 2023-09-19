import Image from 'next/image'
import Logo from '../../assets/Logo.png'
import Cover from '../../assets/Cover.png'

export function Header() {
  return (
    <div className="w-full flex items-center justify-center h-[296px]">
      <div className='absolute -z-10 w-full'>
        <Image src={Cover} alt='' className='w-full'/>
      </div>
        <Image src={Logo} alt="Logo" className="mb-[46px]" />
    </div>
  )
}
