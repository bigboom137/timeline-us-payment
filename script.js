'use strict';

// ── Data ────────────────────────────────────────────────────────────────────
const ERAS = [
  {
    id: 1,
    label: "1600s: Commodity and Native Exchange",
    items: [
      {
        name: "Wampum",
        year: "1600s",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlHv8mUCBR8pckA8mh_4XeOASUoSDwdyRiQMOXGswRvmyq4KgcOokUEVF&s=10",
        facts: [
          { label: "What it was", text: "White and purple beads made from clam shells." },
          { label: "How it worked", text: "Native Americans used wampum mainly for ceremony and diplomacy, but colonists also used it as money in frontier trade." },
          { label: "The law", text: "Massachusetts recognized it as legal tender in 1637." },
          { label: "Why it declined", text: "European-made imitations increased supply and reduced its value." }
        ]
      },
      {
        name: "Beaver Pelts",
        year: "1600s",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiw-sqjepcsZMRGgXNnksOYxOEm303fxBLtOIdClPSg&s",
        facts: [
          { label: "What it was", text: "Beaver skins traded in the fur market." },
          { label: "How it worked", text: "Pelts became a practical medium of exchange in areas where coins were scarce." },
          { label: "The law", text: "Trade prices were often measured in units called \"Made Beaver.\"" },
          { label: "Why it declined", text: "Overhunting reduced beaver populations, and European demand for felt hats later fell." }
        ]
      },
      {
        name: "Country Pay",
        year: "1600s",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Vehn%C3%A4pelto_6.jpg",
        facts: [
          { label: "What it was", text: "Payments made with crops such as tobacco, wheat, or livestock." },
          { label: "How it worked", text: "Colonists used agricultural goods to settle taxes and debts because coin shortages were common." },
          { label: "The law", text: "Colonial governments allowed taxes and obligations to be paid in commodities." },
          { label: "Why it declined", text: "Crop values fluctuated heavily depending on harvest conditions." }
        ]
      },
      {
        name: "Foreign Currency",
        year: "1600s",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Reyes_Cat%C3%B3licos_8_reales_28829.jpg",
        facts: [
          { label: "What it was", text: "Foreign gold and silver coins, especially the Spanish dollar." },
          { label: "How it worked", text: "Since British coins were limited in the colonies, foreign coins circulated widely in trade." },
          { label: "The law", text: "Colonies created exchange rates between different foreign coins and British currency." },
          { label: "Why it declined", text: "Coins were often clipped or shaved for their metal content, reducing trust in circulation." }
        ]
      }
    ]
  },
  {
    id: 2,
    label: "1652–1774: Early Minting and First Paper",
    items: [
      {
        name: "Pine Tree Shilling",
        year: "1652",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/LVPL-1CFD55_Silver_pine_tree_shilling_of_Massachusetts%2C_North_America_%28FindID_285997%29.jpg",
        facts: [
          { label: "What it was", text: "Silver coins minted in Massachusetts with a pine tree design." },
          { label: "How it worked", text: "The coins helped relieve shortages of small change in local commerce." },
          { label: "The law", text: "Minting coins without royal approval technically violated English law." },
          { label: "Why it declined", text: "English authorities eventually shut down the mint." }
        ]
      },
      {
        name: "First Paper Bills",
        year: "1690",
        img: "https://cdn.theatlantic.com/media/mt/science/FirstMoneyEDIT.jpg",
        facts: [
          { label: "What it was", text: "Government-issued paper notes from Massachusetts." },
          { label: "How it worked", text: "The colony issued paper bills to pay soldiers after a failed military expedition." },
          { label: "The law", text: "The bills were accepted for future tax payments." },
          { label: "Why it declined", text: "Repeated overprinting reduced their value." }
        ]
      },
      {
        name: "Colonial Scrip",
        year: "1690",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/US-Colonial_%28PA-115%29-Pennsylvania-18_Jun_1764.jpg",
        facts: [
          { label: "What it was", text: "Paper currencies issued by individual colonies." },
          { label: "How it worked", text: "Colonies used paper money to support trade and local economies." },
          { label: "The law", text: "Each colony managed its own currency system." },
          { label: "Why it declined", text: "Some colonies issued too much paper money, leading to inflation and British restrictions." }
        ]
      }
    ]
  },
  {
    id: 3,
    label: "1775–1860: Revolution and Banking Expansion",
    items: [
      {
        name: "Continentals",
        year: "1775",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Continental_Currency_%2420_banknote_reverse_%28May_10%2C_1775%29.jpg/500px-Continental_Currency_%2420_banknote_reverse_%28May_10%2C_1775%29.jpg",
        facts: [
          { label: "What it was", text: "Paper money issued by the Continental Congress during the Revolutionary War." },
          { label: "How it worked", text: "The government used the notes to finance the war effort." },
          { label: "The law", text: "Congress declared the notes legal tender." },
          { label: "Why it declined", text: "Heavy overprinting and counterfeiting caused rapid depreciation." }
        ]
      },
      {
        name: "Coinage Act",
        year: "1792",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqrwTzLfsbsqkU7lWgEC9_vJXWaVqLRxRzyBRQG--HQ&s=10",
        facts: [
          { label: "What it was", text: "The law establishing the U.S. Mint and the U.S. dollar." },
          { label: "How it worked", text: "It created a national decimal-based currency system." },
          { label: "The law", text: "The dollar was tied to both silver and gold at a fixed ratio." },
          { label: "Why it declined", text: "Market values for gold and silver shifted, disrupting circulation." }
        ]
      },
      {
        name: "Wildcat Notes",
        year: "1836",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Dollar_notes_from_Singapore%2C_Michigan.jpg",
        facts: [
          { label: "What it was", text: "Banknotes issued by state-chartered banks." },
          { label: "How it worked", text: "Thousands of banks issued their own paper money." },
          { label: "The law", text: "Banks were supposed to redeem notes in gold or silver." },
          { label: "Why it declined", text: "Weak regulation and unstable banks caused frequent failures and financial panics." }
        ]
      }
    ]
  },
  {
    id: 4,
    label: "1861–1928: Nationalization and Standardization",
    items: [
      {
        name: "Demand Notes / Greenbacks",
        year: "1861",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/US-%241-LT-1862-Fr-16c.jpg/1280px-US-%241-LT-1862-Fr-16c.jpg",
        facts: [
          { label: "What it was", text: "Federal paper money issued during the Civil War." },
          { label: "How it worked", text: "The government used the notes to finance wartime expenses." },
          { label: "The law", text: "The Legal Tender Act required acceptance of the notes for debts." },
          { label: "Why it declined", text: "Their value fluctuated because they were not fully backed by gold." }
        ]
      },
      {
        name: "National Bank Notes",
        year: "1863",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2T91CnUaMQWVoZ3m7CXesSOo9ltuhyoO3_bcez2iHwp-T0YDGPxR6r_G7&s=10",
        facts: [
          { label: "What it was", text: "Standardized banknotes issued through nationally chartered banks." },
          { label: "How it worked", text: "Banks bought government bonds to secure the currency they issued." },
          { label: "The law", text: "A tax on state banknotes encouraged use of the national system." },
          { label: "Why it declined", text: "The system lacked flexibility during financial crises and seasonal demand spikes." }
        ]
      },
      {
        name: "Gold Standard Act",
        year: "1900",
        img: "https://static01.nyt.com/images/2012/03/12/learning/Mar14LN/Mar14LN-articleInline.jpg",
        facts: [
          { label: "What it was", text: "A law formally tying the U.S. dollar to gold." },
          { label: "How it worked", text: "Paper money could be redeemed for gold at a fixed rate." },
          { label: "The law", text: "Gold became the sole monetary standard." },
          { label: "Why it ended", text: "The system limited the government's ability to respond to economic crises during the Great Depression." }
        ]
      }
    ]
  },
  {
    id: 5,
    label: "1929–Present: Modern Forms and Digital Shift",
    items: [
      {
        name: "Small-Sized Notes",
        year: "1929",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwtGbSoBCQb-m_RdcXrkZP-n64xK3IVurU4CGciXUacw&s=10",
        facts: [
          { label: "What it was", text: "The modern smaller format for U.S. paper money." },
          { label: "How it worked", text: "Smaller bills reduced printing and production costs." },
          { label: "The law", text: "The Treasury standardized bill sizes and designs." },
          { label: "Impact", text: "The redesign improved efficiency and remains the standard today." }
        ]
      },
      {
        name: "Anti-Counterfeit Series",
        year: "1996",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaZTNhOCKgTWDcx1Ka1E_4yXqZeJoSgFsCIzPakbYQBVOO5O2vpP32COn&s=10",
        facts: [
          { label: "What it was", text: "Redesigned U.S. bills with advanced security features." },
          { label: "How it worked", text: "New features included watermarks, security threads, and color-shifting ink." },
          { label: "The law", text: "The Treasury periodically redesigns currency to reduce counterfeiting." },
          { label: "Ongoing challenge", text: "Security features must continually evolve with technology." }
        ]
      },
      {
        name: "Digital Currency",
        year: "Present",
        img: "https://bloximages.chicago2.vip.townnews.com/bismarcktribune.com/content/tncms/assets/v3/editorial/a/9d/a9d202ad-95b5-546e-8189-4880463fa5e4/66834a447402c.image.jpg?resize=1200%2C600",
        facts: [
          { label: "What it is", text: "Money stored and transferred electronically." },
          { label: "How it works", text: "Most transactions now occur through banks, cards, and digital payment systems." },
          { label: "The law", text: "Electronic transfers are recognized as valid financial transactions." },
          { label: "Current concerns", text: "Cybersecurity, privacy, and dependence on digital infrastructure remain major issues." }
        ]
      },
      {
        name: "Fiat Currency",
        year: "1971",
        img: "https://wallstreetmojo-files.s3.ap-south-1.amazonaws.com/2022/04/Fiat-Money-Meaning.jpg",
        facts: [
          { label: "What it was", text: "A currency system no longer backed by gold." },
          { label: "How it worked", text: "The U.S. stopped converting dollars into gold for foreign governments." },
          { label: "The law", text: "President Richard Nixon ended gold convertibility." },
          { label: "Result", text: "The dollar became a fiat currency managed through monetary policy." }
        ]
      }
    ]
  }
];

