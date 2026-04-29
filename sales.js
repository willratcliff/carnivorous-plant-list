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
//   starts      ISO 8601 with timezone offset (use -04:00 for ET / EDT)
//   ends        ISO 8601 with timezone offset (inclusive)
//
// To add a new sale: append an entry below.
// To turn one off early: delete the entry or set `ends` to a past date.

window.SALES = [
  {
    id: 'big-mouth-bogo-2026-04',
    plant: 'Big Mouth VFT',
    sizes: 'all',
    type: 'bogo',
    bannerText: 'BOGO: Big Mouth Venus Flytrap — buy one, get one free!',
    starts: '2026-04-29T00:00:00-04:00',
    ends:   '2026-05-03T23:59:59-04:00',
  },
];

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
