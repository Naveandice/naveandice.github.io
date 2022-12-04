# frozen_string_literal: true

source 'https://rubygems.org'

gem 'github-pages', group: :jekyll_plugins

group :jekyll_plugins do
  gem 'jekyll-seo-tag', '~> 2.8'
  gem 'jekyll-paginate', '~> 1.1'
  gem 'jekyll-remote-theme', '~> 0.4.3'
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem 'tzinfo', '>= 1.1', '< 3'
  gem 'tzinfo-data'
end

gem 'wdm', '~> 0.1.1' if Gem.win_platform?

gem 'webrick', '~> 1.3', '>= 1.3.1'
