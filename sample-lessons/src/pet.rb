class Pet
  def initialize(name, type)
    @name = name
    @type = type
  end

  def to_s
    "#{@name} is a #{@type}"
  end
end

pets = [
  Pet.new('Snoopy', 'Dog'),
  Pet.new('Felix', 'Cat')
]

pets.each { |pet| puts pet }
