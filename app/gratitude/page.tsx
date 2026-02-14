export default function Gratitude() {
  return (
    <section className='bg-gradient-to-b from-emerald-50 to-white py-24 px-6'>
      <div className='max-w-4xl mx-auto'>
        {/* <!-- Heading --> */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-emerald-800 mb-4'>
            Finding Blessings During Ramadan
          </h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Ramadan is a sacred time for reflection, gratitude, and spiritual
            renewal. It reminds us to slow down, appreciate our blessings, and
            reconnect with what truly matters.
          </p>
        </div>

        {/* <!-- Card --> */}
        <div className='bg-white shadow-xl rounded-2xl p-8 border border-emerald-100'>
          <p className='text-gray-700 mb-8 leading-relaxed'>
            During Ramadan, we are encouraged to reflect on the blessings in our
            lives and express gratitude for them. This is a time to appreciate
            the simple joys and the abundance that surrounds us.
          </p>

          {/* <!-- Bullet List --> */}
          <ul className='space-y-6'>
            <li className='flex items-start gap-4'>
              <span className='mt-2 w-3 h-3 bg-emerald-600 rounded-full'></span>
              <div>
                <h3 className='font-semibold text-emerald-800 text-lg'>
                  Family & Friends
                </h3>
                <p className='text-gray-600'>
                  Cherish the moments spent with loved ones — from sharing iftar
                  meals to meaningful late-night conversations.
                </p>
              </div>
            </li>

            <li className='flex items-start gap-4'>
              <span className='mt-2 w-3 h-3 bg-emerald-600 rounded-full'></span>
              <div>
                <h3 className='font-semibold text-emerald-800 text-lg'>
                  Health & Well-being
                </h3>
                <p className='text-gray-600'>
                  Being able to wake up healthy and fast is a powerful blessing
                  that many may not experience.
                </p>
              </div>
            </li>

            <li className='flex items-start gap-4'>
              <span className='mt-2 w-3 h-3 bg-emerald-600 rounded-full'></span>
              <div>
                <h3 className='font-semibold text-emerald-800 text-lg'>
                  Food for the Day
                </h3>
                <p className='text-gray-600'>
                  Having food for suhoor and iftar reminds us not to take daily
                  provisions for granted.
                </p>
              </div>
            </li>

            <li className='flex items-start gap-4'>
              <span className='mt-2 w-3 h-3 bg-emerald-600 rounded-full'></span>
              <div>
                <h3 className='font-semibold text-emerald-800 text-lg'>
                  Community & Support
                </h3>
                <p className='text-gray-600'>
                  Shared meals, mosque gatherings, and open doors strengthen
                  unity and belonging.
                </p>
              </div>
            </li>

            <li className='flex items-start gap-4'>
              <span className='mt-2 w-3 h-3 bg-emerald-600 rounded-full'></span>
              <div>
                <h3 className='font-semibold text-emerald-800 text-lg'>
                  Spiritual Growth
                </h3>
                <p className='text-gray-600'>
                  Fasting, prayer, and reflection create space for
                  self-improvement and deeper connection with faith.
                </p>
              </div>
            </li>

            <li className='flex items-start gap-4'>
              <span className='mt-2 w-3 h-3 bg-emerald-600 rounded-full'></span>
              <div>
                <h3 className='font-semibold text-emerald-800 text-lg'>
                  Empathy & Compassion
                </h3>
                <p className='text-gray-600'>
                  Experiencing hunger fosters empathy for those facing hardship
                  and inspires generosity and kindness.
                </p>
              </div>
            </li>
          </ul>

          {/* <!-- Closing --> */}
          <div className='mt-10 p-6 bg-emerald-50 rounded-xl border border-emerald-200'>
            <p className='text-emerald-900 font-medium'>
              Ramadan reminds us that many blessings are often taken for
              granted. It is a time to find joy in simplicity, give thanks
              sincerely, and appreciate the abundance in our lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
