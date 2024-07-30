require 'date'

puts "Digite o título do post"
title = gets.chomp
puts "Digite a descrição do post"
description = gets.chomp
puts "Digite a thumbnail do post"
thumbnail = gets.chomp
d = DateTime.now
date = d.strftime("%Y-%m-%d-")

post = File.new(date + title + ".md", "w")
post_name = date + title + ".md"

File.open(post, "w") do |f|
  f.write("---
layout: post
thumbnail: #{thumbnail}
title: #{title}
description: #{description}
---
")
end

spawn("mkdir -p _posts")
spawn("mv #{post_name} _posts")
exec("nvim", "_posts/#{post_name}")
