import Image from 'next/image'
import MyImage from "@/public/assets/images/me/me.jpeg"


export default function Profile() {
  return (
    <div className='flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground'>
        {/*Photo*/}
        <div className="reltive w-[100px] h-[100px] rounded-full flex items_center justify-center bg-gradient-to-r from-blue-900 to-purple-900">
            <Image
            src={MyImage}
            alt='Lungelo Packery photo'
            className='w-[95px] h-[95px] border-purple-700 rounded-full object-cover'
            /> 
        
        </div>
        {/*Name*/}
        <div className='text-3xl font-medium'>Lungelo Packery</div>
    </div>
  )
}
