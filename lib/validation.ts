export type RequestFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guests: string;
  address: string;
  city: string;
  menu: string;
  wine: string;
  dietary: string;
  allergies: string;
  otherWishes: string;
  message: string;
};

export type RequestFormErrors = Partial<Record<keyof RequestFormData, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Nederlandse telefoonnummers: 06-nummers, vaste nummers, of +31 varianten. Ruim genoeg gehouden.
const PHONE_REGEX = /^(\+31|0)[\s-]?[1-9][\d\s-]{7,12}$/;

export function validateRequestForm(data: RequestFormData): RequestFormErrors {
  const errors: RequestFormErrors = {};

  if (!data.firstName.trim()) errors.firstName = "Vul je voornaam in.";
  if (!data.lastName.trim()) errors.lastName = "Vul je achternaam in.";

  if (!data.email.trim()) {
    errors.email = "Vul je e-mailadres in.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Dit e-mailadres lijkt niet te kloppen.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Vul je telefoonnummer in.";
  } else if (!PHONE_REGEX.test(data.phone.trim().replace(/\s/g, " "))) {
    errors.phone = "Vul een geldig Nederlands telefoonnummer in.";
  }

  if (!data.date.trim()) {
    errors.date = "Kies een gewenste datum.";
  } else {
    const chosen = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(chosen.getTime())) {
      errors.date = "Dit is geen geldige datum.";
    } else if (chosen < today) {
      errors.date = "Kies een datum in de toekomst.";
    }
  }

  if (!data.guests.trim()) {
    errors.guests = "Vul het aantal personen in.";
  } else {
    const n = Number(data.guests);
    if (!Number.isFinite(n) || n < 1) {
      errors.guests = "Vul een geldig aantal personen in.";
    }
  }

  if (!data.address.trim()) errors.address = "Vul een adres in.";
  if (!data.city.trim()) errors.city = "Vul een plaats in.";
  if (!data.menu) errors.menu = "Kies een menu.";
  if (!data.wine) errors.wine = "Maak een keuze voor de wijn.";

  return errors;
}
