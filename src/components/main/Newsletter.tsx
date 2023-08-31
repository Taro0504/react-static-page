const Newsletter = () => {
  return (
    <div className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
          <div className="mb-4 sm:mb-8">

            <h2 className="text-indigo-500 font-bold text-xl text-center sm:text-2xl">最新情報を入手する</h2>
            <p className="text-gray-500 text-center">ニュースレターに登録する</p>
          </div>
          <form action="" className="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
            <input 
            type="email"
            placeholder="メールアドレス"
            className="flex-1 w-full rounded border-gray-300 focus:ring focus:ring-indigo-300 focus:border-gray-300"
            />
            <button className="inline-block px-8 py-2 rounded text-white text-sm font-semibold bg-indigo-500 md:text-base">Send</button>
          </form>
          <small className="text-gray-400 text-xs text-center"><a href="#" className="underline">利用規約</a>と<a href="#" className="underline">個人情報保護方針</a>に同意してニュースレターを購読する</small>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;