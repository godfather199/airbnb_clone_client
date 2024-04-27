


function HeadingContent({name}) {

    return (
      <div className="flex flex-col gap-6">
        <div className="">
          <span className="text-3xl font-bold text-red-500">ACCOUNT</span>
        </div>

        <div className="">
          <span className="text-lg font-semibold text-gray-500">
            Welcome to your account, <span className=" font-mono text-red-500">{name}</span>  
          </span>
        </div>
      </div>
    );
}

export default HeadingContent