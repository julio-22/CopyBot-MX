document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("miFormulario");
  const respuesta = document.getElementById("respuesta");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    respuesta.textContent = "⏳ Generando mensaje...";

    const giro = document.getElementById("giro").value;
    const tono = document.getElementById("tono").value;
    const objetivo = document.getElementById("objetivo").value;

    try {
      const response = await fetch("https://tu-usuario.hf.space/run/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [giro, tono, objetivo] }),
      });
      const result = await response.json();
      respuesta.textContent = result.data[0];
    } catch (err) {
      respuesta.textContent = "❌ Error generando mensaje. Revisa tu conexión.";
      console.error(err);
    }
  });
});
