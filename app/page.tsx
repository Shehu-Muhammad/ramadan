import Countdown from './components/Countdown';

async function getPrayerTimes() {
  const res = await fetch(
    'https://api.aladhan.com/v1/timingsByCity?city=London&country=UK&method=2',
    { next: { revalidate: 86400 } /*24 hours*/ },
  );

  const data = await res.json();

  return {
    fajr: data.data.timings.Fajr,
    maghrib: data.data.timings.Maghrib,
  };
}

export default async function Home() {
  const data = await getPrayerTimes();

  return (
    <section className='bg-gradient-to-b from-emerald-50 to-white py-24 px-6 min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        {/* Heading */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-emerald-800 mb-4'>
            Ramadan Daily Reflection
          </h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            A moment to pause, reflect, and prepare your heart for today’s fast.
            Track your suhoor, anticipate iftar, and stay spiritually grounded.
          </p>
        </div>

        {/* Prayer Times Card */}
        <div className='bg-white shadow-xl rounded-2xl p-8 border border-emerald-100'>
          <p className='text-gray-700 mb-8 leading-relaxed'>
            Fasting begins at Fajr and ends at Maghrib. May this day bring you
            patience, clarity, and barakah in every moment.
          </p>

          {/* Times */}
          <div className='space-y-6 mb-10'>
            <div className='flex items-start gap-4'>
              <span className='mt-2 w-3 h-3 bg-emerald-600 rounded-full'></span>
              <div>
                <h3 className='font-semibold text-emerald-800 text-lg'>
                  Suhoor Ends (Fajr)
                </h3>
                <p className='text-gray-600'>{data.fajr}</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <span className='mt-2 w-3 h-3 bg-emerald-600 rounded-full'></span>
              <div>
                <h3 className='font-semibold text-emerald-800 text-lg'>
                  Iftar (Maghrib)
                </h3>
                <p className='text-gray-600'>{data.maghrib}</p>
              </div>
            </div>
          </div>

          {/* Countdown Section */}
          <div className='mt-6 p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center'>
            <h3 className='text-emerald-900 font-semibold text-lg mb-3'>
              Countdown to Iftar
            </h3>
            <Countdown maghrib={data.maghrib} />
          </div>
        </div>
      </div>
    </section>
  );
}
