require 'rails_helper'

describe 'home page', type: :feature do
	it 'should go to home page' do
		visit '/'
	end
	it 'should show text Menu Items' do 
		visit root_path
	  sleep 2
    #expect(page).to have_text("Menu Items")
    #expect(page).to have_text("Cart Items")
	end

end