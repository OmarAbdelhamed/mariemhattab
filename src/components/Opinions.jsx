import Carousel from "../utils/Carousel"
import {messages} from "../../messages.json"

const Opinions = () => {
  return (
    <div className=' flex flex-col items-center justify-center place-items-center'>
      <img className='w-[70px] h-[70px] items-center' src='/assets/opinions icon.png' alt='' />
      <h1 className='text-[48px] text-(--Main) mb-[77px]'>آراء المستفيدين</h1>
      <div>
        <Carousel data={messages} />
      </div>
    </div>
  )
}

export default Opinions