// ── State ────────────────────────────────────────────────────────────────────
let state = {
  screen: 'start',        // 'start' | 'era' | 'detail'
  currentEraIdx: 0,       // 0-based index into ERAS
  currentItemIdx: null,   // 0-based index into era.items
};

// ── Helpers ──────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

function setScreen(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  $('page-' + name).classList.add('active');
  state.screen = name;
  updateProgressBar();
  window.scrollTo(0, 0);
}

function updateProgressBar() {
  const bar = $('progress-bar');
  if (state.screen === 'start') { bar.style.width = '0%'; return; }

  const totalEras = ERAS.length;
  const eraProgress = (state.currentEraIdx) / totalEras;

  if (state.screen === 'era') {
    bar.style.width = (eraProgress * 100).toFixed(1) + '%';
  } else if (state.screen === 'detail') {
    const era = ERAS[state.currentEraIdx];
    const itemProgress = (state.currentItemIdx + 1) / era.items.length;
    bar.style.width = ((eraProgress + itemProgress / totalEras) * 100).toFixed(1) + '%';
  }
}

// ── Render: Era list ─────────────────────────────────────────────────────────
function renderEra() {
  const era = ERAS[state.currentEraIdx];
  const idx  = state.currentEraIdx;

  // header label
  $('era-label-text').textContent = era.label;
  $('era-step-text').textContent  = `${idx + 1} / ${ERAS.length}`;

  // progress strip
  const strip = $('era-strip');
  strip.innerHTML = ERAS.map((e, i) => {
    const cls = i < idx ? 'era-pip done' : i === idx ? 'era-pip current' : 'era-pip';
    return `<div class="${cls}" data-era="${i}" title="${e.label}"></div>`;
  }).join('');
  strip.querySelectorAll('.era-pip').forEach(pip => {
    pip.addEventListener('click', () => {
      state.currentEraIdx = parseInt(pip.dataset.era);
      renderEra();
      setScreen('era');
    });
  });

  // item cards
  const grid = $('era-grid');
  grid.innerHTML = era.items.map((item, i) =>
    `<button class="era-card" data-item="${i}">
      <span class="era-card-year">${item.year}</span>
      <span class="era-card-name">${item.name}</span>
      <span class="era-card-arrow">→</span>
    </button>`
  ).join('');

  grid.querySelectorAll('.era-card').forEach(card => {
    card.addEventListener('click', () => {
      state.currentItemIdx = parseInt(card.dataset.item);
      renderDetail();
      setScreen('detail');
    });
  });

  // back / next nav
  $('era-prev').disabled = idx === 0;
  $('era-next').textContent = idx === ERAS.length - 1 ? '✓ Finish' : 'Next Era →';
}

