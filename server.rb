require 'sinatra'



get '/' do
  File.read(File.join('HTML', 'index.html'))
end
