# Destroy all existing movie records (optional, if you want to start fresh)
Movie.destroy_all

# Seed data for the movies table
Movie.create!([
  {
    title: 'Harry Potter And The Goblet of Fire',
    link: 'https://www.imdb.com/title/tt0330373/',
    status: 'Working',
    image_url: 'https://imageurl.com/harry_potter.jpg'
  },
  {
    title: 'Joker',
    link: 'https://www.imdb.com/title/tt7286456/',
    status: 'Broken',
    image_url: 'https://imageurl.com/joker.jpg'
  },
  {
    title: 'Dune',
    link: 'https://www.imdb.com/title/tt1160419/',
    status: 'Working',
    image_url: 'https://imageurl.com/dune.jpg'
  },
  {
    title: 'Inception',
    link: 'https://www.imdb.com/title/tt1375666/',
    status: 'Working',
    image_url: 'https://imageurl.com/inception.jpg'
  },
  {
    title: 'The Dark Knight',
    link: 'https://www.imdb.com/title/tt0468569/',
    status: 'Working',
    image_url: 'https://imageurl.com/dark_knight.jpg'
  }
])

puts "Seeded #{Movie.count} movies."
