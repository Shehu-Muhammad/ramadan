import PrayerTimes from './components/PrayerTimes';

export default function Home() {
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
          </p>
        </div>

        {/* Card */}
        <div className='bg-white shadow-xl rounded-2xl p-8 border border-emerald-100'>
          <p className='text-gray-700 mb-8 leading-relaxed'>
            Fasting begins at Fajr and ends at Maghrib.
          </p>

          <PrayerTimes />
        </div>
      </div>
    </section>
  );
}
