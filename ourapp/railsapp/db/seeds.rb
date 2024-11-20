# Destroy all existing movie records (optional, if you want to start fresh)
Movie.destroy_all

# Seed data for the movies table
Movie.create!([
  {
    title: 'Harry Potter And The Goblet of Fire',
    link: 'https://freek.to/watch/movie/674',
    status: 'Working',
    image_url: 'https://m.media-amazon.com/images/I/71+GBOF0-fL._AC_UF894,1000_QL80_.jpg'
  },
  {
    title: 'Joker',
    link: 'https://freek.to/watch/movie/475557',
    status: 'Broken',
    image_url: 'https://m.media-amazon.com/images/I/51E+o6036kL._AC_UF894,1000_QL80_.jpg'
  },
  {
    title: 'Dune',
    link: 'https://freek.to/watch/movie/438631',
    status: 'Working',
    image_url: 'https://storage.googleapis.com/pod_public/1300/216439.jpg'
  },
  {
    title: 'Inception',
    link: 'https://filmartgallery.com/cdn/shop/files/Inception-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?…',
    status: 'Working',
    image_url: 'https://filmartgallery.com/cdn/shop/files/Inception-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?…'
  },
  {
    title: 'The Dark Knight',
    link: 'https://freek.to/watch/movie/155',
    status: 'Working',
    image_url: 'https://m.media-amazon.com/images/I/81IfoBox2TL.jpg'
  }
])

puts "Seeded #{Movie.count} movies."
