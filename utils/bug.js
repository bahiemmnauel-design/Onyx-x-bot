async function bug(message, client, texts, num) {
    try {
        const remoteJid = message.key?.remoteJid;
        await client.sendMessage(remoteJid, {
            image: { url: `database/${num}.jpg` },
            caption: `> ${texts}`,
            contextInfo: {
                externalAdReply: {
                    title: "Shadow bug",
                    body: " 𓆩 Shadow onyx x bot𓆪 ",
                    mediaType: 1,
                    thumbnailUrl: `https://whatsapp.com/channel/0029VbBT7FdLCoX1TDyQQb1B`,
                    renderLargerThumbnail: false,
                    mediaUrl: `${num}.jpg`,
                    sourceUrl: `${num}.jpg`
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default bug;