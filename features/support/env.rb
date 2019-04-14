require "Capybara"
require "Capybara/cucumber"
require "rspec"
require 'capybara/poltergeist'
 
Capybara.default_driver = :poltergeist
Capybara.server_port = 4000
Capybara.always_include_port = true
Capybara.register_driver :poltergeist do |app|
    options = {
        :js_errors => true,
        :timeout => 120,
        :debug => false,
        :phantomjs_options => ['--load-images=no', '--disk-cache=false', '--ignore-ssl-errors=yes','--ssl-protocol=any'],
        :inspector => true,
    }
    Capybara::Poltergeist::Driver.new(app, options)
end