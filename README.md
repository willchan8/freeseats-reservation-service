# freeSeats

> Project description

## Related Projects

  - Reservation: https://github.com/freeseats/wfong-service-reservations
  - Top-Bar: https://github.com/freeseats/exzerone-search-bar
  - Menu, Related Restaurants, Side-Bar: https://github.com/freeseats/Menu-Related-SideBar
  - Restaurant Photos: https://github.com/freeseats/matthewjdiaz1-photo-service
  - Reviews: https://github.com/freeseats/slhodak-reviews-and-impressions

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
1. [Usage](#Usage)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Seeding Database
- Log into mySQL from terminal: mySQL -u root -p
- Enter password if set up with one
- Create database in mySQL: CREATE DATABASE reservations;
- Select database: use reservations;
- Run script:
```sh
npm run seed
```
- To check database: SELECT * FROM restaurants;

## Usage

From within the root directory:

```sh
npm install -g webpack
npm install
npm run build
npm start
```
- In a broswer, go to: localhost:3020