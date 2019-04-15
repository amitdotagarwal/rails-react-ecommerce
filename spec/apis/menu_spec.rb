
require "rails_helper"

describe "MenuController" , :type => :request do
  context 'when the cart does not exist'
    
  before do 
    get "/api/menu/index"
  end  
  it 'responds with a 404 status' do 
 	 expect(response).to have_http_status(:success)
  end
  it 'root should be bundle_templates Hash' do
    expect(response.body).to look_like_json
  end
	it "response with JSON body containing expected Menu attributes" do
		expect(body_as_json.keys).to match_array(["bundle_templates", "desserts", "drinks", "meal_boxes", "sides"])
  end
 end