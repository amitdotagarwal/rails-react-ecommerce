RSpec::Matchers.define :look_like_json do |expected|
  match do |actual|
    begin
      JSON.parse(actual)
    rescue JSON::ParserError
      false
    end
  end

  failure_message do |actual|
    "\"#{actual}\" is not parsable by JSON.parse"
  end

  description do
    "Expects to be JSON parsable String"
  end
end

def body_as_json
  json_str_to_hash(response.body)
end

def json_str_to_hash(str)
  JSON.parse(str).with_indifferent_access
end