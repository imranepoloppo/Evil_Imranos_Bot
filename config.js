/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['212617503205'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Evil Imranos'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Evil Imranos Bot',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXZOiOBT9K1N51RpBUNCqrlpARhFE8Qtlax4CBEwDgSZBgSn/+xR29/Q87M72voVc6txzzzk3PwDJMUUmasD0ByhKfIUMdUfWFAhMgVpFESpBH4SQQTAFsWFWQpNsi8gZukOXj48Z3uxF/XyqInU/t0yYaEo85Lxj8gTufVBUfoqDPwBWbtDW8Pmw3S9sT/ekUTrbCfkxNop0nBsohnPPNrOLZenGE7h3iBCXmMR6cUEZKmFqomYDcfk5+s48EYe2ymfNzPHaXX7xta133icxP+as6ttkub8NV9HqsCHi5+jPT9FLKyp0ybZUbAb2UubyM7c79OaBMfK3chwWUdIrgpt6e6VPcUxQaISIMMyaT+vu2jwZErOV3SBwsX3hWo+ZPERNr25mu11YR6pnDWY5SfPPEa+1+S6UBrmRHiqT2npo4MThKuVk7TKxzdbysHXztua/pavfiW/K96wk/0f3F5s5+irQZDds0fhKHXLu7a5q0robbTaxudoS+UGgZaobfI7+UZmY2nxSK9q+svyjb7WqerIXstCi8GVdLgYju16ucUtv+gd9yKryTyyHgj+/KFuplqhUtOXzZTs63HxqhrKwiarocm7VzNGPaxoklK7kkzMIsO6fnCNXZtqkfk6wrYeu00a84ZDbfBAZZ027PT0mSlBjhGDK3/ugRDGmrIQM5+Rxx3F9AMPrDgUlYg95AZGkVfbsBcllFXnNrEd35lkogiKMnKTkqvJ2K3rPE4731+cn0AdFmQeIUhQuMGV52awQpTBGFEz//t4HBNXs1biuncD3QYRLyg6kKtIchu+uvhdhEOQVYbuGBFp3QCWYch/XiDFMYtrpWBFYBhd8RdoFMgqmEUwp+jUhKlEIpqys0K+t1fKwE35vaWNH2IugD7KHITjs5OeHY14accKQG03Ho7/o11sHC4viK0EM9AGB3d9Av+L0i5GVkOT0i5p3lfQBwPOCJA8lURCkMc8LHUZXuP/i3rUKEYM4pWAKNENLs+Aw05eDF8JW87mix4oWK+Bj1vfQvJpCJ+oB6j3sVDsljwTG9XxTWw7cmu3N/eKM5PEp5rdzFGjO0z+AgCngRifeEsVUgL0o50fbBif28Vkb3zaKdVJ92ZqkOo0LQ1OFDTlYmStfw6Wck3DDLF8jl50l1Hs4E85H99twIi68zTKdKU9dtxBdcYB+b7buba+D6HQJBeOlaut1EDXNfCBSSYTDSLR8w/N7Wu1xWLsKsXmkuL3dTrBas8BTyXgsqyLeLvil016VXbqQs+p8jtT4Nc6PdUrfnjH8CFrnYvcZYfR4Fd7c+k9XX4l34ePu/d8w3t6Zf9lV1d84x/llkydWEpuLiRRusibGEU/9Q5PUw8V1nYr2YUuIkoD7/XsfFClkUV5mnZGZD0EflHnVRdkgUf6HTpqSGKoTW93YKaRM+ViPPc4QZTArwJSX5BEv86I0uf8EzxkOHFQHAAA=',
    newsletterJid: '120363160757210405@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Evil Imranos Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: 'sk-9a24a7e4b9554307b1e111c3f0324d16',
      remove_bg: '3h1NsrjBWP9PWaduaBuPEJFt'
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Morroco/Rabat',
    
    // Limits
    maxWarnings: 4,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
