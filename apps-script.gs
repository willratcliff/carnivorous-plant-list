function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var subject = "Plant Order - Phamcliff Farm";

    GmailApp.sendEmail("will@phamcliff.com", subject, "New order received:\n\n" + data.body);

    if (data.customerEmail) {
      var confirmation = "Hi,\n\n" +
        "Thanks for your order! Here is a copy for your records:\n\n" +
        data.body +
        "\n\n------------------\n" +
        "I'll be in touch shortly to confirm. If you have any questions, " +
        "reply to this email or reach me at will@phamcliff.com.\n\n" +
        "- Will\n" +
        "Phamcliff Farm\n" +
        "https://phamcliff.com";

      GmailApp.sendEmail(data.customerEmail, "Your Phamcliff Farm order", confirmation);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
