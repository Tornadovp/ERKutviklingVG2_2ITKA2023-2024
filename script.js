
        const registreringsskjema = document.getElementById("registreringsskjema");
        const oppsummering = document.getElementById("oppsummering");
        const deltakerliste = document.getElementById("deltakerliste");

        // Bruker array colletion for deltakerene
        const deltakere = [];

        // Registrer deltaker knapp
        registreringsskjema.addEventListener("submit", function(event) {
            event.preventDefault();

            // Henter verdier fra skjemaet
            const fornavn = document.getElementById("fornavn").value;
            const etternavn = document.getElementById("etternavn").value;
            const adresse = document.getElementById("adresse").value;
            const postnummer = document.getElementById("postnummer").value;
            const poststed = document.getElementById("poststed").value;
            const telefon = document.getElementById("telefon").value;
            const passord = document.getElementById("passord").value;

            // Sjekk om passordet oppfyller minstekravene
            const lengdeKrav = passord.length >= 10;
            const storeOgSmaaBokstaverKrav = /[a-z]/.test(passord) && /[A-Z]/.test(passord);
            const tallKrav = /[0-9]/.test(passord);
            const spesialteiknKrav = /[!"#¤%&/()=?``\@£$€{}+;:,.-_'*¨^~¨`<>|§]/.test(passord);

            //Gjør at minst fre av kravene må bly oppfylt
            const passordGodkjent = (lengdeKrav + storeOgSmaaBokstaverKrav + tallKrav + spesialteiknKrav) >= 3;

            if (passordGodkjent) {
                // Lager en ny deltaker å legger den til i arrayen
                const deltaker = {
                    fornavn,
                    etternavn,
                    adresse,
                    postnummer,
                    poststed,
                    telefon,
                };

                deltakere.push(deltaker);

                // Gir tilbakemelding om passorder er gylding eller ikke
                oppdaterOppsummering();
            } else {
                alert("Passordet oppfyller ikke minstekravene.");
            }
        });

        function oppdaterOppsummering() {
            deltakerliste.innerHTML = ""; 

            // Går i gjennom deltakerne får å legge til en deltaker i listen
            deltakere.forEach(function(deltaker, index) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<strong>Deltaker ${index + 1}:</strong><br>
                                      Fornavn: ${deltaker.fornavn}<br>
                                      Etternavn: ${deltaker.etternavn}<br>
                                      Adresse: ${deltaker.adresse}<br>
                                      Postnummer: ${deltaker.postnummer}<br>
                                      Poststed: ${deltaker.poststed}<br>
                                      Telefon: ${deltaker.telefon}`;
                deltakerliste.appendChild(listItem);
            });

            // Viser oppsummeringen
            oppsummering.style.display = "block";
        }
 