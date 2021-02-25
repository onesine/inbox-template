import {MENU, TAGS, USERS} from "../const/inboxTemplate";

const InboxTemplate = () => {
    const menu = MENU;

    const tags = TAGS;

    const users = USERS;

    return (
        <div className="min-h-screen px-10 py-16 bg-gray-200">
            <div className="flex w-full min-h-screen overflow-hidden bg-white rounded-4xl shadow-sm">
                <div className="flex flex-col justify-between w-24 min-h-screen py-4">
                    <div className="w-full h-24">
                        <div className="flex items-center justify-center w-full h-full">
                            <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full space-y-2">
                        <div className="flex items-center justify-center w-full border-r-4 border-white cursor-pointer hover:border-green-500">
                            <svg className="p-4 text-gray-400 bg-white h-15 w-15 rounded-2xl hover:bg-green-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>

                        <div className="flex items-center justify-center w-full border-r-4 border-white cursor-pointer hover:border-green-500">
                            <svg className="p-4 text-gray-400 bg-white h-15 w-15 rounded-2xl hover:bg-green-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                        </div>

                        <div className="flex items-center justify-center w-full border-r-4 border-white cursor-pointer hover:border-green-500">
                            <svg className="p-4 text-gray-400 bg-white h-15 w-15 rounded-2xl hover:bg-green-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <div className="flex items-center justify-center w-full border-r-4 border-green-500 cursor-pointer">
                            <svg className="p-4 text-gray-400 text-green-500 h-15 w-15 bg-green-50 rounded-2xl" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                        </div>

                        <div className="flex items-center justify-center w-full border-r-4 border-white cursor-pointer hover:border-green-500">
                            <svg className="p-4 text-gray-400 bg-white h-15 w-15 rounded-2xl hover:bg-green-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
                        </div>

                        <div className="flex items-center justify-center w-full border-r-4 border-white cursor-pointer hover:border-green-500">
                            <svg className="p-4 text-gray-400 bg-white h-15 w-15 rounded-2xl hover:bg-green-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
                        </div>
                    </div>

                    <div className="flex justify-center w-full">
                        <img className="object-cover object-center w-12 h-12 rounded-full" src="image/profile.jpg" alt=""/>
                    </div>
                </div>
                <div className="flex flex-auto min-h-screen py-4 overflow-hidden border-l rounded-4xl">
                    <div className="w-2.5/12 h-full px-5">
                        <div className="w-full h-24">
                            <div className="flex items-center w-full h-full space-x-4">
                                <svg className="w-12 h-12 p-3 text-gray-400 bg-gray-200 rounded-2xl" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                <h4 className="text-2xl font-bold text-gray-700">Mailbox</h4>
                            </div>
                        </div>
                        <hr/>

                        <div className="mt-5">
                            <button className="flex items-center block w-full px-3 py-4 text-lg font-semibold text-white bg-green-500 focus:outline-none space-x-3 rounded-2xl">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                <span className="text-white text-opacity-75">New message</span>
                            </button>

                            <div className="mt-14">
                                <div className=" space-y-6">
                                    {menu.map((item, index) => (
                                        <div key={index} className={`cursor-pointer flex items-center justify-between${item.active ? ' text-green-500' : ' text-gray-400 hover:text-green-500'}`}>
                                            <div className={`flex items-center space-x-6`}>
                                                {item.icons}
                                                <span className={`font-semibold text-lg${!item.active ? ' text-gray-700 hover:text-green-500' : ''}`}>{item.title}</span>
                                            </div>
                                            {item.active && (
                                                <span className="px-3 py-1 font-semibold text-white bg-green-500 rounded-xl">1</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-20">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-gray-500">Labels</h4>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-8 h-8 py-1 text-green-500 bg-indigo-50 rounded-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                        <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
                                    </div>
                                </div>

                                <div className="mt-5 space-y-4">
                                    {tags.map((item, index) => (
                                        <div key={index} className="flex items-center cursor-pointer space-x-6">
                                            {item.icons}
                                            <span className="text-sm font-semibold text-gray-700">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-3.5/12 h-full overflow-hidden bg-indigo-50 rounded-2xl">
                        <div className="w-full h-24">
                            <div className="flex items-center w-full h-full px-5">
                                <div className="relative w-full">
                                    <input className="w-full h-16 pl-6 pr-16 text-xl font-semibold text-gray-400 placeholder-gray-400 bg-gray-200 focus:outline-none placeholder-opacity-75 rounded-2xl" type="text" placeholder="Search"/>
                                    <svg className="absolute top-0 right-0 w-8 h-8 mt-4 mr-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className="mx-5 mt-5 mb-8 space-y-1">
                            {users.map((item, index) => (
                                <div key={index} className={`cursor-pointer flex items-center justify-between w-full px-6 py-5 rounded-xl${item.active ? ' bg-white shadow' : ' hover:bg-white hover:shadow'}`}>
                                    <div className="flex items-center space-x-4">
                                        {item.profile}
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-700">{item.full_name}</h3>
                                            <p className="font-semibold text-gray-400">{item.message}</p>
                                        </div>
                                    </div>
                                    <div className="text-right space-y-2">
                                        <span className="block font-semibold text-gray-400">{item.date}</span>
                                        {item.icons}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-auto h-full px-7">
                        <div className="w-full h-24">
                            <div className="flex items-center justify-between w-full h-full">
                                <div className="cursor-pointer flex items-center px-3 py-2 text-yellow-900 bg-yellow-200 rounded-lg space-x-2">
                                    <span className="text-xs font-bold">Promising offers</span>
                                    <svg className="w-5 h-5 py-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </div>

                                <div className="flex text-gray-300 space-x-4">
                                    <svg className="cursor-pointer w-6 h-6 hover:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    <svg className="cursor-pointer w-6 h-6 hover:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" /></svg>
                                    <svg className="cursor-pointer w-6 h-6 hover:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                    <svg className="cursor-pointer w-6 h-6 hover:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className="mt-5">
                            <p className="font-semibold text-gray-400">Today, 16th September 2020, 11:26</p>
                            <h2 className="mt-4 mb-12 text-4xl font-semibold text-gray-700">Metting with new investors</h2>

                            <div className="divide-y-2">
                                <div className="flex items-center justify-between py-4">
                                    <div className="flex items-center space-x-6">
                                        <img className="object-cover object-center w-10 h-10 rounded-full" src="image/jk.jpg" alt=""/>
                                        <h3 className="font-semibold text-gray-700 text">Jessica Koel</h3>
                                        <p className="text-sm font-semibold text-gray-400">- Hi, I have a new meeting opportunity...</p>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-400">14.09.2020 09:25</p>
                                </div>

                                <div className="flex items-center justify-between py-4">
                                    <div className="flex items-center space-x-6">
                                        <svg className="w-6 h-6 text-gray-400" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g stroke="none"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 20L1 12l10-8v5c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81A9 9 0 0013 15h-2v5z"/></g></svg>
                                        <h3 className="font-semibold text-gray-700 text">You</h3>
                                        <p className="text-sm font-semibold text-gray-400">- Hi, thanks for the info, of course we need to...</p>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-400">14.09.2020 10:11</p>
                                </div>

                                <div className="flex items-center justify-between py-4">
                                    <div className="flex items-center space-x-6">
                                        <img className="object-cover object-center w-10 h-10 rounded-full" src="image/jk.jpg" alt=""/>
                                        <h3 className="font-semibold text-gray-700 text">Jessica Koel</h3>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-400">Today, 16.09.2020 11:26</p>
                                </div>
                            </div>

                            <div className="mt-8 text-xl text-gray-600">
                                Hey Jontray, <br/> <br/>
                                Do you  remember about  tomorrow's meeting with new investors? <br/>
                                Here you have more information about the conference at witch we will be <br/>
                                together with the client: <span><a className="text-green-500 underline" href="https://conference.com/agenda/start">https://conference.com/agenda/start</a></span>
                                <br/> <br/>
                                Regards, <br/>
                                Jessica
                            </div>

                            <div className="flex flex-col w-full h-48 mt-8 overflow-hidden border-2 rounded-2xl">
                                <textarea className="w-full px-6 py-4 m-0 font-semibold text-gray-400 border-b-2 resize-none h-35 focus:outline-none" placeholder="Write you message..." name="" id="" cols="30" rows="8"/>
                                <div className="flex flex-auto w-full text-gray-300 divide-x-2">
                                    <div className="flex items-center justify-center w-4/12 space-x-6">
                                        <svg className="w-6 h-6 text-green-500 cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M333.49 238a122 122 0 0027-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 00-16 16v48a16 16 0 0016 16h31.87v288H34a16 16 0 00-16 16v48a16 16 0 0016 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 010 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 010 112z" stroke="none"/></svg>
                                        <svg className="w-6 h-6 cursor-pointer hover:text-green-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 48v32a16 16 0 01-16 16h-62.76l-80 320H208a16 16 0 0116 16v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h62.76l80-320H112a16 16 0 01-16-16V48a16 16 0 0116-16h192a16 16 0 0116 16z" stroke="none"/></svg>
                                        <svg className="w-6 h-6 cursor-pointer hover:text-green-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0016-16V16a16 16 0 00-16-16H272a16 16 0 00-16 16v32a16 16 0 0016 16h32v160a80 80 0 01-160 0V64h32a16 16 0 0016-16V16a16 16 0 00-16-16H32a16 16 0 00-16 16v32a16 16 0 0016 16zm400 384H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z" stroke="none"/></svg>
                                        <svg className="cursor-pointer w-7 h-7 hover:text-green-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 480c-35.29 0-64-29.11-64-64.88 0-33.29 28.67-65.4 44.08-82.64 1.87-2.1 3.49-3.91 4.68-5.31a19.94 19.94 0 0130.55 0c1.13 1.31 2.63 3 4.36 4.93 15.5 17.3 44.33 49.51 44.33 83.05 0 35.74-28.71 64.85-64 64.85zm-17.77-203.36L166.89 47.22a52.1 52.1 0 00-73.6 0l-4.51 4.51a53.2 53.2 0 00-15.89 37.33A51.66 51.66 0 0088.14 126l41.51 41.5L45 252a44.52 44.52 0 00-13 32 42.81 42.81 0 0013.5 30.84l131.24 126a44 44 0 0061.08-.18l124.11-120.28a15.6 15.6 0 018.23-4.29 69.21 69.21 0 0111.93-.86h.3a22.53 22.53 0 0015.84-38.59zM152.29 144.85l-41.53-41.52a20 20 0 010-28.34l5.16-5.15a20.07 20.07 0 0128.39 0L186 111.21z" stroke="none"/></svg>
                                    </div>
                                    <div className="flex items-center flex-auto pl-10 space-x-6">
                                        <svg className="cursor-pointer w-7 h-7 hover:text-green-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M61.77 401l17.5-20.15a19.92 19.92 0 005.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 00-8 8v16a8 8 0 008 8h22.83a157.41 157.41 0 00-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 01-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-160H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16V80a16 16 0 00-16-16zm0 320H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zM16 160h64a8 8 0 008-8v-16a8 8 0 00-8-8H64V40a8 8 0 00-8-8H32a8 8 0 00-7.14 4.42l-8 16A8 8 0 0024 64h8v64H16a8 8 0 00-8 8v16a8 8 0 008 8zm-3.91 160H80a8 8 0 008-8v-16a8 8 0 00-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 019.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z" stroke="none"/></svg>
                                        <svg className="cursor-pointer w-7 h-7 hover:text-green-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 48a48 48 0 1048 48 48 48 0 00-48-48zm0 160a48 48 0 1048 48 48 48 0 00-48-48zm0 160a48 48 0 1048 48 48 48 0 00-48-48zm448 16H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16V80a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16z" stroke="none"/></svg>
                                        <svg className="cursor-pointer w-7 h-7 hover:text-green-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 352h262.34A12.82 12.82 0 00288 339.17v-38.34A12.82 12.82 0 00275.17 288H12.83A12.82 12.82 0 000 300.83v38.34A12.82 12.82 0 0012.83 352zm0-256h262.34A12.82 12.82 0 00288 83.17V44.83A12.82 12.82 0 00275.17 32H12.83A12.82 12.82 0 000 44.83v38.34A12.82 12.82 0 0012.83 96zM432 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z" stroke="none"/></svg>
                                        <svg className="cursor-pointer w-7 h-7 hover:text-green-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zM108.1 96h231.81A12.09 12.09 0 00352 83.9V44.09A12.09 12.09 0 00339.91 32H108.1A12.09 12.09 0 0096 44.09V83.9A12.1 12.1 0 00108.1 96zm231.81 256A12.09 12.09 0 00352 339.9v-39.81A12.09 12.09 0 00339.91 288H108.1A12.09 12.09 0 0096 300.09v39.81a12.1 12.1 0 0012.1 12.1z" stroke="none"/></svg>
                                        <svg className="cursor-pointer w-7 h-7 hover:text-green-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 224h416a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16zm416 192H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm3.17-384H172.83A12.82 12.82 0 00160 44.83v38.34A12.82 12.82 0 00172.83 96h262.34A12.82 12.82 0 00448 83.17V44.83A12.82 12.82 0 00435.17 32zm0 256H172.83A12.82 12.82 0 00160 300.83v38.34A12.82 12.82 0 00172.83 352h262.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288z" stroke="none"/></svg>
                                        <svg className="cursor-pointer w-7 h-7 hover:text-green-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" stroke="none"/></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-8 text-gray-300">
                                <div className="flex space-x-7">
                                    <svg className="w-5 h-5 hover:text-green-500 cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.404 5.11L9.389 4.096 4.314 9.17a2.152 2.152 0 103.045 3.044l6.09-6.089a3.588 3.588 0 00-5.075-5.074L1.98 7.444l-.014.013c-1.955 1.955-1.955 5.123 0 7.077s5.123 1.954 7.078 0l.013-.014.001.001 4.365-4.364-1.015-1.014-4.365 4.363-.013.013c-1.392 1.392-3.656 1.392-5.048 0a3.572 3.572 0 01.014-5.06l-.001-.001L9.39 2.065c.839-.84 2.205-.84 3.045 0s.839 2.205 0 3.044l-6.09 6.089a.718.718 0 01-1.015-1.014l5.075-5.075z" stroke="none"/></svg>
                                    <svg className="w-6 h-6 hover:text-green-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                                </div>

                                <div className="flex items-center space-x-6">
                                    <svg className="w-6 h-6 hover:text-green-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                    <svg className="w-6 h-6 hover:text-green-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
                                    <button className="flex items-center px-8 py-4 text-white bg-green-500 space-x-3 rounded-2xl">
                                        <span className="text-xl font-semibold">Send</span>
                                        <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" stroke="none"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center mt-4 text-gray-500 font-semibold text-2xl">
                👨‍💻 😎
                KeyVue mailbox by <a href="https://dribbble.com/shots/14715836-KeyVue-mailbox/attachments/6415867?mode=media" className="focus:outline-none text-green-500 underline">Karol Kos</a><span> </span>
                rebuild with ❤ by <a href="https://dribbble.com/shots/14715836-KeyVue-mailbox/attachments/6415867?mode=media" className="focus:outline-none text-green-500 underline">g2ek</a><span> </span>
                👋 👋👋👨‍💻
            </p>
        </div>
    );
};

export default InboxTemplate;
