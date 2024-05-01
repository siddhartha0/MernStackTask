function TopPart() {
  return (
    <div className="flex flex-col laptop:w-[640px]  m-auto place-items-center gap-[16px] p-mobileTopBodyPadding tablet:p-laptopTobBodyPadding">
      <p className="text-button uppercase">1% of the industry</p>
      <div className="text-[36px] tablet:text-[52px] leading-[44px] tablet:leading-[60px] font-semibold opacity-[.9] text-center">
        <article>Hype got you here.</article>
        <article>Stay for the support.</article>
      </div>

      <p className="flex  text-[16px] opacity-[.8] leading[16px] text-center">
        we've been told it is possible to revolutionize the payment industry. We
        have not reinvented the wheel we decided to build upon it -successfully
      </p>
    </div>
  );
}

export default TopPart;
