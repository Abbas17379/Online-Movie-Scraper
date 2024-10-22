# db/seeds.rb

# Destroy all existing movie records (optional, if you want to start fresh)
Movie.destroy_all

# Seed data for the movies table
Movie.create!([
  { title: 'Harry Potter And The Goblet of Fire', link: 'https://www.imdb.com/title/tt0330373/' },
  { title: 'Joker', link: 'https://www.imdb.com/title/tt7286456/' },
  { title: 'Dune', link: 'https://www.imdb.com/title/tt1160419/' }
])

puts "Seeded #{Movie.count} movies."
