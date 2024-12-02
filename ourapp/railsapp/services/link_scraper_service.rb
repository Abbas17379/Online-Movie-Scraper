require 'selenium-webdriver'
require 'nokogiri'
require 'json'
require 'fileutils'

class LinkScraperService
  def initialize(url)
    @url = url
  end

  def scrape_and_save
    # Explicitly set the host IP for ChromeDriver
    host_ip = '10.197.218.116' # Replace with your actual host machine's IP
    chrome_driver_url = "http://#{host_ip}:4444"
    puts "Connecting to ChromeDriver at #{chrome_driver_url}"

    # Configure Selenium WebDriver
    options = Selenium::WebDriver::Chrome::Options.new
    driver = Selenium::WebDriver.for(
      :remote,
      url: chrome_driver_url,
      capabilities: options
    )

    # Navigate to the URL
    driver.get(@url)

    # Allow JavaScript to load content
    sleep 5

    # Fetch the rendered HTML
    html_content = driver.page_source
    document = Nokogiri::HTML(html_content)

    # Base URL for relative links
    base_url = URI.parse(@url).scheme + '://' + URI.parse(@url).host

    # Extract movie names and links
    movies = document.css('a').map do |link|
      href = link['href']
      text = link.text.strip
      next if href.nil? || text.empty?

      # If the link is relative, prepend the base URL
      full_link = href.start_with?('/') ? base_url + href : href
      { name: text, link: full_link }
    end.compact.uniq

    # Display scraped movies in the terminal
    puts "\nMovies scraped:\n"
    movies.each_with_index do |movie, index|
      puts "#{index + 1}. #{movie[:name]} - #{movie[:link]}"
    end

    # Ensure the tmp directory exists
    tmp_dir = '/app/tmp'
    puts "Resolved tmp directory: #{tmp_dir}"
    FileUtils.mkdir_p(tmp_dir)

    # Generate a unique filename
    timestamp = Time.now.strftime('%Y%m%d_%H%M%S')
    file_path = File.join(tmp_dir, "scraped_movies_#{timestamp}.json")
    puts "Resolved file path: #{file_path}"

    # Save movies to JSON file
    puts "Debug: About to save file to #{file_path}"
    File.open(file_path, 'w') do |file|
      file.write(JSON.pretty_generate(movies))
    end

    driver.quit
    puts "Scraped and saved #{movies.size} movies to '#{file_path}'."
    movies
  end
end

#