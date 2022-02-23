const animalSelection = [
	{name: 'baboon', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Cercopithecidae'}, location: ['Africa', 'Asia'], diet: 'omnivore', habitat: ['grassland', 'rock', 'desert', 'rainforest'], size: {weight: [14, 45], length: [50, 86]}, lifespan: [15, 40]},
	{name: 'bat', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Chiroptera', family: 'Microchiroptera'}, location: ['Africa', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceania', 'South America'], diet: 'Omnivore', habitat: ['woodland', 'cave'], size: {weight: [0.02, 1], length: [3, 180]}, lifespan:[10, 30]}, 
	{name: 'bear', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Ursidae'}, location: ['Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'South America'], diet: 'omnivore', habitat: ['forest', 'mountain'], size: {weight: [27, 450], length: [120, 330]}, lifespan: [15, 35]},
	{name: 'beaver', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Castoridae'}, location: ['Eurasia', 'Europe', 'North America', 'Ocean'], diet: 'Herbivore', habitat: ['forest', 'desert'], size: {weight: [16, 27], length: [80, 120]}, lifespan:[15, 20]}, 
	{name: 'bilby', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Peramelemorphia', family: 'Thylacomyidae'}, location: ['Oceana'], diet: 'Omnivore', habitat: ['desert', 'arid'], size: {weight: [0.8, 2.5], length: [30, 60]}, lifespan:[10, 12]}, 
	{name: 'bison', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['North America'], diet: 'Herbivore', habitat: ['forest', 'grassland'], size: {weight: [1000, 1300], length: [200, 270]}, lifespan:[15, 20]}, 
	{name: 'blue whale', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Balaenopteridae'}, location: ['Ocean'], diet: 'Carnivore', habitat: ['ocean'], size: {weight: [100000, 160000], length: [2500, 3000]}, lifespan:[30, 45]}, 
	{name: 'buffalo', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['Africa'], diet: 'Herbivore', habitat: ['woodland', 'grassland'], size: {weight: [600, 900], length: [170, 180]}, lifespan:[15, 22]}, 
	{name: 'camel', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Camelidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Oceania'], diet: 'Herbivore', habitat: ['desert', 'arid', 'scrubland'], size: {weight: [300, 690], length: [220, 350]}, lifespan:[40, 50]}, 
	{name: 'cassowary', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Casuariiformes', family: 'Casuariidae'}, location: ['Oceania'], diet: 'Omnivore', habitat: ['tropical', 'rainforest', 'forest'], size: {weight: [25, 60], length: [150, 200]}, lifespan:[40, 60]}, 
	{name: 'cat', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Filidae'}, location: ['Africa', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceana', 'South America'], diet: 'omnivore', habitat: ['desert', 'domestic', 'forest', 'mountain'], size: {weight: [3, 5], length: [80, 100]}, lifespan: [10, 20]},
	{name: 'cheetah', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Africa', 'Asia', 'Eurasia'], diet: 'Carnivore', habitat: ['grassland'], size: {weight: [40, 65], length: [115, 135]}, lifespan:[10, 12]}, 
	{name: 'chimpanzee', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Hominidae'}, location: ['Africa'], diet: 'omnivore', habitat: ['forest', 'savannah', 'grassland'], size: {weight: [26, 70], length: [100, 170]}, lifespan: [50, 60]},
	{name: 'crocodile', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Reptilia', order: 'Crocodilia', family: 'Crocodylidae'}, location: ['Africa', 'Asia', 'Central America', 'North America', 'Oceania', 'South America'], diet: 'Carnivore', habitat: ['river', 'lake', 'mangrove', 'swamp', 'estuary'], size: {weight: [18, 1000], length: [170, 7000]}, lifespan:[20, 70]}, 
	{name: 'deer', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Cervidae'}, location: ['Asia', 'Eurasia', 'Europe', 'North America'], diet: 'Herbivore', habitat: ['forest'], size: {weight: [10, 450], length: [60, 105]}, lifespan:[10, 20]}, 
	{name: 'dingo', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Canidae'}, location: ['Oceania'], diet: 'Carnivore', habitat: ['desert', 'forest', 'scrubland'], size: {weight: [1, 20], length: [100, 125]}, lifespan:[7, 15]}, 
	{name: 'dolphin', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Delphinidae'}, location: ['Ocean', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceana', 'South America'], diet: 'carnivore', habitat: ['ocean', 'river'], size: {weight: [100, 300], length: [200, 400]}, lifespan: [20, 45]},
	{name: 'donkey', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Perissodactyla', family: 'Equidae'}, location: ['Africa', 'Asia', 'Central America', 'South America', 'North America', 'Eurasia', 'Europe', 'Oceania'], diet: 'Herbivore', habitat: ['arid', 'forest', 'desert'], size: {weight: [200, 260], length: [90, 130]}, lifespan:[15, 30]}, 
	{name: 'dugong', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Sirenia', family: 'Dugongidae'}, location: ['Ocean'], diet: 'Herbivore', habitat: ['sea grass' , 'tropical'], size: {weight: [150, 400], length: [270, 300]}, lifespan:[50, 70]}, 
	{name: 'echidna', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Monotremata', family: 'Tachyglossidae'}, location: ['Oceania'], diet: 'Carnivore', habitat: ['forest'], size: {weight: [4, 7], length: [35, 52]}, lifespan:[15, 40]}, 
	{name: 'elephant', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Proboscidea', family: 'Elephantidae'}, location: ['Africa', 'Asia'], diet: 'Herbivore', habitat: ['rainforest', 'forest', 'floodplain'], size: {weight: [3000, 5400], length: [200, 360]}, lifespan:[55, 70]}, 
	{name: 'emu', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Casuariiformes', family: 'Casuariidae'}, location: ['Oceania'], diet: 'Omnivore', habitat: ['grassland', 'bush'], size: {weight: [18, 60], length: [150, 190]}, lifespan:[12, 20]}, 
	{name: 'fruitbat', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Chiroptera', family: 'Pteropodidae'}, location: ['Africa', 'Asia', 'Oceania', 'South America'], diet: 'Herbivore', habitat: ['forest', 'savannah'], size: {weight: [0.6, 1.4], length: [24, 32]}, lifespan:[20, 30]}, 
	{name: 'giant panda', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Ursidae'}, location: ['Asia'], diet: 'Omnivore', habitat: ['bamboo', 'forest'], size: {weight: [110, 250], length: [150, 180]}, lifespan:[20, 35]}, 
	{name: 'giraffe', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Giraffidae'}, location: ['Africa'], diet: 'Herbivore', habitat: ['woodland', 'savannah'], size: {weight: [550, 1930], length: [400, 600]}, lifespan:[20, 25]}, 
	{name: 'goat', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Europe'], diet: 'Herbivore', habitat: ['woodland', 'mountain'], size: {weight: [54, 77], length: [110, 180]}, lifespan:[10, 15]}, 
	{name: 'goose', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Anseriformes', family: 'Ansatidae'}, location: ['Asia', 'Eurasia', 'Europe', 'North America', 'Ocean'], diet: 'Omnivore', habitat: ['river', 'lake', 'coastal'], size: {weight: [1.5, 8], length: [60, 120]}, lifespan:[12, 26]}, 
	{name: 'gorilla', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Hominidae'}, location: ['Africa'], diet: 'Omnivore', habitat: ['rainforest', 'swamp', 'floodplain'], size: {weight: [100, 200], length: [180, 210]}, lifespan:[35, 50]}, 
	{name: 'grizzly bear', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Ursidae'}, location: ['North America'], diet: 'Omnivore', habitat: ['forest', 'mountain'], size: {weight: [160, 225], length: [210, 300]}, lifespan:[15, 25]}, 
	{name: 'guinea pig', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Caviidae'}, location: ['South America'], diet: 'Herbivore', habitat: ['grassland', 'mountain'], size: {weight: [0.5, 1.5], length: [20, 40]}, lifespan:[3, 8]}, 
	{name: 'hamster', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Cricetidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Europe', 'Central America', 'North America', 'South America', 'Oceania'], diet: 'Omnivore', habitat: ['desert', 'sand'], size: {weight: [0.1, 0.9], length: [10, 15]}, lifespan:[2, 3]}, 
	{name: 'hippopotamus', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Hippopatamidae'}, location: ['Africa'], diet: 'Herbivore', habitat: ['lake', 'river', 'wetland'], size: {weight: [1000, 4500], length: [200, 500]}, lifespan:[40, 50]}, 
	{name: 'horse', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Perissodactyla', family: 'Equidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Europe', 'Central America', 'North America', 'South America', 'Oceania'], diet: 'Herbivore', habitat: ['forest', 'grassland'], size: {weight: [380, 550], length: [200, 250]}, lifespan:[25, 30]}, 
	{name: 'humpback whale', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Balaenopteridae'}, location: ['Ocean'], diet: 'Omnivore', habitat: ['ocean'], size: {weight: [36000, 100000], length: [1460, 1900]}, lifespan:[45, 50]}, 
	{name: 'hyena', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Hyaenidae'}, location: ['Africa', 'Asia', 'Europe'], diet: 'Carnivore', habitat: ['savannah', 'grassland'], size: {weight: [41, 86], length: [120, 180]}, lifespan:[20, 25]}, 
	{name: 'iguana', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Reptilia', order: 'Squamata', family: 'Iguanidae'}, location: ['Central America', 'South America'], diet: 'Omnivore', habitat: ['tropical', 'rainforest'], size: {weight: [4, 8], length: [30, 60]}, lifespan:[15, 20]}, 
	{name: 'jaguar', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Central America', 'South America'], diet: 'Carnivore', habitat: ['rainforest', 'swamp', 'floodplain'], size: {weight: [36, 160], length: [110, 190]}, lifespan:[12, 15]}, 
	{name: 'kangaroo', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Diprotodontia', family: 'Macropodidae'}, location: ['Oceania'], diet: 'Herbivore', habitat: ['forest', 'grassland', 'desert'], size: {weight: [18, 95], length: [100, 220]}, lifespan:[4, 10]}, 
	{name: 'killer whale', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Delphinidae'}, location: ['Ocean'], diet: 'Carnivore', habitat: ['ocean'], size: {weight: [6800, 9000], length: [700, 975]}, lifespan:[50, 60]}, 
	{name: 'koala', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Diprotodontia', family: 'Phascolarctidae'}, location: ['Oceania'], diet: 'Herbivore', habitat: ['forest', 'woodland'], size: {weight: [4, 15], length: [60, 85]}, lifespan:[15, 20]}, 
	{name: 'leopard', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Africa', 'Asia'], diet: 'Carnivore', habitat: ['rainforest', 'grassland', 'mountain'], size: {weight: [30, 90], length: [100, 190]}, lifespan:[10, 15]}, 
	{name: 'lion', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Africa', 'Asia'], diet: 'Carnivore', habitat: ['woodland', 'scrub', 'grassland'], size: {weight: [120, 250], length: [140, 250]}, lifespan:[8, 15]}, 
	{name: 'llama', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Camelidae'}, location: ['South America'], diet: 'Herbivore', habitat: ['mountain', 'desert', 'grassland'], size: {weight: [130, 200], length: [210, 250]}, lifespan:[15, 20]}, 
	{name: 'monkey', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Cebidae'}, location: ['Africa', 'Asia', 'Central America', 'Oceania', 'South America'], diet: 'Omnivore', habitat: ['forest', 'tropical', 'mountain', 'grassland'], size: {weight: [1, 30], length: [25, 80]}, lifespan:[10, 30]}, 
	{name: 'mouse', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Muridae'}, location: ['Africa', 'Antarctica', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceania', 'South America'], diet: 'Herbivore', habitat: ['grassland'], size: {weight: [0.1, 0.2], length: [8, 12]}, lifespan:[2, 5]}, 
	{name: 'orang-utan', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Primates', family: 'Hominidae'}, location: ['Asia'], diet: 'Omnivore', habitat: ['tropical', 'forest', 'swamp'], size: {weight: [30, 90], length: [125, 150]}, lifespan:[30, 40]}, 
	{name: 'ostrich', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Struthioniformes', family: 'Struthionidae'}, location: ['Africa'], diet: 'Omnivore', habitat: ['desert', 'savannah'], size: {weight: [63, 130], length: [180, 270]}, lifespan:[50, 70]}, 
	{name: 'otter', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Mustelidae'}, location: ['Africa', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceania', 'South America'], diet: 'Carnivore', habitat: ['river', 'lake'], size: {weight: [5, 15], length: [35, 80]}, lifespan:[15, 25]}, 
	{name: 'panther', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Central America', 'North America', 'South America'], diet: 'Carnivore', habitat: ['forest', 'swampland', 'grassland'], size: {weight: [36, 160], length: [110, 190]}, lifespan:[12, 15]}, 
	{name: 'penguin', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: 'Sphenisciformes', family: 'Speniscidae'}, location: ['Antarctica', 'Ocean'], diet: 'Omnivore', habitat: ['ocean', 'coastline', 'ice'], size: {weight: [1, 35], length: [40, 110]}, lifespan:[20, 30]}, 
	{name: 'pig', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Suidae'}, location: ['Asia', 'Eurasia', 'Europe', 'North America'], diet: 'Omnivore', habitat: ['forest', 'grassland', 'farm'], size: {weight: [30, 350], length: [100, 230]}, lifespan:[8, 15]}, 
	{name: 'platypus', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Monotremata', family: 'Ornithorhynchidae'}, location: ['Oceania'], diet: 'Carnivore', habitat: ['river'], size: {weight: [0.7, 2.4], length: [39, 60]}, lifespan:[9, 12]}, 
	{name: 'polar bear', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Ursidae'}, location: ['Eurasia', 'Europe', 'North America', 'Ocean'], diet: 'Carnivore', habitat: ['coastal', 'ice', 'ocean'], size: {weight: [150, 600], length: [200, 250]}, lifespan:[20, 30]}, 
	{name: 'porcupine', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Erethizontidae'}, location: ['Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'South America'], diet: 'Omnivore', habitat: ['forest', 'grassland'], size: {weight: [5.4, 16], length: [40, 80]}, lifespan:[8, 12]}, 
	{name: 'possum', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Diprotodontia', family: 'Phalangeriformes'}, location: ['Oceania'], diet: 'Omnivore', habitat: ['rainforest', 'forest', 'bushland'], size: {weight: [0.1, 14.5], length: [12, 50]}, lifespan:[5, 8]}, 
	{name: 'rabbit', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Lagomorpha', family: 'Leporidae'}, location: ['Africa', 'Asia', 'Eurasia', 'Europe', 'North America'], diet: 'Herbivore', habitat: ['forest', 'meadow', 'grassland', 'woodland'], size: {weight: [0.5, 3], length: [25, 50]}, lifespan:[4, 8]}, 
	{name: 'rat', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Rodentia', family: 'Muridae'}, location: ['Africa', 'Antarctica', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceania', 'South America'], diet: 'Omnivore', habitat: ['forest', 'rainforest', 'grassland','urban'], size: {weight: [0.2, 0,9], length: [20, 35]}, lifespan:[2, 5]}, 
	{name: 'rhinoceros', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Perissodactyla', family: 'Rhinocerotidae'}, location: ['Africa', 'Asia'], diet: 'Herbivore', habitat: ['tropical', 'bushland', 'grassland', 'savannah'], size: {weight: [800, 3500], length: [330, 360]}, lifespan:[35, 50]}, 	
	{name: 'seal', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Pinnipedia'}, location: ['Ocean'], diet: 'Carnivore', habitat: ['ocean', 'coast', 'shoreline'], size: {weight: [105, 3000], length: [1.9, 350]}, lifespan:[15, 25]}, 
	{name: 'sheep', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Artiodactyla', family: 'Bovidae'}, location: ['Africa', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'Oceania', 'South America'], diet: 'Herbivore', habitat: ['mountain', 'grassland', 'farm'], size: {weight: [40, 130], length: [120, 210]}, lifespan:[5, 10]}, 
	{name: 'sperm whale', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Cetacea', family: 'Physeteridae'}, location: ['Ocean'], diet: 'Carnivore', habitat: ['ocean'], size: {weight: [35000, 45000], length: [1500, 2000]}, lifespan:[45, 60]}, 
	{name: 'tasmanian devil', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Dasyuromorphia', family: 'Dasyuridae'}, location: ['Oceania'], diet: 'Omnivore', habitat: ['forest'], size: {weight: [6, 8], length: [40, 80]}, lifespan:[5, 8]}, 
	{name: 'tiger', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Felidae'}, location: ['Asia', 'Eurasia'], diet: 'Carnivore', habitat: ['tropical', 'forest'], size: {weight: [270, 300], length: [220, 350]}, lifespan:[18, 25]}, 
	{name: 'tree kangaroo', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Diprotodontia', family: 'Macropodidae'}, location: ['Oceania'], diet: 'Herbivore', habitat: ['tropical', 'rainforest'], size: {weight: [6, 10], length: [45, 90]}, lifespan:[15, 20]}, 
	{name: 'wallaby', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Diprotodontia', family: 'Macropodidae'}, location: ['Oceania'], diet: 'Herbivore', habitat: ['forest', 'shrubland', 'bush'], size: {weight: [10, 20], length: [40, 100]}, lifespan:[12, 15]}, 
	{name: 'walrus', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Odobenidae'}, location: ['Oceania'], diet: 'Carnivore', habitat: ['ocean', 'coastline', 'ice'], size: {weight: [400, 1700], length: [225, 350]}, lifespan:[40, 50]}, 
	{name: 'wolf', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Carnivora', family: 'Canidae'}, location: ['Africa', 'Asia', 'Central America', 'Eurasia', 'Europe', 'North America', 'South America'], diet: 'Carnivore', habitat: ['grassland', 'woodland'], size: {weight: [25, 40], length: [120, 180]}, lifespan:[10, 12]}, 
	{name: 'wombat', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Diprotodontia', family: 'Vombatidae'}, location: ['Oceania'], diet: 'Herbivore', habitat: ['woodland', 'shrub', 'bush'], size: {weight: [20, 35], length: [80, 140]}, lifespan:[20, 26]}, 
	{name: 'zebra', taxonomy: {kingdom: 'Animalia', phylum: 'Chordata', class: 'Mammalia', order: 'Perissodactyla', family: 'Equidae'}, location: ['Africa'], diet: 'Herbivore', habitat: ['grassland', 'savannah'], size: {weight: [220, 405], length: [200, 275]}, lifespan:[20, 30]}
]
