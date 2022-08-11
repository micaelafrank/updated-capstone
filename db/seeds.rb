User.destroy_all
Item.destroy_all

5.times do 
    User.create!(
        username: Faker::Esport.player,
        fullname: Faker::Name.unique.name,
        email: Faker::Internet.unique.email,
        password: Faker::Internet.password)
    end
micaela = User.create!(username: "m", fullname: Faker::Name.unique.name, email: Faker::Internet.unique.email, password: "1")
users = User.all 

puts "done seeding users!"
puts "done seeding items!"