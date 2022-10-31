User.destroy_all
Item.destroy_all

# 5.times do 
#     User.create!(
#         username: Faker::Esport.player,
#         firstname: Faker::Name.first_name,
#         lastname: Faker::Name.last_name,
#         email: Faker::Internet.unique.email,
#         password: Faker::Internet.password)
#     end
# micaela = User.create!(username: "m123", firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, email: Faker::Internet.unique.email, password: "123")
# users = User.all 

# 7.times do
#     Item.create!(
#         itemname: Faker::Commerce.product_name, 
#         price: Faker::Commerce.price(range: 0..30.0, as_string: true),
#         description: Faker::Commerce.department,
#         color: Faker::Commerce.color,
#         user_id: micaela.id,
#         size: "small",
#         isForSale: true,
#         condition: "New",
#         material: Faker::Commerce.material)
#     end
# items = Item.all

puts "done seeding users!"
puts "done seeding items!"