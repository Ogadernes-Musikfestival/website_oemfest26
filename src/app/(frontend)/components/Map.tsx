"use client";

const Map = () => {
  return (
    <>
      <div className="mb-48 hidden md:block">
        <iframe
          src="https://snazzymaps.com/embed/694134"
          width="100%"
          height="860px"
          style={{ border: "none" }}
        ></iframe>
        <p className="mt-8 text-center">Livøsmøgen 40 · 8000 Aarhus C</p>
      </div>

      <div className="mb-24 md:hidden">
        <iframe
          src="https://snazzymaps.com/embed/694134"
          width="100%"
          height="440px"
          style={{ border: "none" }}
        ></iframe>
        <p className="mt-8 text-center">Livøsmøget 40 · 8000 Aarhus C</p>
      </div>
    </>
  );
};

export default Map;
