const submitButton = document.querySelector(".js-submit-button");

submitButton.addEventListener("click", () => {
  if (ratingValue != undefined) {
    document.querySelector("#root").innerHTML = `
    <div id="thanks-container">
        <div><img src="images/illustration-thank-you.svg" alt="" /></div>
        <div id="selection">You selected <span class="js-selection">0</span> out of 5</div>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
          touch!
        </p>
    </div>`;
    document.querySelector(".js-selection").innerHTML = ratingValue;
  } else {
    console.log("failed");
  }
});
