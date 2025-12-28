// Data fixa (não pode ser alterada na interface)
const dataFixa = new Date("2025-09-08T06:06:00"); // exemplo

// Função para singular/plural
function pluralize(value, singular, plural) {
    return value === 1 ? `${value} ${singular}` : `${value} ${plural}`;
}

// Atualiza o contador a cada segundo
function atualizarContador() {
    const agora = new Date();
    let delta = Math.floor((agora - dataFixa) / 1000);

    const dias = Math.floor(delta / (3600 * 24));
    delta %= 3600 * 24;
    const horas = Math.floor(delta / 3600);
    delta %= 3600;
    const minutos = Math.floor(delta / 60);
    const segundos = delta % 60;

    const texto = `We’ve been together for ` +
        `${pluralize(dias, "day", "days")}, ` +
        `${pluralize(horas, "hour", "hours")}, ` +
        `${pluralize(minutos, "minute", "minutes")} and ` +
        `${pluralize(segundos, "second", "seconds")} 💕`;

    document.getElementById("contador").innerText = texto;
}

// Inicia o contador
setInterval(atualizarContador, 1000);
