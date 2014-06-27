require 'sinatra'
require 'pony'
require 'yaml'


# Load the configuration file for the mailserver settings
conf = YAML.load_file('configuration.yml')

post '/contact/?' do
	Pony.mail(
      :from => params[:email] + "<" + params[:email] + ">",
      :to => 'geert.theys@gmail.com',
      :subject => params[:email] + " has contacted you",
      :body => params[:mailbody],
      :via => :smtp,
      :via_options => { 
        :address              => conf['smtp'], 
        :port                 => conf['port'], 
        :enable_starttls_auto => true, 
        :authentication       => :plain
      })
    redirect '/success'	
end

get('/success'){"Thanks for your email. We'll be in touch soon."}
