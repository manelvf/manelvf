url = "http://localhost/manelvf"
# reference: #{md[0]}

watch( 'test/test.*\.js' )  {|md| system("phantomjs --web-security=no #{md[0]} \"" + url + "\"") }
watch( 'js/.*\.js' )  do |md|  
  s = /js\/(.*)[.]js/.match(md[0])
  system("phantomjs --web-security=no test/test_#{s[1]}.phantom.js \"" + url + "\"")
end


