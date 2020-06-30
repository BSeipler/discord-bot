require('dotenv').config()

const express = require('express')
const Discord = require('discord.js')
const fs = require('fs')

const app = express()
const client = new Discord.Client()

const getVideos = () => {
  const videos = fs.readFileSync('./videos.txt')
  return `${videos}`
}

const getRecentVideo = () => {
  const video = fs.readFileSync('./recent.txt')
  return `${video}`
}

client.once('ready', () => {
  console.log('Bot is ready!')
})

client.login(process.env.TOKEN)

// BOT COMMANDS

client.on('message', async message => {
  try {
    if (message.content === '!videos' || message.content === '!Videos') {
      const videos = await getVideos()
      message.reply(videos)
    }

    if (message.content === '!homework' || message.content === '!Homework') {
      message.reply('Homework for next class:')
    }

    if (message.content === '!recent') {
      const video = await getRecentVideo()
      message.reply(video)
    }
  } catch (error) {
    console.log(error.message)
  }
})

const port = process.env.POST || 3475

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