// ── Render: Detail ───────────────────────────────────────────────────────────
function renderDetail() {
  const era  = ERAS[state.currentEraIdx];
  const item = era.items[state.currentItemIdx];
  const iIdx = state.currentItemIdx;

  $('detail-era-label').textContent  = era.label;
  $('detail-date-tag').textContent   = item.year;
  $('detail-title').textContent      = item.name;
  $('detail-img').src                = item.img;
  $('detail-img').alt                = item.name;

  $('detail-facts').innerHTML = item.facts.map(f =>
    `<div class="fact-row">
      <span class="fact-label">${f.label}</span>
      <span class="fact-text">${f.text}</span>
    </div>`
  ).join('');

  $('detail-prev').disabled = iIdx === 0;
  $('detail-next').textContent = iIdx === era.items.length - 1 ? '← Back to era' : 'Next →';
}

// ── Event Bindings ───────────────────────────────────────────────────────────
function bindEvents() {
  // Start → Era 1
  $('btn-start').addEventListener('click', () => {
    state.currentEraIdx = 0;
    renderEra();
    setScreen('era');
  });

  // Era: back to start
  $('era-back-btn').addEventListener('click', () => setScreen('start'));

  // Era: prev
  $('era-prev').addEventListener('click', () => {
    if (state.currentEraIdx > 0) {
      state.currentEraIdx--;
      renderEra();
      setScreen('era');
    }
  });

  // Era: next
  $('era-next').addEventListener('click', () => {
    if (state.currentEraIdx < ERAS.length - 1) {
      state.currentEraIdx++;
      renderEra();
      setScreen('era');
    } else {
      setScreen('start'); // finished!
    }
  });

  // Detail: back to era
  $('detail-back-btn').addEventListener('click', () => {
    renderEra();
    setScreen('era');
  });

  // Detail: prev item
  $('detail-prev').addEventListener('click', () => {
    if (state.currentItemIdx > 0) {
      state.currentItemIdx--;
      renderDetail();
    }
  });

  // Detail: next item
  $('detail-next').addEventListener('click', () => {
    const era = ERAS[state.currentEraIdx];
    if (state.currentItemIdx < era.items.length - 1) {
      state.currentItemIdx++;
      renderDetail();
    } else {
      renderEra();
      setScreen('era');
    }
  });
}

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  setScreen('start');
});
