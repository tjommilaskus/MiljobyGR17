import React from "react";

function Hero() {
  return (
    <div>
      <div className="row mt-14"></div>
      <div>
        <h1 className="text-[64px] flex text-center justify-center text-gray-800 font-semibold">
          HVLTopia
        </h1>
        <p className="justify-center flex">Velkommen til vår Miljøby</p>
        <div className="fill flex justify-center">
          <img src="/miljoby.jpg" alt="Miljøby" />
        </div>
        <div className="px-48 mt-8 mb-9">
          <p className="mb-8">
            HVLTopia er mer enn bare en by; det er en levende visjon for en
            bærekraftig fremtid. Byen er designet med naturen i sentrum, der
            moderne teknologi og miljøvennlige løsninger går hånd i hånd for å
            skape et harmonisk og fremtidsrettet samfunn. Her har vi satt fokus
            på å bevare og styrke naturressurser, samtidig som vi tilbyr våre
            innbyggere en høy livskvalitet.
          </p>

          <p className="mb-8">
            Grønn Infrastruktur HVLTopia er bygget rundt et nettverk av grønne
            korridorer som knytter sammen parker, skoger, og urbane områder.
            Disse korridorene gir ikke bare pusterom for innbyggerne, men
            fungerer også som viktige habitater for dyre- og planteliv.
            Bærekraftig transport, som sykler, elbusser, og gågater, prioriteres
            for å redusere karbonutslipp og fremme et sunt og aktivt liv.
          </p>

          <p className="mb8">
            Energiproduksjon og -forbruk I HVLTopia kommer all energi fra
            fornybare kilder. Byen er selvforsynt med solenergi, vindkraft, og
            geotermisk energi, og hvert bygg er utstyrt med energieffektive
            løsninger som maksimerer bruken av naturlig lys og ventilasjon.
            Smarte energisystemer sørger for at ingen energi går til spille, og
            innbyggerne kan følge med på sitt eget forbruk i sanntid for å gjøre
            bevisste valg.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
