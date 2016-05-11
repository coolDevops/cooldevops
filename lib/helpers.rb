include Nanoc::Helpers::Blogging
include Nanoc::Helpers::Tagging
include Nanoc::Helpers::Rendering
include Nanoc::Helpers::LinkTo

def get_date(item)
  return DateTime.parse(item.identifier).to_time
end

def all_tags
  tags = []
  sorted_articles.each do |item|
    next if item[:tags].nil?
    item[:tags].each { |tag| tags << tag }
  end
  tags.uniq
end


def articles_with_tag(tag)
  sorted_articles.select{|a| a[:tags].include?(tag) rescue false }
end

def listing_date(date)
  return date.strftime("%d %b. %Y")
end
