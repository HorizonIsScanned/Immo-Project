/**
 * IMMOBILIEN-FUNNEL → GOOGLE SHEETS LEAD-WEBHOOK
 *
 * Einrichtung (einmalig, ca. 3 Minuten):
 *  1. Neues Google Sheet anlegen (z. B. "Immobilien-Funnel Leads").
 *  2. Im Sheet: Erweiterungen → Apps Script → diesen gesamten Code
 *     in den Editor einfügen (vorhandenen Beispielcode ersetzen).
 *  3. Optional: unten bei NOTIFY_EMAIL eine E-Mail-Adresse eintragen,
 *     dann gibt es bei jedem Lead eine Benachrichtigungs-Mail.
 *  4. Oben rechts: Bereitstellen → Neue Bereitstellung →
 *     Typ "Web-App" → Ausführen als: "Ich" →
 *     Zugriff: "Jeder" → Bereitstellen.
 *     (Die Freigabe "Jeder" ist nötig, damit der Funnel ohne Login
 *     posten kann. Die URL ist nicht erratbar; das Sheet selbst
 *     bleibt privat.)
 *  5. Die angezeigte Web-App-URL (…/exec) kopieren und im Funnel
 *     bei CONFIG.leadWebhookUrl eintragen.
 *
 * Bei Code-Änderungen: Bereitstellen → Bereitstellungen verwalten →
 * Bearbeiten → Version "Neue Version" → Bereitstellen
 * (sonst läuft die alte Version weiter).
 */

var SHEET_NAME = "Leads";

/* E-Mail-Adressen für Benachrichtigungen (mehrere durch Komma getrennt).
   Leer lassen, wenn keine Mail gewünscht ist. */
var NOTIFY_EMAIL = "christopher.biebrauer@gmail.com, jvb@vonbierbrauer.de";

/* Spalten des Sheets: [Spaltenüberschrift, Feldname im Funnel-Payload]
   ACHTUNG: Bei bereits befülltem Sheet erzeugen neue Spalten am Ende
   keine Konflikte — die Kopfzeile wird nur beim allerersten Lead
   geschrieben. Für ein sauberes Sheet am besten einen neuen Tab
   "Leads" anlegen (alten umbenennen) oder die Kopfzeile von Hand
   um die neuen Spalten ergänzen. */
var COLUMNS = [
  ["Eingegangen am", "submitted_at"],
  ["Vorname", "first_name"],
  ["Nachname", "last_name"],
  ["Telefon", "phone"],
  ["E-Mail", "email"],
  ["Anliegen", "situation"],
  ["Immobilienart", "property_type"],
  ["Haustyp", "house_type"],
  ["Straße + Nr.", "street"],
  ["PLZ", "postal_code"],
  ["Ort", "city"],
  ["Wohnfläche", "living_space"],
  ["Grundstück", "plot_size"],
  ["Etage", "floor"],
  ["Baujahr", "year_built"],
  ["Zustand", "condition"],
  ["Erbfall-Zeitpunkt", "erbfall_timing"],
  ["Erbensituation", "inheritance"],
  ["Anzahl Erben", "heirs_count"],
  ["Einigkeit Erben", "heirs_agreement"],
  ["Finanzierung", "financing"],
  ["Restschuld", "remaining_debt"],
  ["Belastungen", "encumbrances"],
  ["Absicht", "intention"],
  ["Priorität", "priority"],
  ["Entscheidungsdruck", "assessment_pressure"],
  ["Komplexität", "assessment_complexity"],
  ["Offene Punkte", "assessment_risks"],
  ["UTM Source", "utm_source"],
  ["UTM Medium", "utm_medium"],
  ["UTM Campaign", "utm_campaign"],
  ["GCLID", "gclid"],
  ["FBCLID", "fbclid"],
  ["Session-ID", "session_id"]
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = JSON.parse((e && e.parameter && e.parameter.payload) || "{}");

    /* Seit dem Report-Redesign ist der Name im Funnel optional —
       Pflicht sind nur E-Mail und Telefon. */
    if (!data.email || !data.phone) {
      return jsonResponse({ ok: false, error: "missing required fields" });
    }

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS.map(function (col) { return col[0]; }));
      sheet.setFrozenRows(1);
    }

    sheet.appendRow(COLUMNS.map(function (col) {
      var value = data[col[1]];
      return value === undefined || value === null ? "" : String(value);
    }));

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: "Neuer Lead: " +
          ((data.first_name || data.last_name)
            ? (data.first_name + " " + data.last_name).trim()
            : data.email) +
          (data.city ? " (" + data.city + ")" : ""),
        body:
          "Ein neuer Lead ist über den Immobilien-Funnel eingegangen:\n\n" +
          COLUMNS.map(function (col) {
            var value = data[col[1]];
            return col[0] + ": " + (value === undefined || value === null ? "–" : value);
          }).join("\n") +
          "\n\nAlle Leads: " + spreadsheet.getUrl()
      });
    }

    return jsonResponse({ ok: true });

  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
