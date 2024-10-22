# db/seeds.rb

# Destroy all existing movie records (optional, if you want to start fresh)
Movie.destroy_all

# Seed data for the movies table
Movie.create!([
  {
    title: 'Harry Potter And The Goblet of Fire',
    link: 'https://www.imdb.com/title/tt0330373/',
    status: 'Working'
  },
  {
    title: 'Joker',
    link: 'https://www.imdb.com/title/tt7286456/',
    status: 'Broken'
  },
  {
    title: 'Dune',
    link: 'https://www.imdb.com/title/tt1160419/',
    status: 'Working'
  },
  {
    title: 'Inception',
    link: 'https://www.imdb.com/title/tt1375666/',
    status: 'Working'
  },
  {
    title: 'The Dark Knight',
    link: 'https://www.imdb.com/title/tt0468569/',
    status: 'Working'
  }
])

puts "Seeded #{Movie.count} movies."
