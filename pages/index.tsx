import type {NextPage} from 'next'
import Image from 'next/image';
import {HomeLayout} from '../components/layout';

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <div>
          <Image src={'/bg_about.jpg'} layout={'fill'} objectFit={'cover'}/>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
