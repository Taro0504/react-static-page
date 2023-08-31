const Stats = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="text-center font-bold text-2xl mb-4 lg:text-3xl">チームの実績</h2>
          <p className="mx-auto text-center text-gray-400 md:text-lg">これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x">
          <div className="mt-8">
            <span className="block text-indigo-500 font-bold text-lg sm:text-xl lg:text-3xl">200</span>
            <span className="block text-sm font-bold">営業所</span>
          </div>
          <div className="mt-8">
            <span className="block text-indigo-500 font-bold text-lg sm:text-xl lg:text-3xl">500+</span>
            <span className="block text-sm font-bold">開発者</span>
          </div>
          <div className="mt-8">
            <span className="block text-indigo-500 font-bold text-lg sm:text-xl lg:text-3xl">1000+</span>
            <span className="block text-sm font-bold">顧客数</span>
          </div>
          <div className="mt-8">
            <span className="block text-indigo-500 font-bold text-lg sm:text-xl lg:text-3xl">A couple</span>
            <span className="block text-sm font-bold">Coffee breaks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;