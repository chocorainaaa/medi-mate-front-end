![Logo](./assets/Egg/EggHatch-12.png.png)
# Medi-Mate - FRONT-END

There are many people who would like to meditate, but struggle to build that habit.


Our app uses gamification to encourage daily visits to build that meditation habit. Along with your chosen Medi-Mate, you will learn to breath and meditate alongisde your new friend and keep them happy and healthy.

Looking for the [Back-end?](https://github.com/SchoolOfCode/final-project_back-end-bootglampers)

Live [website](https://medi-mate.netlify.app/)


## Features
- **Landing page** explaining how the app works with a secure login

- **Registration** process where you choose and name your pet

- **Pet hub**, where your pet lives and you can access all other screens through the pet-house
  - **Mood logger** to track your happiness levels each day
  - **Meditation page**, where you can pick your length of mediation, breath in, breath out and hold breath timings. Your pet will breath along at the same time with you to keep you on track as the timer counts down. Optional relaxing waves sounds are available on a toggle
  - **Quotes** for inspiration or to meditate on
  - **Stats** where all your vital statistic live, tracking your mood over the time you use the app, how often you use the app, how much mediation time you've clocked up, daily steaks, pet age and points earned.

## Installation

```bash
  git clone https://github.com/SchoolOfCode/medi-mate-front-end.git
  
  cd medi-mate-front-end
  
  npm i

```

## Run the front-end
To run the front end:

```bash
  expo start
```

## Roadmap
### Next Steps
- Points earned when player reaches week, month etc usage. To earn rewards for your pet
- Pause after meditation to think about what you are greatful for

### Stretch Goals
- Multiple pets available
- Play games with your pet
- House and pet customisation available
- Pet to be happy or sad based on regular meditation
- **Landing page** The landing page includes our login and signup autherisation process provided by firebase and includes a couple of sentences to get you orientated within the app.

- **Registration** If you are a new friend of Medi-mate's you will be asked to choose an egg for your Medi-Mate to hatch from and then give them a name so you can start your journey together.

- **Pet hub** This is the central hub of the app, where yourp pet lives and you have navigation options to get to the rest of the app.

- **Mood logger** the mood logger happens each time you click to meditate, it tracks your mood across time and will display your hopefully improving mood in the stats section.
 
- **Meditation page** On this page you can pick your total length of mediation also breath in and breath out timings. Your Medi-Mate will guide you through the meditation by animating rings in and out for you to time your breathing to.
 
 - **Quotes** a page that provides Zen quotes for you to think about during your meditation or to start your day of right with some insightful thoughts.
 
  - **Stats** This page shows interesting stats, such as your total meditation time, your Medi-mates age, your total amount of times meditated and many more.


## Roadmap
### Next Steps for features
- Introducing more Medi-Mate sprites, as this was asked for during our user research and would help move this from MVP to MLP
- Animating the Medi-Mate on the home screen to show how much you've meditated such as; no meditation: your Medi-mate would be on the floor not moving, some meditation: your Medi-Mate would be walking around, lots of meditation: your Medi-Mate would be flying around the screen.
- Points earned when player reaches streak goals such as week, month etc. To be spent on accesories for your Medi-Mate

### Next steps for code
- writting tests for every componenet and screen and testing the navigation functions
- we have the testing modules installed and the enviroment set up to do this

### Stretch Goals

- Play games with your pet
- House and pet customisation available
- Evolution of pet over time
- Compare stats with friends and have a leaderboard
- Pet talks to you and keeps you motivated


## Known Issues
Add any info in here for known issues

## Running Tests

Add information on any tests we create

## Tech Stack
![react-native]()We chose react-native since the app would be predominatly be used on peoples phones. This gave us the oportunity to code for Android, ios and web all at the same time. However, the trade offs were that ract-native is essentialy still at beta stage and could cause problems for us with intergration of other software.

Why we cose firebase authorisation over auth0

react-native, JS, StyleSheet, expo CLI, add more HERE

## Tech Stack
![react-native]()We chose react-native since the app would be predominatly be used on peoples phones. This gave us the oportunity to code for Android, Ios and Web all at the same time. However, the trade offs were that react-native is essentialy still at the beta stage and could cause problems for us when intergrating it with other software.

react-native, JS, CSS StyleSheets, expo CLI,
reanimated, jest, react navigation, @testing-library/react-native

### The reasons behind the techstack we choose
react native - mobile first design principles, and one of our goals for this project was to challange ourselves and keep learning new technology
expo - expo enabled us to test on devices as we went, using other CLI's would have forced us to set up simulators the interactions between expo and react native are also well doumented.
react native testing library - we tried a few different testing librarys that would work with Jest as we have worked with Jest before.
Heroku - we have mostly worked with SQL databases and our back end didn't need to have too much functionality to validate the mvp of this idea
Netlify - its not as hard as others


## Authors

- [@Emma Kennard](https://github.com/Elkennard)
- [@Raina Blackett](https://github.com/chocorainaaa)
- [@Lorentz Bloom](https://github.com/Lauro235)
- [@Lewis Parr](https://github.com/Le-w-is)



## Acknowledgements
 - Might not need this

