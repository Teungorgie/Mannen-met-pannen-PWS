"use client";

import { FormEvent, useState } from "react";
import { TextField, SelectField, TextareaField } from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { RequestFormData, RequestFormErrors, validateRequestForm } from "@/lib/validation";
import { PRICING, formatEuro } from "@/lib/config";

const EMPTY_FORM: RequestFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  guests: "",
  address: "",
  city: "",
  menu: "",
  wine: "",
  dietary: "",
  allergies: "",
  otherWishes: "",
  message: "",
};

/**
 * Verstuurt de aanvraag naar een backend.
 *
 * Er is nog geen backend gekoppeld. Kies er later één en vervang de inhoud
 * van deze functie — de rest van het formulier hoeft dan niet aangepast
 * te worden. Zie README.md voor voorbeelden (Formspree, Resend, Supabase).
 */
async function submitRequest(data: RequestFormData): Promise<void> {
  // Voorbeeld voor Formspree:
  // await fetch("https://formspree.io/f/JOUW_FORM_ID", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json", Accept: "application/json" },
  //   body: JSON.stringify(data),
  // });

  // Zolang er geen backend is gekoppeld, simuleren we een verzending zodat
  // de front-end getest kan worden zonder dat er echt iets verstuurd wordt.
  await new Promise((resolve) => setTimeout(resolve, 700));
  // eslint-disable-next-line no-console
  console.info("Aanvraag (nog niet echt verstuurd, backend ontbreekt nog):", data);
}

export default function RequestForm() {
  const [data, setData] = useState<RequestFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<RequestFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof RequestFormData>(key: K, value: RequestFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validateRequestForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    try {
      await submitRequest(data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-olive-dark/10 bg-cream-soft px-8 py-16 text-center">
        <h3 className="text-3xl text-olive-dark">Aanvraag ontvangen!</h3>
        <p className="max-w-md text-bark/70">
          Bedankt! We nemen zo snel mogelijk contact met jullie op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-xs font-semibold uppercase tracking-wide text-terracotta">
          Persoonsgegevens
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="firstName"
            label="Voornaam"
            required
            value={data.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            error={errors.firstName}
          />
          <TextField
            id="lastName"
            label="Achternaam"
            required
            value={data.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            error={errors.lastName}
          />
          <TextField
            id="email"
            type="email"
            label="E-mailadres"
            required
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            error={errors.email}
          />
          <TextField
            id="phone"
            type="tel"
            label="Telefoonnummer"
            required
            placeholder="06 12345678"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            error={errors.phone}
          />
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-xs font-semibold uppercase tracking-wide text-terracotta">
          Evenement
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="eventType"
            label="Evenement"
            placeholder="Bijv. verjaardag, etentje met vrienden"
            value={data.eventType}
            onChange={(e) => update("eventType", e.target.value)}
          />
          <TextField
            id="date"
            type="date"
            label="Gewenste datum"
            required
            value={data.date}
            onChange={(e) => update("date", e.target.value)}
            error={errors.date}
          />
          <TextField
            id="guests"
            type="number"
            min={1}
            label="Aantal personen"
            required
            value={data.guests}
            onChange={(e) => update("guests", e.target.value)}
            error={errors.guests}
          />
          <TextField
            id="city"
            label="Plaats"
            required
            value={data.city}
            onChange={(e) => update("city", e.target.value)}
            error={errors.city}
          />
          <TextField
            id="address"
            label="Adres"
            required
            wrapperClassName="sm:col-span-2"
            value={data.address}
            onChange={(e) => update("address", e.target.value)}
            error={errors.address}
          />
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-xs font-semibold uppercase tracking-wide text-terracotta">Menu</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            id="menu"
            label="Menu"
            required
            value={data.menu}
            onChange={(e) => update("menu", e.target.value)}
            error={errors.menu}
          >
            <option value="">Kies een menu</option>
            <option value="italiaans">Italiaans</option>
            <option value="frans">Frans</option>
            <option value="op-aanvraag">Menu op aanvraag</option>
            <option value="nog-niet-bekend">We weten het nog niet</option>
          </SelectField>

          <SelectField
            id="wine"
            label="Wijn"
            required
            value={data.wine}
            onChange={(e) => update("wine", e.target.value)}
            error={errors.wine}
          >
            <option value="">Kies een optie</option>
            <option value="geen">Geen wijn</option>
            <option value="ja">Ja, +{formatEuro(PRICING.winePerPerson)} p.p.</option>
            <option value="nog-niet-bekend">We weten het nog niet</option>
          </SelectField>
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-xs font-semibold uppercase tracking-wide text-terracotta">Extra&apos;s</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="dietary"
            label="Speciale dieetwensen"
            value={data.dietary}
            onChange={(e) => update("dietary", e.target.value)}
          />
          <TextField
            id="allergies"
            label="Allergieën"
            value={data.allergies}
            onChange={(e) => update("allergies", e.target.value)}
          />
          <TextField
            id="otherWishes"
            label="Andere wensen"
            wrapperClassName="sm:col-span-2"
            value={data.otherWishes}
            onChange={(e) => update("otherWishes", e.target.value)}
          />
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-5">
        <legend className="mb-1 text-xs font-semibold uppercase tracking-wide text-terracotta">Bericht</legend>
        <TextareaField
          id="message"
          label="Vertel ons iets over jullie avond…"
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </fieldset>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-terracotta-dark">
          Er ging iets mis bij het versturen. Probeer het nog eens, of mail ons direct.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Bezig met versturen…" : "Aanvraag versturen"}
      </Button>
    </form>
  );
}
