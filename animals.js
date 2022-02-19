let animal = [
	{name: 'aardvark', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Tubulidentata', family: 'Orycteropidae'}, location: ['Africa'], diet: 'omnivore', habitat: ['sand', 'clay','soil'], size: {weight: [60, 80], length: [105, 220]}, lifespan:[23, 23]}, 
	{name: 'african elephant', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mamalia', order: 'Proboscidea', family: 'Elephantidae'}, location: ['Africa'], diet: 'herbivore', habitat: ['forest', 'savannah', 'grassland'], size: {weight: [3600, 5400], length: [300, 350]}, lifespan:[60, 70]}, 
	{name: 'alligator', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Reptilia', order: 'Crocodilia', family: 'Alligaridae'}, location: ['North America', 'Asia'], diet: 'Carnivore', habitat: ['marsh', 'swampland'], size: {weight: [181, 363], length: [250, 450]}, lifespan:[30, 60]}, 
	{name: 'alpaca', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Camelidae'}, location: ['South America'], diet: 'Herbivore', habitat: ['farm', 'domestic', 'high', 'meadow', 'grassland'], size: {weight: [480, 840], length: [810, 990]}, lifespan:[15, 20]}, 
	{name: 'anteater', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Xenarthra', family: 'Myrmecophagidae'}, location: ['Central America', 'South America'], diet: 'Omnivore', habitat: ['forest', 'grassland'], size: {weight: [180, 400], length: [900, 2100]}, lifespan:[9, 20]}, 
	{name: 'antelope', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['Africa', 'Asia', 'Eurasia', 'North America'], diet: 'Herbivore', habitat: ['forest', 'grassland'], size: {weight: [500, 900], length: [100, 150]}, lifespan:[10, 25]}, 
	{name: 'armadillo', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cingulata', family: 'Dasypodidae'}, location: ['Central America', 'North America', 'South America'], diet: 'Omnivore', habitat: ['forest', 'grassland'], size: {weight: [4, 30], length: [36, 75]}, lifespan:[4, 12]}, 
	{name: 'asian elephant', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Proboscidea', family: 'Elephantidae'}, location: ['Asia'], diet: 'herbivore', habitat: ['forest', 'tropical', 'woodland'], size: {weight: [3000, 5000], length: [200, 300]}, lifespan:[55, 70]}, 	
	{name: 'axolotl', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Amphibia', order: 'Caudata', family: 'Ambystomatidae'}, location: ['Central America'], diet: 'Carnivore', habitat: ['freshwater', 'lake'], size: {weight: [0.06, 0.2], length: [15, 45]}, lifespan:[10, 20]}, 
	{name: 'baboon', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Cercopithecidae'}, location: ['Africa', 'Asia'], diet: 'omnivore', habitat: ['grassland', 'rock', 'desert', 'rainforest'], size: {weight: [14, 45], length: [50, 86]}, lifespan: [15, 40]},
	{name: 'bandicoot', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Peramelemorphia', family: 'Peramelidae'}, location: ['Oceania'], diet: 'omnivore', habitat: ['forest', 'rainforest', 'jungle'], size: {weight: [0.2, 1.6], length: [28, 81]}, lifespan: [3, 7]}, 
	{name: 'badger', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Mustelidae'}, location: ['Europe'], diet: 'omnivore', habitat: ['woodland', 'hedgerow', 'jungle'], size: {weight: [11, 14], length: [40, 75]}, lifespan: [4, 10]},
	{name: 'baleen whale', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Balaenopteridae'}, location: ['Ocean'], diet: 'Carnivore', habitat: ['ocean'], size: {weight: [5000, 10000], length: [6000, 8000]}, lifespan:[100, 120]}, 
	{name: 'bear', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Ursidae'}, location: ['Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'South America'], diet: 'omnivore', habitat: ['forest', 'mountain'], size: {weight: [27, 450], length: [120, 330]}, lifespan: [15, 35]},
	{name: 'beaver', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Castoridae'}, location: ['Eurasia', 'Europe', 'North America', 'Ocean'], diet: 'Herbivore', habitat: ['forest', 'desert'], size: {weight: [16, 27], length: [80, 120]}, lifespan:[15, 20]}, 
	{name: 'bengal tiger', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Asia'], diet: 'Carnivore', habitat: ['rainforest', 'forest', 'mangroves'], size: {weight: [140, 300], length: [240, 330]}, lifespan:[18, 25]}, 
	{name: 'bilby', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Peramelemorphia', family: 'Thylacomyidae'}, location: ['Oceana'], diet: 'Omnivore', habitat: ['desert', 'arid'], size: {weight: [0.8, 2.5], length: [30, 60]}, lifespan:[10, 12]}, 
	{name: 'bison', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['North America'], diet: 'Herbivore', habitat: ['forest', 'grassland'], size: {weight: [1000, 1300], length: [200, 270]}, lifespan:[15, 20]}, 
	{name: 'black rhinoceros', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Perissodactyla', family: 'Rhinocerotidae'}, location: ['Africa'], diet: 'Herbivore', habitat: ['bushland',  'grassland', 'savannah'], size: {weight: [800, 1400], length: [330, 360]}, lifespan:[45, 50]}, 	
	{name: 'blue whale', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Balaenopteridae'}, location: ['Ocean'], diet: 'Carnivore', habitat: ['ocean'], size: {weight: [100000, 160000], length: [2500, 3000]}, lifespan:[30, 45]}, 
	{name: 'bobcat', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Central America', 'North America'], diet: 'Carnivore', habitat: ['mountain', 'forest', 'swamp', 'desert'], size: {weight: [4, 15], length: [65, 100]}, lifespan:[12, 15]}, 
	{name: 'bongo', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['Africa'], diet: 'Herbivore', habitat: ['forest', 'bamboo'], size: {weight: [150, 220], length: [170, 250]}, lifespan:[10, 18]}, 
	{name: 'bonobo', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Hominidae'}, location: ['Africa'], diet: 'Omnivore', habitat: ['jungle', 'grassland', 'swamp', 'forest'], size: {weight: [25, 50], length: [73, 90]}, lifespan:[25, 40]}, 
	{name: 'borneo elephant', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Proboscidea', family: 'Elephantidae'}, location: ['Asia'], diet: 'Herbivore', habitat: ['rainforest', 'forest', 'woodland'], size: {weight: [3000, 5000], length: [200, 300]}, lifespan:[55, 70]}, 
	{name: 'bottlenose dolphin', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Delphinidae'}, location: ['Ocean'], diet: 'Omnivore', habitat: ['harbour', 'bay'], size: {weight: [200, 300], length: [250, 400]}, lifespan:[20, 35]}, 
	{name: 'brown bear', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Ursidae'}, location: ['Asia', 'Eurasia', 'Europe', 'North America'], diet: 'Omnivore', habitat: ['forest', 'mountain'], size: {weight: [140, 390], length: [150, 280]}, lifespan:[20, 30]}, 
	{name: 'brown hyena', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Hyaenidae'}, location: ['Africa'], diet: 'Omnivore', habitat: ['desert', 'grassland'], size: {weight: [40, 50], length: [150, 170]}, lifespan:[12, 15]}, 
	{name: 'buffalo', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['Africa'], diet: 'Herbivore', habitat: ['woodland', 'grassland'], size: {weight: [600, 900], length: [170, 180]}, lifespan:[15, 22]}, 
	{name: 'camel', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Camelidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Oceania'], diet: 'Herbivore', habitat: ['desert', 'arid', 'scrubland'], size: {weight: [300, 690], length: [220, 350]}, lifespan:[40, 50]}, 
	{name: 'capybara', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Caviidae'}, location: ['South America'], diet: 'Herbivore', habitat: ['rainforest'], size: {weight: [30, 70], length: [100, 130]}, lifespan:[8, 10]}, 
	{name: 'caracal', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Africa', 'Asia'], diet: 'Carnivore', habitat: ['woodland', 'savannah'], size: {weight: [11, 18], length: [65, 90]}, lifespan:[12, 15]}, 
	{name: 'cat', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Filidae'}, location: ['Africa', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceana', 'South America'], diet: 'omnivore', habitat: ['desert', 'domestic', 'forest', 'mountain'], size: {weight: [3, 5], length: [80, 100]}, lifespan: [10, 20]},
	{name: 'cattle', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['Africa', 'Asia', 'Europe', 'Eurasia', 'Oceania', 'North America', 'Central America', 'South America'], diet: 'Herbivore', habitat: ['forest', 'grassland'], size: {weight: [400, 800], length: [150, 180]}, lifespan:[12, 20]}, 
	{name: 'chamois', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['Europe'], diet: 'Herbivore', habitat: ['mountain', 'rock'], size: {weight: [50, 55], length: [75, 80]}, lifespan:[18, 22]}, 
	{name: 'chinchilla', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Chinchillidae'}, location: ['South America'], diet: 'Herbivore', habitat: ['dry', 'mountain'], size: {weight: [0.4, 0.5], length: [25, 35]}, lifespan:[10, 18]}, 
	{name: 'chipmunk', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Sciuidae'}, location: ['Eurasia', 'North America'], diet: 'Omnivore', habitat: ['forest', 'woodland'], size: {weight: [0.06, 0.12], length: [10, 18]}, lifespan:[4, 8]}, 
	{name: 'cheetah', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Africa', 'Asia', 'Eurasia'], diet: 'Carnivore', habitat: ['grassland'], size: {weight: [40, 65], length: [115, 135]}, lifespan:[10, 12]}, 
	{name: 'chimpanzee', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Hominidae'}, location: ['Africa'], diet: 'omnivore', habitat: ['forest', 'savannah', 'grassland'], size: {weight: [26, 70], length: [100, 170]}, lifespan: [50, 60]},
	{name: 'clouded leopard', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Asia'], diet: 'Carnivore', habitat: ['tropical', 'forest', 'jungle'], size: {weight: [11, 30], length: [60, 110]}, lifespan:[11, 17]}, 
	{name: 'cougar', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['North America'], diet: 'Carnivore', habitat: ['forest', 'mountain'], size: {weight: [29, 90], length: [150, 275]}, lifespan:[10, 20]}, 
	{name: 'coyote', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Canidae'}, location: ['Central America', 'North America'], diet: 'Carnivore', habitat: ['forest', 'plain', 'desert'], size: {weight: [7, 21], length: [75, 90]}, lifespan:[10, 15]}, 
	{name: 'cross river gorilla', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Hominidae'}, location: ['Africa'], diet: 'Herbivore', habitat: ['rainforest', 'jungle'], size: {weight: [100, 200], length: [140, 170]}, lifespan:[35, 50]}, 
	{name: 'deer', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Cervidae'}, location: ['Asia', 'Eurasia', 'Europe', 'North America'], diet: 'Herbivore', habitat: ['forest'], size: {weight: [10, 450], length: [60, 105]}, lifespan:[10, 20]}, 
	{name: 'dik-dik', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['Africa'], diet: 'Herbivore', habitat: ['savannah', 'scrubland', 'bush'], size: {weight: [3, 6], length: [30, 40]}, lifespan:[5, 10]}, 
	{name: 'dingo', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Canidae'}, location: ['Oceania'], diet: 'Carnivore', habitat: ['desert', 'forest', 'scrubland'], size: {weight: [1, 20], length: [100, 125]}, lifespan:[7, 15]}, 
	{name: 'dog', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Canidae'}, location: ['Africa', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceana', 'South America'], diet: 'omnivore', habitat: ['desert', 'domestic', 'forest', 'mountain'], size: {weight: [3, 40], length: [80, 100]}, lifespan: [9, 15]},
	{name: 'dolphin', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Delphinidae'}, location: ['Ocean', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceana', 'South America'], diet: 'carnivore', habitat: ['ocean', 'river'], size: {weight: [100, 300], length: [200, 400]}, lifespan: [20, 45]},
	{name: 'donkey', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Perissodactyla', family: 'Equidae'}, location: ['Africa', 'Asia', 'Central America', 'South America', 'North America', 'Eurasia', 'Europe', 'Oceania'], diet: 'Herbivore', habitat: ['arid', 'forest', 'desert'], size: {weight: [200, 260], length: [90, 130]}, lifespan:[15, 30]}, 
	{name: 'dormouse', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Gliridae'}, location: ['Africa', 'Asia', 'Eurasia', 'Europe'], diet: 'Omnivore', habitat: ['woodland', 'shrubland'], size: {weight: [0.02, 0.2], length: [6, 20]}, lifespan:[2, 5]}, 
	{name: 'dugong', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Sirenia', family: 'Dugongidae'}, location: ['Ocean'], diet: 'Herbivore', habitat: ['sea grass' , 'tropical'], size: {weight: [150, 400], length: [270, 300]}, lifespan:[50, 70]}, 
	{name: 'echidna', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Monotremata', family: 'Tachyglossidae'}, location: ['Oceania'], diet: 'Carnivore', habitat: ['forest'], size: {weight: [4, 7], length: [35, 52]}, lifespan:[15, 40]}, 
	{name: 'elephant', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Proboscidea', family: 'Elephantidae'}, location: ['Africa', 'Asia'], diet: 'Herbivore', habitat: ['rainforest', 'forest', 'floodplain'], size: {weight: [3000, 5400], length: [200, 360]}, lifespan:[55, 70]}, 
	{name: 'ferret', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Mustelidae'}, location: ['Europe'], diet: 'Carnivore', habitat: ['forest', 'grassland'], size: {weight: [0.7, 2], length: [40, 50]}, lifespan:[7, 10]}, 
	{name: 'fox', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Canidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Europe', 'North America'], diet: 'Carnivore', habitat: ['woodland', 'urban'], size: {weight: [5, 11], length: [40, 83]}, lifespan:[3, 11]}, 
	{name: 'fruitbat', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Chiroptera', family: 'Pteropodidae'}, location: ['Africa', 'Asia', 'Oceania', 'South America'], diet: 'Herbivore', habitat: ['forest', 'savannah'], size: {weight: [0.6, 1.4], length: [24, 32]}, lifespan:[20, 30]}, 
	{name: 'giant panda', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Ursidae'}, location: ['Asia'], diet: 'Omnivore', habitat: ['bamboo', 'forest'], size: {weight: [110, 250], length: [150, 180]}, lifespan:[20, 35]}, 
	{name: 'gibbon', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Hylobatidae'}, location: ['Asia'], diet: 'Omnivore', habitat: ['forest', 'jungle'], size: {weight: [6, 9], length: [35, 52]}, lifespan:[25, 40]}, 
	{name: 'giraffe', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Giraffidae'}, location: ['Africa'], diet: 'Herbivore', habitat: ['woodland', 'savannah'], size: {weight: [550, 1930], length: [400, 600]}, lifespan:[20, 25]}, 
	{name: 'goat', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Europe'], diet: 'Herbivore', habitat: ['woodland', 'mountain'], size: {weight: [54, 77], length: [110, 180]}, lifespan:[10, 15]}, 
	{name: 'gopher', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Geomyidae'}, location: ['Central America', 'North America'], diet: 'Omnivore', habitat: ['woodland', 'grassland'], size: {weight: [0.2, 1], length: [30, 60]}, lifespan:[3, 5]}, 
	{name: 'gorilla', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Hominidae'}, location: ['Africa'], diet: 'Omnivore', habitat: ['rainforest', 'swamp', 'floodplain'], size: {weight: [100, 200], length: [180, 210]}, lifespan:[35, 50]}, 
	{name: 'grizzly bear', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Ursidae'}, location: ['North America'], diet: 'Omnivore', habitat: ['forest', 'mountain'], size: {weight: [160, 225], length: [210, 300]}, lifespan:[15, 25]}, 
	{name: 'guinea pig', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Caviidae'}, location: ['South America'], diet: 'Herbivore', habitat: ['grassland', 'mountain'], size: {weight: [0.5, 1.5], length: [20, 40]}, lifespan:[3, 8]}, 
	{name: 'hamster', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Cricetidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Europe', 'Central America', 'North America', 'South America', 'Oceania'], diet: 'Omnivore', habitat: ['desert', 'sand'], size: {weight: [0.1, 0.9], length: [10, 15]}, lifespan:[2, 3]}, 
	{name: 'hare', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Lagomorpha', family: 'Leporidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Europe', 'Central America', 'North America', 'South America', 'Oceania'], diet: 'Herbivore', habitat: ['forest', 'grassland'], size: {weight: [1, 5.5], length: [30, 60]}, lifespan:[2, 8]}, 
	{name: 'hedgehog', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Erinaceomorpha', family: 'Erinaceidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Europe'], diet: 'Omnivore', habitat: ['forest', 'woodland'], size: {weight: [1, 2], length: [30, 40]}, lifespan:[3, 6]}, 
	{name: 'hippopotamus', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Hippopatamidae'}, location: ['Africa'], diet: 'Herbivore', habitat: ['lake', 'river', 'wetland'], size: {weight: [1000, 4500], length: [200, 500]}, lifespan:[40, 50]}, 
	{name: 'horse', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Perissodactyla', family: 'Equidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Europe', 'Central America', 'North America', 'South America', 'Oceania'], diet: 'Herbivore', habitat: ['forest', 'grassland'], size: {weight: [380, 550], length: [200, 250]}, lifespan:[25, 30]}, 
	{name: 'humpback whale', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Balaenopteridae'}, location: ['Ocean'], diet: 'Omnivore', habitat: ['ocean'], size: {weight: [36000, 100000], length: [1460, 1900]}, lifespan:[45, 50]}, 
	{name: 'hyena', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Hyaenidae'}, location: ['Africa', 'Asia', 'Europe'], diet: 'Carnivore', habitat: ['savannah', 'grassland'], size: {weight: [41, 86], length: [120, 180]}, lifespan:[20, 25]}, 
	{name: 'indian elephant', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mamalia', order: 'Proboscidea', family: 'Elephantidae'}, location: ['Asia'], diet: 'herbivore', habitat: ['rainforest', 'tropical', 'woodland'], size: {weight: [3000, 5000], length: [200, 300]}, lifespan:[55, 70]}, 
	{name: 'jaguar', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Central America', 'South America'], diet: 'Carnivore', habitat: ['rainforest', 'swamp', 'floodplain'], size: {weight: [36, 160], length: [110, 190]}, lifespan:[12, 15]}, 
	{name: 'kangaroo', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Diprotodontia', family: 'Macropodidae'}, location: ['Oceania'], diet: 'Herbivore', habitat: ['forest', 'grassland', 'desert'], size: {weight: [18, 95], length: [100, 220]}, lifespan:[4, 10]}, 
	{name: 'killer whale', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Delphinidae'}, location: ['Ocean'], diet: 'Carnivore', habitat: ['ocean'], size: {weight: [6800, 9000], length: [700, 975]}, lifespan:[50, 60]}, 
	{name: 'koala', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Diprotodontia', family: 'Phascolarctidae'}, location: ['Oceania'], diet: 'Herbivore', habitat: ['forest', 'woodland'], size: {weight: [4, 15], length: [60, 85]}, lifespan:[15, 20]}, 
	{name: 'lemming', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Cricetidae'}, location: ['Europe', 'North America'], diet: 'Herbivore', habitat: ['artic', 'woodland'], size: {weight: [0.03, 0.12], length: [2, 5]}, lifespan:[1, 3]}, 
	{name: 'lemur', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Lemuridae'}, location: ['Africa'], diet: 'Omnivore', habitat: ['forest', 'tropical', 'jungle'], size: {weight: [3, 10], length: [40, 60]}, lifespan:[10, 14]}, 
	{name: 'leopard', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Africa', 'Asia'], diet: 'Carnivore', habitat: ['rainforest', 'grassland', 'mountain'], size: {weight: [30, 90], length: [100, 190]}, lifespan:[10, 15]}, 
	{name: 'lion', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Africa', 'Asia'], diet: 'Carnivore', habitat: ['woodland', 'scrub', 'grassland'], size: {weight: [120, 250], length: [140, 250]}, lifespan:[8, 15]}, 
	{name: 'llama', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Camelidae'}, location: ['South America'], diet: 'Herbivore', habitat: ['mountain', 'desert', 'grassland'], size: {weight: [130, 200], length: [210, 250]}, lifespan:[15, 20]}, 
	{name: 'lynx', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Eurasia', 'Europe', 'North America'], diet: 'Carnivore', habitat: ['forest', 'grassland', 'desert'], size: {weight: [10, 25], length: [80, 120]}, lifespan:[12, 20]}, 
	{name: 'manatee', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Sirenia', family: 'Trichechidae'}, location: ['Ocean'], diet: 'Herbivore', habitat: ['ocean', 'coast', 'river'], size: {weight: [400, 550], length: [200, 300]}, lifespan:[50, 70]}, 
	{name: 'meerkat', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Herpestidae'}, location: ['Africa'], diet: 'Carnivore', habitat: ['desert', 'scrubland'], size: {weight: [0.6, 1], length: [25, 35]}, lifespan:[10, 14]}, 
	{name: 'monkey', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Cebidae'}, location: ['Africa', 'Asia', 'Central America', 'Oceania', 'South America'], diet: 'Omnivore', habitat: ['forest', 'tropical', 'mountain', 'grassland'], size: {weight: [1, 30], length: [25, 80]}, lifespan:[10, 30]}, 
	{name: 'mouse', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Muridae'}, location: ['Africa', 'Antarctica', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceania', 'South America'], diet: 'Herbivore', habitat: ['grassland'], size: {weight: [0.1, 0.2], length: [8, 12]}, lifespan:[2, 5]}, 
	{name: 'orang-utan', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Hominidae'}, location: ['Asia'], diet: 'Omnivore', habitat: ['tropical', 'forest', 'swamp'], size: {weight: [30, 90], length: [125, 150]}, lifespan:[30, 40]}, 
	{name: 'otter', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Mustelidae'}, location: ['Africa', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceania', 'South America'], diet: 'Carnivore', habitat: ['river', 'lake'], size: {weight: [5, 15], length: [35, 80]}, lifespan:[15, 25]}, 
	{name: 'pangolin', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Pholidota', family: 'Manidae'}, location: ['Africa', 'Asia'], diet: 'Carnivore', habitat: ['forest', 'tropical', 'mountain', 'grassland'], size: {weight: [1.6, 33], length: [30, 99]}, lifespan:[15, 20]}, 
	{name: 'panther', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Central America', 'North America', 'South America'], diet: 'Carnivore', habitat: ['forest', 'swampland', 'grassland'], size: {weight: [36, 160], length: [110, 190]}, lifespan:[12, 15]}, 
	{name: 'pig', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Suidae'}, location: ['Asia', 'Eurasia', 'Europe', 'North America'], diet: 'Omnivore', habitat: ['forest', 'grassland', 'farm'], size: {weight: [30, 350], length: [100, 230]}, lifespan:[8, 15]}, 
	{name: 'platypus', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Monetremata', family: 'Ornithorhynchidae'}, location: ['Oceania'], diet: 'Carnivore', habitat: ['river'], size: {weight: [0.7, 2.4], length: [39, 60]}, lifespan:[9, 12]}, 
	{name: 'sperm whale', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Physeteridae'}, location: ['Ocean'], diet: 'Carnivore', habitat: ['ocean'], size: {weight: [35000, 45000], length: [1500, 2000]}, lifespan:[45, 60]}, 

]
