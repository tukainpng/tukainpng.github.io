require 'date'

puts "Digite o título do post"
title = gets.chomp
puts "Digite a descrição do post"
description = gets.chomp
puts "Digite a thumbnail do post"
thumbnail = gets.chomp
date = DateTime.now.strftime("%Y-%m-%d-")

post_name = date + title + ".md"
post_file = File.new(post_name, "w")

File.open(post_file, "w") do |f|
  f.write("---
layout: post
thumbnail: #{thumbnail}
title: #{title}
description: #{description}
---
* TOC
{:toc}
")
end

spawn("mkdir -p _posts")
spawn("mv #{post_name} _posts")
exec("nvim", "_posts/#{post_name}")
