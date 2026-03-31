"use client";

import { useState } from "react";
import { signupFrivillig } from "../actions/signupFrivillig";

export const HEGN_SLOTS = [
  { id: "1", label: "11:30 – 13:30" },
  { id: "2", label: "13:00 – 15:30" },
  { id: "3", label: "15:00 – 17:30" },
  { id: "4", label: "17:00 – 19:30" },
  { id: "5", label: "19:00 – 21:30" },
  { id: "6", label: "21:00 – 23:30" },
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
  const [isError, setIsError] = useState(false);

  const handleOmraadeChange = (value: string) => {
    setSelectedOmraade(value);
    if (value !== "HEGNVAGT") setSelectedSlot(null);
  };

  return (
    <>
      <form
        action={async (formData: FormData) => {
          if (loading) return;
          setLoading(true);

          if (selectedOmraade === "HEGNVAGT" && selectedSlot) {
            formData.set("slotId", selectedSlot);
          }

          const res = await signupFrivillig(formData);

          setMessage(res.message);
          setIsError(!res.success);

          if (res.success) {
            setSubmitted(true);

            if (onSuccess) {
              setTimeout(() => onSuccess(), 3000);
            }
          }

          setLoading(false);
        }}
        className={`grid grid-cols-4 gap-4 md:gap-8 ${loading ? "pointer-events-none opacity-70" : ""}`}
      >
        {!submitted && (
          <>
            <input
              name="navn"
              placeholder="Navn"
              className="border-purple col-span-full border border-b-4 px-2 py-2 focus:scroll-mt-32 sm:col-span-2"
              required
            />
            <input
              name="email"
              placeholder="Email"
              className="border-purple col-span-full border border-b-4 px-2 py-2 focus:scroll-mt-32 sm:col-span-2"
              required
            />
            <input
              name="telefon"
              placeholder="Telefon"
              className="border-purple col-span-full border border-b-4 px-2 py-2 focus:scroll-mt-32 sm:col-span-2"
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
                className={`bg-purple rounded px-8 py-2 text-white ${
                  loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                }`}
                disabled={loading}
              >
                Tilmeld
              </button>
              {loading && (
                <div className="text-purple mt-2 flex items-center gap-2">
                  <div className="border-purple h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
                  Sender...
                </div>
              )}
            </div>
          </>
        )}

        {message && (
          <div
            className={`col-span-full mt-2 rounded p-2 ${
              isError ? "bg-purple" : "bg-neonGreen"
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
