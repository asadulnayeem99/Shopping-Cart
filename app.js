function increase(id) {
  const caseInput = document.getElementById(id);
  const CaseCount = parseFloat(caseInput.value);
  const caseNewCount = CaseCount + 1;
  return (caseInput.value = caseNewCount);
}

function decrease(id) {
  const caseInput = document.getElementById(id);
  const CaseCount = parseFloat(caseInput.value);
  if (CaseCount > 0) {
    const caseNewCount = CaseCount - 1;
    caseInput.value = caseNewCount;
  }
}

function subTotal(id) {
  const price = document.getElementById(id);
  const PriceInt = parseFloat(price.innerText);
  return PriceInt;
}

function EventListener(increasing, num, price) {
  document.getElementById(increasing).addEventListener("click", function () {
    if (increasing === "case-plus" || increasing === "case2-plus") {
      const Ncount = increase(num);
      const Nprice = Ncount * subTotal(price);
      document.getElementById(price).innerText = Nprice;
    } else if (increasing === "case-minus" || increasing === "case2-minus") {
      const Ncount = decrease(num);
      const Newprice = Ncount * subTotal(price);
      document.getElementById(price).textContent = Newprice;
    }
  });
}

EventListener("case-plus", "case-number", "phone-total");
EventListener("case-minus", "case-number", "phone-total");

EventListener("case2-plus", "case2-number");
EventListener("case2-minus", "case2-number");
