// Phamcliff Farm order handler (Google Apps Script, deployed as a web app).
//
// Receives the JSON the cart posts, emails Will and the customer, and, when the
// customer opted into the no-dormancy experiment, appends a row to a tracking
// spreadsheet so they can be checked on later.
//
// After editing this file: paste it into the Apps Script project, then
// Deploy > Manage deployments > Edit > Version: New version > Deploy.
// The first run that touches the spreadsheet will ask you to authorize
// the Sheets/Drive scope once.

var EXPERIMENT_SHEET_NAME = "Phamcliff No-Dormancy Experiment";
var EXPERIMENT_HEADERS = [
  "Logged", "Name", "Email", "City", "State", "Growing setup", "Setup notes",
  "Order subtotal", "Check-in due", "Checked in?", "How is it doing?"
];
var CHECK_IN_DAYS = 120;

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
        "Once I receive payment, I usually ship within 24h. If you have any questions, " +
        "reply to this email or reach me at will@phamcliff.com.\n\n";

      if (data.experiment && data.experiment.optIn) {
        confirmation +=
          "About the free no-dormancy division: it's a typical Venus flytrap I've grown " +
          "without a winter rest for three years. Pot it up like any other flytrap, keep it " +
          "warm and under as much light as you can give it, and skip dormancy this winter. " +
          "I'll email in a few months to ask how it's doing. If it struggles, that's useful " +
          "to know too!\n\n";
      }

      confirmation +=
        "- Will\n" +
        "Phamcliff Farm\n" +
        "https://phamcliff.com";

      GmailApp.sendEmail(data.customerEmail, "Your Phamcliff Farm order", confirmation);
    }

    // Experiment tracking. Kept in its own try/catch so a spreadsheet hiccup
    // can never block the order emails above.
    if (data.experiment && data.experiment.optIn) {
      try {
        logExperimentParticipant(data.experiment);
      } catch (sheetErr) {
        GmailApp.sendEmail("will@phamcliff.com",
          "Experiment log failed - Phamcliff Farm",
          "Could not write this participant to the spreadsheet:\n\n" +
          JSON.stringify(data.experiment, null, 2) + "\n\nError: " + sheetErr);
      }
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

// Returns the tracking spreadsheet, creating it (in your Drive root) on first
// use and remembering its ID in script properties.
function getExperimentSheet() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty("EXPERIMENT_SHEET_ID");
  var ss = null;
  if (id) {
    try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; }
  }
  if (!ss) {
    ss = SpreadsheetApp.create(EXPERIMENT_SHEET_NAME);
    props.setProperty("EXPERIMENT_SHEET_ID", ss.getId());
    var first = ss.getSheets()[0];
    first.setName("Participants");
    first.appendRow(EXPERIMENT_HEADERS);
    first.setFrozenRows(1);
  }
  return ss.getSheets()[0];
}

function logExperimentParticipant(ex) {
  var sheet = getExperimentSheet();
  var now = new Date();
  var checkIn = new Date(now.getTime() + CHECK_IN_DAYS * 24 * 60 * 60 * 1000);
  sheet.appendRow([
    now,
    ex.name || "",
    ex.email || "",
    ex.city || "",
    ex.state || "",
    ex.setup || "",
    ex.notes || "",
    typeof ex.subtotal === "number" ? ex.subtotal : "",
    checkIn,
    "",   // Checked in?
    ""    // How is it doing?
  ]);
}

// Run this once from the editor to create the spreadsheet ahead of time and
// print its URL in the log (View > Logs / Execution log).
function setupExperimentSheet() {
  var sheet = getExperimentSheet();
  Logger.log(sheet.getParent().getUrl());
}
