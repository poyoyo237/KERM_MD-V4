










const { cmd } = require('../command');

cmd({
    pattern: "save",
    desc: "Download and directly send media back to the user",
    category: "utility",
    use: ".save (reply to media)",
    filename: __filename
}, async (conn, mek, m, { quoted, react, sender }) => {
    try {
        // Vérifie si le message cité contient des médias
        if (!quoted || !(quoted.imageMessage || quoted.videoMessage || quoted.audioMessage || quoted.documentMessage)) {
            return react("❌"); // Réaction en cas d'erreur
        }

        // Réagit avec un sablier pour indiquer que l'opération est en cours
        await react("⏳");

        // Télécharge le média
        const mediaBuffer = await conn.downloadMediaMessage(quoted);

        if (!mediaBuffer) {
            return react("❌"); // Réaction en cas d'échec du téléchargement
        }

        // Détecte le type de média
        const mediaType = quoted.imageMessage
            ? "image"
            : quoted.videoMessage
            ? "video"
            : quoted.audioMessage
            ? "audio"
            : quoted.documentMessage
            ? "document"
            : null;

        if (!mediaType) {
            return react("❌"); // Réaction en cas de type de média non supporté
        }

        // Envoie directement le média dans la discussion
        await conn.sendMessage(sender, {
            [mediaType]: mediaBuffer,
        });

        // Réagit avec ✅ pour indiquer que l'opération est terminée
        await react("✅");
    } catch (e) {
        console.error("Error in save command:", e);
        react("❌"); // Réaction en cas d'erreur
    }
});