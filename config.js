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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2Y6jOBT9lZZfE3VYskslDZCELFAJRagso34w2BCH3TYEaOXfW6S6uuthpqfmzfiic88951x/B0lKGN7gGky/g4ySEnLcHnmdYTAFauH7mIIuQJBDMAVMm5Rot4/ygz+0O0517sVmbWTX3oEUR7oScotOGBOwGJ2ewL0LssKNiPcHwB3aGeXLttMrArpN5M7w2aoPlgKV2G9qlpkaRkY/E1xdvD2Be4sICSVJMM8uOMYURhtc7yChn6M/1x3fxTWHkmwpubptVnYjSFdndzby1RYL10UVnSKmwIP5OfqdyjjrXuNvjMWiUU8DxXDxdh3O6r21Hl4pmljoXLu6KOvBG31GggSjFcIJJ7z+tO728pWG3mju1Mmydnqbc7OfwNwqr7OhIhuRumrqZRhau57c/xzxIuqtV3Y1LuVOaaPAc/ig1HrX1T4ZBuZ2Hhy1jjK2cKWq4UfiO/qelfD/6O6pMa/N2dIyzOBMrutmdhnPCjOGsX+ID3x9k/LAnWEkOsHn6JOJdXyJ18uDYxevhm6cehM9L2wnmg/4ES1HIsmQPEIzI/igO+QF/RNLlG2qFzWfDV3P0S5FLDUH4/WSZvOFCdn69RQ7YqOhi74289IVstrdNCqWKqG/oletvIz1LTvL1jKO2VE7uW6cJGFPuz09JgpxvUJgKt67gOKAME4hJ2nyuBtMugCi0sYexfwhL7ikmqTzw5gQi54GaxFp89vAtvmYe+52NFLXHXqTh0QuNOEJdEFGUw8zhtGSMJ7S2sSMwQAzMP37WxckuOJvxrXtZLELfEIZd5Iii1KI3l19L0LPS4uE23Xiae0BUzAVfl9jzkkSsFbHIoHUu5ASaxfIGZj6MGL414SYYgSmnBb419ZqKWqFFzcz6TSXn0EXxA9DCAJTIInSUBwNBFkSBtNh/y/29dbCwiz7mmAOuiCB7d9gXpLoyyqmMEnZFzVtK9EDQBTl0Vga9WV5NBRFucVoC/df3NtWCHNIIgamQNt1wthzZvPVyE+4qevKPFC0QAG/Z30PzZspbKI6cN4hVmErqS9zoeNutHXvUPH9Zr884fHwGIgvOvY06+kfQMAUuLo4m7jai3AUvPjY6Kdeg4U0M2/5YpX7+eV5cAy2maVdb2E/PLnp3usM7GxcOKON5wdbw3WOonuxPccUcP8Y2Y2uT1Tlqe2GcEk8/LFZsfDTeXHdao5eecLhWTF6aYMMRQvMXNYjWsmH5rAQDCvIxxFPqS3Mhob+vCzVnPHBkEZIEupZFYhyTFEljmpDOinKW5wf6xT9fMbII2iti+2nT/DjVfjp1n+6+ka8DZ9w737A+PnO/Muuqu7OetUvuzQ0wmCznIzQLq4D4ovMdeqwkpblNuo/Oy9JooTgfv/WBVkEuZ/SuDUydiHoApoWbZRXiZ/+oZOmhCvVCox27Agyrvxejz2JMeMwzsBUHI0H4lgQBtL9B1ezAJxUBwAA',
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
      openai: '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',
      deepai: '',
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
  
