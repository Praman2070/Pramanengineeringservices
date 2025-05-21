'use client';
import Image from 'next/image';

const HeritagePage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-3 gap-6">

      {/* Main Content */}
      <div className="md:col-span-2 space-y-6">
        <Image
          src="/images/o4.png"
          alt="Heritage"
          width={800}
          height={400}
          className="rounded-md w-full object-cover"
        />

        <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
          <p>
            3D Pointshot provides quickly capturing highly accurate and detailed as-built conditions of historical
            structures and buildings with 3D Laser scanning technology. The 3D laser scanner technology has provided
            the advanced technology for surveying and documenting the heritage sites precisely without damaging its
            original structure or environment.
          </p>

          <p>
            High-resolution 3D recordings of sites, monuments and artifacts allow us to monitor, study, disseminate and
            understand our shared cultural history – it is essential that the vast archives of 3D and color data are securely
            archived. An integral component of this work is to record surfaces and forms at the highest possible resolutions
            and archive them in raw formats, so the data can continue to be re-processed as technology advances. In some cases,
            the data will need to be re-materialized as a physical object – and this is where a great deal of misunderstanding exists.
          </p>
        </div>

        <div className="bg-gray-50 p-4 border-l-4 border-green-600 rounded-md">
          <h2 className="text-green-600 font-semibold mb-2">
            Benefits of 3D Laser Scanning in Heritage
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li><span className="text-blue-600">High precision and high detail</span></li>
            <li>Orthophoto</li>
            <li>Cost effective</li>
            <li>Easy to use</li>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        <div className="bg-white shadow-md rounded-md">
          <h3 className="bg-white text-green-600 px-4 py-2 rounded-t-md font-semibold">POPULAR CATEGORY</h3>
          <ul className="p-4 text-sm space-y-2 text-blue-700">
            {[
              'Oil & Gas',
              'Offshore And Marine',
              'Architecture And Construction',
              'Heritage',
              'Ship Building',
              'Aviation',
              'Mining And Tunneling',
              'Wind Power',
              'Urban Planning',
              'Reverse Engineering',
            ].map((item, index) => (
              <li key={index} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-green-600 font-semibold mb-3">GET IN TOUCH</h3>
          <a href='/ContactUs'>  
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Get In Touch
            </button>
          </a>
        </div>
      </aside>
    </div>
  );
};

export default HeritagePage;
