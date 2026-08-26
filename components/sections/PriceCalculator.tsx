"use client";

import { useMemo, useState } from "react";
import { PRICING, formatEuro } from "@/lib/config";
import Button from "@/components/ui/Button";

type MenuChoice = "italiaans" | "frans" | "op-aanvraag";
type WineChoice = "geen" | "wijn";

export default function PriceCalculator() {
  const [guests, setGuests] = useState(6);
  const [menu, setMenu] = useState<MenuChoice>("italiaans");
  const [wine, setWine] = useState<WineChoice>("geen");

  const isOnRequest = menu === "op-aanvraag";

  const total = useMemo(() => {
    if (isOnRequest) return null;
    const perPerson = PRICING.menuPerPerson + (wine === "wijn" ? PRICING.winePerPerson : 0);
    return perPerson * guests;
  }, [guests, wine, isOnRequest]);

  function handleGuestsChange(value: string) {
    const n = Number(value);
    if (Number.isNaN(n)) return;
    const clamped = Math.min(Math.max(n, PRICING.calculatorMinGuests), PRICING.calculatorMaxGuests);
    setGuests(clamped);
  }

  return (
    <div className="rounded-xl border border-olive-dark/10 bg-cream-soft p-6 shadow-card sm:p-8">
      <h3 className="text-2xl">Bereken de prijs</h3>
      <p className="mt-1 text-sm text-bark/60">
        3 gangen — {formatEuro(PRICING.menuPerPerson)} p.p. · Wijn optioneel — +{formatEuro(PRICING.winePerPerson)} p.p.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="guests" className="text-sm font-medium text-bark">
            Aantal personen
          </label>
          <input
            id="guests"
            type="number"
            min={PRICING.calculatorMinGuests}
            max={PRICING.calculatorMaxGuests}
            value={guests}
            onChange={(e) => handleGuestsChange(e.target.value)}
            className="rounded-lg border border-olive-dark/15 bg-white px-4 py-2.5 text-[15px] focus:border-terracotta focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="menu-choice" className="text-sm font-medium text-bark">
            Menu
          </label>
          <select
            id="menu-choice"
            value={menu}
            onChange={(e) => setMenu(e.target.value as MenuChoice)}
            className="rounded-lg border border-olive-dark/15 bg-white px-4 py-2.5 text-[15px] focus:border-terracotta focus:outline-none"
          >
            <option value="italiaans">Italiaans</option>
            <option value="frans">Frans</option>
            <option value="op-aanvraag">Menu op aanvraag</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="wine-choice" className="text-sm font-medium text-bark">
            Wijn
          </label>
          <select
            id="wine-choice"
            value={wine}
            onChange={(e) => setWine(e.target.value as WineChoice)}
            disabled={isOnRequest}
            className="rounded-lg border border-olive-dark/15 bg-white px-4 py-2.5 text-[15px] focus:border-terracotta focus:outline-none disabled:opacity-50"
          >
            <option value="geen">Geen wijn</option>
            <option value="wijn">Wijn +{formatEuro(PRICING.winePerPerson)} p.p.</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-olive-dark/10 pt-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-bark/60">Geschatte totaalprijs</p>
          {isOnRequest ? (
            <p className="font-display text-3xl text-olive-dark">Prijs op aanvraag</p>
          ) : (
            <p className="font-display text-3xl text-olive-dark">{formatEuro(total ?? 0)}</p>
          )}
        </div>
        <Button href="/contact" variant="primary">
          Vraag een avond aan
        </Button>
      </div>
    </div>
  );
}
