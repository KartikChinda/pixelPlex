
import CurrTime from "@/components/CurrTime";
import MeetingCards from "@/components/Meetings/MeetingCards";

const Home = () => {


    return (
        <section className='flex size-full flex-col gap-10 text-palette-4'>
            <div className='h-[300px] w-full rounded-xl bg-[url(/images/hero-background.png)] bg-cover'>

                <div className='flex flex-col h-[300px] justify-between items-start  p-4 md:text-xl'>
                    {/* <div>
                        Hello, have a nice day.
                    </div> */}
                    <div>
                        <CurrTime />
                    </div>

                </div>
            </div>
            <MeetingCards />
        </section>

    )
}

export default Home