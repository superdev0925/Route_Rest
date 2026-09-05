import { fmtHours } from "../utils";

const city = (loc) => (loc ? loc.split(",")[0].trim() : "—");

export default function TripBrief({ plan }) {
  const allOk = (plan.compliance || []).every((i) => i.ok);
  const s = plan.summary || {};
  const cur = city(plan.locations?.current?.name);
  const pick = city(plan.locations?.pickup?.name);
  const drop = city(plan.locations?.dropoff?.name);

  return (
    <div className="trip-brief">
      <div className="trip-brief-top">
        <p className="trip-brief-kicker">HOS-compliant plan</p>
        <div className="trip-brief-route">
          <span>{cur}</span>
          <span className="trip-brief-arrow" aria-hidden="true">
            →
          </span>
          <span>{pick}</span>
          <span className="trip-brief-arrow" aria-hidden="true">
            →
          </span>
          <span>{drop}</span>
        </div>
        <div className={`trip-brief-status ${allOk ? "ok" : "bad"}`}>
          {allOk ? "All federal limits respected" : "Review HOS details"}
        </div>
      </div>
      <ul className="trip-brief-kpis">
        <li>
          <strong>{Math.round(s.total_distance_miles)}</strong>
          <span>miles</span>
        </li>
        <li>
          <strong>{fmtHours(s.total_driving_hours)}</strong>
          <span>driving</span>
        </li>
        <li>
          <strong>{s.number_of_days}</strong>
          <span>log {s.number_of_days === 1 ? "day" : "days"}</span>
        </li>
        <li>
          <strong>{s.fuel_stops}</strong>
          <span>fuel stops</span>
        </li>
        <li>
          <strong>{s.rest_stops}</strong>
          <span>10h rests</span>
        </li>
        <li>
          <strong>
            {s.cycle_used_end}
            <small>/70</small>
          </strong>
          <span>cycle hours</span>
        </li>
      </ul>
    </div>
  );
}
