const Footer = () => {
  return (<>
    <footer className="fixed  mt-20 bg-[#f5f5f5] px-10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row">


        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Arman Kadian
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Frontend Developer • React Enthusiast
          </p>
        </div>


        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="transition hover:text-black">
            Home
          </a>

          <a href="#" className="transition hover:text-black">
            Projects
          </a>

          <a href="#" className="transition hover:text-black">
            Education
          </a>

          <a href="#" className="transition hover:text-black">
            Skills
          </a>
        </div>


        <div className="text-sm text-gray-500">
          © 2026 Arman Kadian. All rights reserved.
        </div>

      </div>
    </footer>
  </>)
}

export default Footer;