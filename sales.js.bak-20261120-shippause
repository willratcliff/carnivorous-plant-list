// ── Sales configuration ─────────────────────────────────────────────
// Each entry describes a promotion that's active for a date range.
//
// Fields:
//   id          unique identifier (also surfaced in order-email summary)
//   plant       exact plant name — must match the `name` field in plants.js
//   sizes       array of size labels (e.g. ['Small']) or the string 'all'
//                 size labels are 'Small'/'Medium'/'Large'/'Specimen' and
//                 any custom labels from priceTiers/bulkTiers
//   type        'bogo' for buy-one-get-one. New types can be added later.
//   bannerText  text shown in the top-of-page sale banner
//   starts      ISO 8601 with timezone offset (-04:00 for EDT, -05:00 for EST)
//   ends        ISO 8601 with timezone offset (inclusive)
//
// A banner-only entry (plant: null, type: 'banner') just shows bannerText
// in the top banner between its dates; it changes no prices. Use it to
// advertise a discount code from DISCOUNT_CODES.
//
// To add a new sale: append an entry below.
// To turn one off early: delete the entry or set `ends` to a past date.

window.SALES = [
  // Black Friday sale, Nov 17 -> Cyber Monday 2026: advertises the BLACKFLYDAY code below.
  {
    id: 'blackflyday-2026',
    plant: null,
    type: 'banner',
    bannerText: '\ud83e\udeb0 Black Fly-Day Sale: 25% off all plants &amp; supplies with code ' +
      '<span class="sale-code">BLACKFLYDAY</span> <span class="sale-banner-fine">(shipping not included)</span>',
    starts: '2026-11-17T00:00:00-05:00',
    ends:   '2026-11-30T23:59:59-05:00',
  },
];

// ── No-Dormancy Experiment bonus ────────────────────────────────────
// Free division of the no-dormancy Target clone, added to any order when
// the customer opts in. Set `active` to false to take it off the site.
// `ends` is optional (ISO 8601 with offset); null means open-ended.
window.EXPERIMENT = {
  active: false,
  ends: null,
};

// ── Frost bonus: a free U. calycifida or S. debile with every order ─
// These live outside and won't survive a freeze, so until the first frost
// every order gets one free, customer's pick (or "No thanks"). Stacks with
// the $50+ and $100+ order rewards. Set `active` to false after the first
// frost (or set `ends` to an ISO 8601 date with offset).
window.FROST_BONUS = {
  active: false,   // turned off Nov 17 2026
  ends: null,
  choices: ['Utricularia calycifida', 'Stylidium debile'],
};

// ── Helpers consumed by the cart and card-rendering code ────────────
window.SaleHelpers = {
  activeSales: function (now) {
    now = now || new Date();
    return window.SALES.filter(function (s) {
      return now >= new Date(s.starts) && now <= new Date(s.ends);
    });
  },

  saleFor: function (plantName, sizeLabel, now) {
    var actives = window.SaleHelpers.activeSales(now);
    for (var i = 0; i < actives.length; i++) {
      var s = actives[i];
      if (s.plant !== plantName) continue;
      if (s.sizes === 'all') return s;
      if (Array.isArray(s.sizes) && s.sizes.indexOf(sizeLabel) > -1) return s;
    }
    return null;
  },

  hasAnySaleForPlant: function (plantName, now) {
    var actives = window.SaleHelpers.activeSales(now);
    for (var i = 0; i < actives.length; i++) {
      if (actives[i].plant === plantName) return actives[i];
    }
    return null;
  },

  frostBonusActive: function (now) {
    var cfg = window.FROST_BONUS;
    if (!cfg || !cfg.active) return false;
    if (cfg.ends && (now || new Date()) > new Date(cfg.ends)) return false;
    return true;
  },

  // Is a discount code usable right now? 'ok', 'early' or 'expired'.
  // `starts` / `ends` on a code are optional.
  codeWindow: function (code, now) {
    now = now || new Date();
    if (code.starts && now < new Date(code.starts)) return 'early';
    if (code.ends && now > new Date(code.ends)) return 'expired';
    return 'ok';
  },

  // Format the sale end date in the farm's local timezone (ET) so every
  // visitor sees the same cutoff regardless of where they're browsing from.
  formatEndDate: function (sale) {
    var d = new Date(sale.ends);
    return d.toLocaleString('en-US', {
      timeZone: 'America/New_York',
      month: 'long',
      day: 'numeric',
    });
  },
};

// ── Discount codes (hashed for security) ────────────────────────────
// Codes are stored as SHA-256 hashes so the actual code text never
// appears in source. To add a new code, hash it (uppercase) and append:
//   python3 -c "import hashlib;print(hashlib.sha256(b'CODE').hexdigest())"
//
// Types:
//   'bogo'     cheapest eligible item free (optional excludeBulk: true)
//   'percent'  `percent`% off every plant and supply in the cart. Shipping,
//              the heat pack and tax are not discounted. The cut is taken off
//              each line, so the order email and the dashboard record the
//              price actually paid. The $50+ / $100+ rewards still go by the
//              pre-discount subtotal, so applying a code never loses a reward.
// Optional `starts` / `ends` (ISO 8601 with offset) limit when a code works.
window.DISCOUNT_CODES = [
  {
    // BLACKFLYDAY: Black Friday sale, Nov 17 -> Cyber Monday (Nov 30) 2026, 25% off
    hash: '638b3051fe612156adc0529b58cd22a787069ac4d72ba871056974cf0bf4d272',
    label: 'BLACKFLYDAY',
    type: 'percent',
    percent: 25,
    starts: '2026-11-17T00:00:00-05:00',
    ends:   '2026-11-30T23:59:59-05:00',
  },
];

// ── Auto-render the sale banner ─────────────────────────────────────
// Runs on every page that includes sales.js. Inserts a banner element
// immediately after .shipping-bar (consistent placement across pages).
(function () {
  function render() {
    var actives = window.SaleHelpers.activeSales();
    if (actives.length === 0) return;

    var anchor = document.querySelector('.shipping-bar');
    if (!anchor) return;

    var banner = document.createElement('div');
    banner.className = 'sale-banner';
    banner.id = 'sale-banner';

    var inner = actives.map(function (s) {
      return s.bannerText + ' <span class="sale-banner-end">(ends ' +
        window.SaleHelpers.formatEndDate(s) + ')</span>';
    }).join(' &nbsp;·&nbsp; ');

    banner.innerHTML = inner;
    anchor.parentNode.insertBefore(banner, anchor.nextSibling);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
}());

// ── Frost bonus line in the Order Rewards banner (every page) ───────
(function () {
  function render() {
    if (!window.SaleHelpers.frostBonusActive()) return;
    var banners = document.querySelectorAll('.rewards-banner');
    for (var i = 0; i < banners.length; i++) {
      var host = banners[i].querySelector('.rewards-banner-inner') || banners[i];
      if (host.querySelector('.frost-bonus-line')) continue;
      var line = document.createElement('div');
      line.className = 'frost-bonus-line';
      line.innerHTML = '\u2744\ufe0f <strong>Until the first frost:</strong> a free <em>U. calycifida</em> or ' +
        '<em>S. debile</em> with every order';
      host.insertBefore(line, host.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
}());
