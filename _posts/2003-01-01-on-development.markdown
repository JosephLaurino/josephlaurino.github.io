---
layout: post
title:  "On Game Development -- musings in 2003"
date:   2003-01-01 16:00:00 -0700
categories: update
---

## On Working in Teams

#### The need for a possitive feedback loop. 

  It is very easy to point out what's wrong in a game that sometimes 
people forget to compliment their peers about their hard work. We all 
need some lovin' and giving each other compliments once in a while helps 
reduce the stress and in a possitive way, motivate and inspire one 
another. Don't limit this just to your teams. In the end, you are all 
working together and solving the same problems. Share and help everyone 
succeed -- that's the very reason why we have Siggraph and the Game 
Developers Conference. 

#### Intuitive Game Controls + Code + Art + Audio + Level Design + Game Design + Communication = Great Game 

  All the above components help create a great game. This is a lesson 
usually learned too late by game teams and they fail. Show your latest 
code to one of the art guys and inspire them. Show your awesome concept 
art/model to a programmer and inspire them to integrate it! You guys 
are not getting paid doing this and motivation is something very hard to 
maintain, especially in a big team. 

  * Note that audio is as important as graphics. Think of audio as free 
polygons and animation. If you're behind a door and you hear a beast 
growling outside, the renderer is only rendering the door while the 
player is busy getting scared. 

#### More on Communication 

  If you have doubts in what you are doing, e-mail someone. Before you 
go to the lab, figure out what you should be doing before getting there. 
That's why schedules are very important -- even if they are wrong! 
Here's the truth, schedules are always wrong. The purpose of the 
schedule is to provide an artificial way to motivate the project. If 
you guys are self-motivated and keep track of your progress, your 
schedule will end up being very adaptive to your progress and keeps log 
of who's resposible for what and the dependecies. One simple feature or 
piece of art could stop the production of a game for three days -- 
that's a big chunk of your schedule already. 

#### Spatial and Temporal Locality is very important 

  There's a reason why companies spend a lot of money on having an 
office space. Yeah, e-mail is cool. My cell phone rocks but there's no 
replacement of having everyone in the same lab making decisions in 15 
minutes instead of two days! 

  * instant messaging is kinda ok... 

## On Game Design

There should be layers of goals based on time and space. 

### For example: 

- every 20 seconds, need to dodge enemy fire and traps, 
- every 1 minute, need to collect a gold coin 
- every 10 minutes, need to collect a special key 
- every 30 minutes, need to gain enough points to win the game 

Things that need to happen every 20 seconds needs to be spaced out so 
that the player can interact with it. Or one can speed up the objects 
(speed of the enemy, enemy projectile) 

This is what I call the heartbeat of the game. You know when you 
are in the zone when you can't think of anything else but beating the 
level! 

Create places in your level where you can force conflict (interaction 
between players) which technically can be accomplished by making narrow 
tunnels, or if the location that everybody needs to be at is 
specifically made small. 

Don't try to make things realistic... real life is boring that's why you 
play games! Although rock-climbing is not necessarily boring :-) 

Multiple win conditions are cool... let the player decide how he/she 
should play! 
- win by collecting gold coins 
- win by killing the most mosquitos 
- etc... 

Duh! Play some good video games and steal ideas from them! 

## On Development

Make it easy to tweak your game (Make it Data-Driven) 

Being able to change any piece of content or game attribute without 
the need of a re-compile is the key in making a game fun! Store 
attributes as text files. Have naming conventions for your content. 
Let everyone try out an idea and make it easy for everyone to do just 
that. Making a good game is easy. Making a great game is harder. 
Making a game that you can make money out of is the hardest. 

That's it for now, I'll talk more about software design later on to give 
you guys some hints on how to set up your game data-structures so that 
they can scale well as well as some internal information on what the 
WebDriver is doing in the backend so that you guys can organize your 
data to maximize the processing pipelines. 

If you have some time, you can read this paper that I wrote a couple of 
years ago about game engine design. The part about Hierarchical 
Programming might be an interesting read. 

http://www.bytewave.net/future/design/hedge/hedge.htm

Remember, we're not trying to cure cancer here... we're just making 
games, so please keep your drama and stress in perspective :-) 