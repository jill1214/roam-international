const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const ts = require("typescript");

function loadDataModule(relativePath) {
  const filename = path.join(__dirname, "..", relativePath);
  const source = fs.readFileSync(filename, "utf8");
  const javascript = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    fileName: filename,
  }).outputText;
  const module = { exports: {} };
  Function("module", "exports", "require", javascript)(module, module.exports, require);
  return module.exports;
}

test("existing international tours keep their identity and now declare currency and market", () => {
  const { tours } = loadDataModule("src/data/tours.ts");
  assert.deepEqual(tours.map((tour) => tour.slug), [
    "harbin-snow-town",
    "avatar-skiing",
    "disney-adventure-langkawi",
    "osaka-kyoto-nara",
  ]);
  assert.ok(tours.every((tour) => tour.market === "International"));
  assert.ok(tours.every((tour) => tour.currency === "USD"));
  assert.equal(tours[0].departures[0].soldOut, true);
  assert.deepEqual(
    tours.map((tour) => ({
      slug: tour.slug,
      priceFrom: tour.priceFrom,
      departureCount: tour.departures?.length ?? 0,
      itineraryDayCount: tour.itinerary?.length ?? 0,
    })),
    [
      { slug: "harbin-snow-town", priceFrom: 1099, departureCount: 9, itineraryDayCount: 6 },
      { slug: "avatar-skiing", priceFrom: 599, departureCount: 4, itineraryDayCount: 7 },
      { slug: "disney-adventure-langkawi", priceFrom: 774, departureCount: 27, itineraryDayCount: 0 },
      { slug: "osaka-kyoto-nara", priceFrom: 799, departureCount: 13, itineraryDayCount: 5 },
    ],
  );
});

test("tour prices support both approved currencies", () => {
  const { formatCurrency } = loadDataModule("src/data/tours.ts");
  assert.equal(formatCurrency(1250, "USD"), "USD 1,250");
  assert.equal(formatCurrency(1250, "PHP"), "PHP 1,250");
});

test("Visa Assistance leads services and Philippine travel is a full offering", () => {
  const { services, otherServices } = loadDataModule("src/data/services.ts");
  assert.equal(services[0].slug, "visa-assistance");
  assert.ok(services.some((service) => service.slug === "philippine-inbound-tours"));
  assert.ok(!otherServices.includes("Local and inbound tour packages"));
});
