const FirstThreeMonths = () => {
  return (
    <>
      <img
        src="/images/icon-community/Group-125.png"
        loading="lazy"
        sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, 97vw"
        width={1147}
        alt="paketus-icon-community"
        srcSet="/images/icon-community/Group-125-p-500.png 500w,
          /images/icon-community/Group-125-p-800.png 800w,
          /images/icon-community/Group-125-p-1080.png 1080w,
          /images/icon-community/Group-125-p-1600.png 1600w,
          /images/icon-community/Group-125-p-2000.png 2000w,
          /images/icon-community/Group-125.png 2294w"
        className={`w-full h-auto mt-[-130px]`}
      />
      <div className="text-[38px] font-bold text-black text-center max-w-[510px] w-full h-fit mx-auto mb-40">
        Üyelikten itibaren ilk <span className="text-secondary">3 ay</span> iş
        yerlerine komisyon yok!
      </div>
    </>
  );
};

export default FirstThreeMonths;
