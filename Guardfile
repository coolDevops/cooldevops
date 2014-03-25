guard 'bundler' do
  watch('Gemfile')
end
 
guard 'nanoc' do
  watch(/^config.yaml/)
  watch(/^Rules/)
  watch(/^layouts\//)
  watch(/^content\//)
end
 
guard 'livereload' do
  watch(%r{output/.+\.(css|js|html)})
end
 
notification :off
 
guard 'pow' do
  watch('.powrc')
  watch('.powenv')
  watch('.rvmrc')
  watch('Gemfile')
  watch('Gemfile.lock')
  watch('config/application.rb')
  watch('config/environment.rb')
  watch(%r{^config/environments/.*\.rb$})
  watch(%r{^config/initializers/.*\.rb$})
end
