module Api
    class MenuController < ApplicationController
      def index
        url = 'https://grain.com.sg/menu.json'
        response = RestClient.get(url)
        @result = JSON.parse response
        render :json => @result
      end
    end
end