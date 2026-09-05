const SECTIONS = [
  { id: "section-map", label: "Map" },
  { id: "section-directions", label: "Directions" },
  { id: "section-compliance", label: "HOS" },
  { id: "section-itinerary", label: "Itinerary" },
  { id: "section-logs", label: "Daily logs" },
];

export default function ResultsNav() {
  const go = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="results-nav" aria-label="Trip results">
      {SECTIONS.map((s) => (
        <button type="button" key={s.id} onClick={() => go(s.id)}>
          {s.label}
        </button>
      ))}
    </nav>
  );
}
