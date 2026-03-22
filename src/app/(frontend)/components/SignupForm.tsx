"use client";

import { useState } from "react";
import { signupFrivillig } from "../actions/signupFrivillig";

export const HEGN_SLOTS = [
  { id: "1", label: "10:30 – 13:00" },
  { id: "2", label: "12:30 – 15:00" },
  { id: "3", label: "14:30 – 17:00" },
  { id: "4", label: "16:30 – 19:00" },
  { id: "5", label: "18:30 – 21:00" },
  { id: "6", label: "20:30 – 23:00" },
];

const OMRAADE_LABELS: Record<string, string> = {
  HEGNVAGT: "Hegnsvagt",
  OPSAETNING: "Opstilling",
  NEDTAGNING: "Nedtagning",
  LEDIG: "Det er ligegyldigt, jeg vil bare være med",
};

interface SignupFormProps {
  onSuccess?: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSuccess }) => {
  const [selectedOmraade, setSelectedOmraade] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOmraadeChange = (value: string) => {
    setSelectedOmraade(value);
    if (value !== "HEGNVAGT") setSelectedSlot(null);
  };

  return (
    <>
      <form
        action={async (formData: FormData) => {
          setLoading(true);
          try {
            if (selectedOmraade === "HEGNVAGT" && selectedSlot) {
              formData.set("slotId", selectedSlot);
            }

            await signupFrivillig(formData);

            setMessage(
              "Tak! Din tilmelding er modtaget. Du vil modtage yderligere info om dagen på email.",
            );
            setSubmitted(true);

            if (onSuccess) {
              setTimeout(() => onSuccess(), 3000);
            }
          } catch (err: any) {
            setMessage(`Fejl: ${err.message}`);
          } finally {
            setLoading(false);
          }
        }}
        className="grid grid-cols-4 gap-8"
      >
        {!submitted && (
          <>
            <input
              name="navn"
              placeholder="Navn"
              className="border-purple col-span-full border border-b-4 px-2 py-2 sm:col-span-2"
              required
            />
            <input
              name="email"
              placeholder="Email"
              className="border-purple col-span-full border border-b-4 px-2 py-2 sm:col-span-2"
              required
            />
            <input
              name="telefon"
              placeholder="Telefon"
              className="border-purple col-span-full border border-b-4 px-2 py-2 sm:col-span-2"
            />

            <div className="col-span-full mt-12">
              <h4 className="border-purple mb-4 border-b-4 text-xl">
                Hvor ønsker du at hjælpe?
              </h4>
              <div className="flex flex-wrap gap-4">
                {Object.keys(OMRAADE_LABELS).map((omraade) => (
                  <label
                    key={omraade}
                    className={`border-neonGreen flex cursor-pointer items-center gap-2 rounded-md border-2 p-2 ${
                      selectedOmraade === omraade
                        ? "bg-neonGreen text-dark"
                        : "hover:bg-neonGreen"
                    }`}
                  >
                    <input
                      type="radio"
                      name="omraade"
                      value={omraade}
                      className="hidden"
                      checked={selectedOmraade === omraade}
                      onChange={() => handleOmraadeChange(omraade)}
                    />
                    {OMRAADE_LABELS[omraade]}
                  </label>
                ))}
              </div>
              {selectedOmraade === "HEGNVAGT" && (
                <div className="col-span-full mt-12">
                  <h4 className="border-purple mb-4 border-b-4 text-xl">
                    Ønsket tidspunkt for hegnsvagt
                  </h4>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {HEGN_SLOTS.map((slot) => (
                      <label
                        key={slot.id}
                        className={`border-neonGreen flex cursor-pointer items-center rounded-md border-2 p-2 ${
                          selectedSlot === slot.id
                            ? "bg-neonGreen text-dark"
                            : "hover:bg-neonGreen"
                        }`}
                      >
                        <input
                          type="radio"
                          name="slotId"
                          value={slot.id}
                          className="hidden"
                          checked={selectedSlot === slot.id}
                          onChange={() => setSelectedSlot(slot.id)}
                        />
                        {slot.label}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-full mt-12">
              <h4 className="border-purple border-b-4 text-xl">
                Er der andet vi skal vide?
              </h4>
            </div>

            <textarea
              name="kommentar"
              placeholder="Hvem vil du evt dele vagt med.. Hvilket tidspunkt kan du bedst.. osv osv. "
              className="border-purple col-span-full h-48 border border-b-4 px-2 py-2"
            />

            <div className="col-span-full mt-4 mb-12">
              <button
                type="submit"
                className="bg-purple cursor-pointer px-8 py-2 text-white"
                disabled={loading}
              >
                {loading ? "Sender..." : "Tilmeld"}
              </button>
            </div>
          </>
        )}

        {message && (
          <div
            className={`col-span-full mt-2 rounded p-2 ${
              message.startsWith("Tak") ? "bg-neonGreen" : "bg-purple"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </>
  );
};

export default SignupForm;
