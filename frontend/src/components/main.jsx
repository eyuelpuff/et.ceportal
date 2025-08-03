import React, { Component } from 'react';
class Main extends Component {
    state = {  } 
    render() { 
        return (<main>
      <div className="flex flex-col justify-center items-center px-16 w-screen h-140 bg-cover bg-center bg-[url('./assets/addis_page1_bg.png')]">
        <div className="relative bottom-14 right-1  bg-linear-180 from-[#a6a6a6]/40 to-[#ffffff]/40 rounded-3xl flex justify-center items-center  h-30 w-200">
          <h1 className="text-6xl text-center ">Welcome to Addis Ababa City</h1>
        </div>
        <div className="flex relative bottom-18 w-screen justify-end p-8">
          <a><img className="h-20 w-20 " src="./src/assets/assets/portal_svg.svg" /></a>
        </div>

      </div>
      <ul className="scroll-smooth h-25 w-screen flex justify-around">
        <li className="flex-1 border-r border-r-black flex flex-col items-center justify-center"><div>Population</div><div>0</div></li>
        <li className="flex-1 border-r border-r-black flex flex-col items-center justify-center"><div>Area</div><div>0</div></li>
        <li className="flex-1 border-r border-r-black flex flex-col items-center justify-center"><div>Number of visitors</div><div>0</div></li>
        <li className="flex-1 border-r border-r-black flex flex-col items-center justify-center"><div>State Revenue</div><div>0</div></li>
      </ul>

      <div className="scroll-smooth w-screen h-200 flex p-8 gap-8 justify-around">
        <div className="flex-1 flex flex-col overflow-hidden">
          <img className="h-[60%]  object-cover" src="./src/assets/adanech_pic.jpg" />
          <div className="bg-[#0d4d99] h-[40%]  flex flex-col p-5">
            <h1 className="text-white text-center">Dr Adanech Abebe</h1>
            <p className="text-white text-justify">Adanech Abebe is the current mayor of Addis Ababa, making history as the first woman to hold the position. She was appointed in 2020 and has since focused on urban development and improving public services. Before becoming mayor, she served as Ethiopia’s Minister of Revenue. Adanech is known for her leadership in reforming tax systems and combating corruption. As mayor, she has worked on infrastructure projects and housing programs for low-income residents. Her role highlights the increasing presence of women in Ethiopian politics and leadership.</p>
          </div>
        </div>
        <div className="flex-1 bg-amber flex flex-col gap-8 p-8">
          <h2 className="text-center font-bold text-2xl">About Addis</h2>
          <p className="flex-wrap text-lg">Addis Ababa is the capital city of Ethiopia and one of the highest capitals in the world, sitting at about 2,355 meters above sea level. It was founded in 1886 by Emperor Menelik II and means "new flower" in Amharic. The city serves as the political, cultural, and economic center of the country. It is home to the African Union headquarters and numerous international organizations. Addis Ababa is known for its diverse population, vibrant markets, and historic landmarks like the National Museum and Holy Trinity Cathedral. Despite rapid development, the city still preserves elements of its rich cultural heritage.</p>
        </div>
      </div>
      <div className="w-screen">
        <h1 className="text-center my-8 text-3xl">City Services & Information </h1>
        <div className=" px-12 flex flex-row justify-center gap-8 h-100 w-screen mx-auto">
          <div className=" px-4 py-8 border border-black h-90 flex-1 rounded-xl flex flex-col justify-start">
            <div className="h-12 w-12 bg-[url('./assets/transportation_logo.png')] bg-cover"></div>
            <h1 className="mt-4 text-xl font-medium" > Public transportation </h1>

            <p className="mt-4 text-start">Access bus schedules, route maps, ticket information, and real time updates for all public transportation services</p>
            <ul className="mt-4 list-disc list-inside">
              <li className="list-disc">Bus schedules and routes</li>
              <li className="list-disc ">online ticket booking</li>
              <li className="list-disc">service updates and alerts</li>
            </ul>
          </div>
          <div className=" px-4 py-8 border border-black h-90 flex-1 rounded-2xl flex flex-col justify-start">
            <div className="z-40 h-12 w-12 bg-[url('./assets/property_logo.png')] bg-cover"></div>
            <h1 className="z-0 mt-4 text-xl font-medium">Property Tax & Assessement</h1>
            <p className="mt-4 text-start">Addis Ababa property tax information, payment options, assessment records, and related legal documentation.</p>
            <ul className="mt-4 list-inside list-disc">
              <li>Tax payment portal</li>
              <li>Property assessment records</li>
              <li>Legal amendments and updates</li>
            </ul>
          </div>
          <div className=" px-4 py-8 border border-black h-90  flex-1 rounded-2xl flex flex-col justify-start">
            <div className="mb-4 h-12 w-12 bg-[url('./assets/amendment_logo.png')] bg-cover"></div>
            <h1 className=" text-xl font-medium">Latest Amendments</h1>
            <p className="mt-4 text-start">Stay updated with the latest legal amendments, policy changes, and regulatory updates affecting city residents.</p>
            <ul className="mt-4 list-inside list-disc">
              <li>Recent policy changes</li>
              <li>Legal document updates</li>
              <li>Regulatory announcements</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-8 mt-10 h-130 w-screen p-8">
        <article className="flex flex-col flex-1 min-w-[200px] rounded-2xl bg-gray-100">
          <div className="flex-1 overflow-auto">
            <img className="w-full h-full object-cover object-top" src="../src/assets/news.jpg" />
          </div>
          <section className="flex-1 flex flex-col p-8">
            <h1 className="text-center font-bold text-2xl">UN Food Summit</h1>
            <p className="font-medium text-md">Ethiopia with the help of Italy will be hosting the coming UN food systems Summit, with Italy In connection with this conference, Prime Minister Abiy Ahmed (PhD) received and spoke to heads of institutions and leaders who arrived in Addis Ababa.<br />
              The Prime Minister received and spoke to the Prime Minister of Italy, the President of Somalia, the UN Deputy Secretary-General, the Director-General of FAO, the President of IFAD, the UN Assistant Secretary-General, and the UNDP Regional Director for Africa.</p>
            <a className="block underline min-w-20 mt-auto ml-auto" href="#">Read more</a>
          </section>
        </article>
        <article className="flex flex-col flex-1 relative min-w-[200px] rounded-2xl bg-gray-100">
          <div className="flex-1 overflow-auto">
            <img className="w-full h-full object-cover object-center" src="./src/assets/news3.jpg" />
          </div>
          <section className="flex-1 flex flex-col p-8">
            <h1 className="text-center font-bold text-2xl">UN Food Summit</h1>
            <p className="font-medium text-md">Ethiopia with the help of Italy will be hosting the coming UN food systems Summit, with Italy In connection with this conference, Prime Minister Abiy Ahmed (PhD) received and spoke to heads of institutions and leaders who arrived in Addis Ababa.<br />
              The Prime Minister received and spoke to the Prime Minister of Italy, the President of Somalia, the UN Deputy Secretary-General, the Director-General of FAO, the President of IFAD, the UN Assistant Secretary-General, and the UNDP Regional Director for Africa.</p>
            <a className="block underline min-w-20 mt-auto ml-auto" href="#">Read more</a>
          </section>
          <div className="absolute shadow-[-10px_0_10px_rgba(0,0,0,0.2)] right-0 w-5 h-110 -mr-4 bg-gray-900 opacity-50 hover:opacity-100">
          </div>

        </article>

      </div>
      <div>
        <h1 className="text-center my-8 text-3xl"> Public Safety & Emergency Services</h1>
        <div className="flex p-8 gap-8">
          <div className="p-8 h-100 flex-1 flex flex-col border border-black rounded-2xl">
            <div className="w-16 h-16 bg-[url('./assets/addisababa_police_logo.png')] bg-cover bg-center mb-8"></div>
            <h2 className="text-xl font-bold text-center"> Public Safety & Emergency Services</h2>
            <p className="text-md font-medium text-justify"> Report criminal activities and hazardous situations to local authorities through our secure reporting system. you can call them through</p>
            <ul className="list-disc list-inside">
              <li className="">dial 991 or 916</li>
              <li className="">text </li>
              <li className=""></li>
            </ul>

          </div>
          <div className="p-8 h-100 flex-1 flex flex-col border border-black rounded-2xl">
            <div className="w-16 h-16 bg-[url('./assets/addis_ababa_fire_station_logo.png')] bg-cover bg-center mb-8"></div>
            <h2 className="text-xl font-bold text-center">Fire & Rescue Services</h2>
            <p className="text-md font-medium text-start">Access fire department services, report hazardous conditions, and get emergency assistance information.</p>
            <ul className="list-disc list-inside">
              <li className="">dial 991 or 916</li>
              <li className="">text </li>
              <li className=""></li>
            </ul>
          </div>
          <div className="p-8 h-100 flex-1 flex flex-col border border-black rounded-2xl">
            <div className="w-16 h-16 bg-[url('./assets/traffic_bureau.png')] bg-cover bg-center mb-8"></div>
            <h2 className="text-xl font-bold text-center">Traffic & Road Incidents</h2>
            <p className="text-md font-medium text-justify">Report traffic accidents, road hazards, and access real-time traffic incident updates and alerts.</p>
            <ul className="list-disc list-inside">
              <li className="">dial 991 or 916</li>
              <li className="">text </li>
              <li className=""></li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-center my-8 text-3xl">Community & Engagement</h1>
          <div className="p-4 w-screen  px-16 h-100 gap-8 grid grid-cols-3 grid-rows-2">
            <div className="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img className="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
            <div className="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img className="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
            <div className="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img className="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
            <div className="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img className="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
            <div className="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img className="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
            <div className="p-4 flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img className="h-8 w-8 border-black rounded-xl" />
              <h1></h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center my-8 text-3xl">Urban Infrastructure & Utilities</h1>
          <div className="p-4 w-screen  px-16 h-100 gap-8 grid grid-cols-3 grid-rows-2">
            <div className="flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 p-4 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img className="h-8 w-8 border-black rounded-xl" />
              <p></p>
            </div>
            <div className="flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 p-4 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img className="h-8 w-8 border-black rounded-xl" />
              <p></p>
            </div>
            <div className="flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 p-4 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img className="h-8 w-8 border-black rounded-xl" />
              <p></p>
            </div>
            <div className="flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 p-4 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img className="h-8 w-8 border-black rounded-xl" />
              <p></p>
            </div>
            <div className="flex flex-col shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-500 hover:relative hover: bottom-2 p-4 rounded-2xl border border-black col-span-1 row-span-1 ">
              <img className="h-8 w-8 border-black rounded-xl" />
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </main >);
    }
}
 
export default Main;