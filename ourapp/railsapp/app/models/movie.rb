class Movie < ApplicationRecord
    # Validations (optional, you can add more as needed)
    validates :title, presence: true
    validates :link, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp(%w[http https]), message: "must be a valid URL" }
  
    # Any additional logic for your model can go here
  end
  