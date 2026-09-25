import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-center bg-linear-to-r from-[#FFFFFF] to-[#F0F1FF] font-sans">
      <main className="w-full h-full flex-col items-center justify-center py-4 pb-32 px-4 bg-linear-to-r from-[#FFFFFF] to-[#F0F1FF]">
        <div className="grid grid-rows-1 grid-cols-[1155px_minmax(100px,_1fr)] items-center pb-12 mx-48 lg:pb-0">
          <Image
            className="mr-28.5 md:mr-[552px]"
            src="/logo-dark.svg"
            alt="Skilled logo"
            width={89}
            height={35}
          />
          <button className="flex rounded-full bg-[#13183F] px-7 py-3 text-center font-semibold text-white transition-colors duration-200 hover:bg-[#666CA3] w-[150px] h-[48px]">
            Get Started
          </button>
        </div>
        <div className="flex flex-col items-center md:grid grid-cols-[350px_minmax(900px,_1fr)_100px] lg:grid grid-cols-[650px_minmax(900px,_1fr)]">
          <div className="flex flex-col gap-2 md:max-w-sm lg:mx-36 xl:">
            <div className="grid grid-cols-1 gap-4 items-start w-[343]">
              <h1 className="text-[40px] font-extrabold leading-12.75 tracking-tight text-black">
                Maximize skill, minimize budget
              </h1>
              <p className="text-[18px] leading-7 text-[#83869A]">
                Our modern courses across a range of in-demand skills will give
                you the knowledge you need to live the life you want.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-2">
              <button className="rounded-full h-[56px] w-[167px] bg-gradient-to-r from-[#F02AA6] to-[#FF6F48] px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:from-[#FFA29A] hover:to-[#FF8BBE]">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative max-w-auto overflow-hidden w-auto h-auto">
            <picture className="relative md:-right-[130px] md:-top-[50px] z-50 lg:-right-[110px] lg:-top-[50px] pointer-events-none">
              <source media="(min-width: 768px)" srcSet="./image-hero-tablet@2x.webp"/>
              <Image
                className="min-[320px]:w-[327px] min-[320px]:h-[301px] md:w-[620px] md:h-[420px] lg:w-[992px] lg:h-[992px]"
                src="/image-hero-mobile@2x.webp"
                alt="Skilled logo"
                width={327}
                height={301}
                priority
              />
            </picture>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base md:grid grid-cols-2 lg: grid grid-cols-3">
          <div className="w-[343px] h-[120px]">
            <p className="text-white text-start rounded-[10px] bg-gradient-to-r from-[#F02AA6] to-[#FF6F48] px-7 pt-3 pb-6 text-[24px] font-extrabold md:w-[340px] md:h-[259px]">
              Check out our most popular courses!
            </p>
          </div>
          <div className="relative rounded-[10px] mt-8 w-[340px]">
            <Image
              className="absolute -top-7 left-7 flex items-center"
              src="/icon-animation.svg"
              alt="Animation icon"
              width={56}
              height={56}
            />
            <div className="flex flex-col gap-2 px-7 pb-6">
              <h3 className="text-[#13183F] font-extrabold text-[20px] text-start pt-12">
                Animation
              </h3>
              <p className="text-[#83869A] font-medium text-start text-[16px] leading-[26px] mt-3">
                Learn the latest animation techniques to create stunning motion
                design and captivate your audience.
              </p>
              <button className="text-[#F74780] font-bold text-[18px] text-start mt-6 hover:underline">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative rounded-[10px] mt-8 w-[340px]">
            <Image
              className="absolute -top-7 left-7 flex items-center"
              src="/icon-design.svg"
              alt="Design icon"
              width={56}
              height={56}
            />
            <div className="flex flex-col gap-2 px-7 pb-6">
              <h3 className="text-[#13183F] font-extrabold text-[20px] text-start pt-12">
                Design
              </h3>
              <p className="text-[#83869A] font-medium text-start text-[16px] leading-[26px] mt-3">
                Create beautiful, usable interfaces to help shape the future of
                how the web looks.
              </p>
              <button className="text-[#F74780] font-bold text-[18px] text-start mt-6 hover:underline">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative rounded-[10px] mt-8 w-[340px]">
            <Image
              className="absolute -top-7 left-7 flex items-center"
              src="/icon-photography.svg"
              alt="Photography icon"
              width={56}
              height={56}
            />
            <div className="flex flex-col gap-2 px-7 pb-6">
              <h3 className="text-[#13183F] font-extrabold text-[20px] text-start pt-12">
                Photography
              </h3>
              <p className="text-[#83869A] font-medium text-start text-[16px] leading-[26px] mt-3">
                Explore critical fundamentals like lighting, composition, and
                focus to capture exceptional photos.
              </p>
              <button className="text-[#F74780] font-bold text-[18px] text-start mt-6 hover:underline">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative rounded-[10px] mt-8 w-[340px]">
            <Image
              className="absolute -top-7 left-7 flex items-center"
              src="/icon-crypto.svg"
              alt="Crypto icon"
              width={56}
              height={56}
            />
            <div className="flex flex-col gap-2 px-7 pb-6">
              <h3 className="text-[#13183F] font-extrabold text-[20px] text-start pt-12">
                Crypto
              </h3>
              <p className="text-[#83869A] font-medium text-start text-[16px] leading-[26px] mt-3">
                All you need to know to get started investing in crypto. Go from
                beginner to advanced with this 54 hour course.
              </p>
              <button className="text-[#F74780] font-bold text-[18px] text-start mt-6 hover:underline">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative rounded-[10px] mt-8 w-[340px]">
            <Image
              className="absolute -top-7 left-7 flex items-center"
              src="/icon-business.svg"
              alt="Business icon"
              width={56}
              height={56}
            />
            <div className="flex flex-col gap-2 px-7 pb-6">
              <h3 className="text-[#13183F] font-extrabold text-[20px] text-start pt-12">
                Business
              </h3>
              <p className="text-[#83869A] font-medium text-start text-[16px] leading-[26px] mt-3">
                A step-by-step playbook to help you start, scale, and sustain
                your business without outside investment.
              </p>
              <button className="text-[#F74780] font-bold text-[18px] text-start mt-6 hover:underline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="flex w-full h-full flex-row items-center py-6 px-4 bg-[#13183F]">
        <Image
          className="mr-28.5 md:mr-[552px] xl:mr-[1020px]"
          src="/logo-light.svg"
          alt="Skilled logo"
          width={89}
          height={35}
        />
        <button className="flex rounded-full bg-linear-to-r from-[#4851FF] to-[#F02AA6] px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:from-[#aeb2ff] hover:to-[#ffade1]">
          Get Started
        </button>
      </div>
    </div>
  );
}
