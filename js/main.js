/* Draft preview helpers — no analytics, no backend */
(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = (form.elements.namedItem("name") || {}).value || "";
    var org = (form.elements.namedItem("organization") || {}).value || "";
    var email = (form.elements.namedItem("email") || {}).value || "";
    var interest = (form.elements.namedItem("interest") || {}).value || "";
    var message = (form.elements.namedItem("message") || {}).value || "";

    var subject = encodeURIComponent("Design partner inquiry — Digital MBSE");
    var body = encodeURIComponent(
      "Name: " + name + "\n" +
      "Organization: " + org + "\n" +
      "Email: " + email + "\n" +
      "Interest: " + interest + "\n\n" +
      message
    );
    window.location.href = "mailto:Danielsmenoher@gmail.com?subject=" + subject + "&body=" + body;
  });
})();
