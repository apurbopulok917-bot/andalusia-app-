/* Andalusia pocket guide — renderer. Data comes from data.js (const DATA). */
(function () {
  "use strict";

  var CITY_KEYS = ["malaga", "cordoba", "granada", "travel"];
  var SECTIONS = [
    { key: "days", label: "Day plans" },
    { key: "eat",  label: "Eat" },
    { key: "see",  label: "See" },
    { key: "shop", label: "Shop" },
    { key: "do",   label: "Do" }
  ];
  var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var main = document.getElementById("main");
  var chipsNav = document.getElementById("section-chips");
  var state = { city: "malaga", section: "days", date: null };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function todayISO() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function todayWeekday() { return WEEKDAYS[new Date().getDay()]; }

  function readHash() {
    var parts = location.hash.replace(/^#/, "").split("/");
    if (CITY_KEYS.indexOf(parts[0]) >= 0) state.city = parts[0];
    if (parts[1] && SECTIONS.some(function (s) { return s.key === parts[1]; })) state.section = parts[1];
  }
  function writeHash() {
    var h = "#" + state.city + (state.city === "travel" ? "" : "/" + state.section);
    if (location.hash !== h) history.replaceState(null, "", h);
  }

  function linkBtn(url, label, primary) {
    if (!url) return "";
    return '<a class="btn' + (primary ? " primary" : "") + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(label) + "</a>";
  }

  function categoryBadge(cat) {
    var map = {
      "michelin-star": { label: "★ Michelin star", cls: "mich" },
      "bib-gourmand": { label: "Bib Gourmand", cls: "mich" },
      "michelin-listed": { label: "Michelin Guide", cls: "" },
      "local-favorite": { label: "Local favorite", cls: "" }
    };
    var b = map[cat];
    return b ? '<span class="badge ' + b.cls + '">' + b.label + "</span>" : "";
  }

  function closedBadge(closed) {
    if (!closed) return "";
    var isToday = closed.toLowerCase().indexOf(todayWeekday().toLowerCase()) >= 0;
    return '<span class="badge closed' + (isToday ? " warn" : "") + '">Closed: ' + esc(closed) + (isToday ? " — that’s today!" : "") + "</span>";
  }

  function restaurantCard(r) {
    return '<article class="card">' +
      "<h3>" + esc(r.name) + "</h3>" +
      '<div class="badges">' +
        categoryBadge(r.category) +
        (r.price ? '<span class="badge">' + esc(r.price) + "</span>" : "") +
        (r.splurge ? '<span class="badge warn">Splurge</span>' : "") +
        (r.cuisine ? '<span class="badge">' + esc(r.cuisine) + "</span>" : "") +
        closedBadge(r.closed) +
      "</div>" +
      (r.why ? '<p class="why">' + esc(r.why) + "</p>" : "") +
      '<div class="actions">' +
        linkBtn(r.maps_url, "Maps", false) +
        linkBtn(r.website, "Book / site", true) +
      "</div></article>";
  }

  function sightCard(s) {
    return '<article class="card">' +
      "<h3>" + esc(s.name) + "</h3>" +
      (s.why ? '<p class="why">' + esc(s.why) + "</p>" : "") +
      '<div class="meta">' + esc([s.hours_notes, s.price].filter(Boolean).join("\n")) + "</div>" +
      (s.booking_note ? '<div class="badges"><span class="badge warn">' + esc(s.booking_note) + "</span></div>" : "") +
      '<div class="actions">' +
        linkBtn(s.maps_url, "Maps", false) +
        linkBtn(s.ticket_url, "Tickets / site", true) +
      "</div></article>";
  }

  function shopCard(s) {
    return '<article class="card">' +
      "<h3>" + esc(s.name) + "</h3>" +
      (s.what ? '<p class="why">' + esc(s.what) + "</p>" : "") +
      '<div class="actions">' + linkBtn(s.maps_url, "Maps", false) + "</div></article>";
  }

  function activityCard(a) {
    return '<article class="card">' +
      "<h3>" + esc(a.name) + "</h3>" +
      (a.what ? '<p class="why">' + esc(a.what) + "</p>" : "") +
      '<div class="actions">' +
        linkBtn(a.maps_url, "Maps", false) +
        linkBtn(a.website, "Site", true) +
      "</div></article>";
  }

  function dayPlans(city) {
    var plans = city.day_plans || {};
    var dates = Object.keys(plans).sort();
    if (!dates.length) return "<p class='intro-note'>No day plans yet.</p>";
    if (!state.date || dates.indexOf(state.date) < 0) {
      state.date = dates.indexOf(todayISO()) >= 0 ? todayISO() : dates[0];
    }
    var strip = '<div class="date-strip" role="tablist">' + dates.map(function (d) {
      var p = plans[d];
      var day = d.slice(8);
      return '<button class="date-pill' + (d === state.date ? " active" : "") + (d === todayISO() ? " is-today" : "") +
        '" data-date="' + d + '"><span class="dow">' + esc((p.weekday || "").slice(0, 3)) + "</span><span>" + esc(day) + "</span></button>";
    }).join("") + "</div>";

    var p = plans[state.date];
    var card = '<div class="card">' +
      ["morning", "afternoon", "evening"].map(function (slot) {
        return p[slot] ? '<div class="slot"><p class="slot-label">' + slot + '</p><p>' + esc(p[slot]) + "</p></div>" : "";
      }).join("") + "</div>";
    return strip + card;
  }

  function cityView(cityKey) {
    var city = DATA.cities[cityKey];
    if (!city) return "<p class='intro-note'>No data for this city yet.</p>";
    switch (state.section) {
      case "days": return dayPlans(city);
      case "eat":  return '<p class="intro-note">Mostly € / €€ — the one splurge is marked.</p><div class="cards-grid">' + (city.restaurants || []).map(restaurantCard).join("") + "</div>";
      case "see":  return '<div class="cards-grid">' + (city.sights || []).map(sightCard).join("") + "</div>";
      case "shop": return '<div class="cards-grid">' + (city.shops || []).map(shopCard).join("") + "</div>";
      case "do":   return '<div class="cards-grid">' + (city.activities || []).map(activityCard).join("") + "</div>";
    }
    return "";
  }

  function optionIsBest(leg, opt) {
    if (opt.recommended === true) return true;
    if (typeof leg.recommended !== "string") return false;
    var rec = leg.recommended.toLowerCase();
    return [opt.operator, opt.mode].some(function (v) { return v && rec.indexOf(String(v).toLowerCase()) >= 0; });
  }

  function travelView() {
    var t = DATA.transport;
    if (!t) return "<p class='intro-note'>No transport data yet.</p>";
    var html = (t.legs || []).map(function (leg) {
      return '<article class="card"><h3>' + esc(leg.route) + "</h3>" +
        (leg.options || []).map(function (o) {
          return '<div class="leg-option' + (optionIsBest(leg, o) ? " best" : "") + '">' +
            "<h4>" + esc([o.mode, o.operator].filter(Boolean).join(" · ")) +
            (optionIsBest(leg, o) ? ' <span class="badge mich">Best</span>' : "") + "</h4>" +
            '<div class="meta">' + esc([o.typical_duration, o.price_range, o.frequency].filter(Boolean).join("  ·  ")) + "</div>" +
            (o.notes ? '<p class="why">' + esc(o.notes) + "</p>" : "") +
            '<div class="actions">' + linkBtn(o.booking_url, "Book", true) + "</div></div>";
        }).join("") + "</article>";
    }).join("");

    if (t.stations && t.stations.length) {
      html += "<h3 style=\"font-family:'Josefin Sans',sans-serif\">Stations</h3><div class=\"cards-grid\">" +
        t.stations.map(function (s) {
          return '<article class="card"><h3>' + esc(s.name) + '</h3><div class="actions">' + linkBtn(s.maps_url, "Maps", false) + "</div></article>";
        }).join("") + "</div>";
    }
    if (t.general_tips && t.general_tips.length) {
      html += "<h3 style=\"font-family:'Josefin Sans',sans-serif\">Good to know</h3><div class=\"card\"><ul class=\"tips\">" +
        t.general_tips.map(function (tip) { return "<li>" + esc(tip) + "</li>"; }).join("") + "</ul></div>";
    }
    return html;
  }

  function render() {
    document.body.dataset.city = state.city;
    document.querySelectorAll(".city-tab").forEach(function (b) {
      b.classList.toggle("active", b.dataset.city === state.city);
    });

    if (typeof DATA === "undefined") {
      chipsNav.innerHTML = "";
      main.innerHTML = "<p class='intro-note'>Content is being prepared — check back shortly.</p>";
      return;
    }

    if (state.city === "travel") {
      chipsNav.innerHTML = "";
      main.innerHTML = travelView();
    } else {
      chipsNav.innerHTML = SECTIONS.map(function (s) {
        return '<button class="chip' + (s.key === state.section ? " active" : "") + '" data-section="' + s.key + '">' + s.label + "</button>";
      }).join("");
      main.innerHTML = cityView(state.city);
    }
    writeHash();
  }

  document.querySelector(".city-tabs").addEventListener("click", function (e) {
    var b = e.target.closest(".city-tab");
    if (!b) return;
    state.city = b.dataset.city;
    if (state.section === undefined) state.section = "days";
    render();
    window.scrollTo({ top: 0 });
  });

  chipsNav.addEventListener("click", function (e) {
    var b = e.target.closest(".chip");
    if (!b) return;
    state.section = b.dataset.section;
    render();
  });

  main.addEventListener("click", function (e) {
    var b = e.target.closest(".date-pill");
    if (!b) return;
    state.date = b.dataset.date;
    render();
  });

  readHash();
  render();
})();
