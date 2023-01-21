import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="">
        <img
          className="relative -top-8 w-full h-full object-cover shadow-2xl shadow-slate-400"
          src={profile}
          alt="profile picture"
        />
      </div>
      <div className="col-span-3">
        <div className="border-b-2 border-gray-300 flex justify-between">
          <div className="pl-3">
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-gray-700">
              <span>-</span>photography
            </p>
            <p className="text-sm text-gray-700 flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <span>Toronto, RO</span>
            </p>
          </div>
          <div className="flex items-center">
            <div className="h-full pt-2 px-4 border-x-2 text-gray-700 border-gray-300 flex gap-3">
              <div className="flex flex-col items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
                <p className="text-black font-semibold">127</p>
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <p className="text-black font-semibold">354</p>
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-black font-semibold">470</p>
              </div>
            </div>
            <button className="mx-4 px-3 py-1 text-white bg-orange-400 flex gap-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
              </span>
              <span>Follow</span>
            </button>
          </div>
        </div>
        <div className="mt-3 px-3 grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <h3 className="font-semibold">About Me</h3>
            <p className="text-sm text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate in quae fugiat beatae tempore ducimus quod rem sapiente,
              pariatur laudantium ab autem eius aut? Quidem a totam autem.
            </p>
          </div>
          <div className="justify-self-end">
            <h2 className="font-semibold">Skills</h2>
            <ul className="text-sm text-gray-700">
              <li className="flex items-center justify-end gap-2">
                <span>Equipment</span>
                <div className="relative w-20 h-1 bg-gray-400 rounded-full">
                  <div className="absolute top-0 left-0 w-16 h-1 bg-black rounded-full"></div>
                  <div className="absolute -top-[2px] left-16 w-2 h-2 bg-black rounded-full"></div>
                </div>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>Editing</span>
                <div className="relative w-20 h-1 bg-gray-400 rounded-full">
                  <div className="absolute top-0 left-0 w-14 h-1 bg-black rounded-full"></div>
                  <div className="absolute -top-[2px] left-14 w-2 h-2 bg-black rounded-full"></div>
                </div>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>Marketing</span>
                <div className="relative w-20 h-1 bg-gray-400 rounded-full">
                  <div className="absolute top-0 left-0 w-5 h-1 bg-black rounded-full"></div>
                  <div className="absolute -top-[2px] left-5 w-2 h-2 bg-black rounded-full"></div>
                </div>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>Refactoring</span>
                <div className="relative w-20 h-1 bg-gray-400 rounded-full">
                  <div className="absolute top-0 left-0 w-20 h-1 bg-black rounded-full"></div>
                  <div className="absolute -top-[2px] left-20 w-2 h-2 bg-black rounded-full"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
