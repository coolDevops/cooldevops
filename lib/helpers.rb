include Nanoc3::Helpers::Rendering
include Nanoc::Helpers::Blogging
include Nanoc::Helpers::Tagging

def get_timeline
  dates = []
  for item in sorted_articles
    date = get_date(item)
    dates << Date.new(date.year, date.month)
  end
  dates.uniq
end

def all_tags
  tags = []
  sorted_articles.each do |item|
    next if item[:tags].nil?
    item[:tags].each { |tag| tags << tag }
  end
  tags.uniq
end

def articles_with_year_and_month(year, month)
  articles = []
  unless month.nil?
    articles = sorted_articles.select{|i| year == get_date(i).year && month == get_date(i).month}
  else
    articles = articles.select{|i| year == get_date(i).year}
  end
  articles
end

def articles_with_tag(tag)
  sorted_articles.select{|a| a[:tags].include?(tag) rescue false }
end
