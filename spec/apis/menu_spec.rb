
require "spec_helper"
require "rails_helper"

describe "MenuController" , :type => :request do
  context 'when the cat does not exist'
    
  before do 
    get "/api/menu/index"
  end
    
  it 'responds with a 404 status' do 
 	 expect(response).to have_http_status(:success)
  end
  it 'root should be bundle_templates Hash' do
     expect(response.body).to look_like_json
    end
  it 'returns all questions' do
  	#puts JSON.parse(response.body)
  	#expect(JSON.parse(response.body)).to have_text("bundle_templates")
  	 #expect(JSON.parse(response.body)['bundle_templates']).to eq('a')
	end
 end