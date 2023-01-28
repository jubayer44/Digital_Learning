const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputs = document.getElementsByTagName("input");
    const textarea = document.getElementsByTagName("textarea");
    const formValues = {};
    for(let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      formValues[input.name] = input.value;
    }
    formValues[textarea[0].name] = textarea[0].value;
    console.log(formValues);
});